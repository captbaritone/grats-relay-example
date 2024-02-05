/**
 * @generated SignedSource<<12217866d089058084e18eff51080cd1>>
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
  "metadata": null,
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

(node as any).hash = "3a2ff88d77eda47848f68edf907a105b";

export default node;
