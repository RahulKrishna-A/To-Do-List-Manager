export default function Addtasks(props){
    // toggling menu
    function toggleMenu(){
        props.ToggleMenu(true)
    }


    return(
        <div id={"add_Task"}>
            <button onClick={toggleMenu} id={"addtask_button"} className={"options_button"}>Add Tasks</button>
        </div>
    )
}