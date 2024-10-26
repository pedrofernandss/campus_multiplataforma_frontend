import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const {width} = Dimensions.get('window')

const CarouselCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.5)']}
        style={styles.gradient}
      />
    </View>
  )
}

export default CarouselCard

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    image: {
        height: width/2.6,
        width: width*0.8-20,
        marginHorizontal:10,
        borderRadius: 12,
    },
    gradient: {
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 0,
        height: width / 2.6,
        borderRadius: 12,
      },
})