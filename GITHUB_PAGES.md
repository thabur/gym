# GitHub Pages Hosting

The GitHub Pages site publishes only the `mobile-gym` folder. The program notes and tracker stay in the repository but are not part of the hosted phone app.

Important: GitHub Pages sites are public on the internet, even when the repository itself is private on eligible plans. Do not put private medical notes, home address details, or personal logs inside `mobile-gym`.

## One-Time GitHub Setup

1. Create a GitHub repository, for example `gym`.
2. Push this local folder to that repository.
3. On GitHub, open the repository.
4. Go to Settings -> Pages.
5. Under Build and deployment, set Source to GitHub Actions.
6. Go to Actions and run `Deploy GitHub Pages`, or push to `main`.
7. Open the Pages URL shown by the workflow. It will look like:

```text
https://YOUR-USER.github.io/YOUR-REPO/
```

## iPhone Setup

1. Open the Pages URL in Safari on the iPhone.
2. Tap Share.
3. Tap Add to Home Screen.
4. Open the new Home Screen icon once before going to the gym.

After that first load, the app caches the core files and current demo clips for offline use.

## Local Push Commands

Use these from the Gym folder after creating the GitHub repository:

```bash
git init
git branch -M main
git add .
git commit -m "Add mobile gym cockpit"
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

If the repository already exists locally, only run:

```bash
git add .
git commit -m "Add mobile gym cockpit"
git push
```

