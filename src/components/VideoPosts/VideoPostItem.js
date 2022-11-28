import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import {
    HeartIcon,
    // HeartActiveIcon,
    EllipsisRightIcon,
    PCShareIcon,
    CheckIcon,
    // SoundIcon,
    // SoundOffIcon,
    // PlayIcon,
    // PauseIcon,
    // FlagIcon,
} from '~/components/Icons';
// import TagLink from '~/components/TagLink';
import styles from './VideoPosts.module.scss';
import MusicLink from '~/components/MusicLink';
import VideoAction from '~/components/VideoAction';
import Button from '~/components/Button';
import Image from '../Image';

const cx = classNames.bind(styles);

function VideoPostItem({ data }) {
    // const [isLike, setIsLike] = useState('false');
    // const [isSound, setIsSound] = useState('false');
    // const [isPlay, setIsPlay] = useState('false');

    console.log(data);

    return (
        <div className={cx('video-item')}>
            <Link to={data.user.nickname} className={cx('avatar')}>
                <Image src={data.user.avatar} alt={data.user.nickname} />
            </Link>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <Link to={data.user.nickname} className={cx('author')}>
                        <h3 className={cx('author-uniqueid')}>
                            {data.user.nickname}
                            {data.user.tick && <CheckIcon className={cx('icon')} />}
                        </h3>
                        <h4 className={cx('author-nickname')}>Melon nè !</h4>
                    </Link>
                    <div className={cx('desc')}>
                        <span>{data.description}</span>
                        {/* <TagLink content="dm_team🌱" /> */}
                        {/* <TagLink content="yoongi" /> */}
                    </div>
                    <h4 className={cx('music')}>
                        <MusicLink content={data.music} />
                    </h4>
                </div>

                <div className={cx('video-wrapper')}>
                    <div className={cx('video-feed')}>
                        <div className={cx('video')}>
                            <video src={data.file_url} controls></video>
                        </div>
                        {/* <div className={cx('video-sound')} onClick={() => setIsSound(!isSound)}>
                            {isSound ? <SoundOffIcon /> : <SoundIcon className={cx('show')} />}
                        </div>
                        <div className={cx('video-play')} onClick={() => setIsPlay(!isPlay)}>
                            {isPlay ? <PlayIcon /> : <PauseIcon />}
                        </div>
                        <p className={cx('video-report')}>
                            <FlagIcon />
                            <span>Báo cáo</span>
                        </p> */}
                        {/* <div className={cx('video-times')}>
                            <div className={cx('progress-times')}>
                                <p className={cx('progress-total')}></p>
                                <p className={cx('progress-current')}></p>
                            </div>
                            <div className={cx('text-times')}>
                                <span className={cx('current-time')}>00:00</span>
                                <span>/</span>
                                <span className={cx('total-time')}>05:30</span>
                            </div>
                        </div> */}
                    </div>
                    <div className={cx('video-action')}>
                        <VideoAction
                            // icon={isLike ? <HeartIcon /> : <HeartActiveIcon />}
                            icon={<HeartIcon />}
                            count="145.4M"
                        />
                        <VideoAction icon={<EllipsisRightIcon />} count="21.87k" />
                        <VideoAction icon={<PCShareIcon />} count="1445" />
                    </div>
                </div>

                <Button className={cx('btn-follow')} outline small>
                    Follow
                </Button>
            </div>
        </div>
    );
}
VideoPostItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default VideoPostItem;
