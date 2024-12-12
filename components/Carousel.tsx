import axios from 'axios'
import { YOUTUBE_API_KEY } from '@env';
import React, { useEffect, useState } from 'react'
import { View, FlatList, Dimensions, Animated } from 'react-native'
import CarouselCard from './CarouselCard'
import Paginator from './Paginator'

const {width} = Dimensions.get('window')
const scrollX = new Animated.Value(0);


const Carousel = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const url = 'https://www.googleapis.com/youtube/v3/search'

    const fetchVideos = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            part: 'snippet',
            channelId: 'UChegNOjzApuGBTQyPo3I27Q',
            order: 'date',
            maxResults: 4,
            key: YOUTUBE_API_KEY,
            type: 'video',          
            videoDuration: 'medium'
          }
        });
        console.log('Tipo da variável videos:', typeof videos);
        setVideos(response.data.items);
      } catch (error) {
        const err = error as Error;
        console.error('API Error:', err.message);
      }
    };

    fetchVideos();
  }, []);

  return (
    <View>
      <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(videos.length)].map((_, i) => i * (width * 0.8-40) + (i-1)*40)}
      snapToAlignment={'center'}
      scrollEventThrottle={16}
      initialScrollIndex={(videos.length/2)-1}
      getItemLayout={(videos, index) => ({
        length: width * 0.8 - 40,
        offset: (width * 0.8 - 40) * index,
        index,
      })}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: {x : scrollX} }}], {
        useNativeDriver: false
      })}
      decelerationRate={'fast'}
      style={{marginTop:10}}
      data={videos} renderItem={({ item }) => <CarouselCard item={item}/> }
      keyExtractor={(item) => item.id.videoId}
      
    />
    <Paginator data={videos} scrollX={scrollX} />
    </View>
  )
}

export default Carousel