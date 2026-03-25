import { MESSAGE_TYPES } from '../../config/message.config'

const Message = ({ type = 'info', text, className = '', ...modalProps }) => {
    const config = MESSAGE_TYPES[type] || MESSAGE_TYPES.info
    const baseStyles = 'flex items-center gap-3 rounded-lg border p-4'
    const styles = [baseStyles, config.base, className].join(' ')

    const Icon = config.icon
    const {iconColor} = config

    return (
        <div
            role={type === 'error' ? 'alert' : 'status'}
            {...modalProps}
            className="fixed top-[20px] right-0 z-50 mx-auto w-[80%] left-0"
            aria-live={type === 'error' ? 'assertive' : 'polite'}
        >
            <div className={styles}>
                <Icon className={`h-6 w-6 shrink-0 ${iconColor}`} aria-hidden="true" />
                <span>{config.label}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Message
