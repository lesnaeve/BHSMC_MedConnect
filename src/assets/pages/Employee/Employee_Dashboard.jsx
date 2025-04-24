import React, {useEffect} from 'react'
import './Employee_layout.css'
import Employee_Sidebar from '../components/Employee/Dashboard/EmployeeDashboard_Sidebar/EmployeeDashboard_Sidebar'
import EmployeeDashboard_Content from '../components/Employee/Dashboard/EmployeeDashboard_Content/EmployeeDashboard_Content'

const Employee_Dashboard = () => {
  useEffect(() => {
    document.title = "MedConnect | Employee - Dashboard"
  })

  return (
    <div className='employee-body'>
      <div className='employee-display'>
        <Employee_Sidebar />
        <div className='employee-main-content'>
          <EmployeeDashboard_Content />
        </div>
      </div>
      
    </div>
  )
}

export default Employee_Dashboard
