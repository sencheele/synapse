import Button from '@/components/Button'
import FormField from '@/components/FormField'
import './AuthForm.scss'

const AuthForm = (props) => {
    const {
        className = ''
    } = props

    return (
        <form className={`auth-form ${className}`} action="">
            <FormField
                className='auth-form__filed'
                type='email'
                name='email'
                required={true}
                placeholder='Логин'
                autoComplete='on'
            />

            <FormField
                className='auth-form__filed'
                type='password'
                name='password'
                required={true}
                placeholder='Пароль'
            />

            <Button
                className='auth-form__button'
                type='submit'
            >
                Войти
            </Button>
        </form>
    )
}

export default AuthForm
