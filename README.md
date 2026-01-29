# ModBrew CMS

A flexible, white-label CMS for managing content and components.  
ModBrew is designed for highly customizable content schemas and reusable component-based content. This repository contains the **backend** API of the CMS.  

---

## Table of Contents

1. [Overview](#overview)  
2. [Tech Stack](#tech-stack)  
3. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Setup](#setup)  
   - [Running the Dev Server](#running-the-dev-server)  
4. [Database Configuration](#database-configuration)  
5. [Project Structure](#project-structure)  
6. [API Endpoints](#api-endpoints)  
7. [Contributing](#contributing)  
8. [License](#license)  

---

## Overview

ModBrew CMS enables content managers and developers to create, manage, and render flexible content components with schemas.  
It supports:  

- Component-based content modeling  
- Dynamic form generation based on component schemas  
- Reusable content blocks  

> ⚠️ **TODO:** Add more context about the CMS purpose, target users, and deployment environment.

---

## Tech Stack

- **Backend:** Node.js, TypeScript, Express (or Fastify if applicable)  
- **Database:** MongoDB (WiredTiger storage engine)  
- **Frontend (separate repo):** React + TypeScript  
- **Other:** Yarn, nodemon, concurrently, Husky for pre-commit hooks  

> ⚠️ **TODO:** Confirm backend framework (Express / Nest / Fastify) and list additional libraries.

---

## Getting Started

### Prerequisites

- Node.js >= XX.X  
- Yarn >= X.X  
- MongoDB installed locally or via Homebrew  

> ⚠️ **TODO:** Add system requirements and versions you test with.

---

### Setup

1. Clone the repo:

```bash
git clone git@github.com:your-org/modbrew-cms-be.git
cd modbrew-cms-be
```

2. Install Dependencies:
```bash
yarn install
```

3. Set up local MongoDB directory:
```bash
mkdir -p ~/mongo/dbs/modbrew
touch ~/.config/mongodb/modbrew.conf
# Configure dbPath and port in modbrew.conf
```

4. Running the Dev Server
Start MongoDB:
```bash
mongod --config ~/.config/mongodb/modbrew.conf
```

5. Start backend API:
```bash
yarn dev:api
```

## Project Structure
```
modbrew-cms-be/
├─ src/
│  ├─ index.ts           # Entry point
│  ├─ api/               # API route handlers
│  ├─ models/            # MongoDB models
│  ├─ controllers/       # Business logic
│  └─ hooks/             # Shared logic/hooks
├─ scripts/
│  └─ start-mongo.sh     # Script to start local MongoDB
├─ package.json
└─ tsconfig.json
```

## API Endpoints
> ⚠️ TODO: Add API documentation, example requests/responses, authentication info, etc.

## Contributing
1. Fork the repository
2. Create a feature branch (git checkout -b feature/YourFeature)
3. Commit your changes (git commit -m "Add some feature")
4. Push to the branch (git push origin feature/YourFeature)
5. Create a Pull Request

> ⚠️ TODO: Add code style guide, linting rules, pre-commit hooks, and testing info.

## Liscense
> ⚠️ TODO: Add license information (MIT, proprietary, etc.)