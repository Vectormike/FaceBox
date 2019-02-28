import React from 'react'
import './FaceRecognition.css'


const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="center pa4 ma">
            <div className="absolute mt2">
                <img 
                    id='input-image'
                    alt="Oops!" 
                    title="Look at that face!" 
                    src={imageUrl}
                    height='auto'
                    width='500px'
                />
                <div 
                    className='bounding-box' style={{
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.bottomRow,
                    left: box.leftCol
                }}>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition