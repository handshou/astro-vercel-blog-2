# Astro Starter Kit: Blog

Hello!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhandshou%2Fastro-vercel&env=TINA_PUBLIC_CLIENT_ID,TINA_CONTENT_TOKEN,TINA_SEARCH_TOKEN)

## Environment Variables

```bash
# run starter kit locally
cp .env.example .env

```

| Variable               | Link to get it                               |
| :--------------------- | :------------------------------------------- |
| TINA_PUBLIC_CLIENT_ID  | ![Click Overview/Project Details](https://app.tina.io/projects) |
| TINA_CONTENT_TOKEN     | ![Click Tokens](https://app.tina.io/projects/{$clientId}/tokens) |                                             |
| TINA_SEARCH_TOKEN      | ![Click Tokens](https://app.tina.io/projects/{$clientId}/tokens) | 
| CLOUDINARY_CLOUD_NAME  | ![Click API Keys - Find next to header](https://console.cloudinary.com/settings) |
| CLOUDINARY_API_KEY     | ![Click API Keys - In table](https://console.cloudinary.com/settings) |
| CLOUDINARY_API_SECRET  | ![Click API Keys - In table](https://console.cloudinary.com/settings) |

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
