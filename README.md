# Economic API

API que integra diversas APIs públicas de dados econômicos.

## Recursos disponíveis

A Economic API fornece acesso aos seguintes recursos:

* **IPCA:** O índice de preços ao consumidor, que mede a inflação.
* **Cotação do dólar:** A taxa de câmbio entre o dólar americano e o real brasileiro.

## Rotas

A Economic API fornece as seguintes rotas:

* **/ipca/:data:** Retorna o IPCA para a data especificada.
* **/dolar/:data:** Retorna a taxa de câmbio do dólar para a data especificada.

## Tecnologias

A Economic API é construída usando as seguintes tecnologias:

* **Express:** Um framework web para Node.js.
* **Dayjs:** Uma biblioteca de data e hora para JavaScript.

## APIs externas

A Economic API usa as seguintes APIs externas:

* **API do Banco Central do Brasil (BCB):** Para o IPCA.
* **API do Awesome:** Para cotação do dólar.