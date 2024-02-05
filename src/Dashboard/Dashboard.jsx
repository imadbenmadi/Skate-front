import React from 'react'
import { MdDisabledVisible } from 'react-icons/md'
import { Outlet } from 'react-router'
function Dashboard() {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default Dashboard