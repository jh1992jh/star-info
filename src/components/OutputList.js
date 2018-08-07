import React from 'react'

const OutputList = ({value, output}) => {
  if(value === 'people') {
      return (
        <div className="charList">
          <p>Name: {output[0].name}</p>
          <p>Birth Year: {output[0].birth_year}</p>
          <p>Eye Color: {output[0].eye_color}</p>
          <p>Skin Color: {output[0].skin_color}</p>
          <p>Gender: {output[0].gender}</p>
        </div>
      );
  } else if (value === 'films'){
    return (
      <div className="charList">
        <p>Title: {output[0].title}</p>
        <p>Episode: {output[0].episode_id}</p>
        <p>Director: {output[0].director}</p>
        <p>Released: {output[0].release_date}</p>
      </div>
    );
  } else if (value === 'planets') {
    return (
      <div className="charList">
      <p>Planet: {output[0].name}</p>
      <p>Climate: {output[0].climate}</p>
      <p>Terrain: {output[0].terrain}</p>
      <p>Population: {output[0].population}</p>
    </div>
    );
  } else if (value === 'species') {
    return (
      <div className="charList">
        <p>Species: {output[0].name}</p>
        <p>Classification: {output[0].classification}</p>
        <p>Average-Height: {output[0].average_height}</p>
        <p>Language: {output[0].language}</p>
      </div>
    );
  }
}

export default OutputList;