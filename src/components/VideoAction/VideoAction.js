import classNames from 'classnames/bind';
import styles from './VideoAction.module.scss';

const cx = classNames.bind(styles);

function VideoAction({ icon, count, onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')} onClick={onClick}>
                {icon}
            </div>
            <strong className={cx('count')}>{count}</strong>
        </div>
    );
}

export default VideoAction;
