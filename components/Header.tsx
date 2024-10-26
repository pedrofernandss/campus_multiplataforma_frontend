import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { icons, images } from '../constants'

const Header = () => {
  return (
    <View className="bg-campusRed p-4 w-full h-58 flex flex-row items-center justify-between">
        <TouchableOpacity>
            <Image 
                source={icons.menuIcon}
                className="w-[28] h-[30]"
                resizeMode="contain"
            />
        </TouchableOpacity>
        <Image 
            source={images.logo}
            className="w-[145px] h-[31px]"
            resizeMode="contain"
        />
        <TouchableOpacity>
            <Image 
                source={icons.searchIcon}
                className="w-[28] h-[30]"
                resizeMode="contain"
            />
        </TouchableOpacity>
    </View>
  )
}

export default Header