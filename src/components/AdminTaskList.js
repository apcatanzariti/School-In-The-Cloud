
import styled from 'styled-components';



function AdminTaskList (props) {

    const { item, handleDelete, handleEdit } = props;

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        handleDelete(item.id);
    }

    const handleEditClick = (e) => {
        e.stopPropagation();
        handleEdit(item);
    };    

    return(
        <TaskDiv>
            <div><b>{props.item.title}</b></div>
            <div>{props.item.description}</div>

            <div className='button-row'>
                <button onClick={handleDeleteClick}>
                    Remove This Task
                </button>
                <button onClick={handleEditClick}>
                    Edit
                </button>
            </div>

            <br />
            <br />
        </TaskDiv>
    );
};

export default AdminTaskList;



const TaskDiv = styled.div`

    .button-row {
        padding-top: 5px;
    }

    .button-row button:not(:first-child) {
        margin-left: 10px;
    }
`;