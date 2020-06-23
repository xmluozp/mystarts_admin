
import React from 'react';

const Dashboard = ({user,...props}) => {

    return <div>

    dashboard with auth: 
    {
        (user && user.role) === 1 ? <div> Dashboard page, role1</div> :
        (user && user.role) === 2 ? <div> Dashboard page, role2</div> :
        null
    }

    </div>


}

export default Dashboard