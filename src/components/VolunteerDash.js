
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchTasks } from '../actions';

import TaskList from './TaskList';

// const dummyTasks = [
//     { title: 'Buy food for the party', description: "The party needs chips and soda. You can't have a party without snacks!", creator: 'Me', id: '2349' },
//     { title: 'Update student info', description: "A student has had all of their info stolen. Go track them down and figure out how to get them back in the system. We don't even know their name or anything, so good luck with that.", creator: 'Anthony', id: '6012' },
//     { title: 'Help out student with math homework', description: "A student needs help with calculus! Do you know calculus?? Does anybody know caluclus????", creator: 'Pat', id: '1425' },
//     { title: 'Fry an egg', description: 'Fry an egg', creator: 'Jon', id: '8040' },
// ];



function VolunteerDash (props) {

    const { tasks, fetchTasks } = props;

    useEffect(() => {
        fetchTasks && fetchTasks();
    }, [ fetchTasks ]);

    return(
        <StyledVolunteerDashDiv>
            <h1>Volunteer Dashboard</h1>
            <h2>Tasks</h2>
            <TaskList tasks={tasks} />
        </StyledVolunteerDashDiv>
    );
};

const mapStateToProps = ((state) => {
    return {
        tasks: state.tasks
    };
});

export default connect(mapStateToProps, {fetchTasks})(VolunteerDash);



const StyledVolunteerDashDiv = styled.div`
    h1 {
        color: #5d5d5d
    }
`;