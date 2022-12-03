import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faGears,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, InboxIcon, AddIcon, EllipsisVerticalIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import Login from '~/components/Login';

const cx = classNames.bind(styles);

const isLogin = false;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                { code: 'vi', title: 'Tiếng Việt' },
                { code: 'en', title: 'English' },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Phản hồi và trợ giúp', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Phím tắt trên bàn phím' },
];

const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'Xem hồ sơ', to: '/@hoa' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Nhận xu', to: '/coins' },
    { icon: <FontAwesomeIcon icon={faGears} />, title: 'Cài đặt', to: '/setting' },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Đăng xuất', to: '/logout', separate: true },
];

function Header() {
    // Xử lý Logic Item
    const handleMenuChange = (menuItem) => {
        // console.log(menuItem);
    };
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    };
    const hideModal = () => {
        setModal(false);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {!isLogin ? (
                        <>
                            <Button primary onClick={showModal}>
                                Đăng nhập
                            </Button>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('menu-btn')}>
                                    <EllipsisVerticalIcon />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={<AddIcon />} className={cx('upload')} to={config.routes.upload}>
                                Tải lên
                            </Button>
                            <Tippy delay={[0, 100]} content="Tin nhắn" placement="bottom">
                                <button className={cx('inbox-icon')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Hộp thư" placement="bottom">
                                <button className={cx('message-icon')}>
                                    <MessageIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <Image className={cx('user-avatar')} src={images.avatar1} alt="user" />
                            </Menu>
                        </>
                    )}
                </div>
            </div>
            {createPortal(<Login isModal={modal} handleModal={hideModal} />, document.body)}
        </header>
    );
}

export default Header;
