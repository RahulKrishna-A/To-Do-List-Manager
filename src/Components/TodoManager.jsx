import {useState, useEffect} from "react";
import Addtasks from "./Addtasks.jsx";
import UndoRedotasks from "./UndoRedotasks.jsx";
import Filtertasks from "./Filtertasks.jsx";
import AddtaskMenu from "./AddtaskMenu.jsx";
import Todosbar from "./Todosbar.jsx";

import "../Component_styles/TodoManager.css"

export default function TodoManager() {

    const [Todos, setTodos] = useState([])
    // history variables
    const [History, setHistory] = useState([JSON.stringify(Todos)])
    const [Index, setIndex] = useState(0)

    const [Filter, setFilter] = useState("All")
    // for controlling the visibility of the menu
    const [displayAddtaskMenu, setdisplayAddtaskMenu] = useState(false)


    console.log("History--------" + History)
    console.log("Index" + Index)
    console.log(Todos)

    // for controlling the visibility of the menu
    function ToggleMenu(val) {
        setdisplayAddtaskMenu(val)
    }

    function updateHistory(val) {
        // having a new variable to have exact length for index
        const newHistory = [...History, JSON.stringify([val])];
        // updating history
        setHistory(newHistory)
        //     updating the index value
        setIndex(newHistory.length - 1)

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




    let TodosList = Todos.map((datas)=>{
        if(Filter==="All"){
            return <Todosbar/>
        }else{
            if(datas.Status===Filter){
                return <Todosbar/>
            }
        }
    })



    return (
        <div style={{backgroundColor:"black"}} id={"TodoManager-container"}>
            <div id={"TodoManager-container_options"}>
                <div id={"TodoManager-container_options_Titles"}>Your Tasks</div>
                <Addtasks ToggleMenu={ToggleMenu}/>
                <UndoRedotasks setTodos={setTodos} Index={Index} setIndex={setIndex} setHistory={setHistory}
                               History={History}/>
                <Filtertasks Filter={Filter} setFilter={setFilter}/>

            </div>
            <AddtaskMenu History={History} updateHistory={updateHistory} Todos={Todos} setTodos={setTodos}
                         ToggleMenu={ToggleMenu}
                         displayAddtaskMenu={displayAddtaskMenu} setIndex={setIndex}/>
            <div id={"TodoManager-container_Todos"} >
            {TodosList}
            </div>
        </div>
    )
}