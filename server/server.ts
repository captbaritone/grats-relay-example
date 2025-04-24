import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { getSchema } from "./schema.js";

/** @gqlQueryField */
export function greeting(name: string = "World"): string {
  return `Hello ${name}!`;
}

const yoga = createYoga({
  schema: getSchema(),
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
