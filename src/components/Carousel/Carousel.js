import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Dimensions, StyleSheet, Text, View,FlatList, Animated } from 'react-native'
import CarouselItem from './CarouselItem'



const {width, height} = Dimensions.get('window')

const Carousel = ({data}) => {
        const scrollX = new Animated.Value(0)
        let position = Animated.divide(scrollX, width)

        if(data && data.length){
            return(
                <View>
                    <FlatList data ={data}
                        keyExtractor={(item, index) => 'key' + index}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        snapToAlignment = 'center'
                        scrollEventThrottle={16}
                        decelerationRate= {"fast"}
                        showsHorizontalScrollIndicator = {false}
                        renderItem = {({item}) => {
                            return <CarouselItem item={item} />
                        }}
                        onScroll = {Animated.event(
                            [{nativeEvent: {contentOffset: {x: scrollX}}}]
                        )}
                    />

                    <View style={styles.dotView}>
                        {data.map((_,i) => {
                            let opacity = position.interpolate({
                                inputRange: [i-1,i,i+1],
                                outputRange: [0.3,1,0.3],
                                extrapolate: 'clamp'
                            })
                            return(
                                <Animated.View
                                    key = {i}
                                    style ={{ opacity, height: 9, marginTop: 30, width: 10, backgroundColor: '#493657', margin: 8, borderRadius: 7 }}
                                />
                            )
                        })}
                    </View>
                </View>
            )
        }
return null
}

export default Carousel

const styles = StyleSheet.create({
    dotView:{
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
