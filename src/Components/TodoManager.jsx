import {useState, useEffect} from "react";
import Addtasks from "./Addtasks.jsx";
import UndoRedotasks from "./UndoRedotasks.jsx";
import Filtertasks from "./Filtertasks.jsx";
import AddtaskMenu from "./AddtaskMenu.jsx";

import "../Component_styles/TodoManager.css"

export default function TodoManager() {

    const [Todos, setTodos] = useState([])
    // history variables
    const [History, setHistory] = useState([JSON.stringify(Todos)])
    const [Index, setIndex] = useState(0)

    const [Filter, setFilter] = useState("All")
    // for controlling the visibility of the menu
    const [displayAddtaskMenu, setdisplayAddtaskMenu] = useState(false)


    // console.log(History)
    // console.log(Index)

    // for controlling the visibility of the menu
    function ToggleMenu(val) {
        setdisplayAddtaskMenu(val)
    }

    function updateHistory(val) {
        // having a new variable to have exact length for index
        const newHistory = [...History, JSON.stringify(val)];
        // updating history
        setHistory(newHistory)
        //     updating the index value
        setIndex(newHistory.length)

    }

    // useEffect for storing and getting from local storage
    //
    // useEffect(()=>{
    //     if(localStorage.getItem("ToDoListManager")){
    //         setTodos(JSON.parse(localStorage.getItem("ToDoListManager")))
    //     }
    //
    // },[])
    //
    // useEffect(() => {
    //     localStorage.setItem("ToDoListManager",JSON.stringify(Todos))
    // }, []);
    //


    return (
        <div id={"TodoManager-container"}>
            <div id={"TodoManager-container_options"}>
                <Addtasks ToggleMenu={ToggleMenu}/>
                <UndoRedotasks Index={Index} setIndex={setIndex} setHistory={setHistory} History={History}/>
                <Filtertasks/>

            </div>
            <AddtaskMenu History={History} updateHistory={updateHistory} Todos={Todos} setTodos={setTodos}
                         ToggleMenu={ToggleMenu}
                         displayAddtaskMenu={displayAddtaskMenu} setIndex={setIndex}/>

        </div>
    )
}