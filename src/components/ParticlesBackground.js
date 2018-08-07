import React from 'react';
import Particles from 'react-particles-js';

const ParticlesBackground = () => {
    const particlesOptions = {
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: "#3CA9D1",
              blur: 5
            }
          },
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffd700"
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
          },
        }
      }
  return <Particles className='particles' params={particlesOptions} />
}

export default ParticlesBackground;