import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import AuthPage from '@/pages/AuthPage'
import GamesPage from '@/pages/GamesPage'
import ProfilePage from '@/pages/ProfilePage'
import LeaderboardPage from '@/pages/LeaderboardPage'
import HomeRedirect from './HomeRedirect'
import ProtectedRoute from './ProtectedRoute'
import GuestRoute from './GuestRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeRedirect />
    },
    {
        path: 'auth',
        element: (
            <GuestRoute>
                <AuthPage />
            </GuestRoute>
        ),
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
