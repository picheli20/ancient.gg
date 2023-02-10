import { gql } from 'apollo-angular';

export const openBox = gql`
  mutation OpenBox($input: OpenBoxInput!) {
    openBox(input: $input) {
      boxOpenings {
        id
        itemVariant {
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
