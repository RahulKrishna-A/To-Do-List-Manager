import {useState,useEffect} from "react";
import Addtasks from "./Addtasks.jsx";
import UndoRedotasks from "./UndoRedotasks.jsx";
import Filtertasks from "./Filtertasks.jsx";
import AddtaskMenu from "./AddtaskMenu.jsx";

import "../Component_styles/TodoManager.css"
export default function TodoManager(){

    const [Todos,setTodos]=useState([])
    const [History,setHistory] = useState(Todos)
    const [Filter,setFilter]=useState("All")
    // for controlling the visibility of the menu
    const [displayAddtaskMenu,setdisplayAddtaskMenu] = useState(false)
    console.log(Todos)

    // for controlling the visibility of the menu
    function ToggleMenu(val){
        setdisplayAddtaskMenu(val)
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





    return(
        <div id={"TodoManager-container"}>
            <div id={"TodoManager-container_options"}>
                <Addtasks ToggleMenu={ToggleMenu} />
                <UndoRedotasks/>
                <Filtertasks/>

            </div>
            <AddtaskMenu Todos = {Todos} setTodos ={setTodos} ToggleMenu={ToggleMenu} displayAddtaskMenu={displayAddtaskMenu}/>

        </div>
    )
}