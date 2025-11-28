# DubbAI - Globalisera ditt videoinnehåll med AI

![DubbAI Banner](public/vite.svg)

DubbAI är en modern webbplattform som erbjuder professionell AI-dubbning och översättning för företag. Vår tjänst hjälper företag att nå en global publik genom att översätta och dubba videoinnehåll med bibehållen röstkaraktär och timing.

## 🚀 Funktioner

- **AI-Dubbning**: Automatisk dubbning med naturliga röster.
- **Läppsynk**: Avancerad teknik för att matcha läpprörelser med det nya språket.
- **Flerspråksstöd**: Stöd för över 30 språk.
- **Responsiv Design**: Fungerar sömlöst på både dator och mobil.
- **Mörkt/Ljust Läge**: Användarvänligt gränssnitt med stöd för olika teman.

## 🛠️ Teknisk Stack

Projektet är byggt med moderna webbteknologier för prestanda och skalbarhet:

- **Frontend**: [React](https://react.dev/) med [TypeScript](https://www.typescriptlang.org/)
- **Byggverktyg**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Ikoner**: [Lucide React](https://lucide.dev/)
- **Animationer**: [Framer Motion](https://www.framer.com/motion/)

## 📦 Installation

För att köra projektet lokalt, följ dessa steg:

1.  **Klona repot:**
    ```bash
    git clone https://github.com/DITT_ANVÄNDARNAMN/hemsida_dubbning.git
    cd hemsida_dubbning
    ```

2.  **Installera beroenden:**
    ```bash
    npm install
    ```

3.  **Starta utvecklingsservern:**
    ```bash
    npm run dev
    ```
    Öppna [http://localhost:5173](http://localhost:5173) i din webbläsare.

## 🚢 Deployment

Detta projekt är konfigurerat för att deployas till **GitHub Pages**.

### Manuell Deployment

1.  Se till att du har installerat alla beroenden.
2.  Kör deployment-scriptet:
    ```bash
    npm run deploy
    ```
    Detta bygger projektet och laddar upp `dist`-mappen till `gh-pages`-branchen.

### Automatisk Deployment (GitHub Actions)

Projektet kan också konfigureras för att deployas automatiskt via GitHub Actions vid push till `main`.

## 📄 Licens

Detta projekt är licensierat under MIT License.

---

Utvecklad med ❤️ för att globalisera videoinnehåll.
