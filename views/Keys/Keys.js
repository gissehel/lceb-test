import React from 'react';
import PropTypes from 'prop-types';
import styles from './Keys.module.css';
import { OPERATOR } from '../../constants/keys';
import Key from '../Key';

const getKey = (key, keyId, onValue, onOperator) => {
  const {type, value, operator, subtext, selected, activated} = key;
  const disabled = type === OPERATOR ? false : !activated ;
  const text = type === OPERATOR ? operator : value;
  const onClick = disabled ? undefined : () => (type === OPERATOR ? onOperator : onValue)(text, keyId);
  return <Key key={keyId} text={text} onClick={onClick} subtext={subtext} selected={selected} disabled={disabled} />;
}

const layout = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]]

const Keys = ({ keys, onValue, onOperator }) => {
    return <div className={styles.main}>
        {
          layout.map((line, lineId) => <div key={lineId}>{line.map((keyId) => getKey(keys[keyId], keyId, onValue, onOperator))}</div>)
        }
    </div>
}

Keys.propTypes = {
};

Keys.defaultProps = {
};

export default Keys;