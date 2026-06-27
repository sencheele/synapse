import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import loginIllustration from './images/login-illustration.webp'
import registerIllustration from './images/register-illustration.webp'
import { STORAGE_KEYS } from '@/shared/constants/storageKeys'
import './AuthPage.scss'

const AUTH_MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
}

const AuthPage = () => {
    const [authMode, setAuthMode] = useState(AUTH_MODE.LOGIN)
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [])
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate()


    const isLogin = authMode === AUTH_MODE.LOGIN

    const illustration = isLogin
        ? loginIllustration
        : registerIllustration


    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users))
    }, [users])


    const clearErrorMessage = () => {
        setErrorMessage(null)
    }

    const toggleAuthMode = () => {
        setAuthMode(prevMode =>
            prevMode === AUTH_MODE.LOGIN
                ? AUTH_MODE.REGISTER
                : AUTH_MODE.LOGIN
        )

        clearErrorMessage()
    }

    const handleRegister = (authData) => {
        const isUserExisting = users.some(user => user.email === authData.email)

        if (isUserExisting) {
            setErrorMessage('Пользователь с таким email уже существует')
            return
        }

        const newUser = {...authData, id: Date.now()}

        setUsers(prevUsers => [...prevUsers, newUser])

        localStorage.setItem(
            STORAGE_KEYS.CURRENT_USER,
            JSON.stringify(newUser)
        )

        navigate('/app')
    }

    const handleLogin = (authData) => {
        const user = users.find(user => user.email === authData.email)

        if (!user || user.password !== authData.password) {
            setErrorMessage('Неверный логин или пароль')
            return
        }

        localStorage.setItem(
            STORAGE_KEYS.CURRENT_USER,
            JSON.stringify(user)
        )

        navigate('/app')
    }

    return (
        <main className="main">
            <section className="authorization">
                <div className="authorization__wrapper">
                    <div className="authorization__image">
                        <img src={illustration} alt="" />
                    </div>

                    <div className="authorization__content">
                        <div className="authorization__logo">
                            <img src="src/assets/images/globals/logo.svg" alt="Synapse" />
                        </div>

                        <div className="authorization__description">
                            <p>
                                Пространство для прокачки когнитивных навыков через быстрые интерактивные игры. Каждое задание&nbsp;&mdash; это маленький вызов для твоего внимания, памяти и&nbsp;скорости мышления
                            </p>
                        </div>

                        <AuthForm
                            className='authorization__form'
                            isLogin={isLogin}
                            onAuth={isLogin ? handleLogin : handleRegister}
                            onError={setErrorMessage}
                            onFormChange={clearErrorMessage}
                        />

                        <p className='authorization__switch'>
                            {isLogin ? 'Нет профиля?' : 'Есть профиль?'}

                            <button
                                className='authorization__switch-button'
                                type='button'
                                onClick={toggleAuthMode}
                            >
                                {isLogin ? 'Зарегистрироваться' : 'Войти'}
                            </button>
                        </p>

                        {errorMessage &&
                            <div className="authorization__error-message">
                                <svg>
                                    <use href='/public/sprite.svg#attention'></use>
                                </svg>
                                {errorMessage}
                            </div>
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AuthPage
