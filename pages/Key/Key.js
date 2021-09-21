import classnames from 'classnames'

import styles from './Key.module.css'

const Key = ({text, onClick, disabled}) => {
    return <div className={classnames(styles.Key, {[styles.disabled]:disabled, [styles.enabled]:!disabled})} onClick={onClick}>
        <div className={styles.inner}>{text}</div>
    </div>
}

export default Key;