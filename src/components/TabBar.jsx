import { useState } from 'react'

import './Tabbar.css'

// tabs is an object with title and content as properties
// Title is a string
// content is a React JSX element
export default function Tabbar({ tabs }) {
    // State to handle current selected index
    const [currentIndex, setCurrentIndex] = useState(0)

    // Function to handle tab selection
    const handleTabClick = function(index) {
        setCurrentIndex(index)
        console.log(index);
    }

    return (
        <div className="Tabbar">
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button 
                        key={ index } 
                        className={`tabbar-button ${currentIndex === index ? 'active' : ''}`}
                        onClick={ () => handleTabClick(index) }
                    >
                        { tab.title }
                    </button>
                ))}
            </div>

            <div className="content">
                {tabs.map((tab, index) => (
                    <div 
                        key={ index }
                        style={{
                            display: currentIndex === index ? 'block' : 'none'
                        }}
                    >
                        { tab.content }
                    </div>
                ))}
            </div>
        </div>
    )
}
