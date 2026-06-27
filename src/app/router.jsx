import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import AuthPage from '@/pages/AuthPage'
import GamesPage from '@/pages/GamesPage'
import ProfilePage from '@/pages/ProfilePage'
import LeaderboardPage from '@/pages/LeaderboardPage'
import ProtectedRoute from './ProtectedRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/auth' replace />
    },
    {
        path: 'auth',
        element: <AuthPage />,
    },
    {
        path: 'app',
        element: (
            <ProtectedRoute>
                <AppLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Navigate to='games' replace />
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
