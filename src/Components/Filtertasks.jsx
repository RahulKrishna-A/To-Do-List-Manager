export default function Filtertasks(){
    return(
        <select id={"Filtertasks"} onChange={()=>{
            console.log("hi")
        }}>
            <option  value={"All"}>All</option>
            <option value={"Completed"}>Completed</option>
            <option value={"Pending"}>Pending</option>
        </select>
    )
}