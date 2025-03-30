# Projeto

Este repositório contém a estrutura de arquivos e diretórios do BackEnd do projeto da Fazenda de Grãos. Abaixo está uma descrição de cada pasta e arquivo com suas respectivas funcionalidades.

## Estrutura do Projeto

### Diretórios

- **.idea/**: Configurações do ambiente de desenvolvimento (geralmente do WebStorm ou IntelliJ IDEA).
- **config/**: Contém arquivos de configuração do sistema.
- **src/**: Diretório principal do código-fonte da aplicação.
  - **controller/**: Define os controladores responsáveis por manipular as requisições HTTP.
  - **database/**: Contém a estrutura e configurações do banco de dados, incluindo migrações e seeds.
  - **model/**: Define os modelos da aplicação que representam as entidades do banco de dados.
  - **routes/**: Contém as definições das rotas da API.
  - **service/**: Contém a lógica de negócios do sistema.
  - **utils/**: Funções auxiliares e utilitárias para uso em toda a aplicação.

- **test/**: Contém os testes automatizados do sistema.

### Arquivos

- **.gitignore**: Define arquivos e diretórios que devem ser ignorados pelo Git.
- **package.json**: Define as dependências do projeto e scripts de execução.
- **package-lock.json**: Garante a consistência das versões das dependências instaladas.
- **server.js**: Arquivo principal do servidor, responsável por inicializar a aplicação.

## Como Executar o Projeto
1. Faça o clone do repositório:
   ```
   git clone https://github.com/Itor-Carlos/projeto-es2-backend.git
   ```
2. Acesse a pasta onde o repositório foi clonado
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo chamado .env com o seguinte conteúdo
   ```
   PORT_APP= 
   DB_HOST=
   DB_USER=
   DB_PASS=
   DB_NAME= 
   DB_PORT=
   DB_SCHEMA=
   ```
5. Preencha as informações do .env de acordo com suas credenciais
6. Execute o projeto:
   ```bash
   node server.js
   ```
