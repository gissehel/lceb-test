import { createReducer } from "./utils/createReducer";
import { VALUE, OPERATOR, FUNCTION } from '../constants/keys'

const baseKeyId = [1, 2, 3, 5, 6, 7];
const workingKeyId = [9, 10, 11, 13, 14];

const initialState = {
    selectedValues: [],
    selectedOperators: [],
    nextWorkingIndex: 0,
    keys: {
        0: { type: OPERATOR, operator: '+', selected: false, },
        1: { type: VALUE, value: '8', subtext: '', selected: false, activated: true, },
        2: { type: VALUE, value: '7', subtext: '', selected: false, activated: true, },
        3: { type: VALUE, value: '100', subtext: '', selected: false, activated: true, },
        4: { type: OPERATOR, operator: '-', selected: false, },
        5: { type: VALUE, value: '2', subtext: '', selected: false, activated: true, },
        6: { type: VALUE, value: '10', subtext: '', selected: false, activated: true, },
        7: { type: VALUE, value: '4', subtext: '', selected: false, activated: true, },
        8: { type: OPERATOR, operator: '*', selected: false, },
        9: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        10: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        11: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        12: { type: OPERATOR, operator: '/', selected: false, },
        13: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        14: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        15: { type: FUNCTION, value: '⇐', subtext: 'undo', selected: false, activated: true, },
    },
};

const poide = (keyId,) => {

}

const unselectAll = (state) => {
    const { selectedValues, selectedOperators, keys } = state;
    state = { ...state, keys: { ...keys, ...Object.fromEntries([...selectedValues, ...selectedOperators].map((keyId) => [keyId, { ...keys[keyId], selected: false }])) }, selectedValues: [], selectedOperators:[] }
    return state;
}

const computeOperation = (state) => {
    const {selectedValues, selectedOperators, keys} = state;
    const [value1, value2] = selectedValues.map(keyId => Number(keys[keyId].value));
    const [keyOperator] = selectedOperators;
    const operator = state.keys[keyOperator].operator;
    const valueMin = Math.min(value1, value2)
    const valueMax = Math.max(value1, value2)
    let isPossible = true;
    if (operator === '/') {
        if (valueMin === 0) {
            isPossible = false;
        } else {
            if (Math.floor(valueMax/valueMin)*valueMin !== valueMax) {
                isPossible = false;
            }
        }
    }
    if (isPossible) {
        state = { ...state, keys: { ...keys, ...Object.fromEntries(selectedValues.map((keyId) => [keyId, { ...keys[keyId], activated: false }])) }}
        let newValue = null;
        switch (operator) {
            case '+': newValue = valueMax + valueMin; break;
            case '-': newValue = valueMax - valueMin; break;
            case '*': newValue = valueMax * valueMin; break;
            case '/': newValue = valueMax / valueMin; break;
        }
        const subtext = `${valueMax}${operator}${valueMin} = ${newValue}`
        const text = `${newValue}`
        const workingIndex = state.nextWorkingIndex;
        const nextWorkingIndex = workingIndex+1;
        const keyId = workingKeyId[workingIndex];
        state = { ...state, nextWorkingIndex, keys: { ...state.keys, [keyId]: { type: VALUE, value: text, subtext, selected: false, activated: true, } }}
    }
    state = unselectAll(state);
    return state;
}

export default createReducer({
    [VALUE]: (state, action) => {
        const { value, keyId } = action;
        const key = state.keys[keyId];
        if (key) {
            if (key.type === VALUE) {
                if (key.activated) {
                    const selected = !key.selected;
                    if (selected && state.selectedValues.length >= 2) {
                        state = unselectAll(state)
                    }
                    let selectedValues = selected ? [ ...state.selectedValues, keyId ] : state.selectedValues.filter((id) => id !== keyId);
                    state = { ...state, keys: { ...state.keys, [keyId]: { ...key, selected } }, selectedValues }
                    if (state.selectedOperators.length === 1 && state.selectedValues.length === 2) {
                        state = computeOperation(state);
                    }
                }
            }
        }
        return state;
    },
    [OPERATOR]: (state, action) => {
        const { operator, keyId } = action;
        const key = state.keys[keyId];
        if (key) {
            if (key.type === OPERATOR) {
                const selected = !key.selected;
                if (selected && state.selectedOperators.length >= 1) {
                    state = unselectAll(state)
                }
                let selectedOperators = selected ? [ ...state.selectedOperators, keyId ] : state.selectedOperators.filter((id) => id !== keyId);
                state = { ...state, keys: { ...state.keys, [keyId]: { ...key, selected } }, selectedOperators }
                if (state.selectedOperators.length === 1 && state.selectedValues.length === 2) {
                    state = computeOperation(state);
                }
            }
        }
        return state;
    },
}, initialState);