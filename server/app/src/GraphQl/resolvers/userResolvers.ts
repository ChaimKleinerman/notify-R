import STATUS_CODES from "../../utils/StatusCodes.js";
import RequestError from "../../types/errors/RequestError.js";
import userService from "../../service/userService.js";
import userValidation from "../../utils/validations/userValidation.js";
import generateToken from "../../utils/jwtUtils.js";
import authService from "../../service/authService.js";
import User from "../../types/User.js";
import { RedisPubSub } from "graphql-redis-subscriptions";

const pubsub = new RedisPubSub({
    connection: {
        host: "redis",
        port: 6379,
    },
});

export interface ResolveArgs {
    user_id: string;
    newUser?: User;
    user?: User;
}
export const userResolvers = {
    Query: {
        getUser: async (_: any, { user_id }: ResolveArgs) => {
            try {
                const user = await userService.getUser(user_id);
                return user;
            } catch (err) {
                throw new RequestError(
                    "Failed to fetch user",
                    STATUS_CODES.INTERNAL_SERVER_ERROR
                );
            }
        },
        logoutUser: (_: any, res: any) => {
            try {
                console.log("hello from logoutUser",res);
                res.cookie("jwt", "", {
                    httpOnly: true,
                    expires: new Date(0),
                });
                return { message: "Logged out successfully" };
            } catch (error) {
                throw new RequestError(
                    "Failed to logout user",
                    STATUS_CODES.INTERNAL_SERVER_ERROR
                );
            }
        },
    },

    Mutation: {
        registerUser: async (_: any, args: { input: ResolveArgs }) => {
            try {
                const userArgs  = args as unknown as User
                const { error } = userValidation(userArgs);
                if (error) {
                    console.log(error, "error");
                    throw new RequestError(
                        error.message,
                        STATUS_CODES.BAD_REQUEST
                    );
                }
                const user = await userService.addUser(args!);
                pubsub.publish("userCreated", { userCreated: user });
                return user;
            } catch (error) {
                throw new RequestError(
                    "Failed to register user",
                    STATUS_CODES.INTERNAL_SERVER_ERROR
                );
            }
        },

        loginUser: async (_: any, args: { input: ResolveArgs }) => {
            try {
                const userArgs  = args as unknown as User
                const { error } = userValidation(userArgs);

                if (error) {
                    throw new RequestError(
                        error.message,
                        STATUS_CODES.BAD_REQUEST
                    );
                }
                if (!args)
                    throw new RequestError(
                        "User not found",
                        STATUS_CODES.NOT_FOUND
                    );
                const { email, password } = userArgs;
                const newUser = await authService.authUser(email, password);
                if (!newUser.user_id) {
                    throw new RequestError(
                        "User not found",
                        STATUS_CODES.NOT_FOUND
                    );
                }
                const token = generateToken(newUser.user_id);
                return {
                    token:token,
                    user_id: newUser.user_id,
                    email: newUser.email,
                };
            } catch (error) {
                throw new RequestError(
                    `${error}`,
                    STATUS_CODES.INTERNAL_SERVER_ERROR
                );
            }
        },
    },

    Subscription: {
        userCreated: {
            subscribe: () => pubsub.asyncIterator(["userCreated"]),
        },
    },
};
