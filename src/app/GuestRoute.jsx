import { Navigate } from 'react-router-dom'
import { STORAGE_KEYS } from '@/shared/constants/storageKeys'

const GuestRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER))

    if (user) {
        return <Navigate to="app" replace />
    }

    return children
}

export default GuestRoute
