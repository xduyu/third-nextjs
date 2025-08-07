# Next.js ToDo App

A simple ToDo list built with Next.js using API routes.
Allows you to add and display tasks with a title and description.

---

## Features

* Add tasks via a form
* Display task list from the API
* Backend API with GET and POST methods using Next.js API routes
* Built with React and TypeScript
* In-memory task storage on the server (temporary)

---

## Installation & Running

1. Clone the repo:

```bash
git clone https://github.com/xduyu/first-nextjs.git
cd first-nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run dev
```

4. Open in your browser: [http://localhost:3000](http://localhost:3000)

---

## Project Structure

* `/src/app/main/page.tsx` — main page with task form and list
* `/app/create/todo/page.tsx` — main page for create new task
* `/pages/api/todo.js` — API route handling GET and POST for tasks

---

## How to Use

* Enter a task title and description in the form fields
* Click "Create" to add the task
* Tasks will be displayed below and fetched from the API

---

## Notes

* Tasks are stored in server memory (no database) — list resets on server restart
* Frontend uses TypeScript, backend API uses JavaScript

---

## Possible Improvements

* Add a database (MongoDB, SQLite) for persistent storage
* Implement task deletion and editing
* Add user authentication
* Improve UI styling with Tailwind CSS or similar

---

## License

MIT

