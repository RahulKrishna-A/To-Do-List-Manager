import "../Component_styles/AddtaskMenu.css"
export default function AddtaskMenu(){

    return(
        <div id={"AddtaskMenu"}>
            {0&&<div id="menu__form_todoadd">
                <div className="menu__form_todoadd_header">
                    <p>New Task</p>
                    <svg id="menu__form_todoadd_X" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                    </svg>
                </div>
                <form>
                    <div>
                        <div id="form_todo_error" >
                            Please fill the following field
                        </div>
                        <label htmlFor="form_todo_title">Title:*</label>
                        <input type="text" id="form_todo_title"/>

                    </div>
                    <div>
                        <label htmlFor="form_todo_datetime">Due Date:</label>
                        <input type="date"  id="form_todo_datetime"/>
                    </div>
                     <input id="form_todo_submit" type="submit"/>
                </form>

            </div>}
        </div>
    )
}