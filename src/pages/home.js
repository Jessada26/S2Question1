import Left from "../components/Left";
import React, { useState, useEffect } from 'react';
import Center from "../components/Center";
import Right from "../components/Right";
import { FXHome } from "../style/styleHome/index.style";
import { typeRelated, TEXTACTOIN } from "../utils/constants"
import checkPrime from "../utils/checkPrime"
import checkFibanacci from "../utils/checkFibanacci"

const Home =()=> {
   const [integer, setInteger] = useState(null)
   const [textValue, setTextValue] = useState(typeRelated[0].name)
   const [result, setResult] = useState('Please enter an integer')

   useEffect(()=>{
     if (integer!==null) 
        {
         String(textValue)===String(TEXTACTOIN)?setResult(checkPrime(Number(integer))):setResult(checkFibanacci(Number(integer)))
        }
   },[integer, textValue]);

   const onChange=(value)=>{
      if (value!==null)
       setInteger(value)
   }
   const onSelect=(value)=>setTextValue(value);

    return<FXHome>
             <Left integer={integer} setOnChange={onChange} placeholder={"integer"} />
                <Center onSelect={onSelect} textValue={textValue} typeRelated={typeRelated} />
             <Right result={String(result)} />
          </FXHome>
}

export default Home;