import Express from "express";
import {home,
ladocuadrado
} from '../controllers/indexControlador.js'


const router = Express.Router();


router.get('/home', home);
router.get('lado-cuadrado/:numero', ladocuadrado)





export default router;