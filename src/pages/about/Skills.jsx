import SmallTabCard from '../../components/cards/SmallTabCard'

import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
    }}>
      {skills.map((skill) => (
        <SmallTabCard size={200} isOdd={true}>
          <div className='smallcard-img'>
            <img src={skill.image} alt='' />
          </div>
          <h2>{skill.name}</h2>
        </SmallTabCard>
      ))}

    </div>
  )
}
