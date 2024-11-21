import React from 'react'
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import { icons, images } from '../constants'
import standard from '../theme'

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
        backgroundColor: standard.colors.campusRed,
        padding: 16,
        width: '100%',
        height: 58,
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