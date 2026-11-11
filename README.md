# 🎬 Movie Search Website

A Movie Search Website that allows users to discover and search for movies using the **OMDb API**. It displays movie titles and posters dynamically based on search results.

The project also includes a backend built with Node.js, Express.js, and MongoDB to manage movie reviews.

## ✨ Features

- 🔍 Search movies by title
- 🎥 Display movie posters dynamically
- 📝 Search and explore different movies
- 🌐 Fetch movie information using OMDb API
- 💾 Backend integration with MongoDB
- ⭐ Add and manage movie reviews
- 🎨 Dark-themed user interface
- ⚡ Dynamic content rendering using JavaScript

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and layout |
| JavaScript | Dynamic functionality |
| OMDb API | Movie information and posters |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | Review data storage |

## 📂 Project Structure

```text
movie-searching/
│
├── backend/
│   ├── apis/
│   │   ├── reviews.controller.js
│   │   └── reviews.route.js
│   │
│   ├── dao/
│   │   └── reviewsDAO.js
│   │
│   ├── index.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── index.html
├── script.js
├── styles.css
└── image1.png
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd "movie searching"
```

### 3. Run the Frontend

Open `index.html` in your browser.

### 4. Setup the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Configure your MongoDB credentials in the `.env` file:

```env
MONGO_USERNAME=your_username
MONGO_PASSWORD=your_password
```

Start the backend:

```bash
npm start
```

The backend runs on port **8000**.

## 🔗 API Integration

This project uses the OMDb API to retrieve movie information.

API: https://www.omdbapi.com/

The website fetches movie search results and dynamically displays movie titles and posters.

## 🎯 Project Objective

The main objective of this project is to gain practical experience in frontend and backend development, API integration, database connectivity, and dynamic web application development.

## 👩‍💻 Author

**Meghana**

GitHub: [@Kambhampatimeghana](https://github.com/Kambhampatimeghana)

## ⚠️ Disclaimer

This project is developed for educational purposes. Movie information is retrieved from the OMDb API.

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!

---

**Made with ❤️ by Meghana**
