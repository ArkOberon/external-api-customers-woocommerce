import { userResolver } from './resolvers/userResolver.js';
import { customerTypes } from './types/customerTypes.js';

export const resolvers = [userResolver];

export const typeDefs = [customerTypes];
