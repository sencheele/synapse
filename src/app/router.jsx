import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import AuthPage from '../pages/AuthPage'
import GamesPage from '../pages/GamesPage'
import ProfilePage from '../pages/ProfilePage'
import LeaderboardPage from '../pages/LeaderboardPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthPage />,
    },
    {
        path: 'app',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <GamesPage />
            },
            {
                path: 'games',
                element: <GamesPage />
            },
            {
                path: 'profile',
                element: <ProfilePage />
            },
            {
                path: 'leaderboard',
                element: <LeaderboardPage />
            },
        ]
    },
])
