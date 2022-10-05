#Tutorial de instalação node 
acesse https://nodejs.org/, baixe e instale no seu computador.(caso ja tenha instalado n precisa instalar no seu computador dnv)
Para conferir se já tem instalado em sua maquina basta abrir seu vscode e abrir o terminal e digitar node -v

##Para instalar o json-server
Execute no terminal o comando npm install -g json-server (caso já tenha instalado em seu computador n precisa instalar dnv)
Para conferir se já tem instalado em sua máquina basta abrir o vscode e abrir o terminal e digitar npx -v

##Explicação: json-server é a biblioteca pra simular um banco de dados com API REST.

Para executar o projeto
No terminal, dentro da pasta da aplicação execute npx json-server db.json --port 8000

Com isso você terá acesso a uma API REST no endereço http://localhost:8000

Caso use uma porta diferente da 8000 acesse o arquivo eventos.js e altere o valor de API_URL pela porta que esteja usando.

Lembre-se de colocar esse valor entre aspas simples ('').

Pronto, agora basta abrir o arquivo index.html com seu navegador e pronto (não recomendo abrir com liveserver)!
