export function scrollToBottom(behavior = 'smooth') {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.scrollTo({ top: height, behavior: behavior });
}
export function scrollToTop(behavior = 'smooth') {
    window.scrollTo({ top: 0, behavior: behavior });
}