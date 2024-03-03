import './SectionTitle.css'

export default function SectionTitle({iconName, title}) {
  return (
    <div className='SectionTitle'>
        <div className="icon">
            <img src={`assets/icons/${iconName}_icon_light_mode.png`} alt="icon" />
        </div>

        <p>{ title }</p>
    </div>
  )
}
