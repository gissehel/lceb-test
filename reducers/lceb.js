import { createReducer } from "./utils/createReducer";
import { VALUE, OPERATOR } from '../constants/keys'

const initialState = {

    keys: {
        0: { type: OPERATOR, operator: '+', selected: false, },
        1: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        2: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        3: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        4: { type: OPERATOR, operator: '-', selected: false, },
        5: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        6: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        7: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        8: { type: OPERATOR, operator: '*', selected: false, },
        9: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        10: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        11: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        12: { type: OPERATOR, operator: '/', selected: false, },
        13: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        14: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
        15: { type: VALUE, value: '', subtext: '', selected: false, activated: false, },
    },
};

export default createReducer({
    [VALUE]: (state, action) => {
        const { value, keyId } = action;
        const key = state.keys[keyId];
        if (key) {
            if (key.type === VALUE) {
                if (key.activated) {
                    state = { ...state, keys: { ...state.keys, [keyId]: { ...key, selected: !key.selected } } }
                }
            }
        }
        return state;
    },
    [OPERATOR]: (state, action) => {

    },
}, initialState);