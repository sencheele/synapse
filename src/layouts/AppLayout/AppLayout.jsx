import { Outlet, NavLink } from 'react-router-dom'
import './AppLayout.scss'

const AppLayout = () => {
    return (
        <div className="layout">
            <aside className="sidebar">
                <NavLink to='games'>
                    Игры
                </NavLink>

                <NavLink to='profile'>
                    Профиль
                </NavLink>

                <NavLink to='leaderboard'>
                    Рекорды
                </NavLink>
            </aside>

            <main className="main">
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
