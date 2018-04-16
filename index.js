//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,Image} from 'react-native';

// 载入第三方swiper
import SwiperComponent from './src/index'

// 获取宽高
const {width, height} = Dimensions.get ('window');

// create a component
class Swiper extends Component {

    static defaultProps = {
        autoplay:true,
        paginationStyle:{bottom: 10},
        autoplayTimeout:3,
        bounces:true,
        loop:true,
        index:0,
        showsButtons:false
    }

    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false
        }
        setTimeout(() => {
            this.setState({swiperShow:true})
        }, 3000);
    }
    
    /**
     * 返回普通焦点
     * 
     * @memberof Swiper
     */
    getDot = () =>{
        return (
            <View
                style={styles.dot}
            />
        )
    }

    /**
     * 返回激活状态
     * 
     * @memberof Swiper
     */
    getActiveDot = () =>{
        return (
            <View style={styles.activeDot}/>
        )
    }

    /**
     * 渲染轮播图组件
     * 
     * @memberof Swiper
     */
    renderSwiperComponent = () =>{
        const {
            height,index,
            dot,activeDot,
            autoplay,paginationStyle,
            autoplayTimeout,bounces,
            loop,showsButtons
        } = this.props
        const swiperProps = {
            height,index,
            dot,activeDot,
            autoplay,paginationStyle,
            autoplayTimeout,bounces,
            loop,showsButtons
        }
        return (
                <SwiperComponent
                    {...swiperProps}
                    dot={this.getDot()}
                    activeDot={this.getActiveDot()}
                >
                    {this.props.children}
                </SwiperComponent>
        )
    }

    /**
     * 渲染正常视图
     * 
     * @memberof Swiper
     */
    renderNormalComponent = () =>{
        return (
            <Image
                style={{width:width,height:150}}
                source={require('./load.jpg')}
            />
        )
    }

    render() {
        return (
            <View style={{width,height:150}}>
                {
                    this.state.swiperShow 
                    ? this.renderSwiperComponent()
                    : this.renderNormalComponent()
                }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    dot:{
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 8,
        height: 8,
        borderRadius: 7,
        marginLeft: 5,
        marginRight: 5,
    },
    activeDot:{
        backgroundColor: 'gray',
        width: 8,
        height: 8,
        borderRadius: 7,
        marginLeft: 5,
        marginRight: 5
    }
});

//make this component available to the app
export default Swiper;
