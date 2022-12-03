import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import { CloseIcon } from '~/components/Icons';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, openModal, handleModal }) {
    return (
        <div className={cx('modal', { open: openModal })}>
            <div className={cx('modal-wrapper')}>
                {children}
                <div className={cx('modal-close')} onClick={handleModal}>
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
}
Modal.propTypes = {
    children: PropTypes.node.isRequired,
    openModal: PropTypes.bool,
    handleModal: PropTypes.func,
};
export default Modal;
