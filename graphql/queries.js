import { gql } from "@apollo/client";

export const GET_ALL_AGENDAS = gql`
  query {
    agendas {
      id
      event
      event_date
      event_time
      event_place
      description
      sc_classics {
        id
        name
        description
      }
      sc_duplicates {
        id
        name
        description
      }
      competitions {
        id
        name
        description
      }
    }
  }
`;

export default { GET_ALL_AGENDAS };
