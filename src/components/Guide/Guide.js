import React from 'react';
import guides from '../../data/guides';

const img = {
  height: '350px',
  width: '350px',
  borderTopLeftRadius: '100px',
}

const img2 = {
  height: '350px',
  width: '350px',
  borderRadius: '25%',
}

const img3 = {
  height: '350px',
  width: '350px',
  borderTopRightRadius: '100px',
}
const img4 = {
  height: '350px',
  width: '350px',
  borderBottomLeftRadius: '100px',
}

const img6 = {
  height: '350px',
  width: '350px',
  borderBottomRightRadius: '100px',
}

const location__container = {
  paddingLeft: '10%',
  paddingTop: '5%',
}

const location__row = {
  display: 'flex',
}

const location = {
  width: '30%',
  paddingLeft: '1%',
  paddingRight: '1%',
}

const location__name = {
  textAlign: 'center',
}

const location__nameRight = {
  textAlign: 'right',
}

const location__textContainer = {
  width: '65%',
}

const Guide = () => (
    <div>
      <div>
        <div>
          {guides[0]["title"]}
        </div>
        <div>
          {guides[0]["author"]}
        </div>
        <div>
          {guides[0]["byline"]}
        </div>
      </div>
      <div style={location__container}>
        <div style={location__row}>
          <div style={location}>
            <img src={guides[0]["locations"][0]["img"]} style={img} id="image" alt="hello" />
            <div style={location__textContainer}>
            <div style={location__nameRight}>{guides[0]["locations"][0]["name"]}</div>
            <p>{guides[0]["locations"][0]["blurb"]}</p>
            <div>{guides[0]["locations"][0]["address"]}</div>
          </div>
          </div>
          <div style={location}>
            <img src={guides[0]["locations"][1]["img"]} style={img2} id="image" alt="hello" />
            <div style={location__name}>{guides[0]["locations"][1]["name"]}</div>
            <p>{guides[0]["locations"][1]["blurb"]}</p>
            <div>{guides[0]["locations"][1]["address"]}</div>
          </div>
          <div style={location}>
            <img src={guides[0]["locations"][2]["img"]} style={img3} id="image" alt="hello" />
            <div>{guides[0]["locations"][2]["name"]}</div>
            <p>{guides[0]["locations"][2]["blurb"]}</p>
            <div>{guides[0]["locations"][2]["address"]}</div>
          </div>
        </div>
        <div style={location__row}>
          <div style={location}>
            <img src={guides[0]["locations"][0]["img"]} style={img4} id="image" alt="hello" />
            <div style={location__nameRight}>{guides[0]["locations"][0]["name"]}</div>
            <p>{guides[0]["locations"][0]["blurb"]}</p>
            <div>{guides[0]["locations"][0]["address"]}</div>
          </div>
          <div style={location}>
            <img src={guides[0]["locations"][1]["img"]} style={img2} id="image" alt="hello" />
            <div style={location__name}>{guides[0]["locations"][1]["name"]}</div>
            <p>{guides[0]["locations"][1]["blurb"]}</p>
            <div>{guides[0]["locations"][1]["address"]}</div>
          </div>
          <div style={location}>
            <img src={guides[0]["locations"][2]["img"]} style={img6} id="image" alt="hello" />
            <div>{guides[0]["locations"][2]["name"]}</div>
            <p>{guides[0]["locations"][2]["blurb"]}</p>
            <div>{guides[0]["locations"][2]["address"]}</div>
          </div>
        </div>
      </div>
    </div>
  );

export default Guide;
