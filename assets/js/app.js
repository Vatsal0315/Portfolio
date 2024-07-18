/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */


tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 150,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#6FC3DF" // Changed color to light blue
    },
    shape: {
      type: "polygon",
      polygon: {
        nb_sides: 5 // Reduced polygon sides to 5
      }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 15, // Slightly reduced particle size to 15
      random: false,
      anim: {
        enable: true,
        speed: 10,
        size_min: 50,
        sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 100,
        size: 20,
        duration: 2,
        opacity: 0.4,
        speed: 3
      }
    }
  },
  retina_detect: false
});



const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}




// 2nd method

/* -----------------------------------------------
/* Unique Particle Configuration
/* ----------------------------------------------- */

// particlesJS('particles-js',
  
//   {
//     "particles": {
//       "number": {
//         "value": 50,
//         "density": {
//           "enable": true,
//           "value_area": 700
//         }
//       },
//       "color": {
//         "value": ["#e74c3c", "#8e44ad", "#f1c40f", "#2ecc71"]
//       },
//       "shape": {
//         "type": ["circle", "triangle", "polygon"],
//         "stroke": {
//           "width": 2,
//           "color": "#ffffff"
//         },
//         "polygon": {
//           "nb_sides": 6
//         },
//         "image": {
//           "src": "img/some-image.png",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.8,
//         "random": true,
//         "anim": {
//           "enable": true,
//           "speed": 1,
//           "opacity_min": 0.3,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 7,
//         "random": true,
//         "anim": {
//           "enable": true,
//           "speed": 10,
//           "size_min": 0.5,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 100,
//         "color": "#ffffff",
//         "opacity": 0.6,
//         "width": 2
//       },
//       "move": {
//         "enable": true,
//         "speed": 5,
//         "direction": "random",
//         "random": true,
//         "straight": false,
//         "out_mode": "bounce",
//         "attract": {
//           "enable": true,
//           "rotateX": 800,
//           "rotateY": 800
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": ["grab", "bubble"]
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 200,
//           "line_linked": {
//             "opacity": 0.8
//           }
//         },
//         "bubble": {
//           "distance": 300,
//           "size": 15,
//           "duration": 2,
//           "opacity": 0.9,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#1d1d1d",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }

// );


