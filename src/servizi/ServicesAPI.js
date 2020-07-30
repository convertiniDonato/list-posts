//services API
export const getItem = (url) => {
    return fetch(url)
    .then(res => res.json())
    }

