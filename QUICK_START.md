# 🚀 Quick Start Guide - MongoDB Atlas Setup

## For New Developers

This project uses **MongoDB Atlas** (cloud-hosted MongoDB) instead of Prisma/PostgreSQL.

---

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Create MongoDB Atlas Account
👉 Go to: https://www.mongodb.com/cloud/atlas/register

- Sign up (free)
- Verify email
- Choose "Build a Database"

### 3. Create Free Cluster
- Select **M0 FREE** tier
- Choose closest region
- Click "Create Cluster" (takes 2-3 minutes)

### 4. Create Database User
- Go to **Database Access** (left sidebar)
- Click "Add New Database User"
- Choose "Password" authentication
- Username: `uplifts_user` (or your choice)
- Password: Generate secure password (save it!)
- Database User Privileges: "Read and write to any database"
- Click "Add User"

### 5. Whitelist Your IP
- Go to **Network Access** (left sidebar)
- Click "Add IP Address"
- Click "Allow Access from Anywhere" (for development)
- Or add your specific IP address
- Click "Confirm"

### 6. Get Connection String
- Go to **Database** (left sidebar)
- Click "Connect" on your cluster
- Choose "Connect your application"
- Copy the connection string (looks like):
  ```
  mongodb+srv://uplifts_user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
  ```

### 7. Configure Environment
```bash
# Copy example file
cp .env.example .env

# Edit .env file
# Replace <password> with your actual password
# Add database name at the end
```

**Example `.env`:**
```env
MONGODB_URI="mongodb+srv://uplifts_user:MySecurePass123@cluster0.xxxxx.mongodb.net/uplifts_media?retryWrites=true&w=majority"
```

**Important:** 
- Replace `<password>` with your actual password
- Add `/uplifts_media` before the `?` (database name)
- No spaces in the connection string

### 8. Start Development Server
```bash
npm run dev
```

Open http://localhost:3000

---

## ✅ Verify Setup

### Test Enquiry Form
```bash
curl -X POST http://localhost:3000/api/enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Testing the setup"
  }'
```

**Expected:** `{"success":true,"enquiry":{...}}`

### Test Newsletter
```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

**Expected:** `{"success":true,"subscriber":{...}}`

### Check MongoDB Atlas
- Go to **Database** → **Browse Collections**
- You should see:
  - `enquiries` collection (with your test data)
  - `subscribers` collection (with your test email)

---

## 🐛 Troubleshooting

### "MONGODB_URI is not defined"
- ✅ Check `.env` file exists in project root
- ✅ Check `MONGODB_URI` is spelled correctly
- ✅ Restart dev server after creating `.env`

### "MongoServerError: bad auth"
- ✅ Check password is correct (no `<` `>` brackets)
- ✅ Check username matches database user
- ✅ Check user has "Read and write" permissions

### "Connection timeout"
- ✅ Check Network Access allows your IP
- ✅ Try "Allow Access from Anywhere" (0.0.0.0/0)
- ✅ Check cluster is not paused (free tier pauses after inactivity)

### "Database not found"
- ✅ MongoDB creates database automatically on first write
- ✅ Check database name is in connection string: `/uplifts_media?`
- ✅ Try submitting a form to trigger database creation

### Build fails with "MONGODB_URI not defined"
- ✅ This is normal - set a dummy value for build:
  ```bash
  set MONGODB_URI=mongodb://localhost:27017/test & npm run build
  ```
- ✅ In production (Vercel), set environment variable in dashboard

---

## 🚀 Deploy to Production (Vercel)

### 1. Push to GitHub
```bash
git add .
git commit -m "MongoDB migration complete"
git push origin main
```

### 2. Import to Vercel
- Go to https://vercel.com
- Click "Import Project"
- Connect GitHub repository
- Click "Import"

### 3. Add Environment Variable
- In Vercel dashboard: Settings → Environment Variables
- Add:
  - **Name:** `MONGODB_URI`
  - **Value:** Your MongoDB connection string
  - **Environments:** Production, Preview, Development
- Click "Save"

### 4. Deploy
- Vercel deploys automatically
- Wait for build to complete (~2 minutes)
- Test your production URL

### 5. Update MongoDB Network Access
- Go to MongoDB Atlas → Network Access
- Ensure `0.0.0.0/0` is allowed (for Vercel)
- Or add Vercel's IP ranges (more secure)

---

## 📚 Additional Resources

- **Full Migration Guide:** See `MIGRATION_GUIDE.md`
- **Detailed README:** See `README.md`
- **MongoDB Atlas Docs:** https://docs.atlas.mongodb.com/
- **Mongoose Docs:** https://mongoosejs.com/docs/

---

## 🎯 Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 💡 Pro Tips

1. **Free Tier Limits:**
   - 512 MB storage
   - Shared RAM
   - Pauses after 60 days inactivity
   - Perfect for development and small projects

2. **Connection String Security:**
   - Never commit `.env` to git (already in `.gitignore`)
   - Use different credentials for dev/prod
   - Rotate passwords regularly

3. **Database Naming:**
   - Use `uplifts_media` for production
   - Use `uplifts_media_dev` for development
   - Use `uplifts_media_test` for testing

4. **Monitoring:**
   - Check MongoDB Atlas dashboard for metrics
   - Set up alerts for connection issues
   - Monitor query performance

5. **Backup:**
   - Free tier includes automated backups
   - Can restore from any point in last 2 days
   - Upgrade for longer retention

---

## ✨ You're All Set!

Your development environment is ready. Start building! 🎉

**Next Steps:**
1. Explore the codebase
2. Make changes and see hot reload
3. Test the enquiry form in the browser
4. Check MongoDB Atlas to see your data
5. Deploy to production when ready

**Questions?** Check `MIGRATION_GUIDE.md` or open an issue.
