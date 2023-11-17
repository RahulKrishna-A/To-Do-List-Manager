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

    // -------For toggling checkboxes
    function ToggleCheckbox(e) {
        // console.log(e.target.dataset.id)
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
            {/*<img className={"Todos-bar_deleteIcon"} src={deleteIcon} alt={"Delete"}/>*/}
            <div title={"delete"} className={"Todos-bar_delete"}>
                <img src={deleteIcon} alt={"delete"} data-id={props.uniqueID} onClick={onClickDeleteTodos}
                     className={"Todos-bar_deleteIcon"}/>
                {/*<svg  onClick={onClickDeleteTodos}  className={"Todos-bar_deleteIcon"} xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"/></svg>*/}

            </div>

        </div>

    )
}
