import React from 'react'

const Menu = ({ value, onSelect}) => {
  return (
    <div className="menu">
    <span className={value === 'people' ? 'selected' : null} onClick={() => onSelect('people')}><h3>People</h3></span>
    <span className={value === 'film' ? 'selected' : null} onClick={() => onSelect('films')}><h3>Film</h3></span>
    <span className={value === 'planets' ? 'selected' : null} onClick={() => onSelect('planets')}><h3>Planets</h3></span>
    <span className={value === 'species' ? 'selected' : null} onClick={() => onSelect('species')}><h3>Species</h3></span>
      
    </div>
  )
}

export default Menu;