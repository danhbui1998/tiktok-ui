import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const response = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
