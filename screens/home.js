
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Title from '../components/title'


const Home =({navigation}) => {
  return (
    <View className='flex-1  justify-between my-[40px] mx-[10px]'>
      <Title title={'Quiz Application'}/>
        <Image
          className='w-full h-[500px]'
          resizeMode='contain'
          source={require('../assets/image/img3.png')}
        />
      <TouchableOpacity
        className='w-full bg-amber-500 py-[15px] rounded-full items-center'
        onPress={()=> navigation.navigate('Quiz')}
      >
        <Text
          className='text-[20px] text-white'
        >start</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Home;