import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react';
import { Getquiestions } from '../api/getQuestion';



const Quiz= ({navigation})=> {
  
  const [question, setQuestion]=useState()
  const [qnumber, setQnumber]= useState(1)
  const [ans,setAns] = useState()
  const [score,setScore] = useState(0)
  
  const arangeAns= (currect,incorrect_answers)=>{
    const incorrect_answers1 = incorrect_answers;
    let pakage = [
      {text:'',val:false},
      {text:'',val:false},
      {text:'',val:false},
      {text:'',val:false},
    ]
    pakage[Math.floor(Math.random()*(4))] = {text: currect, val:true}
    pakage.map(item=>{
      if(item.text == ''){
        item.text = incorrect_answers1.pop()
      }
    })
    return pakage;
  }
  
  useEffect(()=>{
    new Promise((res,rej)=>{
      const Rdata = Getquiestions()
      if(!Rdata) rej('loading data....')
      res(Rdata)
    }).then(
      (val) => {
          setQuestion(val.results);
          new Promise((res,rej)=>{
          const resutl_0 = val.results[0]
          const asnswer = arangeAns(resutl_0.correct_answer,resutl_0.incorrect_answers)
          if(asnswer) res(asnswer) 
          rej('loading...')
        }).then(
          val => setAns(val),
          err => console.log('Error',err)
        )
      },
      (err) => console.log('Error',err))
    },[])


useEffect(()=>{
   new Promise((res,rej)=>{
    const answer = arangeAns(question[qnumber-1].correct_answer,question[qnumber-1].incorrect_answers)
    if(!answer) rej(undefined);
    res(answer) 
   }).then(
    val => setAns(val),
    err => console.log('Error in creating answer!',err)
   )
  },[qnumber])
  

  const handleAnswear = (item)=>{
    const val = item.val
    if(qnumber<10) {
      setQnumber(last => last+1)
      if(val) setScore(last => last+1)
    }
    else{
      if(val){
        const i = score+1
        navigation.navigate('Result',{value:i}); 
      }else{
        navigation.navigate('Result',{value:score}); 
      }
      setQnumber(1)
    }
  }

  const handleSkip =()=>{
    if(qnumber<10) setQnumber(last => last+1)
    else{setQnumber(1),navigation.navigate('Result',{value:score})}
  }
  return (
    <View 
    
    className='flex-1 bg-white py-[40px] px-[10px]'
    >
      {ans && question ?
      <View className="flex-1">
        <View className='my-[10px]'>
          <Text
            className="text-[22px]  text-center text-emerald-800 font-semibold"
          >{qnumber}/10</Text>
          <Text
            className="text-[20px] mt-[40px] text-center px-2 font-semibold"
          >{question[qnumber-1].question}</Text>
        </View>
        <View 
          className='my-[10px] mt-[40px] flex-1 px-[10px]'
        >
         {ans.map((item,index)=>{
          return(
            <TouchableOpacity
             key={`${item.text}${item.val}${index}`}
             onPress={() => handleAnswear(item)}
            className="py-[10px] px-[5px] my-[5px] bg-emerald-800 rounded-[5px] "
          >
            <Text
              className='text-[18px] text-center text-white'
            >{item.text}</Text>
          </TouchableOpacity>
          )
         })}
        </View>          
          <TouchableOpacity
            className='justify-center py-[10px] w-full items-center'
            onPress={handleSkip}
          >
            <Text
              className='font-semibold text-gray-800'
            >skip</Text>
          </TouchableOpacity>
        </View>
        :
        <Image
          className='w-full m-auto h-[500px]'
          resizeMode='contain'
          source={require('../assets/image/Loading.gif')}
        />
        }
    </View>
  )
}



export default Quiz;