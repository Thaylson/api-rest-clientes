# 📦 API REST de Clientes

Projeto desenvolvido para fins de estudo, com foco em **backend**, utilizando **Node.js**, **Express** e arquitetura **MVC**. A API realiza operações básicas de **CRUD** (Create, Read, Update, Delete) sobre clientes, persistindo dados em um arquivo JSON.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* JavaScript (CommonJS)
* Insomnia (para testes)

---

## 📁 Estrutura do Projeto

```bash
myAPI/
├── src/
│   ├── controllers/
│   │   └── clienteController.js
│   ├── routes/
│   │   └── clienteRoutes.js
│   ├── database/
│   │   └── data.json
│   └── app.js
├── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### 📌 Descrição das Pastas

* **controllers** → Lógica de negócio (tratamento das requisições)
* **routes** → Definição das rotas da API
* **database** → Simulação de banco de dados com JSON
* **app.js** → Configuração principal do Express
* **index.js** → Ponto de entrada da aplicação

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Thaylson/api-rest-clientes.git
```

### 2️⃣ Acessar a pasta

```bash
cd api-rest-clientes
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Executar o servidor

```bash
node index.js
```

📍 Servidor rodando em:

```
http://localhost:3000
```

---

## 📌 Endpoints da API

### 🔹 Listar todos os clientes

**GET** `/clientes`

📥 Resposta:

```json
[
  {
    "id": 1,
    "nome": "João",
    "email": "joao@email.com",
    "idade": 25
  }
]
```

---

### 🔹 Buscar cliente por ID

**GET** `/clientes/:id`

📥 Resposta:

```json
{
  "id": 1,
  "nome": "João",
  "email": "joao@email.com",
  "idade": 25
}
```

---

### 🔹 Criar novo cliente

**POST** `/clientes`

📤 Body (JSON):

```json
{
  "nome": "Maria",
  "email": "maria@email.com",
  "idade": 30
}
```

📥 Resposta:

```json
{
  "id": 2,
  "nome": "Maria",
  "email": "maria@email.com",
  "idade": 30
}
```

---

### 🔹 Atualizar cliente

**PUT** `/clientes/:id`

📤 Body (JSON):

```json
{
  "nome": "Maria Silva",
  "email": "maria.silva@email.com",
  "idade": 31
}
```

📥 Resposta:

```json
{
  "id": 2,
  "nome": "Maria Silva",
  "email": "maria.silva@email.com",
  "idade": 31
}
```

---

### 🔹 Deletar cliente

**DELETE** `/clientes/:id`

📥 Resposta:

```
Status 204 - No Content
```

---

## 🧪 Testes

Os testes manuais da API foram realizados utilizando o **Insomnia**, simulando requisições HTTP para todos os endpoints.

---

## 🧠 Aprendizados

* Organização de projeto backend
* Arquitetura MVC
* Criação de API REST
* Uso do Express
---

## 👨‍💻 Autor

**Thaylson Fernando da Silva**

🔗 GitHub: [https://github.com/Thaylson](https://github.com/Thaylson)

---

📌 *Projeto desenvolvido para fins educacionais.*
