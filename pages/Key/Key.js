import classnames from 'classnames'

import styles from './Key.module.css'

const Key = ({text, subtext, onClick, disabled, selected}) => {
    const className = classnames(
        styles.Key, 
        {
            [styles.disabled]:disabled, 
            [styles.enabled]:!disabled,
            [styles.selected]:selected,
        }
    );
    return <div className={className} onClick={onClick}>
        <div className={styles.inner}>
            {text}
            {
                subtext ?
                <div className={styles.subtext}>{subtext}</div> :
                null
            }
            
        </div>
    </div>
}

export default Key;