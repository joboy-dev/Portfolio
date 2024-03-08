import './ServiceList.css'
import Icon from '../Icon'
import { services } from '../../data/services'

import useTheme from '../../hooks/useTheme'

export default function ServiceList() {
  const { mode } = useTheme()

  return (
    <div className="ServiceList">
      {services.map((service) => (
        <div key={service.serviceName} className={`service-card ${mode}`}>
          <div className="service-img">
              <Icon icon={service.icon} size={100} color='#d8e2dc' />
          </div>

          <div className="details">
              <h1>{service.serviceName}</h1>
              <p>{service.description}</p>
              <h1>Relevant skills</h1>
              <p>{service.skills.join(' || ')}</p>
          </div>
        </div>
      ))}
    </div>
  )
}