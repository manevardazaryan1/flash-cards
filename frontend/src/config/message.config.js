import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    XCircleIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/outline'

export const MESSAGE_TYPES = {
    success: {
        base: 'bg-emerald-50 border-emerald-200 text-emerald-800',
        icon: CheckCircleIcon,
        iconColor: 'text-emerald-500',
        label: 'Success',
    },
    error: {
        base: 'bg-rose-50 border-rose-200 text-rose-800',
        icon: XCircleIcon,
        iconColor: 'text-rose-500',
        label: 'Error',
    },
    warning: {
        base: 'bg-amber-50 border-amber-200 text-amber-800',
        icon: ExclamationTriangleIcon,
        iconColor: 'text-amber-500',
        label: 'Warning',
    },
    info: {
        base: 'bg-sky-50 border-sky-200 text-sky-800',
        icon: InformationCircleIcon,
        iconColor: 'text-sky-500',
        label: 'Info',
    },
}
