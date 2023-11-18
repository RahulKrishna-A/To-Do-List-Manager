import {useState, useEffect} from "react";

import Addtasks from "./Addtasks.jsx";
import UndoRedotasks from "./UndoRedotasks.jsx";
import Filtertasks from "./Filtertasks.jsx";
import AddtaskMenu from "./AddtaskMenu.jsx";
import Todosbar from "./Todosbar.jsx";

import "../Component_styles/TodoManager.css"

export default function TodoManager() {

    // Todos ---> Storing Todos.
    // Local storage (getItem) is called initially to avoid false setting of Local Storage as [].
    const [Todos, setTodos] = useState([]);
        // useState(JSON.parse(localStorage.getItem("ToDoListManager")));

    // History ---> Storing States (History).
    const [History, setHistory] = useState([JSON.stringify(Todos)])

    // Index ---> For accessing History.
    const [Index, setIndex] = useState(0)

    // Filter ---> Storing value for Filtering.
    const [Filter, setFilter] = useState("All")

    // displayAddtaskMenu ---> Controlling the visibility of the addTaskMenu.
    const [displayAddtaskMenu, setdisplayAddtaskMenu] = useState(false)


    // For Toggling the visibility of  Menu
    function ToggleMenu(val) {
        setdisplayAddtaskMenu(val)
    }

    function updateHistory(val) {

        const newHistory = [...History, JSON.stringify(val)];
        setHistory(newHistory)
        //updating the index value
        setIndex(newHistory.length - 1)

    }


    useEffect(() => {
        window.localStorage.setItem("ToDoListManager", JSON.stringify(Todos))

    }, [Todos]);


    // Mapping of Todos to TodosList Comps
    let TodosList = Todos.map((datas) => {
        if (Filter === "All") {
            return <Todosbar key={datas.id} updateHistory={updateHistory} setTodos={setTodos} uniqueID={datas.id}
                             DueDate={datas.DueDate} Title={datas.Title} Status={datas.Status}/>
        } else {
            if (datas.Status === Filter) {
                return <Todosbar key={datas.id} updateHistory={updateHistory} setTodos={setTodos} uniqueID={datas.id}
                                 DueDate={datas.DueDate} Title={datas.Title} Status={datas.Status}/>
            }
        }
    })


    return (
        <div id={"TodoManager-container"}>
            <div id={"TodoManager-container_options"}>
                <div id={"TodoManager-container_options_Titles"}>Your <a style={{color: "#f14779"}}>Tasks</a></div>
                <Addtasks
                    ToggleMenu={ToggleMenu}
                />
                <UndoRedotasks
                    setTodos={setTodos}
                    Index={Index}
                    setIndex={setIndex}
                    setHistory={setHistory}
                    History={History}
                />
                <Filtertasks
                    Filter={Filter}
                    setFilter={setFilter}
                />

            </div>
            <AddtaskMenu
                History={History}
                updateHistory={updateHistory}
                Todos={Todos} setTodos={setTodos}
                ToggleMenu={ToggleMenu}
                displayAddtaskMenu={displayAddtaskMenu} setIndex={setIndex}
            />

            <div id={"TodoManager-container_Todos"}>
                {TodosList}
            </div>

        </div>
    )
}