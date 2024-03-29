import User from "../types/User.js";
import userDal from "../dal/userDal.js";
import STATUS_CODES from "../utils/StatusCodes.js";
import RequestError from "../types/errors/RequestError.js";
import { hashPassword } from "../utils/encryptionUtils.js";
import { ResolveArgs } from "../GraphQl/resolvers/userResolvers.js";


const addUser = async (user: { input: ResolveArgs; }) => {
    const { email, password } = user ;
    // const isUserRegistered  = await userDal.getUserByEmail(email);
    // if (isUserRegistered.length !== 0)
    //     console.error('Email already exists', STATUS_CODES.BAD_REQUEST);
    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword
    const newUser = await userDal.addUser({...user});
    return newUser;
}

const getUser = async (userId: string) => {
    const user = await userDal.getUser(userId);
    if(user) return user;
    throw new RequestError('User not found', STATUS_CODES.NOT_FOUND);
}


export default { addUser, getUser };