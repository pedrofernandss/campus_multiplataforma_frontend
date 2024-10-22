import { View, Text, FlatList, Animated } from 'react-native'
import React , {useState, useRef} from 'react'
import carouselImages from '@/assets/mocked-data/carouselImages'
import CarouselItem from './CarouselItem'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const imagesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View className="h-64">
      <FlatList data={carouselImages} renderItem={({ item }) => <CarouselItem item={item} /> } 
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: {x : scrollX} }}], {
        useNativeDriver: false
      })}
      scrollEventThrottle={32}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewConfig}
      ref={imagesRef}
      
      />
    </View>
  )
}

export default Carousel