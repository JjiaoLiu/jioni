import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { toPage } from './../../util'

import './index.less'

class Footer extends Component {
    toPage = (url) => {
        return (e) => {
            toPage({ url })
        }
    }
    render() {
        return (
            <View className='footer'>
                <View className='website'>
                    <Text onClick={this.toPage('http://m.cn.ygselect.com/front/info_company/')}>PC版</Text>
                    <Text>|</Text>
                    <Text onClick={this.toPage('http://www.baidu.com')}>公司简介</Text>
                    <Text>|</Text>
                    <Text onClick={this.toPage('http://www.baidu.com')}>购物指南</Text>
                    <Text>|</Text>
                    <Text onClick={this.toPage('http://www.baidu.com')}>用户中心</Text>
                </View>
                <View className='www'>
                    <Text className='large-text'>YG PLUS</Text>
                    <Text className='text'>Business registration number: 120-81-67338</Text>
                    <Text className='text'>Name of representative: Yang Min Suk</Text>
                    <Text className='text'>Address: (sinsa-dong,garosu-bilding),12, Dosan-daero 15-gil,</Text>
                    <Text className='text'>Gangnam-gu,Soul,Korea</Text>
                    <Text className='text'>Mail order sales: 2012-SeoulMapo-0852</Text>
                    <Text className='text'>*YG SELECT的所有信息授予著作权保护</Text>
                    <Text className='text'>*退货/换货时需与YG SELECT客服电话联系</Text>
                    <Text className='text'>*无条件退货时运费由会员承担</Text>
                </View>
            </View>
        )
    }
}

export default Footer
