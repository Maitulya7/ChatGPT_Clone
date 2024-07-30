import { Outlet } from 'react-router-dom'
import './dashboardLayout.css'

const DashboardLayout = () => {
  return (
    <div className='dashboardLayout'>
        <div className="menu">
            Menu
        </div>
        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout