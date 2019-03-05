import React from 'react'

const ImageForm = ({OnInputChange, onButtonSubmit}) => {
    return (
        <div className="pa4">
            <form className="bg-light-blue mw7 pa4 br4 ba b--black-10">
                <fieldset className="cf bn ma0 pa0">
                    <legend className="pa0 f2 f4-ns mb3 black-80">Face Detection</legend>
                    <div className="cf">
                        <label className="clip" htmlFor="ImageForm">ImageForm</label>
                        <input 
                            className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br3" placeholder="Paste Image Link" type="text" name="ImageForm"
                            onChange={OnInputChange}
                        />
                        <input 
                            className="f6 br3 f5-l grow fl pv3 tc bn bg-animate bg-black-70 hover-bg-yellow black pointer w-100 w-25-m w-20-l br3" type="button"
                            onClick={onButtonSubmit}
                            value="Detect"    
                        />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default ImageForm