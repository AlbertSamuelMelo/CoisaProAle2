import React from 'react';
import axios from 'axios';

import './Details.css';

import Races from '../races/Races';

class Details extends React.Component {
    constructor(props) {
      super(props);
      this.hordeClick = this.handleClick.bind(this);
      this.state = {
          faction: ""
      };
    }
  
    handleClick(faction) {
      //Exemplo de requisisão
      axios.get(`http://localhost:3001/loadFactionRaces`, {
        params: {
          faction: faction
        }
      })
      .then((res) => {
        const faction = res.data;
        console.log(res)
        this.setState({ faction });
      })
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
                <button className="hordeButton" onClick={() => this.handleClick(1)}></button>
                <button className="alyButton" onClick={() => this.handleClick(2)}></button>
            </div>
            {content}
        </div>
      );
    }
  }
  
export default Details;
