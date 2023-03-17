const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM portaria', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM portaria WHERE id = ?', [id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    addPorteiro: (nome, ferias) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO portaria (nome, ferias) VALUES (?, ?)',
                [nome, ferias],
                (error, result)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(result.insertId)
                }
            );
        });
    }
};