
# Tomenote - Clone Evernote

------------------------------

### Projeto que se baseia no conceito do App Evernote ( criação e edição de notas )

Esse foi o meu primeiro projeto Full-Stack, utilizando de todo conhecimento adquirido no últimos meses de estudo em programação, foi feito desde os primeiro mockups e planejamentos até o deploy, espero que gostem.

#### Para melhor visualização, aqui vai o link do site: [Site Tomenote](https://adrielsan.social)
### Lista das tecnologias que utilizei:

#### Back-End

* JavaScript
* NodeJS
* Express
* Mongoose
* MongoDB

### Front-End

* Figma
* HTML5
* CSS3
* SASS
* BootStrap
* JavaScript
* ReactJs

> Detalhes técnicos:

> Para os mockups da UI utilizei o Figma para desenhos das telas em padrão de grid Bootstrap em 3 tamanhos diferentes de responsividade ( XXL, LG e SM / Desktop, Tablet, Mobile ) me baseando na UX de sites ja conhecidos como o Evernote.

> No Back-End ( Feito primeiro ), optei por separar a API da aplicação Client. Utilizei do express e mongoose para fazer a conexão com o banco de dados não relacional local, com requisições de get, post, put e delete para consulta, adição, atualização e remoção como a base para o aplicativo, fazendo testes pelo Postman se estava tudo correto. Ainda no Back-End, para maior segurança utilizei a biblioteca BCrypt, que permite a criptografia para gerar um Token de acesso ( que é pedido para fazer as requisições ) ao invés de guardar a senha no banco de dados, assim torna seguro o armazenamento dos dados dos usuários e acesso às rotas.

> No Front-End utilizei do React junto com o bootstrap para a SPA, que ao meu ver é uma ótima forma de melhorar a UX por conta de sua fluidez de acesso e praticidade em compôr o código em components, dessa forma, o site ficou objetivo e prático. O editor de texto foi da biblioteca QuillJs

> O deploy foi feito na Digital Ocean ( créditos pelo github student ) utilizando da cloud do MongoDB para o banco de dados, aluguei um PaaS adicionando as variáveis locais para acesso ao Mongo cloud e a Api pelo client. O link é o de domínio próprio.