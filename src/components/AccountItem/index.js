import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.avatar1} alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>nguyenvannam</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('fullname')}>Nguyễn Văn Nam</span>
            </div>
        </div>
    );
}

export default AccountItem;
