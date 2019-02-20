import React from 'react'

const FaceRecognition = ({imageUrl}) => {
    return (
        <div>
            <img alt="P" title={{imageUrl}} src={`https://samples.clarifai.com/face-det.jpg`}/>
        </div>
    );
}

export default FaceRecognition