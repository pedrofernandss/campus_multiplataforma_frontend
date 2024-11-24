import { View, FlatList, Dimensions, Animated } from 'react-native'
import React from 'react'
import carouselImages from '@/assets/mocked-data/carouselImages'
import CarouselCard from './CarouselCard'
import Paginator from './Paginator'

const {width} = Dimensions.get('window')
const scrollX = new Animated.Value(0);

const Carousel = () => {
  
  return (
    <View>
      <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(carouselImages.length)].map((_, i) => i * (width * 0.8-40) + (i-1)*40)}
      snapToAlignment={'center'}
      scrollEventThrottle={16}
      initialScrollIndex={1}
      getItemLayout={(data, index) => ({
        length: width * 0.8 - 40,
        offset: (width * 0.8 - 40) * index,
        index,
      })}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: {x : scrollX} }}], {
        useNativeDriver: false
      })}
      decelerationRate={'fast'}
      style={{marginTop:10}}
      data={carouselImages} renderItem={({ item }) => <CarouselCard item={item}/> }
      keyExtractor={(item) => item.id}
    />
    <Paginator data={carouselImages} scrollX={scrollX} />
    </View>
  )
}

export default Carousel