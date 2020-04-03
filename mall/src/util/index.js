import Taro from '@tarojs/taro'

const toPage = ({ url }) => {
    Taro.navigateTo({ url })
}

export { toPage }