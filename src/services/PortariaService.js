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

    inserir: (nome, ferias) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO portaria (nome, ferias) VALUES (?, ?)',
                [nome, ferias],
                (error, result)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(result.insertId)
                }
            );
        });
    },

    alterar: (id, nome, ferias) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE portaria SET nome = ?, placa = ? WHERE codigo = ?',
                [nome, ferias, id],
                (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results)
                }
            );
        });
    },

    excluir: (id) =>{
        return new Promise((aceito, rejeitado) => {
            
            db.query('DELETE FROM portaria WHERE id = ?', [id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
};