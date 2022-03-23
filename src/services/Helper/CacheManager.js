import { getCookie, setCookie } from "./Cookie";

// language

export function languageInit() {
    if (getCookie('lang')) {
        return getCookie('lang');
    } else {
        setCookie('lang', 'en');
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

export function languageGet() {
    return getCookie('lang');
}

// theme

export function themeInit() {
    if (getCookie('theme')) {
        return parseInt(getCookie('theme'));
    } else {
        setCookie('theme', 0);
        return 0;
    }
}

export function themeChange(i) {
    setCookie('theme', i);
}

export function themeGet() {
    return parseInt(getCookie('theme'));
}
