import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {items.map((item, index) => (
                            <MenuItem key={index} data={item} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
