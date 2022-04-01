const Grid = (props) => {

    return (
        <div className="grid grid-2-8">
           {props.children}
        </div> 
    )
}

export default Grid;