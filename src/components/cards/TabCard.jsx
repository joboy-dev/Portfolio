import './TabCard.css'

import useTheme from "../../hooks/useTheme"

export default function TabCard({ isEvenTab,  children }) {
    const { mode } = useTheme()
    return (
        <div className={`tabcard ${mode}`} style={{
            backgroundColor: isEvenTab ?  `var(--secondary-color)` : `var(--primary-color)`,
            color: isEvenTab ?  `var(--primary-color)` : `var(--secondary-color)`
        }}>
            { children }
        </div>
    )
}
