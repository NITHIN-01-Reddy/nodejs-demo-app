# Node.js CI/CD Pipeline using GitHub Actions and Docker

## 📌 Project Overview

This project demonstrates a complete **CI/CD pipeline** for a Node.js application using **GitHub Actions and Docker**.
The pipeline automatically builds a Docker image and pushes it to DockerHub whenever code is pushed to GitHub.

This project helps in understanding real-world **DevOps automation and containerization workflow**.

---

## 🚀 Technologies Used

* Node.js
* Express.js
* Docker
* GitHub
* GitHub Actions
* DockerHub
* VS Code

---

## 🧩 Project Structure

```
nodejs-demo-app
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── README.md
└── .github
     └── workflows
           └── main.yml
```

---

## 🐳 Dockerfile

The Dockerfile is used to containerize the Node.js application.

```
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

---

## ⚙️ GitHub Actions Workflow

The CI/CD pipeline runs automatically on every push to the main branch.

### Workflow Steps

1. Checkout repository
2. Setup Node.js
3. Install dependencies
4. Build Docker image
5. Login to DockerHub
6. Push Docker image

---

## 🔄 CI/CD Pipeline Flow

```
Code Push → GitHub → GitHub Actions → Docker Build → DockerHub Push
```

---

## 🐳 DockerHub Image

Docker image is automatically pushed to DockerHub.

Example:

```
docker pull nithintv/nodejs-demo-app
```

Run container:

```
docker run -p 3000:3000 nithintv/nodejs-demo-app
```

Open in browser:

```
http://localhost:3000
```

Output:

```
Hello DevOps CI/CD Pipeline!
```

---

## 📦 GitHub Actions Workflow File

Location:

```
.github/workflows/main.yml
```

This file automates Docker build and push process.

---

## 🎯 Learning Outcomes

* Understanding CI/CD pipeline
* Docker containerization
* GitHub Actions automation
* DockerHub integration
* DevOps workflow implementation
* Real-world deployment process

---

## 📈 Project Workflow

```
VS Code
   ↓
GitHub Repository
   ↓
GitHub Actions
   ↓
Docker Build
   ↓
DockerHub
   ↓
Deployable Container
```

---

## 🧑‍💻 Author

**Nithin TV**

DevOps and Cloud Enthusiast

---

## ⭐ Future Improvements

* Add Kubernetes deployment
* Add automated testing
* Add Docker image version tagging
* Deploy on AWS or Azure
* Add monitoring and logging

---

## 📌 Conclusion

This project demonstrates a complete DevOps CI/CD pipeline using GitHub Actions and Docker, enabling automatic build and deployment of a Node.js application. It provides hands-on experience in modern DevOps practices and container-based deployment.
