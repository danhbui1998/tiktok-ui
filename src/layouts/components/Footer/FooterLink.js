import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function FooterLink({ title }) {
    return (
        <Link to={`/${title}`} className={cx('title')}>
            {title}
        </Link>
    );
}

export default FooterLink;
