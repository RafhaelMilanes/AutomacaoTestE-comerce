# Teste E2E - Realizando a compra de produtos com sucesso

Este é um teste de automação end-to-end (E2E) que simula o processo de compra de produtos em um site de comércio eletrônico. O teste é realizado utilizando o framework Cypress para execução de testes automatizados em aplicações web.

## Funcionalidades Testadas:

### 1. Login
- O teste inicia com o login em uma página de login utilizando credenciais de usuário padrão.
- As credenciais utilizadas são 'standard_user' como nome de usuário e 'secret_sauce' como senha.

### 2. Ordenação de Produtos
- Após o login bem-sucedido, os produtos são exibidos na página 'Products'.
- Os produtos são ordenados do menor para o maior preço.

### 3. Adição de Produtos ao Carrinho
- Três produtos são selecionados e adicionados ao carrinho de compras: 'Sauce Labs Onesie', 'Sauce Labs Bike Light' e 'Sauce Labs Bolt T-Shirt'.

### 4. Verificação do Carrinho
- A quantidade de itens no carrinho é verificada para garantir que todos os produtos foram adicionados corretamente.
- Os produtos presentes no carrinho são verificados para garantir que correspondem aos produtos selecionados.

### 5. Checkout
- O processo de checkout é iniciado após a verificação dos itens no carrinho.
- Informações de envio são preenchidas, incluindo o primeiro nome, último nome e código postal.

### 6. Verificação do Checkout
- Os produtos presentes no checkout são verificados para garantir que correspondem aos produtos selecionados.
- O valor total da compra é verificado para garantir sua precisão.

### 7. Conclusão do Pedido
- O pedido é concluído após o pagamento bem-sucedido.
- Uma mensagem de agradecimento é exibida confirmando que o pedido foi realizado com sucesso.

## Como Executar o Teste:
1. Certifique-se de ter o Cypress instalado globalmente ou localmente em seu projeto.
2. Clone este repositório em sua máquina local.
3. Navegue até o diretório do projeto no terminal.
4. Execute o comando `npm install` para instalar as dependências necessárias.
5. Execute o comando `npm run test` para iniciar a execução do teste.
6. Aguarde até que o teste seja concluído e verifique os resultados exibidos no terminal.
