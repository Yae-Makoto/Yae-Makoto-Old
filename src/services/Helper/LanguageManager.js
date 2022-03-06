// import { getCookie, setCookie } from "./Cookie";
import NotImplemented from "./NotImplemented";
import Cookie from 'cookie';

function getCookie(key) {
    return Cookie.parse(document.cookie)[key];
}

function setCookie(key, value) {
    document.cookie = Cookie.serialize(key, value);
}
export function languageInit() {
    if (getCookie('lang')) {
        return getCookie('lang');
        
    } else {
        setCookie('lang','en');
        return 'en';
    }
}

export function languageChange(bln, callback) {
    if (bln === true) {
        setCookie('lang', 'zh');
        callback('zh');
    } else if (bln === false) {
        setCookie('lang', 'en');
        callback('en');
    }
}

export function language() {
    // return getCookie('lang');
}