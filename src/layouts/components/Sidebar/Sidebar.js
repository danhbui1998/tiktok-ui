import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SidebarAccounts from '~/components/SidebarAccounts';
import Button from '~/components/Button';
import * as userApi from '~/apis/userApi';
import Footer from '../Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await userApi.getSuggested({ page: 1, perPage: 5 });
            setSuggestedUser(data);
            // console.log(data);
        };

        fetchApi();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                {/* <SidebarAccounts label="Tài khoản đã đăng ký" /> */}
                <div className={cx('sidebar-login')}>
                    <p className={cx('login-text')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <Button outline className={cx('btn-large')}>
                        Đăng nhập
                    </Button>
                </div>
                <SidebarAccounts label="Tài khoản được đề xuất" data={suggestedUser} />

                <Footer />
            </Menu>
        </aside>
    );
}

export default Sidebar;
