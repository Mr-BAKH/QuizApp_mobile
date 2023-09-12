import { View, Text,Image, TouchableOpacity } from 'react-native'
import { useRoute } from "@react-navigation/native"
import Title from '../components/title'


const Result= ({navigation})=> {
  const route = useRoute()
  return (
    <View className='pt-[40px] flex-1 bg-white'>
        <View>
          <Title title={'Result'}/>
        </View>
      {route.params && route.params.value !==0 ?
      <View className='flex-1 mb-[40px] justify-between items-center' >
        {route.params.value !== 10?
          <View className='w-full flex-1 justify-center items-center'>
            <Text className='text-center py-[15px] w-full bg-cyan-800 font-bold text-white  text-[30px]'>{route.params.value*10}%</Text>
              <Image
                className='w-full h-[500px]'
                resizeMode='contain'
                source={require('../assets/image/Analytics.gif')}
              />
            </View>
            :
            <View className='w-full flex-1 justify-center items-center'>
              <Text className='text-center py-[15px] font-bold w-full text-white bg-green-800  text-[30px]'>{route.params.value*10}%</Text>
              <Image
                className='w-full h-[500px]'
                resizeMode='contain'
                source={require('../assets/image/winner.gif')}
              />
            </View>
          }
        <TouchableOpacity
          className='w-[90%]  bg-cyan-800 py-[15px] rounded-full items-center'
          onPress={()=> navigation.navigate('Home')}
        >
          <Text
            className='text-[20px] text-white'
          >Home</Text>
        </TouchableOpacity>
      </View>
      :
      <View
        className='flex-1 mb-[40px] justify-center items-center'
      >
      <Text className='text-center bg-gray-800 w-full py-[15px] font-bold text-white  text-[30px]'>0%</Text>
        <Image
          className='w-full h-[500px]'
          resizeMode='contain'
          source={require('../assets/image/faild.gif')}
        />
      <TouchableOpacity
        className='w-[90%] bg-cyan-800 py-[15px] rounded-full items-center'
        onPress={()=> navigation.navigate('Home')}
      >
        <Text
          className='text-[20px] text-white'
        >Home</Text>
      </TouchableOpacity>
      </View>
      }
    </View>
  )
}

export default Result