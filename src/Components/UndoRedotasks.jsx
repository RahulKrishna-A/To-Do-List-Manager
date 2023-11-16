export default function UndoRedotasks(props){

    let canUndo = props.Index > 0
    let canRedo = props.Index < props.History.length-1



    return(
        <div id={"UndoRedo_Task"} style={{display:"flex"}}>
            <button  id={"Undo_button"} disabled={!canUndo} className={"options_button"}>Undo</button>

            <button  id={"Redo_button"} disabled={!canRedo} className={"options_button"}>Redo</button>
        </div>
    )
}