
/*
para que essa api possa receber uma requisição com multiplos parâmetros
eu tenho que nomear esse arquivo dessa forma [...dados]
assim não vai existir um limite para os parâmtros enviados 

mas caso eu precise que a url funcione mesmo sem parâmetros 
eu preciso torna-los opcionais então nesse caso eu preciso 
nomea-lo assim [[...dados]]

*/


export default function params(req,res){

    res.send.status(200).json({
        params: req.query()
    })
  


}