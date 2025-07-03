```markdown
<div align="center">
  <img src="https://github.com/user-attachments/assets/febb704f-bdf5-4ce6-bac4-6921313a8be9" alt="Mad Thoughts Banner" width="100%" />
</div>

<h1 align="center">🧠 Mad Thoughts</h1>

<p align="center">
  A creative blog platform built with Next.js where users can express their thoughts, and admins can manage content. Features include authentication, blog management, and admin control.
</p>

---

## ✨ Features

- 🌐 Blog creation, display, and detail pages  
- 🔐 Secure authentication with Google and Credentials  
- 🧾 Admin panel for managing posts and users  
- 💬 Comments, dates, and post metadata  
- ⚙️ Built-in MongoDB integration and data fetching  
- 🛡️ JWT-based role control for admin-only actions  

---

## 🛠 Tech Stack

- **Frontend:** Next.js 14, Tailwind CSS  
- **Backend:** Node.js, MongoDB  
- **Auth:** NextAuth (Google + Credentials)  
- **Others:** React Hooks, ESLint, Prettier, Modular Components  

---

## 📂 Project Structure

```bash
├── src/
│   ├── app/             # Next.js routing
│   ├── components/      # UI components (navbar, forms, cards)
│   ├── lib/             # Database, Auth, Helpers
│   ├── models/          # MongoDB models (User, Post)
│   ├── styles/          # CSS Modules
│   └── public/          # Assets (images, icons)
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sajad-ahmed-soomro/Mad-Thoughts.git
cd Mad-Thoughts
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string_here

GOOGLE_ID=your_google_oauth_client_id
GOOGLE_SECRET=your_google_oauth_client_secret

NEXTAUTH_SECRET=your_nextauth_secret
```

### 4. Build and Run the Project

```bash
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---
```
