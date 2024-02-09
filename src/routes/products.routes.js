// Aquí se trabaja para las rutas de productos
import { Router } from "express"; // Clase para crear rutas
import { getAll, getOne, insertProduct, updateProduct,deleteProduct } from '../controllers/products.controller.js'; // Importamos la lógica del controlador
const router = Router();

// Aquí van las rutas
router.get('/', getAll); // Aquí estamos extrayendo la lógica de products.controller.js
router.get('/:bc', getOne);

router.post('/', insertProduct); 

router.put('/:bc', updateProduct);

router.delete('/:bc', deleteProduct);

export default router;


