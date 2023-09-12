import axios from "axios"

export const Getquiestions = async()=>{
   
    const option={
        method:'GET',
        url:'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple'
        // url:'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
    }
    try{
        const res = await axios.request(option);
        const data = await res.data
        if(data) return data
    }catch(err){
        console.log("Api Err",err)
    }
}