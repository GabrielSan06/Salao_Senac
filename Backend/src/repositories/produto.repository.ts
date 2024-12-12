import { todo } from "node:test";
import { AppDataSource } from "../db/data-source";
import { Produto } from "../models/produto";

class ProdutoRepository {
    produtoRepository = AppDataSource.getRepository(Produto);

    // Método assíncrono para salvar (inserir) o produto no banco de dados
    async save(produto: Produto): Promise<Produto> {
        try {
            this.produtoRepository.save(produto); //.save insere ou atualiza o registro, dependendo do objeto já possuir um id
            return produto; 
        } catch (error) { // Tratamento de erro
            console.error("Erro ao salvar o produto: ", error);
            throw new Error("Falha ao criar o produto!");
        }
    }

    // Método assíncrono para buscar e retornar todos os registros da entidade Produto no banco de dados
    async retrieveAll(): Promise<Array<Produto>> {
        try {
            return this.produtoRepository.find(); //.find recupera todos os registros da tabela
        } catch (error) { //Tratamento de erro
            console.error("Erro ao recuperar produtos: ", error);
            throw new Error("Falha ao buscar os produtos!");
        }
    }

    // Método assíncrono para buscar e retornar um registro específico de acordo com o id fornecido da entidade Produto no banco de dados
    async retrieveById(produtoId: number): Promise<Produto | null> { // Retorna o produto ou "null" em caso de não encontrado
        try {
            return this.produtoRepository.findOneBy({ //.findOneBy recupera um único registro da tabela pelo id
                idProduto: produtoId, // O parâmetro diz que os valores tem que ser iguais
            });
        } catch (error) { // Tratamento de erro
            console.error("Erro ao recuperar o produto: ", error);
            throw new Error("Falha ao buscar o produto!");
        }
    }

    // Método assíncrono para atualizar um registro na tabela Produto no banco de dados
    async update(produto: Produto) {
        // TODO: Verificar se o id é autoincrement e como isso funciona, tanto no meu banco como no banco de exemplo
        const { idProduto, nome, custo, descricao } = produto;
        try {
            this.produtoRepository.save(produto);
        } catch (error) {
            console.error("Erro ao atualizar o produto: ", error);
            throw new Error("Falha ao atualizar o filme!");
        }
    }
}

export default new ProdutoRepository();