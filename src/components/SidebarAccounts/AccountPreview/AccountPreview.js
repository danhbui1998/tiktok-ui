import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <Button className={cx('preview_btn-follow')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span> {data.nickname} </span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('fullname')}>{`${data.first_name} ${data.last_name}`}</span>
            </div>
            <div className={cx('analytics')}>
                <strong className={cx('value')}>{data.followers_count}</strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>{data.likes_count}</strong>
                <span className={cx('label')}>Likes</span>
            </div>
        </div>
    );
}
AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;
