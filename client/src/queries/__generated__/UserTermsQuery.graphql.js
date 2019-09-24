/**
 * @flow
 * @relayHash f0425553b8ea1b0d83f93dbd7115ba3d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserTermsQueryVariables = {||};
export type UserTermsQueryResponse = {|
  +userTermsChecked: boolean
|};
export type UserTermsQuery = {|
  variables: UserTermsQueryVariables,
  response: UserTermsQueryResponse,
|};
*/


/*
query UserTermsQuery {
  userTermsChecked
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "userTermsChecked",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserTermsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserTermsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserTermsQuery",
    "id": null,
    "text": "query UserTermsQuery {\n  userTermsChecked\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44a757c1c6bc9980341ed14900d91d3a';
module.exports = node;
