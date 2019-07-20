import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['/**/*.graphql'],
  path: join(process.cwd(), 'apps/e-appointment-serve/src/app/graphql.ts'),
  outputAs: 'class',
});
