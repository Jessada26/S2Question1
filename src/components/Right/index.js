import { FXRight } from "../../style/styleRight/index.style";
import React from 'react';

const Right =(props)=> {
    const { result } = props;

    return<FXRight>
       <label>{result}</label>    
    </FXRight>
}

export default Right;