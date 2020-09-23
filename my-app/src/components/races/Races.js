import React from 'react';
import './Races.css';
import Classes from '../classes/Classes'

class Races extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props.faction)
      this.raceClick = this.handleRaceClick.bind(this);
      this.state = {
          selectedRace: ""
      };
    }
    handleRaceClick(race) {
        this.setState({selectedRace: race});
    }

    render() {
      const race = this.state.selectedRace;
      let content;
      if (race != "") {
        content = <Classes race={race}/>;
      }
      const faction = this.props.faction
      const races = {
          horde: ['Orc', 'Troll', 'Tauren', 'Undead', 'Blood Elves', 'Goblin', 'Pandarean', 'Nightborn', 'High Mountain', 'Mac-ogah', 'Zandalari', 'Vulpera'],
          alliance: ['Human', 'Night-Elves', 'Dwraf', 'Gnome', 'Dranei', 'Worgen', 'Pandarean', 'Void Elves', 'Lightforged', 'Dark iron', 'Kultirean', 'Mechagnome']
      };

      const items = []
    
      for (const [index, value] of races[faction].entries()) {
        items.push(<button key={index} onClick={() => this.handleRaceClick(value)}>{value}</button>)
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
