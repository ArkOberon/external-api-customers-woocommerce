import gql from 'graphql-tag';

export const customerTypes = gql`
  type Query {
    getCustomer(id: Int!): Customer!
  }

  type Mutation {
    updatePhoneCustomer(input: UpdatePhoneCustomerInput): Customer!
    syncroCustomer(input: SyncroCustomerInput): Customer!
  }

  input UpdatePhoneCustomerInput {
    id: String!
    phone: String!
  }

  input SyncroCustomerInput {
    id: String!
    email: String!
  }

  scalar UUID
  scalar Datetime

  type Customer {
    id: Int!
    email: String!
    role: String!
    username: String!
    first_name_f: String!
    last_name_f: String!
    company_f: String!
    address_1_f: String!
    address_2_f: String!
    city_f: String!
    postcode_f: String!
    country_f: String!
    state_f: String!
    phone_f: String!
    first_name_e: String!
    last_name_e: String!
    company_e: String!
    address_1_e: String!
    address_2_e: String!
    city_e: String!
    postcode_e: String!
    country_e: String!
    state_e: String!
    phone_e: String!
    token: String!
  }

  type AuthPayload {
    token: String!
  }
`;
