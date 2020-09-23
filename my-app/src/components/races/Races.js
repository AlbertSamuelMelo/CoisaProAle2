import React from 'react';
import axios from 'axios';
import './Races.css';
import Classes from '../classes/Classes'

class Races extends React.Component {
    constructor(props) {
      super(props);
      this.raceClick = this.handleRaceClick.bind(this);
      this.getClasses = this.getClasses.bind(this)
      this.state = {
          selectedRace: "",
          index: "",
          class: []
      };
    }

    getClasses(race_id) {
      axios.get(`http://localhost:3001/loadRaceClass`, {
        params: {
          race: race_id + 1
        }
      })
      .then((res) => {
        const loadedClasses = res.data;
        console.log(loadedClasses)
        this.setState({ class: loadedClasses });
      })
    }

    handleRaceClick(race, index) {
        this.getClasses(index)
        this.setState({
          selectedRace: race,
          index: index
        });
        console.log(this.state)
    }

    render() {

      const race = this.state.selectedRace;
      let content;

      if (race != "") {
        content = <Classes class={this.state.class}/>;
      }
      
      // const faction = this.props.faction.faction
      // const races = {
      //     horde: ['Orc', 'Troll', 'Tauren', 'Undead', 'Blood Elves', 'Goblin', 'Pandarean', 'Nightborn', 'High Mountain', 'Mac-ogah', 'Zandalari', 'Vulpera'],
      //     alliance: ['Human', 'Night-Elves', 'Dwraf', 'Gnome', 'Dranei', 'Worgen', 'Pandarean', 'Void Elves', 'Lightforged', 'Dark iron', 'Kultirean', 'Mechagnome']
      // };

      const items = []
    
      // for (const [index, value] of races[faction].entries()) {
      //   items.push(<button key={index} onClick={() => this.handleRaceClick(value)}>{value}</button>)
      // }
      for (const [index, value] of this.props.database.entries()) {
        items.push(<button key={index} onClick={() => this.handleRaceClick(value.race, index)}>{value.race}</button>)
      }

      return (
        <div className="Races">
            <header className="Races-header">
            Races Avaliable
            </header>
            <div className="racesContainer">
                <div className="firstLine">
                    {items}
                </div>
            </div>
                {content}
        </div>
      );
    }
  }
  
export default Races;
