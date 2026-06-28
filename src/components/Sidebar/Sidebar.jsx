import { NavLink } from 'react-router-dom'
import logo from '@/assets/images/globals/logo.svg'
import './Sidebar.scss'

const Sidebar = () => {
    const links = [
        {
            to: 'games',
            label: 'Игры',
            icon: 'controller',
        },
        {
            to: 'profile',
            label: 'Профиль',
            icon: 'profile',
        },
        {
            to: 'leaderboard',
            label: 'Рекорды',
            icon: 'trophy',
        },
    ]

    return (
        <aside className="sidebar layout__sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="Synapse" />
            </div>

            <nav className="sidebar__nav">
                {links.map(link => (
                    <NavLink
                        className={({ isActive }) => `sidebar__nav-link ${isActive ? 'is-active' : ''}`}
                        to={link.to}
                    >
                        {({ isActive }) => (
                            <>
                                <svg>
                                    <use href={`/sprite.svg#${
                                        isActive
                                            ? `${link.icon}-fill`
                                            : `${link.icon}-outline`
                                    }`}></use>
                                </svg>

                                {link.label}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
