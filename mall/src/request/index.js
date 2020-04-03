import Taro from '@tarojs/taro'

const request = ({ url, data, method = 'GET', showLoading = false }) => {
    if (showLoading) {
        Taro.showLoading({
            title: '加载中',
            mask: showLoading
        })
    }
    return new Promise((resolve, reject) => {
        console.log(BASEURL)
        Taro.request({
            url: BASEURL + url,
            data: data,
            method: method,
        }).then((res) => {
            Taro.hideLoading()
            switch (res.statusCode) {
                case 200:
                    return resolve(res.data)
                default:
                    return reject(res)
            }
        }).catch(err => {
            console.log(err)
            Taro.showToast({
                title: '数据请求失败',
                icon: 'none'
            })
            throw Error(err);
        })
    })
}

export default request
