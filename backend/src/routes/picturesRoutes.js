import express from "express";
import PictureController from "../controllers/pictureController.js";

const router = express.Router();

router
    .get('/api/pictures', PictureController.listarPictures)
    .get('/api/pictures/:id', PictureController.listarPictureporId)
    .post('/api/pictures/', PictureController.cadastrarPicture)
    .put('/api/pictures/:id', PictureController.atualizaPicture)
    .delete('/api/pictures/:id', PictureController.excluirPicture)

export default router;