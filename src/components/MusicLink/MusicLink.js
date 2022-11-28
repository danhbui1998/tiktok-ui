import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { MusicIcon } from '~/components/Icons';
import styles from './MusicLink.module.scss';

const cx = classNames.bind(styles);

function MusicLink({ content }) {
    return (
        <Link className={cx('music-link')} to={`/music/${content}`}>
            <MusicIcon className={cx('icon')} />
            {/* <span>{content}</span> */}
            {content}
        </Link>
    );
}

export default MusicLink;
