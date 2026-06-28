import { Navigate } from 'react-router-dom'
import { STORAGE_KEYS } from '@/shared/constants/storageKeys'

const HomeRedirect = () => {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER))

    return (
        <Navigate
            to={user ? 'app' : 'auth'}
            replace
        />
    )
}

export default HomeRedirect
