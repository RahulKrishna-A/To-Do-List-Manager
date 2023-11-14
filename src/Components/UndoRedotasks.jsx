export default function UndoRedotasks(){
    return(
        <div id={"UndoRedo_Task"} style={{display:"flex"}}>
            <button id={"Undo_button"} className={"options_button"}>Undo</button>

            <button id={"Redo_button"} className={"options_button"}>Redo</button>
        </div>
    )
}