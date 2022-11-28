import PropTypes from 'prop-types';

import VideoPostItem from './VideoPostItem';

function VideoPosts({ data = [] }) {
    return data.map((video) => <VideoPostItem key={video.id} data={video} />);
}
VideoPosts.propTypes = {
    data: PropTypes.array,
};

export default VideoPosts;
