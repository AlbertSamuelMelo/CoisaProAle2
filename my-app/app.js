const express = require('express') // Faz a comunicação da api
const mysql = require('mysql'); // Banco
const cors = require('cors'); // Framework pra garantir a segurança das requisisões

const app = express() // Instancia do express

app.use(cors()) // Inicialização do CORS

/* 
  Configuração do Banco
*/ 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "wow"
});

/* 
Exemplo de requisição do tipo get
*/
app.get('/loadFactionRaces', function (req, res) {
  let faction = req.query.faction

    con.query("SELECT Races as race, id_races FROM races AS r WHERE r.ID_Faction=" + faction + ";"    
    , function (err, result, fields) {
      if (err) throw err;
          console.log(result);
          res.json(result)
    });
    
})

// SELECT c.class_name FROM class_race AS cr, class AS c WHERE c.id_class = cr.id_class AND cr.id_race=1;
app.get('/loadRaceClass', function (req, res) {
  let race = req.query.race
    con.query("SELECT c.class_name FROM class_race AS cr, class AS c WHERE c.id_class = cr.id_class AND cr.id_race=" + race + ";"    
    , function (err, result, fields) {
      if (err) throw err;
          console.log(result);
          res.json(result)
    });
    
})


/*
Requisisão de Teste
*/
app.get('/horde', function (req, res) {

  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM horde", function (err, result, fields) {
      if (err) throw err;
          console.log(result);
          res.send(result)

    });
  });*/
  res.send({
    faction:"horde", 
    races: ['Orc', 'Troll', 'Tauren', 'Undead', 'Blood Elves', 'Goblin', 'Pandarean', 'Nightborn', 'High Mountain', 'Mac-ogah', 'Zandalari', 'Vulpera'], 
    classes: {
      Orc: ['Warrior', 'Hunter', 'Rouge', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
      Troll: ['Warrior', 'Hunter', 'Rouge', 'Shaman', 'Priest', 'Mage', 'Warlock', 'Monk', 'Druid', 'Death Knight'],
      Tauren: ['Warrior', 'Paladin', 'Hunter', 'Priest', 'Shaman', 'Monk', 'Druid', 'Death Knight']
    }
  })
})
 
app.listen(3001) // Porta que a API responde

/** 
 * 
SELECT * FROM Races
WHERE Faccao='Horda';

- Vulpera

SELECT * FROM Classes
WHERE Race='Vulpera';

- []


*/