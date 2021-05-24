import React from 'react';

const Box = ({ width = 200, height = 200, bgColor = 'blue', removeBox, id }) => {
    const styles = {
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: bgColor
    }
    return (
        <div className='BoxList-box'>
            <div style={styles}></div>
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    )
}

export default Box;