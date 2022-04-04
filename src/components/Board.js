import React from 'react'
import './style/Squere.css'
const Squere = (props) => {
    return (
        <div className='board' >
            {props.squerePart.map((box, index) => {
                if (box === '') {
                     return <div
                    key={index}
                    onClick={() =>props.clickHandler(index)}
                         className='squereBox'>{box}</div>
                    
                } else {
                     return <div
                    key={index}
                    className='squereBox clicked'>{ box}</div>
                }
               
            })}
        </div>
    );
};

export default Squere;