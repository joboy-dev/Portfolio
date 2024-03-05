import TabCard from '../../components/cards/TabCard'

const education = [
  {
    school: 'Babcock University',
    location: 'Ilishan-Remo, Ogun, Nigeria',
    image: 'assets/data_images/babcock.png',
    degree: 'B.Sc Computer Science',
    grade: 'First Class Honours',
    start: 'August 2019',
    end: 'July 2023'
  },
]

export default function Education() {
  return (
    <div className='Education'>
      {education.map((edu) => (
        <TabCard isEvenTab={false}>
          <div className="img">
            <img src={edu.image} alt='' />
          </div>

          <div className="tabcard-content">
            <h2 style={{ color: `var(--dark-text-color)` }}>{edu.school}</h2>
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
