import { createRoot } from "react-dom/client";
import { useLazyLoadQuery } from "react-relay";
import {
  CacheConfig,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
  graphql,
} from "relay-runtime";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import { RelayEnvironmentProvider } from "react-relay";
import { Environment, Network } from "relay-runtime";

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        greeting(greeting: "Hoola")
        second: greeting(greeting: "Wow")
      }
    `,
    {}
  );
  return <div>{data.greeting}</div>;
}

const store = new Store(RecordSource.create());
const network = Network.create(
  async (
    request: RequestParameters,
    variables: Variables,
    _cacheConfig: CacheConfig
  ) => {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: request.text, variables: variables }),
    });
    return await response.json();
  }
);

const environment = new Environment({
  network,
  store,
});

function Wrapper() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  );
}

const appNode = document.getElementById("app");

const root = createRoot(appNode!);
root.render(<Wrapper />);
