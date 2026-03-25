import * as cfg from '../../config/button.config'

const Button = ({
    children,
    color = 'primary',
    variant = 'filled',
    size = 'md',
    shape = 'md',
    className = '',
    ...props
}) => {
    const baseStyles =
        'inline-flex items-center justify-center font-medium duration-200 disabled:opacity-50'

    const styles = [
        baseStyles,
        cfg.BUTTON_COLORS[color],
        cfg.BUTTON_VARIANTS[variant],
        cfg.BUTTON_SIZES[size],
        cfg.BUTTON_SHAPES[shape],
        className,
    ].join(' ')

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    )
}

export default Button
