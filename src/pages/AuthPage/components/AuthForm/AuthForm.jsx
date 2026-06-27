import Button from '@/components/Button'
import FormField from '@/components/FormField'
import PasswordField from '@/components/PasswordField'
import './AuthForm.scss'

const AuthForm = (props) => {
    const {
        className = '',
        isLogin,
        onAuth,
        onError,
        onFormChange,
    } = props

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target

        const email = form.email.value
        const password = form.password.value

        if (!isLogin) {
            const confirmPassword = form.confirmPassword.value

            if (password !== confirmPassword) {
                onError('Пароли не совпадают')
                return
            }
        }

        const authData = {
            email,
            password,
        }

        onAuth(authData)
    }

    return (
        <form
            className={`auth-form ${className}`}
            onSubmit={handleSubmit}
            onChange={onFormChange}
        >
            <FormField
                className='auth-form__field'
                type='email'
                name='email'
                required={true}
                placeholder='Логин'
                autoComplete='on'
            />

            <PasswordField
                className='auth-form__field'
                name='password'
                placeholder='Пароль'
            />

            {!isLogin &&
                <PasswordField
                    className='auth-form__field'
                    name='confirmPassword'
                    placeholder='Повторите пароль'
                />
            }

            <Button
                className='auth-form__button'
                type='submit'
            >
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
        </form>
    )
}

export default AuthForm
