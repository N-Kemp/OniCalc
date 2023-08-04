import React from "react";
import Tool from "./data.js";
import jsonData from "../data.json"

class Tools extends React.Component {
    render() {
        const tools = jsonData["tools"]

        return(
            <form>
                {
                    tools.map((tool) => (
                        <div key={tool["id"]}>
                            <Tool id={tool["id"]} name={tool["name"]} />
                        </div>
                ))}
            </form>
        )
    }
}

export default Tools;