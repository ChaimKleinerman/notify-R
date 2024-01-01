// Define types
export type UserRegister = {
    registerUser:RegisterUser
};

export type RegisterUser = {
    email: string;
    name: string;
    password: string;
};
export type UserLogin = {
    email: string;
    password: string;
};

export type User = {
    email:string,
    password:string,
    name:string,
    usr_id:string
} 
