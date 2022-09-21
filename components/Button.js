import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
    }} onPress={handlePress}>
    
      <Image 
        source={imgUrl}
        resizeMode="contain"
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  )
}

//upto 56min

export const RectangleButton = ({minWidth, fontSize, handlePress, ...props}) => {
    return (
      <TouchableOpacity style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
    }} onPress={handlePress}>
    <Text style={{
      fontFamily: FONTS.regular,
      fontSize: fontSize,
      color: COLORS.white,
      textAlign: 'center'
    }}>
      Place a bid
    </Text>
    </TouchableOpacity>
    )
  }