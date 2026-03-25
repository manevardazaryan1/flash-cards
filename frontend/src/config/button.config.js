// 1. The Raw Palette (Design Tokens)
export const BUTTON_COLORS = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200',
    success: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-100',
    danger: 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-100',
    warning: 'bg-amber-400 hover:bg-amber-500 text-amber-950 shadow-amber-100',
    info: 'bg-sky-400 hover:bg-sky-500 text-white',
    dark: 'bg-slate-800 hover:bg-slate-900 text-white',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-600',
}

export const BUTTON_VARIANTS = {
    filled: 'border-transparent',
    outline: 'bg-transparent border-2',
    link: 'bg-transparent hover:underline underline-offset-4 shadow-none px-0 py-0',
    glass: 'backdrop-blur-md bg-white/30 border border-white/20 hover:bg-white/40',
}

export const BUTTON_SIZES = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg font-bold',
    xl: 'px-10 py-5 text-xl font-black uppercase tracking-widest',
}

export const BUTTON_SHAPES = {
    square: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-xl',
    pill: 'rounded-full',
}
