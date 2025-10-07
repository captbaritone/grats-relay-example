import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { getSchema } from "./schema.js";
import { usePersistedOperations } from "@graphql-yoga/plugin-persisted-operations";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @gqlQueryField */
export function greeting(name: string = "World"): string {
  return `Hello ${name}!`;
}

const yoga = createYoga({
  schema: getSchema(),
  plugins: [usePersistedOperations({ getPersistedOperation })],
});

function getPersistedOperation(sha256Hash: string) {
  // We re-read the persisted queries off disk on each request to make development easier
  // In production, we would store these in a database or cache
  const queriesJson = fs.readFileSync(
    path.join(__dirname, "persistedQueries.json"),
    "utf8",
  );
  const store = JSON.parse(queriesJson);
  const persistedQuery = store[sha256Hash];
  if (persistedQuery == null) {
    throw new Error(`Persisted query not found for hash: ${sha256Hash}`);
  }
  return persistedQuery;
}

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
