import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import VideoPosts from '~/components/VideoPosts';
import * as videoApi from '~/apis/videoApi';

const cx = classNames.bind(styles);

function Home() {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await videoApi.getVideo();
            setVideo(data);
            // console.log(data);
        };

        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <VideoPosts data={video} />
        </div>
    );
}

export default Home;
