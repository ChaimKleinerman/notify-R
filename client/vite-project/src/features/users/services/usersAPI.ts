// apiService.js

import handleApiRes from '../../global/services/apiResHandler.js';
import { UserRegister, UserLogin, User, RegisterUser } from '../types/UserInfo.js';
import { GET_USER_QUERY, LOGOUT_USER_QUERY } from '../GraphQl/userQueries.js';
import {
  REGISTER_USER_MUTATION,
  LOGIN_USER_MUTATION,
} from '../GraphQl/userMutations.js';
import {client} from "../../../main.js"


const register = async (userInfo: RegisterUser): Promise<UserRegister> => {
  const { email, password, name } = userInfo;
  try { 
    const res = await client.mutate({
      mutation: REGISTER_USER_MUTATION,
      variables: {email, password, name },
    });
    console.log('hello form register this is res',res.data)
    return res.data
    // return handleApiRes(res.data);
  } catch (error) {
    // Handle error
    console.error('Error during registration:', error);
    throw error;
  }
};

const login = async (userInfo: UserLogin): Promise<UserRegister> => {
    const name = localStorage.getItem('name')
  const { email, password } = userInfo;
  console.log('hello from login',userInfo,name)

  try {
    const res = await client.mutate({
      mutation: LOGIN_USER_MUTATION,
      variables: {email, password, name },
    });
    return res.data
    // return handleApiRes(res.data);
  } catch (error) {
    // Handle error
    console.error('Error during login:', error);
    throw error;
  }
};

const logout = async (): Promise<{ message: string }> => {
  try {
    const res = await client.query({
      query: LOGOUT_USER_QUERY,
    });
    return res.data
    // return handleApiRes(res.data);
  } catch (error) {
    // Handle error
    console.error('Error during logout:', error);
    throw error;
  }
};

const getUser = async (): Promise<User> => {
  try {
    const res = await client.query({
      query: GET_USER_QUERY,
    });
    return handleApiRes(res.data);
  } catch (error) {
    // Handle error
    console.error('Error during getUser:', error);
    throw error;
  }
};

export default{ register, login, logout, getUser };
