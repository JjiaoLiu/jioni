import Taro, { Component } from '@tarojs/taro'
import { View, Text, SwiperItem, Swiper, Image, Icon } from '@tarojs/components'
import Header from './../../modules/Header'
import Footer from './../../modules/Footer'
import request from './../../request'
import { toPage } from './../../util'
import './index.less'

class Index extends Component {

  static options = {
    addGlobalClass: true
  }

  state = {
    index: {},
    winWidth: 750
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount() {
    this.getData()
    this.handleResize()
  }

  getData = () => {
    return request({ url: '/api/index', showLoading: true })
      .then(res => {
        this.setState({ index: res })
      })
  }

  handleResize = () => {
    Taro.getSystemInfo({
      success: res => this.setState({
        winWidth: res.windowWidth
      })
    })
  }

  toPage = (url) => {
    return (e) => {
      toPage({ url })
    }
  }

  onResize() {//只有微信小程序支持
    this.handleResize()
  }

  onPullDownRefresh() {
    this.getData().then(() => {
      Taro.stopPullDownRefresh()
    })
  }

  render() {
    const { index } = this.state;
    const banner = {
      width: this.state.winWidth + 'px',
      height: this.state.winWidth + 'px',
    }
    return (
      <View className='page index'>
        <Header />
        <Swiper
          className='banner'
          style={banner}
          indicatorColor='#999'
          indicatorActiveColor='#ef4123'
          indicatorDots
          autoplay>
          {
            index.banner && index.banner.map((item) => {
              return <SwiperItem key={item.id}>
                <Image src={item.product_image} style={banner} />
              </SwiperItem>
            })
          }
        </Swiper>
        <View className='title'><Text className='text'>BEST</Text></View>
        <View className='products'>
          {
            index.products && index.products.map((item) => {
              return <View className='item' key={item.product_id}>
                <Image src={item.product_image} mode='widthFix' className='product_image' />
                <View className='text'>
                  <View className='limit-line'>
                    <Text>[{item.product_status}]{item.product_describtion}</Text>
                  </View>
                  <Text className='product_price'>{item.product_price}</Text>
                </View>
              </View>
            })
          }
        </View>
        <Footer />
      </View>
    )
  }
}

export default Index
