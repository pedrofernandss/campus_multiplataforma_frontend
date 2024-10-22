import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'

const CarouselItem = ({item}) => {
    const { width } = useWindowDimensions();
    return (
        <View className="flex justify-center items-center">
        <Image source={item.image} className="flex-[0.7] justify-center" style={{width, resizeMode: 'contain'}} />
        </View>
    )
}

export default CarouselItem
