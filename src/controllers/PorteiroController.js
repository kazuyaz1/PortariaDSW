const PortariaService = require('../services/PortariaService');

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {error:'', result: []}

        let portaria = await PortariaService.buscarTodos();

        for (let i in portaria){
            json.result.push({
                id: portaria[i].id,
                nome: portaria[i].nome,
            })
        }
        res.json(json);
    },

    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome = await PortariaService.buscarUm(id);

        if(nome){
            json.result = nome;
        }

        res.json(json);
    },

    inserir: async(req,res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let ferias = req.body.ferias;

        if(nome && ferias){
            let porteiroId = await PortariaService.inserir(nome, ferias);
            json.result = {
                id: porteiroId,
                nome,
                ferias
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async(req,res) => {
        let json = {error:'', result:{}};

        let id = req.params.id
        let nome = req.body.nome;
        let ferias = req.body.ferias;

        if(id && nome && ferias){
            
            await PortariaService.alterar(id, nome, ferias);
            json.result = {
                id,
                nome,
                ferias
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async(req, res) =>{
        let json = {error: '', result:{}};

        await PortariaService.excluir(req.params.id);

        res.json(json);
    }
}