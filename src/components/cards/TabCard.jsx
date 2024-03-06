import './TabCard.css'

import useTheme from "../../hooks/useTheme"

export default function TabCard({ isOddTab,  children }) {
    const { mode } = useTheme()
    return (
        <div className={`tabcard ${mode}`} style={{
            backgroundColor: isOddTab ?  `var(--secondary-color)` : `var(--primary-color)`,
            color: isOddTab ?  `var(--primary-color)` : `var(--secondary-color)`
        }}>
            { children }
        </div>
    )
}
