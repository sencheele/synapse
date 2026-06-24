import { useState } from 'react'
import './AuthPage.scss'
import AuthForm from './components/AuthForm'
import loginIllustration from './images/login-illustration.webp'
import registerIllustration from './images/register-illustration.webp'

const AUTH_MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
}

const AuthPage = () => {
    const [authMode, setAuthMode] = useState(AUTH_MODE.LOGIN)

    const isLogin = authMode === AUTH_MODE.LOGIN

    const illustration = isLogin
        ? loginIllustration
        : registerIllustration

    const toggleAuthMode = () => {
        setAuthMode(prevMode =>
            prevMode === AUTH_MODE.LOGIN
                ? AUTH_MODE.REGISTER
                : AUTH_MODE.LOGIN
        )
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

                        <AuthForm className='authorization__form' isLogin={isLogin} />

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
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AuthPage
