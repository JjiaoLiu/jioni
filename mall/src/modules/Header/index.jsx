import Taro, { Component } from '@tarojs/taro';
import { View, Button, Image, Icon, Text, Input } from '@tarojs/components'
import TroggleNav from './../TroggleNav'
import './index.less'

class Header extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        isopened: false,
        issearch: false
    }

    troggleNav = () => {
        this.setState((prev) => { return { isopened: !prev.isopened, issearch: false } })
    }

    troggleSearch = () => {
        this.setState((prev) => { return { issearch: !prev.issearch } })
    }

    render() {
        const { isopened, issearch } = this.state;
        return (
            <View className='header'>
                <View className='fixed site'>
                    <View onClick={this.troggleNav} className='troggle-btn' />
                    <View className='logo' />
                    <View onClick={this.troggleSearch} className='search-btn' />
                </View>
                <TroggleNav isopened={isopened} onHandleClose={this.troggleNav} />
                {
                    issearch && <View className='fixed search'>
                        <View className='relative'>
                            <Input className='input' placeholder='SEARCH' />
                            <Icon className='icon-search' type='search' />
                        </View>
                    </View>
                }
            </View>
        )
    }
}

export default Header;