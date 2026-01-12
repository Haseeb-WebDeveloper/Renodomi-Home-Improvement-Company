# Sanity Webhook Setup Guide

This guide will help you set up instant content updates from Sanity to your live website.

## ✅ Step 1: Environment Variable (COMPLETED)

The revalidation secret has been added to your `.env.local` file:
```
SANITY_REVALIDATE_SECRET=8d60e2f2fae25f61f16fab42c768fbd966d3c4801bf50d017aff7007c2f56774
```

## 📋 Step 2: Add Secret to Hosting Platform

You need to add the same secret to your hosting platform's environment variables.

### If using Vercel:
1. Go to https://vercel.com/dashboard
2. Select your project (renodomi.nl)
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `SANITY_REVALIDATE_SECRET`
   - **Value**: `8d60e2f2fae25f61f16fab42c768fbd966d3c4801bf50d017aff7007c2f56774`
   - **Environment**: Production, Preview, Development (select all)
5. Click **Save**
6. **Redeploy** your application for the change to take effect

### If using another platform:
Add the environment variable `SANITY_REVALIDATE_SECRET` with the same value to your hosting platform's environment variables.

## 🔗 Step 3: Set Up Webhook in Sanity

1. **Log in to Sanity**:
   - Go to https://sanity.io/manage
   - Sign in with your account

2. **Select Your Project**:
   - Find and select the project: **Renodomi** (Project ID: `sckfe47a`)

3. **Navigate to Webhooks**:
   - Click on **API** in the left sidebar
   - Click on **Webhooks** tab

4. **Create New Webhook**:
   - Click **Create webhook** button
   - Fill in the following details:
   
     **Name**: `Renodomi Revalidation`
     
     **URL**: 
     ```
     https://renodomi.nl/api/revalidate?secret=8d60e2f2fae25f61f16fab42c768fbd966d3c4801bf50d017aff7007c2f56774
     ```
     
     **Dataset**: `production`
     
     **HTTP method**: `POST`
     
     **API version**: `v2021-06-07` (or latest)
     
     **Trigger on**: Select all:
     - ✅ Create
     - ✅ Update
     - ✅ Delete
     
     **Filter**: 
     ```
     _type == "homePage" || _type == "siteSettings"
     ```
     
     **Projection**: Leave empty
     
     **HTTP Headers**: Leave empty
     
     **Secret**: Leave empty (we're using query parameter instead)

5. **Save the Webhook**:
   - Click **Save** or **Create webhook**

6. **Test the Webhook** (Optional):
   - After saving, you can test it by making a small change in Sanity Studio
   - Publish the change
   - Check if the webhook was called successfully in the webhook logs

## ✅ Step 4: Redeploy Your Application

After adding the environment variable to your hosting platform, you **must redeploy** your application for the changes to take effect.

### If using Vercel:
- Go to your project dashboard
- Click **Deployments**
- Click the **⋯** menu on the latest deployment
- Select **Redeploy**

Or push a new commit to trigger automatic deployment.

## 🧪 Step 5: Test the Setup

1. Make a small text change in Sanity Studio (localhost:3333)
2. Publish the change
3. Check your live website (renodomi.nl) - the change should appear **instantly** (within 1-2 seconds)
4. If it doesn't work, check:
   - Webhook logs in Sanity (API → Webhooks → click on your webhook)
   - Your hosting platform's deployment logs
   - Verify the environment variable is set correctly

## 📝 Notes

- **Revalidation Time**: Even without the webhook, changes will appear within 10 seconds due to the reduced revalidation time
- **Webhook Benefits**: With the webhook set up, changes appear instantly (1-2 seconds) instead of waiting 10 seconds
- **Security**: The secret ensures only Sanity can trigger revalidation on your site
- **Fallback**: If the webhook fails, the 10-second revalidation will still work as a fallback

## 🔍 Troubleshooting

### Changes not appearing instantly:
1. Verify the webhook URL is correct (must be `https://renodomi.nl/api/revalidate?secret=...`)
2. Check webhook logs in Sanity for any errors
3. Verify the environment variable is set in your hosting platform
4. Ensure you've redeployed after adding the environment variable

### Webhook returns 401 (Unauthorized):
- The secret in the webhook URL must match the `SANITY_REVALIDATE_SECRET` environment variable
- Check for any extra spaces or characters

### Webhook returns 500 (Server Error):
- Check your hosting platform's deployment logs
- Verify the revalidation route is deployed correctly

## 🎉 Success!

Once set up, any changes you make in Sanity Studio will appear on your live website within 1-2 seconds!

