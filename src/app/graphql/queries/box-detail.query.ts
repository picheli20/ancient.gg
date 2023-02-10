import { gql } from 'apollo-angular';

export const boxDetailQuery = gql`
  query ($slug: String) {
    box(slug: $slug) {
      id
      name
      slug
      iconUrl
      cost
      currency
      averageProfit
      description
      slots {
        rate
        item {
          id
          name
          iconUrl
          value
          currency
        }
      }
    }
  }
`;
