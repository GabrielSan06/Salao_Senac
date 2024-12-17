# ✂️ Gerenciamento de Salão Escola Senac

Este projeto foi desenvolvido para otimizar o gerenciamento do Salão Escola Senac, substituindo o registro manual em papel por um sistema online. Com o aumento do fluxo de clientes, o método tradicional tem causado perda de registros importantes e dificuldade no controle de custos. A solução apresentada é um site que permite o gerenciamento ágil do salão, com funcionalidades como controle de estoque, gerenciamento de produtos e agendamento de serviços para os clientes.

## 🛠️ Problema Resolvido
- Elimina a perda de registros e dados importantes.
- Facilita o controle dos custos e estoque.
- Agiliza o agendamento de serviços e o gerenciamento do fluxo de clientes.

## 🚀 Tecnologias Utilizadas
### Front-end:
- **HTML**: Estruturação das páginas.
- **CSS**: Estilização para uma interface amigável.
- **JavaScript**: Funcionalidades dinâmicas e interatividade.
- **Bootstrap**: Framework para estilização responsiva e rápida.

### Back-end:
- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **TypeScript**: Tipagem estática e melhoria na manutenção do código.
- **TypeORM**: ORM para interação com o banco de dados.

### Banco de Dados:
- **MySQL**: Armazena os dados do sistema, como produtos e estoque.

## 📂 Estrutura de Pastas
A organização do projeto está descrita abaixo:
```
projeto-salao-senac/
|-- frontend/                 # Código referente ao front-end do sistema
|   |-- assets/               # Recursos visuais
|       |-- estilos/          # Arquivos CSS
|       |-- icones/           # Ícones do sistema
|       |-- imagens/          # Imagens utilizadas no sistema
|   |-- javascript/           # Arquivos JavaScript
|       |-- (códigos JS)
|   |-- src/                  # Páginas HTML
|       |-- login.html        # Tela de login do funcionário
|       |-- funcionario-home.html # Tela home do funcionário
|   |-- index.html            # Página principal - Inicial (serviços, sobre nós e footer)
|
|-- backend/                  # Código referente ao back-end
|   |-- src/
|       |-- controllers/      # Controladores das rotas (CRUD de estoque)
|       |-- entities/         # Definições das entidades (Ex: Produto)
|       |-- repositories/     # Integração com o banco via TypeORM
|       |-- routes/           # Definição de rotas da API
|       |-- services/         # Regras de negócio
|       |-- index.ts          # Arquivo principal do servidor
|
|-- database/                 # Configurações do MySQL e migrações
|
|-- package.json              # Dependências do projeto
|-- README.md                 # Documentação do projeto
```

## ⚙️ Funcionalidades
O projeto apresenta as seguintes funcionalidades principais:

### Front-end
1. **🔄 Exibição de Serviços:**
   - A página inicial mostra a lista de serviços oferecidos pelo salão.
   - Possui um botão que direciona o cliente para um agendamento (a página de agendamento ainda não foi implementada).

2. **💼 Seção do Funcionário:**
   - **Login:** Permite que os funcionários façam login no sistema.
   - **Gestão do Estoque:**
     - Adicionar produtos com as seguintes informações:
       - Nome do produto
       - Descrição
       - Custo do produto
     - Exibir a lista de produtos cadastrados em uma tabela.
     - Editar produtos existentes (alterar informações ou apagar produtos).
     - Barra de busca para encontrar produtos pelo **nome** ou **ID**.

### Back-end
1. **🔄 Integração com o Banco de Dados:**
   - **CRUD de Produtos:**
     - Criar: Adiciona um novo produto ao estoque.
     - Ler: Retorna todos os produtos do estoque.
     - Atualizar: Atualiza as informações de um produto existente.
     - Deletar: Remove um produto do estoque.
   
2. **📊 TypeORM:**
   - Facilita a comunicação com o banco de dados MySQL, permitindo a estruturação das entidades e execução de consultas.

## 👥 Autores
O projeto foi desenvolvido em equipe, com as seguintes responsabilidades:

- **João Gabriel**:
  - Liderança do projeto.
  - Desenvolvimento do back-end (Node.js, TypeScript, TypeORM).
  - Integração com o banco de dados MySQL.

- **Gabriel Meiki**:
  - Desenvolvimento do front-end (HTML, CSS, JavaScript).
  - Implementação da interface com Bootstrap.
  - Criação das páginas HTML.

- **Geovane Correia**:
  - Configuração do ambiente e gestão do repositório.
  - Testes e revisões do código.
  - Documentação do projeto.
 
- **Vivian Brito**:
  - Configuração do banco de dados com MySQL.

- **Gustavo José**:
  - Suporte ao banco de dados.

- **Linda Caroly**:
  - Suporte a documentação.

## 🔧 Observações
- A página de agendamento ainda não foi implementada.
- Algumas telas na parte do funcionário estão pendentes de desenvolvimento.

## 📦 Instalação do Projeto
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Acesse a pasta do back-end e instale as dependências:
   ```bash
   cd backend
   npm install
   ```
3. Configure o banco de dados MySQL e ajuste as credenciais no arquivo `ormconfig.json`.
4. Execute o servidor:
   ```bash
   npm run dev
   ```
5. Acesse a pasta do front-end e abra o arquivo `index.html` no navegador.

## 🚀 Melhorias Futuras
- Implementar a página de agendamento para os clientes.
- Desenvolver outras telas pendentes na seção do funcionário.
- Adicionar autenticação e controle de permissões para os usuários.
- Melhorar a interface do usuário com novas funcionalidades dinâmicas.

---
**🚀 Desenvolvido para otimizar o gerenciamento e controle do Salão Escola Senac.**
