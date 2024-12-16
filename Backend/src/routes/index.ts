import { Router } from 'express';
import { ProdutoEstoqueController } from '../controllers/produtoEstoque.controller';
import { ProdutoController } from '../controllers/produto.controller';

const router = Router();
const produtoEstoqueController = new ProdutoEstoqueController();
const produtoController = new ProdutoController();

router.post('/produtoEstoque', produtoEstoqueController.create);
router.get('/produtoEstoque', produtoEstoqueController.findAll);
router.get('/produtoEstoque/:id', produtoEstoqueController.findById);
router.patch('/produtoEstoque/:id', produtoEstoqueController.update);
router.delete('/produtoEstoque/:id', produtoEstoqueController.delete);


router.post('/produto', produtoController.create);

export default router;
