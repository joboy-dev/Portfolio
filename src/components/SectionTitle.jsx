import './SectionTitle.css'
import Icon from './Icon'

import useTheme from '../hooks/useTheme'

export default function SectionTitle({faIcon, iconSize=50, title}) {
  const { mode } = useTheme()

  return (
    <div className={`SectionTitle ${mode}`}>
        <div className="icon">
            <Icon icon={faIcon} size={iconSize} />
        </div>

        <p>{ title }</p>
    </div>
  )
}
