import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import Button from '~/components/Button';
import { BottomIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showBottomIcon, setShowBottomIcon] = useState(false);
    useEffect(() => {
        const handldeScroll = () => {
            if (window.scrollY >= 100) {
                setShowBottomIcon(true);
            } else {
                setShowBottomIcon(false);
            }
        };

        window.addEventListener('scroll', handldeScroll);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}

                    <div className={cx('bottom', { active: showBottomIcon })}>
                        <Button rounded className={cx('bottom-btn')}>
                            Tải ứng dụng
                        </Button>
                        <div className={cx('bottom-icon')}>
                            <BottomIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
