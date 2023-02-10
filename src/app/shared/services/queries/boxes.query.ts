import { gql } from 'apollo-angular';

export const boxesQuery = gql`
  query {
    boxes(free: false, purchasable: true, openable: true) {
      edges {
        node {
          id
          name
          iconUrl
          cost
          currency
        }
      }
    }
  }
`;
