/* eslint-disable react/prop-types */

const Input = ({
    label,
    type,
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    error,
    touched,
    className,
    ...rest
}) => {
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                {...rest}
                className={className}
            />
            {error && touched && <p className="error">{error}</p>}
        </>
    );
};

export default Input;
