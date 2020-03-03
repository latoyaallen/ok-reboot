import React from 'react';
import guides from '../data/guides';

const img = {
  height: '550px',
  width: '550px',
  paddingRight: '10px',
  borderTopLeftRadius: '100px',
  borderBottomRightRadius: '100px',
}

const img__container = {
  paddingLeft: '90px',
}

const img2 = {
  height: '550px',
  width: '550px',
  borderTopLeftRadius: '100px',
  borderBottomRightRadius: '100px',
}

const location__container = {
  paddingLeft: '60%',
  overflowX: 'auto',
  overflowY: 'hidden',
  position: 'absolute',
}

const location = {
  width: '80%',
  paddingLeft: '1%',
  paddingRight: '10%',
  borderLeft: '1px solid grey',
}

const location__name = {
  textAlign: 'center',
}

const location__textContainer = {
  width: '75%',
}

const author__container = {
  width: '50%',
  paddingLeft: '5%',
  paddingRight: '5%',
  paddingTop: '11%',
  overflow: 'hidden',
  position: 'fixed',
  borderRight: '1px solid grey',
}

const guide__container = {
  display: 'flex',
  borderLeft: '1px solid grey',
  // paddingTop: '1%',
}

const guide__title = {
  fontWeight: 'bold',
  fontSize: '3.4em',
  textAlign: 'center',
  width: '80%',
  borderLeft: '1px solid grey',
  paddingLeft: '10%',
}

function App() {
  return (
    <div style={guide__container}>
      <div style={author__container}>
        <div>
          <h2>{guides[0]["byline"]}</h2>
        </div>
        <div>
          <p>{guides[0]["author"]}</p>
        </div>
        <div>
          <h2>OK Reboot: What do you look for in a wellness space?</h2>
          <p> </p>
          <p>LaToya: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h2>OK Reboot: You need a reboot.  What's your process?</h2>
          <p> </p>
          <p>LaToya: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h2>OK Reboot: Is there any part of your wellness routine that's uniquly yours?</h2>
          <p> </p>
          <p>LaToya: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h2>OK Reboot: What's your favorite way to get out of your head and into your body?</h2>
          <p>LaToya: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div style={location__container}>
        <div style={guide__title}>
          <p>{guides[0]["title"]}</p>
        </div>
        <div style={location}>
          <div style={img__container}>
            <img src={guides[0]["locations"][0]["img"]} style={img} id="image" alt="hello" />
            <div style={location__textContainer}>
              <div style={location__name}>{guides[0]["locations"][0]["name"]}</div>
              <p>{guides[0]["locations"][0]["blurb"]}</p>
              <div>{guides[0]["locations"][0]["address"]}</div>
            </div>
          </div>
        </div>
        <div style={location}>
          <div style={img__container}>
          <img src={guides[0]["locations"][1]["img"]} style={img2} id="image" alt="hello" />
          <div style={location__name}>{guides[0]["locations"][1]["name"]}</div>
          <p>{guides[0]["locations"][1]["blurb"]}</p>
          <div>{guides[0]["locations"][1]["address"]}</div>
        </div>
        </div>
        <div style={location}>
          <div style={img__container}>
          <img src={guides[0]["locations"][2]["img"]} style={img} id="image" alt="hello" />
          <div style={location__textContainer}>
            <div style={location__name}>{guides[0]["locations"][0]["name"]}</div>
            <p>{guides[0]["locations"][0]["blurb"]}</p>
            <div>{guides[0]["locations"][0]["address"]}</div>
          </div>
          </div>
        </div>
        <div style={location}>
          <div style={img__container}>
          <img src={guides[0]["locations"][3]["img"]} style={img2} id="image" alt="hello" />
          <div style={location__name}>{guides[0]["locations"][1]["name"]}</div>
          <p>{guides[0]["locations"][1]["blurb"]}</p>
          <div>{guides[0]["locations"][1]["address"]}</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
