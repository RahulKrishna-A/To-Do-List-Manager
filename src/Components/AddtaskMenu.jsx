import "../Component_styles/AddtaskMenu.css";
import {useState} from "react";
import {v4 as uuid} from "uuid";


export default function AddtaskMenu(props) {

    // TitleError -> For displaying error Message
    const [TitleError, setTitleError] = useState(false)

    // Builder pattern for managing optional parameters like duedate
    class Todo {
        constructor(Title) {
            this.Title = Title;
            this.DueDate = "";
            this.Status = "Pending";
            this.id = uuid()
        }

        AddDue(DueDate) {
            this.DueDate = DueDate;
        }
    }

    // For Toggling Error
    function toggleTitleError(val) {
        setTitleError(val)
    }

    // Adding new tasks
    function updateTodo(CurrentTodo) {
        props.setTodos((prev) => {

            props.updateHistory([...prev, CurrentTodo])
            return (
                [...prev, CurrentTodo]
            )
        })


    }


    function onSubmitAddTasks(e) {
        e.preventDefault()
        if (!e.target[0].value) {
            toggleTitleError(true)
        } else {

            toggleTitleError(false)
            props.ToggleMenu(false)
            let Title = e.target[0].value;
            let Duedate = e.target[1].value;
            // New TODOObject
            let CurrentTodo = new Todo(Title)
            if (Duedate) {
                CurrentTodo.AddDue(Duedate)
            }
            updateTodo(CurrentTodo)


        }
    }

    return (
        <div id={"AddtaskMenu"}>
            {/*conditional rendering of Menu*/}
            {props.displayAddtaskMenu && <div id="menu__form_todoadd">
                <div className="menu__form_todoadd_header">
                    <p>New Task</p>
                    {/*toggling menu--------------------------------*/}
                    <svg onClick={() => {
                        props.ToggleMenu(false)
                    }} id="menu__form_todoadd_X" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <path
                            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                    </svg>
                </div>
                <form onSubmit={onSubmitAddTasks}>
                    <div>
                        {/*conditional rendering of error*/}
                        {TitleError && <div id="form_todo_error">Please fill the following field</div>}

                        <label htmlFor="form_todo_title">Title:*</label>
                        <input type="text" id="form_todo_title"/>

                    </div>
                    <div>
                        <label htmlFor="form_todo_datetime">Due Date:</label>
                        <input type="date" id="form_todo_datetime"/>
                    </div>
                    <input id="form_todo_submit" type="submit"/>
                </form>

            </div>}
        </div>
    )
}