import { FXCenter } from "../../style/styleCenter/index.style";
import { Select } from 'antd';
import React from 'react';

const Center =(props)=>{
    const { textValue, typeRelated, onSelect } = props;
    const { Option } = Select;

    return<FXCenter>
              <Select onChange={onSelect} defaultValue={textValue} style={{ width: 120 }} allowClear>
                {typeRelated.map((item, index)=> <Option key={index} value={item.name}>{item.name}</Option>)}
              </Select>
          </FXCenter>
}

export default Center;