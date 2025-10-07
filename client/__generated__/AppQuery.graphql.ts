/**
 * @generated SignedSource<<928e12f799adef18c71f657117c225a4>>
 * @relayHash f0137a4e4512305a71fafa84462f4613
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 36fa8f6ff3f30df566f787abab3ce62c5c29b0fb34d5a6727a494398627c1b64

import { ConcreteRequest } from 'relay-runtime';
export type AppQuery$variables = {
  name: string;
};
export type AppQuery$data = {
  readonly greeting: string;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "kind": "ScalarField",
    "name": "greeting",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": {
      "throwOnFieldError": true
    },
    "name": "AppQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "36fa8f6ff3f30df566f787abab3ce62c5c29b0fb34d5a6727a494398627c1b64",
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "39924da7cc5995476b07dd47787bc100";

export default node;
