import React from 'react';
import './Classes.css';

class Classes extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props.race)
      this.state = {};
    }

    render() {

      const race = this.props.race
      const classes = {
        Orc: ['Warrior', 'Hunter', 'Rouge', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
        Troll: ['Warrior', 'Hunter', 'Rouge', 'Shaman', 'Priest', 'Mage', 'Warlock', 'Monk', 'Druid', 'Death Knight'],
        Tauren: ['Warrior', 'Paladin', 'Hunter', 'Priest', 'Shaman', 'Monk', 'Druid', 'Death Knight'],
        
        //['Orc', 'Troll', 'Tauren', 'Undead', 'Blood Elves', 'Goblin', 'Pandarean', 'Nightborn', 'High Mountain', 'Mac-ogah', 'Zandalari', 'Vulpera'],
        //alliance: ['Human', 'Night-Elves', 'Dwraf', 'Gnome', 'Dranei', 'Worgen', 'Pandarean', 'Void Elves', 'Lightforged', 'Dark iron', 'Kultirean', 'Mechagnome']
      };

      const items = []
        
      for (const [index, value] of classes[race].entries()) {
        items.push(<button key={index} onClick={() => this.handleRaceClick(value)}>{value}</button>)
      }
      return (
        <div className="classes">
            <header className="classes-header">
            Classes Avaliable
            </header>
            <div className="classContainer">
                <div className="firstLine">
                    {items}
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Classes;
