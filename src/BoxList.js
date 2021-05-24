import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxList, setBoxList] = useState([]);

    const addBox = (box) => {
        setBoxList(boxes => [...boxes, { ...box, id: uuid() }])
    }

    const removeBox = (key) => {
        setBoxList(boxList.filter(box => box.id !== key))
    }

    return (
        <>
            <NewBoxForm className='BoxList-form' addBox={addBox} />
            {boxList.map(box => <Box width={box.width} height={box.height} bgColor={box.bgColor} removeBox={removeBox} key={box.id} id={box.id} />)}
        </>
    );
};

export default BoxList;