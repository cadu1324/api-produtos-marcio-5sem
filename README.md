# 🛒 API de Produtos - Node.js + MongoDB

Esta aplicação é uma API REST para gerenciamento de produtos, construída com **Node.js**, **Express** e **MongoDB**. A API permite criar, listar, atualizar e excluir produtos com validação de dados e documentação interativa.

---

## 🚀 Tecnologias usadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Yup (validação de dados)
- Swagger UI (documentação)
- Dotenv (variáveis de ambiente)

---

## 📦 Instalação

```bash
git clone https://github.com/cadu1324/api-produtos-marcio-5sem.git
cd api-produtos-marcio-5sem
npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env` com a seguinte estrutura:

```env
PORT=3000
MONGO_URI=mongodb+srv://SEU_USUARIO:SENHA@seu-cluster.mongodb.net/seu-banco?retryWrites=true&w=majority
```

---

## ▶️ Como rodar a API

```bash
npm start
```

A API estará disponível em: `http://localhost:3000`

---

## 📚 Documentação

A documentação interativa da API está disponível em:

```
GET http://localhost:3000/documentation
```

Lá você pode testar endpoints como:
- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`

---

## ✅ Exemplo de body para criação de produto

```json
{
  "name": "Teclado Gamer",
  "description": "Teclado com iluminação RGB",
  "color": "Preto",
  "weight": 0.75,
  "type": "periférico",
  "price": 250.99,
  "registerDate": "2025-05-27T10:00:00Z"
}
```

---

## 🧪 Validação com Yup

Todos os campos são validados antes de persistir no banco.
- `registerDate` deve estar no formato ISO 8601.
- `price` e `weight` devem ser números positivos.
- Todos os campos são obrigatórios.

---

## 📁 Estrutura de pastas

```
.
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
├── documentation/   ← Swagger JSON aqui
├── .env
└── index.js
```

---

## 👨‍💻 Autor

Feito por Carlos Eduardo.  
Projeto acadêmico do segundo bimestre.

---

## 📝 Licença

Este projeto é livre para fins educacionais.