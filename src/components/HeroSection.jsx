import useTheme from "../hooks/useTheme"

export default function HeroSection({children, height=100, textColor}) {
    const { mode } = useTheme()
    // const background = mode === 'light' ? `linear-gradient(rgba(122, 122, 122, 0.3), rgb(255, 255, 255, 0.3))` : `linear-gradient(rgba(46, 67, 71, 0.7), rgb(12, 22, 24, 0.7))`

    return (
        <section className={`hero ${mode}`} style={{
            height: `${height}dvh`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            gap: '50px',
            color: textColor ?? (mode === 'light' ? '#0C1618' : '#F1F1F1'),
            // animation: 'fadeIn 1s linear 2s',
            // animationFillMode: 'backwards',
        }}>
            { children }
        </section>
    )
}
