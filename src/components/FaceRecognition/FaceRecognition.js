import React from 'react'

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img 
                    alt="Oops!" 
                    title="Look at that face!" 
                    src={imageUrl}
                    height='auto'
                    width='500px'
                />
            </div>
        </div>
    );
}

export default FaceRecognition