import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGears,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const isLogin = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
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
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Xử lý Logic Item
    const handleMenuChange = (menuItem) => {
        // console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <TippyHeadless
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Accounts</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Tìm kiếm tài khoản và video" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('load')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadless>
                <div className={cx('actions')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload')} to="/upload">
                        Tải lên
                    </Button>
                    {!isLogin ? (
                        <>
                            <Button primary>Đăng nhập</Button>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Tippy delay={[0, 100]} content="Tin nhắn" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Hộp thư" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <img className={cx('user-avatar')} src={images.avatar1} alt="user" />
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
