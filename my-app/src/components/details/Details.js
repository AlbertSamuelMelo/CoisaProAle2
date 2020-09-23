import React from 'react';
import './Details.css';

import Races from '../races/Races';

class Details extends React.Component {
    constructor(props) {
      super(props);
      this.hordeClick = this.handleHordeClick.bind(this);
      this.alyClick = this.handleAlyClick.bind(this);
      this.state = {
          faction: ""
      };
    }
  
    handleHordeClick() {
      this.setState({faction: "horde"});
    }
  
    handleAlyClick() {
      this.setState({faction: "alliance"});
    }
  
    render() {
      const faction = this.state.faction;
      let content;
      if (faction == "horde") {
        content = <Races faction={faction}/>;
      } else if (faction == "alliance") {
        content = <Races faction={faction}/>;
      }
  
      return (
        <div className="Details">
            <header className="Details-header">
                <h1>Habitantes de Azeroth</h1>
                <h2>Azeroth abriga uma série de raças, algumas nativas, outras provenientes de outros mundos. Seja um defensor implacável da Aliança ou um guardião feroz da Horda, ao escolher a sua raça você define por qual lado lutará nesta guerra interminável. A quem pertence a sua lealdade?</h2>            </header>
            <div className="midContainer">
                <button className="hordeButton" onClick={this.hordeClick}></button>
                <button className="alyButton" onClick={this.alyClick}></button>
            </div>
            {content}
        </div>
      );
    }
  }
  
export default Details;
