import TabCard from '../../components/cards/TabCard'
import { education } from '../../data/education'

export default function Education() {
  return (
    <div className='Education'>
      {education.map((edu) => (
        <TabCard isOddTab={true}>
          <div className="img">
            <img src={edu.image} alt='' />
          </div>

          <div className="tabcard-content">
            <h2>{edu.school}</h2>
            <p>{edu.location}</p>
            <p><b>Degree: </b>{edu.degree}</p>
            <p><b>Grade: </b>{edu.grade}</p>
            <p>{edu.start} - {edu.end}</p>
          </div>
        </TabCard>
      ))}
      
    </div>
  )
}
