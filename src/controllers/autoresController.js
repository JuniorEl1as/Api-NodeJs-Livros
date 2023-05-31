import autores from '../models/Autor.js';

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
          });
    };

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save(( err ) => {
            if (err) {
                res.status(500).json({message:` ${err.message} - Falha ao criar Autor!`})
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    };

    static atualizarAutor = (req, res) => {

        let id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message:`Autor atualizado com sucesso!`})
            } else {
                res.status(500).send({message:` ${err.message} - Falha`});
            }
        })
    };

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message:`Autor excluído com sucesso!`})
            } else {
                res.status(500).send({message:` ${err.message}`});
            }
        });
    };
};

export default AutorController;        