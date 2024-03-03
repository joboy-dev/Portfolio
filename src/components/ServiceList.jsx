import './ServiceList.css'

export default function ServiceList() {
  return (
    <div className="ServiceList">
        <div className='service-card'>
          <div className="service-img">
              <img src="assets/icons/python_icon.png" alt="" />
          </div>

          <div className="details">
              <h1>Service name</h1>
              <p>Description...</p>
              <h1>Relevant skills</h1>
              <p>Skills</p>
          </div>
        </div>
    </div>
  )
}

