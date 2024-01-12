/**
 * @generated SignedSource<<edda2629a05586c96d20d7567a3c41fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = Record<PropertyKey, never>;
export type AppQuery$data = {
  readonly greeting: string | null | undefined;
  readonly second: string | null | undefined;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "greeting",
        "value": "Hoola"
      }
    ],
    "kind": "ScalarField",
    "name": "greeting",
    "storageKey": "greeting(greeting:\"Hoola\")"
  },
  {
    "alias": "second",
    "args": [
      {
        "kind": "Literal",
        "name": "greeting",
        "value": "Wow"
      }
    ],
    "kind": "ScalarField",
    "name": "greeting",
    "storageKey": "greeting(greeting:\"Wow\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e55609c4cc2584502a0c4531d38b63ab",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  greeting(greeting: \"Hoola\")\n  second: greeting(greeting: \"Wow\")\n}\n"
  }
};
})();

(node as any).hash = "5a6a7ef797b5b977c6614c82fca604a1";

export default node;
