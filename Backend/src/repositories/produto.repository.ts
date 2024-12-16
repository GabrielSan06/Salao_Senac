import { AppDataSource } from "../db/data-source";
import { ProdutoEstoque } from "../models/produtoEstoque";
import { Produto } from "../models/produto";

class ProdutoEstoqueRepository {
    produtoRepository = AppDataSource.getRepository(Produto);
    produtoEstoqueRepository = AppDataSource.getRepository(ProdutoEstoque);
<<<<<<< HEAD
    
    // Método assíncrono (porecisa aguardar) para salvar (inserir) o produto no banco de dados
=======

    async saveProduct(produto: Produto): Promise<Produto> {
        try {
            let novoProduto = await AppDataSource.getRepository(Produto).save(produto);
            return novoProduto;
        } catch (error) {
            throw new Error("Falha crira novo produto!: " + error);
        }
    }

>>>>>>> back-end
    async save(produtoEstoque: ProdutoEstoque): Promise<ProdutoEstoque> {
        try {
            const produto = await AppDataSource.getRepository(Produto).findOneBy({
                idProduto: produtoEstoque.idProduto,
            });

            if (!produto) {
                throw new Error("Produto não encontrado. O estoque não pode ser criado.");
            }

            await this.produtoEstoqueRepository.save(produtoEstoque);
            return produtoEstoque;
        } catch (error) {
            throw new Error("Falha ao salvar o estoque do produto!: " + error);
        }
    }

    async retrieveAll(): Promise<Array<ProdutoEstoque>> {
        try {
            return this.produtoEstoqueRepository.find({
                relations: ["produto"], 
            });
        } catch (error) {
            throw new Error("Falha ao retornar os estoques de produtos!");
        }
    }

    async retrieveById(produtoId: number): Promise<ProdutoEstoque | null> {
        try {
            return this.produtoEstoqueRepository.findOne({
                where: {
                    idProduto: produtoId,
                },
                relations: ["produto"], 
            });
        } catch (error) {
            throw new Error("Falha ao buscar o estoque do produto!");
        }
    }

    async update(produtoEstoque: ProdutoEstoque, quantidade: number): Promise<ProdutoEstoque | null> {
        try {
            const produto = await AppDataSource.getRepository(ProdutoEstoque).findOneBy({
                idProduto: produtoEstoque.idProduto,
            });

            if (!produto) {
                throw new Error("Produto não encontrado. Não é possível atualizar o estoque.");
            }

            produto.quantidade = quantidade;

            await this.produtoEstoqueRepository.save(produto);
            const produtoAtualizado = await this.retrieveById(produtoEstoque.idProduto);

            return produtoAtualizado;
        } catch (error) {
            throw new Error("Falha ao atualizar o estoque do produto!");
        }
    }

    async delete(produtoId: number): Promise<number> {
        try {
            const produtoEstoque = await this.produtoEstoqueRepository.findOne({
                where: {
                    idProduto: produtoId,
                },
                relations: ["produto"], 
            });

            if (produtoEstoque) {
                await this.produtoEstoqueRepository.remove(produtoEstoque); // Removendo o produto se encontrado com .remove
                return 1; // Retorna 1 se for deletado com sucesso
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o estoque do produto!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            const result = await this.produtoEstoqueRepository.query(
                "SELECT COUNT(id_produto) AS total FROM ProdutoEstoque;"
            );
            const total = result[0].total || 0;

            await this.produtoEstoqueRepository.query("DELETE FROM ProdutoEstoque;");
            
            return total;
        } catch (error) {
            throw new Error("Falha ao deletar todos os registros de estoque!");
        }
    }
}

export default new ProdutoEstoqueRepository();