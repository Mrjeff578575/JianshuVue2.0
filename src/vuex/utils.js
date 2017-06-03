function changeStaticUrl(url) {
    if (process.env.NODE_ENV == 'production') {
        return url.replace('../../', './')
    }
    return url
}
export default {
    changeStaticUrl
}
