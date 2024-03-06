import TabCard from '../../components/cards/TabCard'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <div className='Experience'>
      {experiences.map((experience) => (
        <TabCard isOddTab={false}>
          <div className="img">
            <img src={experience.image} alt='' />
          </div>

          <div className="tabcard-content">
            <h2 style={{ color: `var(--dark-text-color)` }}>{experience.company}</h2>
            <p>{experience.location}</p>
            <p>{experience.role}</p>
            <p>{experience.start} - {experience.end}</p>
          </div>

        </TabCard>
      ))}
    </div>
  )
}
