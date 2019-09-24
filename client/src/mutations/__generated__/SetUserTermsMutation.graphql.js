/**
 * @flow
 * @relayHash 6ebc157d18bec19a8dc8fb7a3be14de5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SetUserTermsMutationVariables = {||};
export type SetUserTermsMutationResponse = {|
  +setUserTermsChecked: boolean
|};
export type SetUserTermsMutation = {|
  variables: SetUserTermsMutationVariables,
  response: SetUserTermsMutationResponse,
|};
*/


/*
mutation SetUserTermsMutation {
  setUserTermsChecked
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "setUserTermsChecked",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SetUserTermsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SetUserTermsMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SetUserTermsMutation",
    "id": null,
    "text": "mutation SetUserTermsMutation {\n  setUserTermsChecked\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '08e432965939746bfbfc672ec937702d';
module.exports = node;
