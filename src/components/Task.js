function Task (props) {
    return(
        <>
        <div><b>{props.item.title}</b></div>
        <div>{props.item.description}</div>
        <button onClick={e => {
            e.stopPropagation();
            props.handleDelete(props.item.id)
            }}>Remove This Task
        </button><br /><br />
        </>
    );
};

export default Task;