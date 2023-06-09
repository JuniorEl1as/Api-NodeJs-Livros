import livros from '../models/Livro.js';

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
        .populate('autores')
        .exec((err, livros) => {
            res.status(200).json(livros)
        });
    };

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save(( err ) => {
            if (err) {
                res.status(500).json({message:` ${err.message} - Falha ao criar livro!`})
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static atualizarLivro = (req, res) => {

        let id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message:`livro atualizado com sucesso!`})
            } else {
                res.status(500).send({message:` ${err.message} - Falha`});
            }
        })
    };

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message:`livro excluído com sucesso!`})
            } else {
                res.status(500).send({message:` ${err.message}`});
            }
        });
    };
};

export default LivroController;        