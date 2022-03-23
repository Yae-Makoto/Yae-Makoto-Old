import Cookie from 'cookie';

function generateTime() {
    // console.log((new Date(Date.now() + 86400 * 1000 * 30)))
    return (new Date(Date.now() + 86400 * 1000 * 30));
}


export function getCookie(key) {
    return Cookie.parse(document.cookie)[key];
}

export function setCookie(key, value) {
    document.cookie = Cookie.serialize(key, value, { expires: generateTime() });
}