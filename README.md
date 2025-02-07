# Todo App - Frontend

This application is the frontend for the Todo App, a task management tool built with Angular.

## 🚀 Content

- [Live Demo](#live-demo)
- [Built With](#built-with)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Best Practices](#best-practices)

## 🎯 Live Demo

The application is hosted on:

- [Firebase Hosting](https://atom-todo-app-65966.web.app/)

## 🛠 Built With

- **Angular 19** - Component-based UI framework
- **Angular Material** - UI components and theming
- **RxJS** - Reactive programming
- **SCSS** - Styling
- **JWT Authentication** - User authentication with tokens

## ✅ Features

- User authentication with email login
- Task management: create, edit, delete, mark as completed
- Responsive design for mobile and desktop
- HTTP interceptor for automatic JWT handling
- Angular routing with lazy loading

## 📥 Installation

```sh
git clone https://github.com/your-repo/frontend.git
cd frontend
npm install
ng serve
```

## 🚀 Usage

1. Open http://localhost:4200/
2. Enter your email to log in or create an account
3. Manage your tasks!

## 📂 Project Structure

```
src/
│── app/
│   ├── auth/          # Login functionality
│   ├── components/    # Reusable components throughout all app
│   ├── services/          # Interceptors, services, guards
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app.routes.ts
│   ├── ...
│── styles.scss
│── index.html
│── main.ts
│── environments/
```

## 📌 Best Practices

- Lazy Load Modules for better performance
- Use Angular Material for consistent UI
- Implement RxJS best practices (Avoid Memory Leaks)
- Follow TypeScript strict mode
