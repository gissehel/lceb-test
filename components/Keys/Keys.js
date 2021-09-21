import React from 'react';
import PropTypes from 'prop-types';
import styles from './Keys.module.css';

const Keys = ({ keys }) => {
    return <div className={styles.main}>
        <div>
          <Key text='+' disabled={false} />
          <Key text='8' disabled={true} />
          <Key text='100' disabled={false} />
          <Key text='50' disabled={true} />
        </div>
        <div>
          <Key text='-'  disabled={false} />
          <Key text='1'  disabled={true} selected={false} />
          <Key text='3'  disabled={true} selected={false} />
          <Key text='7' disabled={true} />
        </div>
        <div>
          <Key text='*' />
          <Key text='58' subtext='50+8 = 58' disabled={true} />
          <Key text='406' subtext='58*7 = 406' disabled={false} />
          <Key text='4' subtext='3+1 = 4' disabled={false} selected={true} />
        </div>
        <div>
          <Key text='/' />
          <Key text='' disabled={true} />
          <Key text='' disabled={true} />
          <Key text='⇦' disabled={false} />
        </div>
    </div>
}

Keys.propTypes = {
};

Keys.defaultProps = {
};

export default Keys;