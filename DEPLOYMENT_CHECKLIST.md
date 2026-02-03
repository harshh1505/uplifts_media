# 🚀 Deployment Checklist - MongoDB Atlas Migration

## Pre-Deployment Verification

### ✅ Code Changes
- [x] Prisma dependencies removed from `package.json`
- [x] Mongoose dependency added (`^8.8.4`)
- [x] `/lib/prisma.ts` deleted
- [x] `/prisma` directory cleaned up
- [x] `/lib/mongodb.ts` created (connection utility)
- [x] `/lib/models/Enquiry.ts` created
- [x] `/lib/models/Subscriber.ts` created
- [x] `app/api/enquiry/route.ts` migrated to Mongoose
- [x] `app/api/subscribe/route.ts` migrated to Mongoose
- [x] `.gitignore` updated (removed Prisma references)
- [x] `.env.example` created with MongoDB URI template

### ✅ Documentation
- [x] `README.md` updated (tech stack, setup, deployment)
- [x] `MIGRATION_GUIDE.md` created (comprehensive guide)
- [x] `MIGRATION_SUMMARY.md` created (executive summary)
- [x] `QUICK_START.md` created (5-minute setup)
- [x] `DEPLOYMENT_CHECKLIST.md` created (this file)

### ✅ Build & Type Safety
- [x] `npm install` successful
- [x] TypeScript compilation passes (no errors)
- [x] `npm run build` successful
- [x] No linting errors
- [x] All imports resolved correctly

---

## Local Development Setup

### 1. Environment Configuration
- [ ] `.env` file created (copy from `.env.example`)
- [ ] `MONGODB_URI` configured with valid connection string
- [ ] Connection string format verified:
  ```
  mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
  ```
- [ ] No `<` `>` brackets in connection string
- [ ] Database name included in URI (e.g., `/uplifts_media`)

### 2. MongoDB Atlas Setup
- [ ] MongoDB Atlas account created
- [ ] Free M0 cluster created
- [ ] Database user created with read/write permissions
- [ ] Network access configured (IP whitelisted)
- [ ] Connection string obtained and tested
- [ ] Cluster is active (not paused)

### 3. Local Testing
- [ ] Development server starts: `npm run dev`
- [ ] No connection errors in console
- [ ] Homepage loads at http://localhost:3000
- [ ] Enquiry form submission works
- [ ] Newsletter subscription works
- [ ] Duplicate email prevention works
- [ ] Data appears in MongoDB Atlas (Browse Collections)
- [ ] Toast notifications display correctly
- [ ] Form validation works (try invalid email)

### 4. API Endpoint Testing

**Test Enquiry Endpoint:**
```bash
curl -X POST http://localhost:3000/api/enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Co",
    "message": "Test message"
  }'
```
- [ ] Returns 201 status
- [ ] Response includes `success: true`
- [ ] Response includes enquiry object with `id`, `name`, `email`, `company`, `message`, `createdAt`
- [ ] Data visible in MongoDB Atlas

**Test Subscribe Endpoint:**
```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "subscriber@example.com"}'
```
- [ ] First submission returns 201 status
- [ ] Response includes `success: true` and subscriber object
- [ ] Second submission returns 200 status
- [ ] Second submission returns `message: "Already subscribed"`
- [ ] Data visible in MongoDB Atlas

**Test Validation:**
```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "invalid-email"}'
```
- [ ] Returns 400 status
- [ ] Response includes `success: false`
- [ ] Response includes validation errors

---

## Production Deployment (Vercel)

### 1. MongoDB Atlas Production Setup
- [ ] Production cluster created (or using same cluster with different database)
- [ ] Production database user created
- [ ] Strong password used (not the same as development)
- [ ] Network access allows Vercel IPs:
  - [ ] Option A: `0.0.0.0/0` (allow all - simpler)
  - [ ] Option B: Specific Vercel IP ranges (more secure)
- [ ] Production connection string obtained
- [ ] Connection string tested locally

