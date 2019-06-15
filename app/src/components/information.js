import React from "react"
import { graphql } from "gatsby";

require("./information.css");

const Information = ({Visible, ID, OnClose}) => {

    return <div aria-hidden={Visible} className="sideBar" onClick={OnClose}>
        <div aria-hidden={Visible}>
            <h2>Ingredients</h2>

            <ul>
                <li>Stuff</li>
            </ul>

            <hr />

            <h3>Created By: </h3>

            <p>lorem ipsum</p>

            <p>{ID}</p>
        </div>
    </div>
}
export default Information
