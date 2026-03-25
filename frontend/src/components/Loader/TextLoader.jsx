import * as cnf from '../../config/loader.config'

const TextLoader = ({
    text = 'Loading...',
    variant = 'pulse',
    size = 'md',
    color = 'primary',
    className = '',
    ...props
}) => {
    const styles = [
        'flex items-center font-medium mx-auto w-fit p-4 ',
        cnf.LOADER_VARIANTS[variant],
        cnf.LOADER_SIZES[size],
        cnf.LOADER_COLORS[color],
        className,
    ].join(' ')

    return (
        <div className={styles} {...props}>
            {text}
            <span className="sr-only">Loading content...</span>
        </div>
    )
}

export default TextLoader
