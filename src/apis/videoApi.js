import * as httpRequest from '~/utils/httpRequest';

export const getVideo = async (type = 'for-you', page = 1) => {
    try {
        const response = await httpRequest.get('videos', {
            params: {
                page,
                type,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
