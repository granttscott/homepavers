# Deployment Guide for GoDaddy Hosting

This guide will help you set up automatic deployments from GitHub to your GoDaddy hosting account.

## Prerequisites

1. **GoDaddy Hosting Account** with FTP access
2. **GitHub Repository** with your code
3. **FTP Credentials** from GoDaddy

## Step 1: Get Your GoDaddy FTP Credentials

1. Log into your GoDaddy account
2. Go to your hosting control panel
3. Find "FTP" or "File Manager" section
4. Note down:
   - **FTP Server** (usually something like `ftp.yourdomain.com` or an IP address)
   - **FTP Username** (usually your cPanel username)
   - **FTP Password** (your hosting password)
   - **FTP Directory** (usually `/public_html/` for the main site)

## Step 2: Set Up GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret** and add these secrets:

   - `FTP_SERVER`: Your GoDaddy FTP server address
   - `FTP_USERNAME`: Your GoDaddy FTP username
   - `FTP_PASSWORD`: Your GoDaddy FTP password
   - `FTP_DIRECTORY`: Your GoDaddy FTP directory (usually `/public_html/`)

## Step 3: Configure Your Domain (if needed)

If you're using a subdomain or specific folder, update the `FTP_DIRECTORY` secret accordingly:
- Main domain: `/public_html/`
- Subdomain: `/public_html/subdomain/`
- Subfolder: `/public_html/folder/`

## Step 4: Test the Deployment

1. Make a small change to your code
2. Commit and push to the `main` branch
3. Go to **Actions** tab in your GitHub repository
4. Watch the deployment workflow run
5. Check your website to see if changes are live

## Step 5: Verify Deployment

After deployment, verify:
- [ ] Website loads correctly
- [ ] All images and assets load
- [ ] Navigation works properly
- [ ] Contact forms function (if applicable)
- [ ] Mobile responsiveness is maintained

## Troubleshooting

### Common Issues

**1. FTP Connection Failed**
- Double-check your FTP credentials
- Ensure your GoDaddy hosting is active
- Try using the IP address instead of domain name for FTP_SERVER

**2. Files Not Uploading**
- Check if FTP_DIRECTORY is correct
- Ensure you have write permissions to the directory
- Verify the directory exists on your hosting

**3. Website Shows 404 or Blank Page**
- Check if `index.html` is in the correct directory
- Verify all assets are uploaded
- Check browser console for errors

**4. CSS/JS Not Loading**
- Ensure `base: './'` is set in `vite.config.ts`
- Check if assets are in the correct `assets/` folder
- Verify file permissions

### Manual Deployment (Backup Method)

If automatic deployment fails, you can manually deploy:

1. Run `npm run build` locally
2. Upload the contents of the `dist/` folder to your GoDaddy hosting
3. Ensure `index.html` is in the root directory

## File Structure After Deployment

Your GoDaddy hosting should have this structure:
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── [other files]
```

## Security Notes

- Never commit FTP credentials to your repository
- Use GitHub Secrets for all sensitive information
- Regularly rotate your FTP passwords
- Consider using SFTP if available (more secure than FTP)

## Performance Tips

- The build process optimizes your code for production
- Images are automatically optimized
- CSS and JS are minified and chunked
- Unused code is removed (tree shaking)

## Support

If you encounter issues:
1. Check the GitHub Actions logs for specific error messages
2. Verify your GoDaddy hosting is active and accessible
3. Test FTP connection manually using an FTP client
4. Contact GoDaddy support if hosting-related issues persist

---

**Next Steps After Setup:**
1. Set up a custom domain (if not already done)
2. Configure SSL certificate
3. Set up Google Analytics
4. Configure email settings for contact forms
