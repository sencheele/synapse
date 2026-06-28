import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import './AppLayout.scss'

const AppLayout = () => {
    return (
        <div className="layout">
            <Sidebar />

            <main className="main">
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
