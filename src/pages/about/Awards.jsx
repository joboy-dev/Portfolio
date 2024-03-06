import SmallTabCard from '../../components/cards/SmallTabCard'

import { awards } from '../../data/awards'

export default function Awards() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
    }}>
      {awards.map((award) => (
        <SmallTabCard size={300} isOdd={false}>
          <div className='smallcard-img' style={{
            height: '100px',
            width: '100px'
          }}>
            <img src={award.image} alt='' />
          </div>
          <h2 style={{fontSize: '0.7rem'}}>{award.issuer}</h2>
          <p>{award.name}</p>
          <p><b>Issue date: </b>{award.date}</p>
        </SmallTabCard>
      ))}
    </div>
  )
}
