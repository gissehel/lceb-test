import { VALUE, OPERATOR } from "../constants/keys";

export const addValue = (value, keyId) => ({ type: VALUE, value, keyId });
export const addOperator = (operator, keyId) => ({ type: OPERATOR, operator, keyId });
