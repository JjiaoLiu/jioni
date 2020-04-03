import Taro, { Component } from '@tarojs/taro'
import { View, Button, Icon, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.less'
class TroggleNav extends Component {

    static options = {
        addGlobalClass: true
    }

    state = {}

    onHandleClose = () => {
        this.props.onHandleClose();
    }

    call = () => {
        Taro.makePhoneCall({
            phoneNumber: '400 632 6218' //仅为示例，并非真实的电话号码
        })
    }

    render() {
        let { isopened } = this.props;
        return (
            <View className={isopened ? 'show-from-left' : 'hide-to-left'}>
                <View onClick={this.onHandleClose} className='child full-screen-mask' />
                <View className='fixed troggle-nav child'>
                    <View className='location-action'>
                        <View className='action-btn home-btn'>首页</View>
                        <View onClick={this.onHandleClose} className='action-btn back-btn'>BACK</View>
                    </View>
                    <View><Text className='bold'>请登录后查看</Text></View>
                    <View><Text>登录后可查看商品优惠信息</Text></View>
                    <View className='list'>
                        <View className='item red-bg'>登录</View>
                        <View className='item'>注册</View>
                        <View className='item'>顾客设置</View>
                    </View>
                    <View className='list'>
                        <View className='item blue-bg'>全部分类</View>
                        <View className='item'>专辑</View>
                        <View className='item'>商品</View>
                        <View className='item'>KRUNK</View>
                        <View className='item'>BRAND</View>
                        <View className='item'>BIGBANG</View>
                    </View>
                    <View><Text>[CS CENTER]</Text></View>
                    <View><Text onClick={this.call}>400 632 6218</Text></View>
                    <View><Text>周一至周五：9:00-22:00</Text></View>
                    <View><Text>周六至周日：9:00-18:00</Text></View>
                </View>
            </View >
        )
    }
}

TroggleNav.PropTypes = {
    isopened: Boolean,
    onHandleClose: Function,
}

TroggleNav.defaultProps = {
    isopened: false,
    onHandleClose: () => { return null },
}
export default TroggleNav;