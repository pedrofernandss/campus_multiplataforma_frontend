import React from 'react'
import { TouchableOpacity, Image, View, StyleSheet, Dimensions, SafeAreaView, StatusBar, Platform } from 'react-native'
import { icons, images } from '../constants'
import standard from '../theme'

const { width } = Dimensions.get('window');

const Header = () => {
  return (
    <SafeAreaView style={{ backgroundColor: standard.colors.campusRed }}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headerStyle: {
        paddingHorizontal: '4%',
        width: '100%',
        height: width * 0.15 + (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
        backgroundColor: standard.colors.campusRed,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    logo: {
        width: 145,
        height: 31,
      },
    menuIcon: {
        width: 32,
        height: 32,
    },
})

export default Header