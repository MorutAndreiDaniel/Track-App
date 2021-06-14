import { gql } from "@apollo/client";

export const CREATE_PROJECT_MUTATION = gql`
  mutation createProject($name: String!, $desc: String!, $amount: String!) {
    createProject(name: $name, desc: $desc, amount: $amount) {
      id
    }
  }
`;
