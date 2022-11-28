import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './TagLink.module.scss';

const cx = classNames.bind(styles);

function TagLink({ content }) {
    return (
        <Link className={cx('tag-link')} to={`/tag/${content}`}>
            #{content}
        </Link>
    );
}

export default TagLink;
