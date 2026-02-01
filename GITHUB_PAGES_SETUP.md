# GitHub Pages Setup - Stap voor Stap

## ✅ Stap 1: Git Repository is al klaar!
- Git is geïnitialiseerd
- Alle bestanden zijn gecommit
- Je bent klaar om te pushen!

## 📝 Stap 2: Maak een GitHub Repository

### Optie A: Via GitHub Website (Aanbevolen)
1. Ga naar [github.com](https://github.com) en log in
2. Klik op het **"+"** icoon rechtsboven → **"New repository"**
3. Vul in:
   - **Repository name**: `villavictorina` (of een andere naam)
   - **Description**: "Villa Victorina El Roque - Luxury private villa website"
   - **Visibility**: Public (vereist voor gratis GitHub Pages)
   - **⚠️ NIET aanvinken**: "Add a README file", "Add .gitignore", "Choose a license"
4. Klik **"Create repository"**

### Optie B: Via GitHub CLI (als je gh hebt geïnstalleerd)
```bash
gh repo create casavictoria --public --source=. --remote=origin --push
```

## 🔗 Stap 3: Koppel je lokale repository aan GitHub

**Vervang `YOUR_USERNAME` met je GitHub gebruikersnaam:**

```bash
cd "/Users/toon/Library/CloudStorage/GoogleDrive-struyf@gmail.com/Mijn Drive/Projecten/casavictoria"

# Voeg GitHub remote toe (vervang YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/casavictoria.git

# Push naar GitHub
git branch -M main
git push -u origin main
```

**Of als je SSH gebruikt:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/casavictoria.git
git branch -M main
git push -u origin main
```

## 🌐 Stap 4: Activeer GitHub Pages

1. Ga naar je repository op GitHub: `https://github.com/YOUR_USERNAME/casavictoria`
2. Klik op **"Settings"** (rechtsboven in de repository)
3. Scroll naar **"Pages"** in het linker menu
4. Bij **"Source"**:
   - Selecteer **"Deploy from a branch"**
   - Branch: **"main"**
   - Folder: **"/ (root)"**
5. Klik **"Save"**

## ⏱️ Stap 5: Wacht op Deployment

- GitHub Pages heeft **2-10 minuten** nodig om je site live te zetten
- Je site is beschikbaar op: `https://YOUR_USERNAME.github.io/casavictoria/`
- Je kunt de status zien bij **"Actions"** tab in je repository

## ✅ Stap 6: Test je Website

1. Open: `https://YOUR_USERNAME.github.io/casavictoria/`
2. Controleer of alles werkt:
   - Hero foto laadt
   - Gallery werkt
   - Lightbox/slideshow werkt
   - Alle foto's zijn zichtbaar
   - Links werken

## 🔄 Toekomstige Updates

Elke keer als je wijzigingen maakt:

```bash
cd "/Users/toon/Library/CloudStorage/GoogleDrive-struyf@gmail.com/Mijn Drive/Projecten/casavictoria"

# Voeg wijzigingen toe
git add .

# Commit
git commit -m "Beschrijving van je wijzigingen"

# Push naar GitHub
git push
```

GitHub Pages update automatisch binnen 1-2 minuten!

## 🌍 Custom Domain (Optioneel)

Als je een eigen domein wilt gebruiken:

1. Maak een `CNAME` bestand in de root:
   ```
   villavictorinafuerteventura.com
   ```

2. Commit en push:
   ```bash
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

3. Configureer DNS bij je domain provider:
   - Type: `CNAME`
   - Name: `www` (of `@` voor apex)
   - Value: `YOUR_USERNAME.github.io`

4. Activeer HTTPS in GitHub Pages Settings → Pages → Enforce HTTPS

## 📊 Troubleshooting

### Site laadt niet?
- Check de Actions tab voor deployment errors
- Wacht 5-10 minuten (eerste deployment duurt langer)
- Check of repository **Public** is (niet Private)

### Foto's laden niet?
- Check of alle foto's in de `images/` folder zijn gecommit
- Check de browser console voor 404 errors
- Zorg dat paths relatief zijn: `images/foto.jpg` (niet `/images/foto.jpg`)

### CSS werkt niet?
- Check of `css/styles.css` bestaat en gecommit is
- Check browser console voor errors
- Hard refresh: Cmd+Shift+R (Mac) of Ctrl+Shift+R (Windows)

## 🎉 Klaar!

Je website is nu live op GitHub Pages! 🚀

