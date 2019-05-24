import { prismaObjectType, makePrismaSchema } from 'nexus-prisma';
import { idArg } from 'nexus';

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition: (t) => t.prismaFields(['*']),
});

export default Mutation;
