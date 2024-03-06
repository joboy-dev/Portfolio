import { Link } from 'react-router-dom'
import SmallTabCard from '../../components/cards/SmallTabCard'

import { certifications } from '../../data/certifications'

export default function Certifications() {

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
    }}>
      {certifications.map((certification) => (
        <SmallTabCard size={380} isOdd={false}>
          <div className='smallcard-img' style={{
            height: '150px',
            width: '150px'
          }}>
            <img src={certification.image} alt='' />
          </div>
          <h2 style={{fontSize: '0.8rem'}}>{certification.name}</h2>
          <p><b>Issued by: </b>{certification.issuer}</p>
          <p><b>Issue date: </b>{certification.date}</p>
          {certification.credentialId && <p><b>Credential ID: </b>{certification.credentialId}</p>}
          {certification.credentialUrl && <Link to={certification.credentialUrl} target='_blank' className='cred'>View Credential</Link>}
        </SmallTabCard>
      ))}
    </div>
  )
}
