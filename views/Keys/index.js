import { addValue, addOperator } from '../../actions/keys'
import { useDispatch, useSelector } from 'react-redux'
import Internal from './Keys'

const Keys = () => {
    const dispatch = useDispatch();
    const keys = useSelector((state) => state.lceb.keys)
    const onValue = (value, keyId) => dispatch(addValue(value, keyId))
    const onOperator = (operator, keyId) => dispatch(addOperator(operator, keyId))
    // const onEvent = (input) => dispatch(eventRaised(input))
    return <Internal {...{ keys, onValue, onOperator }} />
}

export default Keys;