---
to: components/<%= name %>/<%= name %>.js
---
import React from 'react';
import PropTypes from 'prop-types';
import styles from './<%= name %>.module.css';

const <%= name %> = ({ }) => {
    return <div className={styles.main}>
    </div>
}

<%= name %>.propTypes = {
};

<%= name %>.defaultProps = {
};

export default <%= name %>;