import './ImageCarousel.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

import Icon from '../../components/Icon'

// images will be a list
export default function ImageCarousel({images}) {
  const [imageIndex, setImageIndex] = useState(0)
  const [showBackButton, setShowBackButton] = useState(true)
  const [showFrontButton, setShowFrontButton] = useState(true)

  const imageLength = images.length

  // Immediately invoke a function to check for certain conditions to render the front and back buttons
  useEffect(()=>{
    if (imageLength <= 1 || imageIndex === imageLength-1) {
      setShowFrontButton(false)
    } else {
      setShowFrontButton(true)
    }

    if (imageLength <= 1 || imageIndex === 0) {
      setShowBackButton(false)
    } else {
      setShowBackButton(true)
    }
  }, [imageIndex, imageLength])

  const moveToNextImage = function() {
    setImageIndex(imageIndex+1)
  }

  const moveToPreviousImage = function() {
    setImageIndex(imageIndex-1)
  }

  return (
    <div className='ImageCarousel'>
      <div className="image-container">
          {!showBackButton ? <div></div> : <Icon icon={faArrowLeft} color='#d8e2dc' onClick={moveToPreviousImage} />}
          <div className="image">
              {imageLength === 0 ? <img src="../assets/images/no-image.jpg" alt="" /> : images.map((imagePath, index) => (
                <img key={index} src={imagePath} alt="" style={{
                  display: imageIndex === index ? 'block' : 'none',
                  animation: `fadeIn 0.5s linear`,
                }}/>
              ))}
          </div>
          {!showFrontButton ? <div></div> : <Icon icon={faArrowRight} color='#d8e2dc' onClick={moveToNextImage} />}
      </div>

    </div>
  )
}
