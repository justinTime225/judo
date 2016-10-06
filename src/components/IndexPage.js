'use strict';

import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';
import Helmet from 'react-helmet';
export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <Helmet
          title={`About judo heroes and Justin`}
          meta={[
            {property: 'og:title', content: 'About meeeeeee'},
        ]} />
        <div className="athletes-selector">
          {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
        </div>
      </div>
    );
  }
}