### 2. Git Repository
- [ ] All changes committed
- [ ] `.env` file NOT committed (verify in `.gitignore`)
- [ ] Code pushed to GitHub/GitLab/Bitbucket
- [ ] Repository is accessible to Vercel

### 3. Vercel Project Setup
- [ ] Vercel account created/logged in
- [ ] Project imported from Git repository
- [ ] Framework preset: Next.js (auto-detected)
- [ ] Root directory: `./` (default)
- [ ] Build command: `next build` (default)
- [ ] Output directory: `.next` (default)

### 4. Environment Variables (Vercel Dashboard)
- [ ] Navigate to: Settings → Environment Variables
- [ ] Add `MONGODB_URI`:
  - **Name:** `MONGODB_URI`
  - **Value:** Production connection string
  - **Environments:** ✅ Production, ✅ Preview, ✅ Development
- [ ] Add `NODE_ENV` (optional):
  - **Name:** `NODE_ENV`
  - **Value:** `production`
  - **Environments:** ✅ Production
- [ ] Add `NEXT_PUBLIC_ANALYTICS_ID` (if using):
  - **Name:** `NEXT_PUBLIC_ANALYTICS_ID`
  - **Value:** Your analytics ID
  - **Environments:** ✅ Production, ✅ Preview

### 5. Initial Deployment
- [ ] Click "Deploy" in Vercel
- [ ] Wait for build to complete (~2-3 minutes)
- [ ] Build succeeds without errors
- [ ] Deployment URL generated

### 6. Production Testing
- [ ] Visit production URL
- [ ] Homepage loads correctly
- [ ] No console errors
- [ ] Test enquiry form submission
- [ ] Test newsletter subscription
- [ ] Verify data in MongoDB Atlas production database
- [ ] Test from different devices/browsers
- [ ] Test mobile responsiveness

### 7. Domain Configuration (Optional)
- [ ] Custom domain added in Vercel
- [ ] DNS records configured
- [ ] SSL certificate issued (automatic)
- [ ] Domain accessible and secure (HTTPS)

---

## Post-Deployment Monitoring

### 1. MongoDB Atlas Monitoring
- [ ] Set up alerts for:
  - [ ] Connection failures
  - [ ] High CPU usage
  - [ ] Storage approaching limit
  - [ ] Unusual query patterns
- [ ] Review metrics dashboard daily (first week)
- [ ] Check slow query logs
- [ ] Verify indexes are being used

### 2. Vercel Monitoring
- [ ] Check deployment logs for errors
- [ ] Monitor function execution times
- [ ] Review analytics (if enabled)
- [ ] Set up error notifications
- [ ] Check bandwidth usage

### 3. Application Health
- [ ] Test all forms weekly
- [ ] Verify email collection working
- [ ] Check for duplicate prevention
- [ ] Monitor response times
- [ ] Review user feedback

---

## Rollback Plan

### If Issues Occur

**Option 1: Rollback Deployment (Vercel)**
1. Go to Vercel dashboard → Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"
4. Verify rollback successful

**Option 2: Rollback Code (Git)**
1. Find last working commit:
   ```bash
   git log --oneline
   ```
