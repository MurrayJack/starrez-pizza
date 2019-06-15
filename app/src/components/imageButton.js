import React from "react"

require("./imageButton.css");

const ImageButton = ({ URL, OnClick }) => {
    return (<button type="button" class="ImageButton" onClick={OnClick}>
        <img alt="pizza" src={URL} />
    </button>)
}

export default ImageButton