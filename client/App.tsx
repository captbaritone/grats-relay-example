import { createRoot } from "react-dom/client";
import { useFragment, useLazyLoadQuery } from "react-relay";
import {
  GraphQLResponse,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
  graphql,
} from "relay-runtime";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import { RelayEnvironmentProvider } from "react-relay";
import { Environment, Network, RelayFeatureFlags } from "relay-runtime";
import { Suspense } from "react";
import { AppChildComponent$key } from "./__generated__/AppChildComponent.graphql";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        greeting
        ...AppChildComponent
      }
    `,
    {},
  );
  return (
    <div>
      <h1>Welcome to Grats + Relay</h1>
      Server says: "{data.greeting}"
      <ErrorBoundary fallback={<Fallback />}>
        <ChildComponent query={data} />
      </ErrorBoundary>
    </div>
  );
}

function Fallback() {
  return (
    <span style={{ border: "1px solid pink", padding: "10px" }}>
      Oops! Something went wrong
    </span>
  );
}

function ChildComponent(props: { query: AppChildComponent$key }) {
  const data = useFragment(
    graphql`
      fragment AppChildComponent on Query {
        # When this errors, the component will throw and
        # the error will be caught by the ErrorBoundary
        alwaysThrows
      }
    `,
    props.query,
  );

  return <div>Server says: "{data.alwaysThrows}"</div>;
}

// @ts-ignore DefinitelyTyped is missing this
RelayFeatureFlags.ENABLE_FIELD_ERROR_HANDLING = true;
// @ts-ignore DefinitelyTyped is missing this
RelayFeatureFlags.ENABLE_FIELD_ERROR_HANDLING_THROW_BY_DEFAULT = true;

async function fetchGraphQL(
  request: RequestParameters,
  variables: Variables,
): Promise<GraphQLResponse> {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: request.text, variables: variables }),
  });
  return await response.json();
}

const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(RecordSource.create()),
});

createRoot(document.getElementById("app")!).render(
  <RelayEnvironmentProvider environment={environment}>
    <Suspense fallback={"Loading..."}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>,
);
