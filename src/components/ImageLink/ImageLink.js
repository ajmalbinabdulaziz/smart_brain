import React from 'react';
import './ImageLink.css';


const ImageLink = ( {onInputChange, onButtonSubmit} ) => {

    return(
        <div >
            <p className='f3 b'>This magic brain will detect faces in your picture. Give it a try!</p>
                <div className='center'>
                    <div className='center form pa4 br3 shadow-5'>
                        <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                        <button className='w-30 grow f4 ph3 pv2 link dib white bg-light-purple' 
                        onClick={onButtonSubmit}>Detect</button>
                    </div>
                </div>
        </div>
    )
}

export default ImageLink;