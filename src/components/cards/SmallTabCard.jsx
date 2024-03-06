import './SmallTabCard.css'
import useTheme from '../../hooks/useTheme'

export default function SmallTabCard({ children, size, isOdd}) {
  const { mode } = useTheme()

  return (
    <div className={`smallcard ${mode}`} style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundColor: !isOdd ? 'var(--primary-color)' : 'var(--secondary-color)',
        color: !isOdd ? 'var(--secondary-color)' : 'var(--primary-color)',
    }}>
        { children }
    </div>
  )
}
