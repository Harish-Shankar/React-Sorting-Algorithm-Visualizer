import './Dropdown.css'
import {useState} from 'react'

function Dropdown () {
    const [isActive, setIsActive] = useState(false)
    const options = ['Bubble Sort', 'Insertion Sort', 'Selection Sort']
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
                {options[1]}
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                {options.map(option => (
                    <div onClick={(e) => 
                        setIsActive(false)
                    }className="dropdown-item">
                        {option}
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default Dropdown