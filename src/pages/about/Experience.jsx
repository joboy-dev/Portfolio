import TabCard from '../../components/cards/TabCard'

const experiences = [
  {
    company: 'Hiit Plc',
    location: 'Ikeja, Lagos, Nigeria',
    image: 'assets/data_images/hiit.png',
    role: 'Software Development- Intern',
    start: 'January 2022',
    end: 'June 2022'
  },
]

export default function Experience() {

  return (
    <div className='Experience'>
      {experiences.map((experience) => (
        <TabCard isEvenTab={true}>
          <div className="img">
            <img src={experience.image} alt='' />
          </div>

          <div className="tabcard-content">
            <h2>{experience.company}</h2>
            <p>{experience.location}</p>
            <p>{experience.role}</p>
            <p>{experience.start} - {experience.end}</p>
          </div>

        </TabCard>
      ))}
      
    </div>
  )
}
