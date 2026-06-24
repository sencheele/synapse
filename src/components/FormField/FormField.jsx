import './FormField.scss'

const FormField = (props) => {
    const {
        className = '',
        type = 'text',
        name,
        required = false,
        placeholder,
        ...rest
    } = props

    return (
        <label className={`form-field ${className}`}>
            <input
                type={type}
                name={name}
                required={required}
                placeholder={placeholder}
                {...rest}
            />
        </label>
    )
}

export default FormField
