'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import AthletesMenu from './AthletesMenu';
import Medal from './Medal';
import Flag from './Flag';
import athletes from '../data/athletes';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

class AthletePage extends React.Component {
  componentWillMount() {
    console.log('No Bundle!!!!!!')
    // console.log('athletes', this.props.athletes[1]);
    console.log('test', this.props.test);
  }

  render() {
    if (!this.props.athletes) {
      return <div>Loading</div>
    }
    const id = this.props.params.id;
    const athlete = this.props.athletes.filter((athlete) => athlete.id === id)[0];
    if (!athlete) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${athlete.cover})` };
    console.log(athlete.name, '---')
    return (
      <div>
        <Helmet
          title={`About THE BEST -- ${athlete.name}`}
          meta={[
             {'property': 'og:testTAG', 'content': `the test person`},
             {'property': 'og:title', 'content': `About ${athlete.name}`},
             {'property': 'og:image', 'content': `https://judoseo.herokuapp.com/img/${athlete.image}`},
           ]}/>

        <div className="athlete-full">
          <AthletesMenu/>
          <div className="athlete">
            <header style={headerStyle}/>
            <div className="picture-container">
              <img src={`/img/${athlete.image}`}/>
              <h2 className="name">{athlete.name}</h2>
            </div>
            <section className="description">
              Olympic medalist from <strong><Flag code={athlete.country} showName="true"/></strong>,
              born in {athlete.birth} (Find out more on <a href={athlete.link} target="_blank">Wikipedia</a>).
            </section>
            <section className="medals">
              <p>Winner of <strong>{athlete.medals.length}</strong> medals:</p>
              <ul>{
                athlete.medals.map((medal, i) => <Medal key={i} {...medal}/>)
              }</ul>
            </section>
          </div>
          <div className="navigateBack">
            <Link to="/">« Back to the index</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    athletes: state.athletes,
    test: state.test
  }
}
export default connect(mapStateToProps)(AthletePage)
