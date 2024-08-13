import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { getSchema } from "./schema";

/** @gqlType */
type Query = unknown;

/** @gqlField */
export function greeting(_: Query): string {
  return `Hello world!`;
}

/** @gqlField */
export function alwaysThrows(_: Query): string {
  throw new Error("I always throw!");
}

const yoga = createYoga({
  schema: getSchema(),
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
