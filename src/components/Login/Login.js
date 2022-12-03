import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import styles from './Login.module.scss';
import Button from '~/components/Button';
import {
    QRIcon,
    UserIcon,
    FBIcon,
    GoogleIcon,
    TwitterIcon,
    LineIcon,
    KaKaoIcon,
    AppleIcon,
    InstagramIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const LOGIN_MENU_ITEMS = [
    { icon: <QRIcon />, title: 'Sử dụng mã QR', to: '/login/qrcode' },
    { icon: <UserIcon />, title: 'Số điện thoại / Email / Tiktok ID', to: '/login/phone-or-email' },
    { icon: <FBIcon />, title: 'Tiếp tục với Facebook' },
    { icon: <GoogleIcon />, title: 'Tiếp tục với Google' },
    { icon: <TwitterIcon />, title: 'Tiếp tục với Twitter' },
    { icon: <LineIcon />, title: 'Tiếp tục với LINE' },
    { icon: <KaKaoIcon />, title: 'Tiếp tục với KakaoTalk' },
    { icon: <AppleIcon />, title: 'Tiếp tục với Apple' },
    { icon: <InstagramIcon />, title: 'Tiếp tục với Instagram' },
];

function Login({ isModal, handleModal }) {
    const [isSignup, setIsSignup] = useState(true);

    const handleRegister = () => {
        setIsSignup(!isSignup);
    };

    return (
        <Modal openModal={isModal} handleModal={handleModal}>
            <div className={cx('login-modal')}>
                {isSignup ? (
                    <div className={cx('login-content')}>
                        <div className={cx('body')}>
                            <div className={cx('title')}>Đăng nhập vào TikTok</div>
                            <div className={cx('item-list')}>
                                {LOGIN_MENU_ITEMS.map((item, index) => (
                                    <Button
                                        isCenter
                                        className={cx('btn-item')}
                                        key={index}
                                        leftIcon={item.icon}
                                        to={item.to}
                                    >
                                        {item.title}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className={cx('footer')}>
                            <p>Bạn không có tài khoản? </p>
                            <div className={cx('btn')} onClick={handleRegister}>
                                Đăng ký
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={cx('login-content')}>
                        <div className={cx('body')}>
                            <div className={cx('title')}>Đăng ký TikTok</div>
                            <div className={cx('item-list')}>
                                {LOGIN_MENU_ITEMS.map((item, index) => (
                                    <Button
                                        isCenter
                                        className={cx('btn-item')}
                                        key={index}
                                        leftIcon={item.icon}
                                        to={item.to}
                                    >
                                        {item.title}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className={cx('footer')}>
                            <p>Bạn đã có tài khoản? </p>
                            <div className={cx('btn')} onClick={handleRegister}>
                                Đăng nhập
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
}
Login.propTypes = {
    isModal: PropTypes.bool,
    handleModal: PropTypes.func,
};
export default Login;
