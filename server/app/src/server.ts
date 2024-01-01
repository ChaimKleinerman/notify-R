// npm services
import { ApolloServer } from "@apollo/server";
import { userTypeDefs } from "./GraphQl/schemas/userSchemas";
import { userResolvers } from "./GraphQl/resolvers/userResolvers";
import { WebSocketServer } from "ws";
import { createServer } from "http";
import express from "express";
import { useServer } from "graphql-ws/lib/use/ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";
import { RedisClient } from "./utils/redis";
import { Pool } from "pg";
import { config } from "dotenv";

const port = 4500;

const app = express();

app.use(cors());

const typeDefs = `
  ${userTypeDefs}
`;
const resolvers = {
    Query: {
        ...userResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
    },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const httpServer = createServer(app);

const apolloServer = new ApolloServer({
    schema,
    plugins: [
        // Proper shutdown for the HTTP server.
        ApolloServerPluginDrainHttpServer({ httpServer }),

        // Proper shutdown for the WebSocket server.
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await wsServerCleanup.dispose();
                    },
                };
            },
        },
    ],
});

const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
});

const wsServerCleanup = useServer({ schema }, wsServer);
(async function () {
    // starting the apollo server to expose endoint to client
    await apolloServer.start();
    app.use("/graphql", bodyParser.json(), expressMiddleware(apolloServer));
})();
config();

const dbConnect = async () => {
    const pool = new Pool();
    const res = await pool.connect();
    res.release();
    console.log(`\n\nDatabase connection test completed successfully!`);
};

dbConnect()
    .then(() => console.log("connect successfully to PG !!!"))
    .catch((error) => {
        console.log("error in pg", error);
    });

httpServer.listen(port, () => {
    console.log(`🚀 Query endpoint ready at http://${port}/graphql`);
    console.log(
        `🚀 Subscription endpoint ready at ws://host:${port}/subscriptions`
    );
});

RedisClient.connect()
    .then(() => console.log("connected successfully to Redis client!!!"))
    .catch((error) => {
        if (error instanceof Error) console.log(error.message);
    });
