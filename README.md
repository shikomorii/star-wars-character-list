Star Wars Character Explorer
Este projeto é uma aplicação React que permite visualizar e buscar personagens de Star Wars usando a Star Wars API. A aplicação exibe uma lista de personagens, permitindo a busca por nome e acesso a informações detalhadas sobre cada personagem em uma janela modal.
  
Figma do projeto:https://www.figma.com/proto/RiDcaXEheXYpODOHq2TfM0/Star-Wars?node-id=1-4&node-type=canvas&t=bh45xZgEwDaqqzAU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4

Funcionalidades
Busca de personagens por nome.
Exibição de uma lista de personagens com imagens.
Modal com detalhes do personagem, incluindo filmes nos quais ele aparece.
Animação de fundo com estrelas e efeito de sabre de luz que segue o cursor.
Pré-requisitos
Node.js: Certifique-se de que o Node.js está instalado na máquina. Recomenda-se a versão 14 ou superior.
Git: Ter o Git instalado facilita o processo de clonagem do repositório.
Como Rodar o Projeto
Clone o repositório

bash
Copiar código
git clone https://github.com/shikomorii/star-wars-character-explorer.git
cd star-wars-character-explorer
Instale as dependências

Execute o comando abaixo para instalar todas as dependências do projeto:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento

Use o comando abaixo para iniciar a aplicação:

bash
Copiar código
npm start
A aplicação estará disponível no navegador em http://localhost:3000.

Nota sobre Vulnerabilidades nas Dependências
Durante o desenvolvimento, foram identificadas algumas vulnerabilidades nas dependências ao executar npm audit. Foi aplicado npm audit fix para corrigir vulnerabilidades menores. No entanto, o comando npm audit fix --force foi evitado para prevenir problemas de compatibilidade com dependências principais, como o react-scripts. Essas vulnerabilidades restantes são conhecidas e podem ser abordadas em uma atualização futura.

Processo de Desenvolvimento
Este projeto foi desenvolvido com foco em uma interface intuitiva e interativa para listar e visualizar detalhes dos personagens de Star Wars. Aqui estão alguns aspectos do desenvolvimento:

API e Busca: Foi utilizada a Star Wars API (SWAPI) para obter dados dos personagens e filmes. O uso de axios facilitou a requisição e manipulação dos dados.
Interface e Efeitos: Além de um design responsivo, a aplicação conta com animações de fundo para criar uma "atmosfera" Star Wars, incluindo estrelas e um efeito de sabre de luz que segue o cursor do usuário.
Modal para Detalhes: A modal exibe informações detalhadas de cada personagem, incluindo filmes com data de lançamento.
Testes: Testes unitários foram implementados para garantir o bom funcionamento da busca e outros componentes principais.
Desafios Encontrados
Alguns dos desafios enfrentados no desenvolvimento incluem:

Problemas de Vulnerabilidade: As vulnerabilidades nas dependências exigiram uma avaliação cuidadosa para não quebrar a funcionalidade.
Integração da API e Carga de Dados: Houve ajustes para garantir que os dados dos personagens fossem carregados e exibidos corretamente.
Aprimoramento de Interface: Criar um efeito visual dinâmico, como estrelas e o sabre de luz, exigiu experimentação com useEffect e manipulação direta do DOM.
Autor
Desenvolvido por Sebastian Oyarbide.

Sinta-se à vontade para clonar, explorar e modificar este projeto! Que a Força esteja com você!