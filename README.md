# ♻️ ReWear – Community Clothing Exchange

**ReWear** is a full-stack web platform that promotes sustainable fashion by allowing users to exchange unused clothes. Users can swap directly or use a point-based redemption system. The goal is to reduce textile waste and build a community-driven circular fashion economy.

---

## 🌟 Features

- 🔐 Email/password authentication  
- 🏠 Landing page with intro, featured items, and CTAs  
- 👤 Dashboard with profile info, points balance, uploaded items, and swap history  
- 📦 Item details page with full description, uploader info, and swap/redeem options  
- ➕ Add new item with images, size, type, tags, and condition  
- 🛠️ Admin panel to approve/reject listings and remove spam  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Node.js / Express / Firebase  
- **Database:** MongoDB / Supabase / Firebase  
- **Auth:** Firebase Auth / Custom Auth  
- **Deployment:** Vercel / Netlify

---

## 📦 Setup Instructions

### 🔧 Prerequisites
- Node.js v16+  
- npm or yarn  
- Git

### 🚀 Getting Started

```bash
git clone https://github.com/yourusername/rewear.git
cd rewear
npm install
Create .env.local from .env.example and add required variables like:


NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
DATABASE_URL=your_database_url
FIREBASE_API_KEY=your_firebase_key
👨‍💻 Development

npm run dev
Access app at: http://localhost:3000

📦 Production Build

npm run build
npm start
🛠️ Common Issues
Missing autoprefixer/postcss?

Run:

npm install autoprefixer postcss
Module type warning? Add to package.json:

json
Copy
Edit
"type": "module"
✅ Future Plans
Location-based swaps

In-app chat for exchanges

NGO/thrift store integration

Badges for active users


📬 Contact
📧 nishantgenius03@gmail.com

💼 LinkedIn

Built as my first official full-stack project to combine tech with environmental impact. Open to feedback and collaboration!

