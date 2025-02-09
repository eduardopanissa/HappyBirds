import picture from "../models/Picture.js";

class PictureController {

    static async listarPictures (req, res) {
        try {
            const listaPictures = await picture.find({});
            res.status(200).json(listaPictures);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    };

    static async listarPictureporId (req, res) {
        try {
            const id = req.params.id;
            const pictureEncontrada = await picture.findById(id);
            res.status(200).json(pictureEncontrada);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisiçaão da picture`});
        }
    };

    static async cadastrarPicture (req, res) {
        try {
            const novaPicture = await picture.create(req.body);
            res.status(201).json({ message: "cadastrada com sucesso", picture: novaPicture})
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar foto` });
        }
    }
    
    static async atualizaPicture (req, res) {
        try {
            const id = req.params.id;
            await picture.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "picture atualizada"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização`});
        }
    };

    static async excluirPicture (req, res) {
        try {
            const id = req.params.id;
            await picture.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "picture excluida com sucesso" });
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão`});
        }
    };

};

export default PictureController;