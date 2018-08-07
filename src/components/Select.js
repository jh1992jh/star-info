import React from 'react'

 const Select = ({value, onSelect}) => {
  return (
    <select value={value} onChange={onSelect}>
    <option value="people">People</option>
    <option value="films">Films</option>
    <option value="planets">Planets</option>
    <option value="species">Species</option>
  </select>
  )
}

export default Select;