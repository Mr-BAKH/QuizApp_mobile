import { View, Text } from 'react-native'
import React from 'react'

const Title= ({title})=> {
  return (
    <View
      className='py-[10px] justify-center items-center'
    >
      <Text
        className='text-[24px] text-gray-800 font-semibold'
      >{title}</Text>
    </View>
  )
}

export default Title