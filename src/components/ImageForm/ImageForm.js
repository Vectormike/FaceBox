import React from 'react'

const ImageForm = () => {
    return (
        <div className="pa4-l">
            <form className="bg-light-blue mw7 center pa4 br2-ns ba b--black-10">
                <fieldset className="cf bn ma0 pa0">
                    <legend className="pa0 f2 f4-ns mb3 black-80">Face Detection</legend>
                    <div className="cf">
                        <label className="clip" for="ImageForm">ImageForm</label>
                        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Paste Image Link" type="text" name="ImageForm"/>
                        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Detect"/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default ImageForm