2. Revert to that commit:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```
3. Vercel auto-deploys reverted code

**Option 3: Emergency Fix**
1. Fix issue locally
2. Test thoroughly
3. Commit and push
4. Vercel auto-deploys fix

---

## Performance Optimization

### After Successful Deployment

- [ ] Enable MongoDB Atlas performance advisor
- [ ] Review and optimize slow queries
- [ ] Add indexes for frequently queried fields
- [ ] Enable connection pooling optimization
- [ ] Configure caching strategy (if needed)
- [ ] Set up CDN for static assets (Vercel automatic)
- [ ] Enable compression (Vercel automatic)

---

## Security Checklist

### MongoDB Atlas
- [ ] Strong passwords used (min 16 characters)
- [ ] Different credentials for dev/prod
- [ ] Network access restricted (not 0.0.0.0/0 in production)
- [ ] Database user has minimal required permissions
- [ ] Audit logs enabled (paid tier)
- [ ] Encryption at rest enabled (automatic)
- [ ] Encryption in transit enabled (automatic)

### Vercel
- [ ] Environment variables not exposed to client
- [ ] No sensitive data in logs
- [ ] HTTPS enforced (automatic)
- [ ] Security headers configured (optional)
- [ ] Rate limiting considered (if needed)

### Application
- [ ] Input validation with Zod (✅ already implemented)
- [ ] Email sanitization (✅ lowercase, trim)
- [ ] No SQL injection possible (✅ Mongoose parameterized)
- [ ] Error messages don't leak sensitive info
- [ ] CORS configured appropriately

---

## Maintenance Schedule

### Daily (First Week)
- [ ] Check MongoDB Atlas metrics
- [ ] Review Vercel deployment logs
- [ ] Test critical functionality
- [ ] Monitor error rates

### Weekly
- [ ] Review performance metrics
- [ ] Check for slow queries
- [ ] Verify backups are running
- [ ] Test all forms and features
- [ ] Review user feedback

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Review security advisories: `npm audit`
- [ ] Optimize database indexes
- [ ] Review and clean old data (if applicable)
- [ ] Test disaster recovery plan

### Quarterly
- [ ] Review MongoDB Atlas tier (upgrade if needed)
- [ ] Analyze usage patterns
- [ ] Plan feature enhancements
- [ ] Update documentation
- [ ] Security audit

---

## Success Metrics

### Technical Metrics
- [ ] API response time < 500ms (p95)
- [ ] Error rate < 0.1%
- [ ] Uptime > 99.9%
- [ ] Build time < 3 minutes
- [ ] Database query time < 100ms (p95)

### Business Metrics
- [ ] Form submission success rate > 95%
- [ ] Newsletter subscription rate tracked
- [ ] User engagement metrics collected
- [ ] Conversion funnel analyzed

---

## Support & Resources

### Documentation
- **Quick Start:** `QUICK_START.md`
- **Migration Guide:** `MIGRATION_GUIDE.md`
- **Migration Summary:** `MIGRATION_SUMMARY.md`
- **README:** `README.md`

### External Resources
- **MongoDB Atlas:** https://docs.atlas.mongodb.com/
- **Mongoose:** https://mongoosejs.com/docs/
- **Vercel:** https://vercel.com/docs
- **Next.js:** https://nextjs.org/docs

### Getting Help
1. Check documentation files
2. Review MongoDB Atlas logs
3. Review Vercel deployment logs
4. Check GitHub issues
5. Contact support (if applicable)

---

## Sign-Off

### Development Team
- [ ] Code reviewed and approved
- [ ] Tests passed
- [ ] Documentation complete
- [ ] Migration guide reviewed

### DevOps/Infrastructure
- [ ] MongoDB Atlas configured
- [ ] Vercel project configured
- [ ] Environment variables set
- [ ] Monitoring configured
- [ ] Backups verified

### Product/Business
- [ ] Functionality verified
- [ ] User experience tested
- [ ] Analytics configured
- [ ] Success metrics defined

---

## Final Checklist

- [ ] All code changes committed and pushed
- [ ] All documentation updated
- [ ] Local testing complete
- [ ] MongoDB Atlas production ready
- [ ] Vercel deployment successful
- [ ] Production testing complete
- [ ] Monitoring configured
- [ ] Team notified of deployment
- [ ] Rollback plan documented
- [ ] Success metrics tracked

---

## 🎉 Deployment Complete!

**Congratulations!** Your application is now running on MongoDB Atlas.

**Next Steps:**
1. Monitor for 24-48 hours
2. Gather user feedback
3. Optimize based on metrics
4. Plan next features

**Questions?** Refer to `MIGRATION_GUIDE.md` or contact the team.

---

**Deployment Date:** _________________  
**Deployed By:** _________________  
**Production URL:** _________________  
**MongoDB Cluster:** _________________
