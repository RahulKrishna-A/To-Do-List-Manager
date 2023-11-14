import {useState,useEffect} from "react";
import Addtasks from "./Addtasks.jsx";
import UndoRedotasks from "./UndoRedotasks.jsx";
import Filtertasks from "./Filtertasks.jsx";

import "../Component_styles/TodoManager.css"
export default function TodoManager(){


    return(
        <div id={"TodoManager-container"}>
            <div id={"TodoManager-container_options"}>
                <Addtasks/>
                <UndoRedotasks/>
                <Filtertasks/>
            </div>

        </div>
    )
}