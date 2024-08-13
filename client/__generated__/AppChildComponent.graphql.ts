/**
 * @generated SignedSource<<02cae74deb98f3bc1f249aded2133549>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppChildComponent$data = {
  readonly alwaysThrows: string;
  readonly " $fragmentType": "AppChildComponent";
};
export type AppChildComponent$key = {
  readonly " $data"?: AppChildComponent$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppChildComponent">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "throwOnFieldError": true
  },
  "name": "AppChildComponent",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "alwaysThrows",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "8ebdd753878365977c5739a8df1c434a";

export default node;
