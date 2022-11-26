import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SidebarAccounts.module.scss';
import SidebarAccountItem from './SidebarAccountItem';

const cx = classNames.bind(styles);

function SidebarAccounts({ label, data = [], onSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {data.map((account) => (
                <SidebarAccountItem key={account.id} data={account} />
            ))}

            <p className={cx('show-all')} onClick={onSeeAll}>
                Xem tất cả
            </p>
        </div>
    );
}
SidebarAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SidebarAccounts;
