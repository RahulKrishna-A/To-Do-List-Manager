export default function UndoRedotasks(props) {

    // Memento Pattern for UNDO/REDO
    // --> TodoList - originator (Owner of state)
    // --> NewHistory - Memento ( snapshot of the state at a particular point of time )
    // --> History array - caretaker ( stores the Mememtos )

    let canUndo = props.Index > 0
    let canRedo = props.Index < props.History.length - 1

    function onClickRedo() {
        if (canRedo) {
            props.setIndex((prev) => {
                return prev + 1
            })
            // Increasing Index Variable
            props.setTodos(JSON.parse(props.History[props.Index + 1]))
        }
    }

    function onClickUndo() {
        if (canUndo) {
            props.setIndex((prev) => {
                return prev - 1
            })
            // Decreasing Index Variable
            props.setTodos(JSON.parse(props.History[props.Index - 1]))
        }
    }


    return (
        <div id={"UndoRedo_Task"} style={{display: "flex"}}>
            <button onClick={onClickUndo} id={"Undo_button"} disabled={!canUndo} className={"options_button"}>Undo
            </button>

            <button onClick={onClickRedo} id={"Redo_button"} disabled={!canRedo} className={"options_button"}>Redo
            </button>
        </div>
    )
}