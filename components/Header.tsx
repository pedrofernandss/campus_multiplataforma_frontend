import React from 'react'
import { TouchableOpacity, Image, View, StyleSheet, Dimensions } from 'react-native'
import { icons, images } from '../constants'
import standard from '../theme'

const { width } = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.headerStyle}>
        <Image 
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
        />
        <TouchableOpacity>
            <Image 
                source={icons.menuIcon}
                style={styles.menuIcon}
                resizeMode="contain"
            />
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
    headerStyle: {
        paddingHorizontal: width * 0.04,
        width: "100%",
        height: width * 0.15,
        backgroundColor: standard.colors.campusRed,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 145,
        height: 31,
      },
    menuIcon: {
        width: 28,
        height: 30,
    },
})

export default Header