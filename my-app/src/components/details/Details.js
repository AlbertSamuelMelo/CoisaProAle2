import React from 'react';
import axios from 'axios';

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
      //Exemplo de requisisão
      axios.get(`http://localhost:3001/horde`)
      .then(res => {
        const faction = res.data;
        this.setState({ faction });
      })
    }
  
    handleAlyClick() {
      this.setState({faction: "alliance"});
    }
  
    render() {

      const database = this.state.faction;
      let content;

      if (database != "") {
        content = <Races database={database}/>;
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
