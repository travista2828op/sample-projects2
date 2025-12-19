# 🚀 Quick Start Guide - Image-to-Prompt Web Application

## 🎉 Welcome!

Your full-stack Image-to-Prompt web application is ready to run!

## ⚡ 5-Minute Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment
```bash
# Update backend environment
cp packages/backend/.env.example packages/backend/.env
# Edit packages/backend/.env and add your OpenAI API key

# Update frontend environment
cp packages/frontend/.env.example packages/frontend/.env
```

### Step 3: Start Development Servers
```bash
npm run dev
```

### Step 4: Open in Browser
Visit: **http://localhost:3000**

That's it! 🎊

---

## 🔧 Backend Configuration

Edit `packages/backend/.env`:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT=30
MAX_FILE_SIZE=10485760
```

### Getting Your OpenAI API Key

1. Go to https://platform.openai.com/account/api-keys
2. Click "Create new secret key"
3. Copy the key
4. Paste it into `OPENAI_API_KEY` in `.env`
5. Make sure your account has Vision API access

---

## 📂 Project Structure

```
.
├── packages/
│   ├── backend/          # Express API server
│   │   ├── src/          # TypeScript source code
│   │   │   ├── index.ts              # Main app
│   │   │   ├── routes/upload.ts      # Upload endpoint
│   │   │   ├── services/visionService.ts  # Vision API
│   │   │   ├── middleware/           # Express middleware
│   │   │   └── types/                # TypeScript types
│   │   ├── .env.example
│   │   └── package.json
│   │
│   └── frontend/         # React + Vite app
│       ├── src/          # React components
│       │   ├── App.tsx               # Main app
│       │   ├── components/           # React components
│       │   ├── services/api.ts       # API client
│       │   └── types/                # TypeScript types
│       ├── .env.example
│       └── package.json
│
├── package.json          # Root config (workspaces)
└── README.md             # Full documentation
```

---

## 🎯 What You Can Do

### With the Frontend
- ✅ Drag and drop images
- ✅ Click to upload images
- ✅ See image preview
- ✅ Get AI-generated prompts
- ✅ Copy prompts to clipboard

### With the API
- ✅ Upload images via `/api/upload`
- ✅ Get detailed prompts back
- ✅ Handle errors gracefully
- ✅ Rate limiting enabled

---

## 💻 Common Commands

```bash
# Start everything
npm run dev

# Type check (optional, runs in CI)
npm run type-check

# Build for production
npm run build

# Start production build
npm start

# Only run backend
cd packages/backend && npm run dev

# Only run frontend
cd packages/frontend && npm run dev
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -i :3000 | awk 'NR!=1 {print $2}' | xargs kill -9

# Kill process on port 3001
lsof -i :3001 | awk 'NR!=1 {print $2}' | xargs kill -9
```

### Missing API Key
```bash
# Check if .env file exists
ls packages/backend/.env

# Check if it has OPENAI_API_KEY
cat packages/backend/.env
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Frontend Not Connecting to Backend
1. Verify backend is running: `curl http://localhost:3001/api/health`
2. Check `VITE_API_URL` in `packages/frontend/.env`
3. Check `CORS_ORIGIN` in `packages/backend/.env`

---

## 📚 Documentation

- **`README.md`** - Complete project documentation
- **`DEPLOYMENT_GUIDE.md`** - How to deploy to production
- **`UI_PREVIEW.md`** - UI component overview
- **`API_TESTING.md`** - API testing guide

---

## 🌐 API Endpoints

### Health Check
```bash
curl http://localhost:3001/api/health
```

### Upload Image
```bash
curl -X POST http://localhost:3001/api/upload \
  -F "image=@your-image.jpg"
```

---

## 🎨 How It Works

1. **User uploads image** in React frontend
2. **Frontend sends to backend** as multipart form data
3. **Backend receives image** and validates it
4. **Backend converts to base64** and sends to OpenAI Vision API
5. **OpenAI analyzes image** and returns detailed description
6. **Backend returns prompt** to frontend
7. **Frontend displays prompt** and copy button
8. **User can copy prompt** for use elsewhere

---

## ⚙️ Technology Stack

### Frontend
- React 18
- TypeScript
- Vite (dev server & build)
- Tailwind CSS (styling)

### Backend
- Node.js
- Express.js
- TypeScript
- OpenAI SDK
- Multer (file upload)
- Express Rate Limit

---

## 🚀 Next Steps

1. **Test locally** - Follow Quick Start above
2. **Try uploading images** - Test the full flow
3. **Review code** - Check `packages/` for source
4. **Deploy** - See DEPLOYMENT_GUIDE.md
5. **Customize** - Modify colors, add features

---

## 📞 Support

If you encounter issues:

1. Check DEPLOYMENT_GUIDE.md troubleshooting section
2. Check API_TESTING.md for API examples
3. Verify environment variables are set correctly
4. Check server logs for error messages
5. Ensure ports 3000 and 3001 are available

---

## 📝 Notes

- Default rate limit: 30 requests per 15 minutes
- Max file size: 10MB
- Supported formats: JPEG, PNG, WebP, GIF
- Processing time: 2-5 seconds per image
- Runs locally - all data stays on your machine

---

**Happy coding! 🎉**

Questions? Check the documentation files or review the source code.
