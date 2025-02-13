import { doGetCustomer } from '../../functions/doGetCustomer.js';
import { doSyncroCustomer } from '../../functions/doSyncroCustomer.js';
import { doUpdatePhoneCustomer } from '../../functions/doUpdatePhoneCustomer.js';

export const userResolver = {
  Query: {
    getCustomer: (_, { id }, { req, res }) => doGetCustomer(id, req, res),
  },
  Mutation: {
    updatePhoneCustomer: (_, { input: { id, phone } }) => doUpdatePhoneCustomer(id, phone),
    syncroCustomer: (_, { input: { id, email } }) => doSyncroCustomer(id, email),
  },
};
