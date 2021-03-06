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
        showsButtons:false,
        isLoading:true,
        delayShowTime:1000
    }

    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false
        }
        setTimeout(() => {
            this.setState({swiperShow:true})
        }, this.props.delayShowTime);
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
        return (
                <SwiperComponent
                    {...this.props}
                    // dot={this.getDot()}
                    // activeDot={this.getActiveDot()}
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
        const {height} = this.props
        return (
            <Image
                style={{width:width,height}}
                source={require('./load.jpg')}
            />
        )
    }

    render() {
        const {isLoading,height} = this.props
        if (!isLoading){
            return this.renderSwiperComponent()
        }
        return (
            <View style={{width,height}}>
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
