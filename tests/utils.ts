import { Prisma } from 'prisma-binding';

const getTestInstance = () => {
  return new Prisma({
    typeDefs: '../src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466/travis-jest/test',
  });
};

export {
  getTestInstance,
}
