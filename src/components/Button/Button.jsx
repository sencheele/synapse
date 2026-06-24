import './Button.scss'

const Button = (props) => {
    const {
        className = '',
        modifier,
        type,
        children,
        ...rest
    } = props

    return (
        <button
            className={`button ${modifier ? `button--${modifier}` : ''} ${className}`}
            type={type}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
