import { useState } from 'react'
import './PasswordField.scss'

const PasswordField = (props) => {
    const {
        className = '',
        name,
        placeholder,
        ...rest
    } = props

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className={`password-field ${className}`}>
            <input
                type={showPassword ? 'text' : 'password'}
                name={name}
                required
                placeholder={placeholder}
                {...rest}
            />

            <button
                className='password-field__toggle'
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
            >
                <svg>
                    <use href={showPassword
                        ? '/sprite.svg#hide-password'
                        : '/public/sprite.svg#show-password'
                    } />
                </svg>
            </button>
        </div>
    )
}

export default PasswordField
