
let accessTokenCache: string = '';

export const setAccessToken = (token: string) => {
    accessTokenCache = token;
};

export const getAccessToken = () => {
    // console.log('getAccessToken', accessTokenCache);
    return accessTokenCache;
};
