import { FXLeft } from "../../style/styleLeft/index.style";
import { InputNumber } from 'antd';
import React from 'react';

const Left =(props)=> {
   const { placeholder, setOnChange, integer } = props;

    return<FXLeft>
         <InputNumber min={0} 
         defaultValue={integer}
         precision={0}
         step={1}
         placeholder={placeholder}
          onChange={setOnChange} />
        </FXLeft>
};

export default Left;