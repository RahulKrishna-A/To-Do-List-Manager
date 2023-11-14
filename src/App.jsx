
import "./App.css";
import {v4 as uuid} from "uuid";
import Nav from "./Components/Nav.jsx";
import TodoManager from "./Components/TodoManager.jsx";

export default function App(){


    return(
        <div id={"main_container"}>
            <Nav/>
            <TodoManager/>


        </div>


    )
}

