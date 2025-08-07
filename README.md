# Next.js Users List

This is a simple Next.js project demonstrating how to fetch and display a list of users from an API endpoint.

---

## Features

* Fetch users from `/api/users` endpoint
* Display user names in a list
* Uses React hooks (`useState`, `useEffect`) with TypeScript typings
* Basic styling with Tailwind CSS (optional)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API

* `/api/users` — returns JSON with a list of users in the format:

```json
{
  "users": [
    { "name": "John" },
    { "name": "Jane" }
  ]
}
```

---

## Usage

* The main page fetches the users list on load and displays each user's name.
* Modify or extend the API or frontend as needed.

---

## License

MIT

---