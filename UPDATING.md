# How to Update Your S&S Tracker

Once the repo is live on GitHub Pages, updating is simple:

## Quick Update (edit on GitHub directly)
1. Go to https://github.com/Smgreevy-web/ss-tracker
2. Click `index.html`
3. Click the pencil icon (Edit)
4. Make your change
5. Click "Commit changes"
6. GitHub Pages updates automatically in ~60 seconds

## From Your PC (for bigger changes)
```bash
cd ss-tracker
# Make your edits to index.html
git add .
git commit -m "describe your change"
git push
```

## From Claude
Just tell me what to change — I'll give you the updated `index.html`.
You paste it into GitHub or push from your PC.

## Notes
- Your training data is stored in your phone's browser (localStorage)
- Updating the code does NOT delete your saved sessions
- The service worker caches the app for offline use
- After a code update, close and reopen the app to get the new version
