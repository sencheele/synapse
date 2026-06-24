import './AuthPage.scss'
import AuthForm from './components/AuthForm'
import loginIllustration from './images/login-illustration.webp'

const AuthPage = () => {
    return (
        <main className="main">
            <section className="authorization">
                <div className="authorization__wrapper">
                    <div className="authorization__image">
                        <img src={loginIllustration} alt="" />
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

                        <AuthForm className='authorization__form' />

                        <p className='authorization__switch'>
                            Нет профиля?
                            
                            <button className='authorization__switch-button' type='button'>
                                Зарегистрироваться
                            </button>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AuthPage
