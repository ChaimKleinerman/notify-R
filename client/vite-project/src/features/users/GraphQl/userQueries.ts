import { gql } from "@apollo/client";

export const GET_USER_QUERY = gql`
query {getUser {
    usr_id
    email
    password
    name
  }
}
`;
export const LOGOUT_USER_QUERY = gql`
query {logoutUser {
    status}
}`;
