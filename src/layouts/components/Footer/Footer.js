import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import FooterLink from './FooterLink';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('link-group')}>
                <FooterLink title="Giới thiệu" />
                <FooterLink title="TikTok Browse" />
                <FooterLink title="Bảng tin" />
                <FooterLink title="Liên hệ" />
                <FooterLink title="Sự nghiệp" />
                <FooterLink title="ByteDance" />
            </div>
            <div className={cx('link-group')}>
                <FooterLink title="TikTok for Good" />
                <FooterLink title="Quảng cáo" />
                <FooterLink title="Developers" />
                <FooterLink title="Transparency" />
                <FooterLink title="TikTok Rewards" />
            </div>
            <div className={cx('link-group')}>
                <FooterLink title="Trợ giúp" />
                <FooterLink title="An toàn" />
                <FooterLink title="Điều khoản" />
                <FooterLink title="Quyền riêng tư" />
                <FooterLink title="Creator Portal" />
                <FooterLink title="Hướng dẫn Cộng đồng" />
            </div>
            <div className={cx('link-group')}>
                <span className={cx('link-more')}>Thêm</span>
            </div>
            <span className={cx('copyright')}>&copy; 2022 TikTok</span>
        </div>
    );
}

export default Footer;
