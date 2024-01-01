import User from "../types/User.js";
import pg from "pg";
import { RedisClient } from "../utils/redis.js";
const { Pool } = pg;


const addUser = async (user: User) => {
    const query = `INSERT INTO
    users (name,email,password)
    VALUES (
            $1,
         $2,$3)`;
    const values = [user.name,user.email, user.password];
    const res = await sendQueryToDatabase(query, values)
    console.log("hello from res add user", res);
    const { rowCount } = res
    if (!rowCount) throw new Error("Not insert user!!!");

    return await getUserByEmail(user.email);
}
const getUserByEmail = async (email: string): Promise<User> => {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const res = await sendQueryToDatabase(query, values)
    const { rows } = res 
    return rows[0];
}

const sendQueryToDatabase = async (query: string, values: any[] = []): Promise<any> => {
    const pool = new Pool()
    const res = await pool.connect()
    const data = await res.query(query, values).catch(err => console.log(err));
    res.release()
    return data
}

const getAllUser = async () => {
    const redisUsers = await RedisClient.json.get("users");
    if (redisUsers) {
        return redisUsers;
    }

    const query = 'SELECT * FROM users';
    const { rows } = await sendQueryToDatabase(query)
    await RedisClient.setEx("users", 60 * 60, JSON.stringify(rows));  
    return rows;
}

const getUser = async (userId: string) => {
    const query = 'SELECT * FROM users WHERE userid ::text = $1';
    const values = [userId];
    const { rows } = await sendQueryToDatabase(query, values)
    return rows;
}




export default { addUser, getAllUser, getUser, getUserByEmail, sendQueryToDatabase };