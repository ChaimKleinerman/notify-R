import { gql } from "@apollo/client";

const REGISTER_USER_MUTATION = gql`
mutation RegisterUser($email: String, $password: String, $name: String) {
  registerUser(email: $email, password: $password, name: $name) {
    user_id
    email
    password
    name
  }
}
  
`;
const LOGIN_USER_MUTATION = gql`
    mutation   LoginUser($email: String, $password: String,$name: String, $token: String) {
        loginUser(email: $email, password: $password, name: $name, token: $token) {
            user_id
            email
            password
            name
            token
        }
    }
`;

export {REGISTER_USER_MUTATION,LOGIN_USER_MUTATION};