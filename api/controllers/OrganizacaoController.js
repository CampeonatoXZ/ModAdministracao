/**
 * OrganizacaoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    findTorneio: function (req, res){
        Torneio.find().exec(function (err, Torneio){
            if(err){
                return  res.json({err: err },500)
            }else{
                res.json({
                    torneios: Torneio
                });
            }
        });
        
    }

};

