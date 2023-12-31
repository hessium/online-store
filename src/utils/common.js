export const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());

export const buildUrl = (url, params) => {
    let urlWithsParams = url;

    Object.entries(params).forEach(([key, value], i) => {
        const sign = !i ? '?' : '&';
        urlWithsParams += `${sign}${key}=${value}`;
    });

    return urlWithsParams;
};

export const sumBy = (arr) => arr.reduce((a, b) =>   a + b, 0);