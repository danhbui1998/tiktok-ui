import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { CheckIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SidebarAccounts.module.scss';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function SidebarAccountItem({ data }) {
    return (
        <div>
            <Tippy
                // visible
                interactive
                delay={[800, 0]}
                offset={[-20, 2]}
                placement="bottom"
                render={(attrs) => (
                    <div tabIndex={-1} {...attrs}>
                        <PopperWrapper className={cx('preview')}>
                            <AccountPreview data={data} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link to={`/@${data.nickname}`} className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>
                            <span> {data.nickname} </span>
                            {data.tick && <CheckIcon className={cx('check-icon')} />}
                        </h4>
                        <span className={cx('fullname')}> {`${data.first_name} ${data.last_name}`} </span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}
SidebarAccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SidebarAccountItem;
