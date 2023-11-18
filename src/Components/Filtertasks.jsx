export default function Filtertasks(props) {

    // Setting Filter Value
    function onChangeFilter(e) {
        props.setFilter(e.target.value)
    }


    return (
        <select id={"Filtertasks"} onChange={onChangeFilter}>
            <option value={"All"}>All</option>
            <option value={"Completed"}>Completed</option>
            <option value={"Pending"}>Pending</option>
        </select>
    )
}