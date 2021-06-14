import { gql } from "@apollo/client";

export const LOAD_PROJECTS = gql`
  query {
    getAllProjects {
      id
      name
      desc
      amount
    }
  }
`;
