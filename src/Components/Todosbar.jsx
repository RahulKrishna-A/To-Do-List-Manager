import deleteIcon from "../assets/DeleteIcon.png"
import "../Component_styles/Todosbar.css"

export default function Todosbar(props) {

    function onClickDeleteTodos(e) {

        props.setTodos((prev) => {

            let ChangedTodos = prev.filter((datas) => {
                return datas.id !== e.target.dataset.id

            })
            props.updateHistory(ChangedTodos)
            return ChangedTodos
        })
    }

    //Function For Toggling Checkboxes
    function ToggleCheckbox(e) {

        props.setTodos((prev) => {
            let ChangedTodos = prev.map((data) => {

                if (data.id === e.target.dataset.id) {

                    let ChangedStatus = data.Status === 'Pending' ? 'Completed' : 'Pending';
                    return {...data, Status: ChangedStatus}

                } else {
                    return {...data}
                }

            })
            props.updateHistory([...ChangedTodos])
            return [...ChangedTodos]
        })
    }

    return (

        <div className={"todos-bar"}>

            <label className="todos-bar_container">
                <input data-id={props.uniqueID} onChange={ToggleCheckbox} type="checkbox"
                       checked={props.Status === "Completed"}/>
                <div className="checkmark"></div>
            </label>


            <div className={"todos-bar_desc"}>
                <p>{props.Title}</p>
            </div>

            <div className={`todos-bar_status ${props.Status}`}>
                <p>{props.Status}</p>
            </div>

            <div className={"todos-bar_due"}>
                <p>{props.DueDate ? `${props.DueDate}` : `No Due`}</p>
            </div>

            <div title={"delete"} className={"Todos-bar_delete"}>
                <img src={deleteIcon} alt={"delete"} data-id={props.uniqueID} onClick={onClickDeleteTodos}
                     className={"Todos-bar_deleteIcon"}/>

            </div>

        </div>

    )
}
