import { Link } from 'react-router-dom'
import TabCard from '../../components/cards/TabCard'

const certifications = [
  {
    name: 'Python Programming',
    image: 'assets/data_images/hackerrank.png',
    issuer: 'HackerRank',
    date: 'June 2023',
    credentialId: '2AE9E6CCA1EB',
    credentialUrl: 'https://www.hackerrank.com/certificates/2ae9e6cca1eb',
  },

  {
    name: 'CSS',
    image: 'assets/data_images/hackerrank.png',
    issuer: 'HackerRank',
    date: 'June 2023',
    credentialId: '22B669210265',
    credentialUrl: 'https://www.hackerrank.com/certificates/22b669210265',
  },

  {
    name: 'Jobberman Soft-Skills Training',
    image: 'assets/data_images/jobberman.png',
    issuer: 'Jobberman',
    date: 'May 2023',
    credentialId: null,
    credentialUrl: null,
  },

  {
    name: 'UI UX Design',
    image: 'assets/data_images/hiit.png',
    issuer: 'HiiT Plc',
    date: 'June 2022',
    credentialId: '7355131E57-73555E7D47-1276F0982',
    credentialUrl: 'https://hiit.ng/certificates/ui-ux-certificate/?course_id=136325&cert-nonce=69de0eb7a4',
  },

  {
    name: 'HTML',
    image: 'assets/data_images/sololearn.png',
    issuer: 'Sololearn',
    date: 'June 2020',
    credentialId: 'CT-F6RMRQMY',
    credentialUrl: 'https://api2.sololearn.com/v2/certificates/CT-F6RMRQMY/image/png',
  },
]

export default function Certifications() {

  return (
    <div className='Experience'>
      {certifications.map((certification) => (
        <TabCard isEvenTab={true}>
          <div className="img">
            <img src={certification.image} alt='' />
          </div>

          <div className="tabcard-content">
            <h2>{certification.name}</h2>
            <p><b>Issued by: </b>{certification.issuer}</p>
            <p><b>Issue date: </b>{certification.date}</p>
            {certification.credentialId && <p><b>Credential ID: </b>{certification.credentialId}</p>}
            {certification.credentialUrl && <Link to={certification.credentialUrl} target='_blank' className='cred'>View Credential</Link>}
          </div>

        </TabCard>
      ))}
      
    </div>
  )
}
