# ControlCont — Deploy Guide

## Estrutura do projeto

```
controlcont/
├── index.html       ← app principal
├── manifest.json    ← configuração PWA
├── sw.js            ← service worker (offline)
├── netlify.toml     ← headers corretos para PWA
├── icon-192.png     ← ícone 192×192 (você fornece)
└── icon-512.png     ← ícone 512×512 (você fornece)
```

---

## 1. Gerar os ícones

Use o PWA Builder (https://www.pwabuilder.com/imageGenerator) para gerar
os arquivos `icon-192.png` e `icon-512.png` a partir da sua logo.
Coloque os dois arquivos na raiz do projeto.

---

## 2. Subir no GitHub

```bash
git init
git add .
git commit -m "chore: primeiro deploy ControlCont"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/controlcont.git
git push -u origin main
```

---

## 3. Deploy no Netlify

1. Acesse https://app.netlify.com → **Add new site → Import from Git**
2. Conecte sua conta GitHub e selecione o repositório
3. Configurações de build:
   - **Build command:** (deixe vazio)
   - **Publish directory:** `.` (ponto — raiz do projeto)
4. Clique em **Deploy site**

O Netlify faz deploy automático a cada `git push`.

---

## 4. Validar o PWA (PWA Builder)

1. Acesse https://www.pwabuilder.com
2. Cole a URL do seu site Netlify (ex: `https://controlcont.netlify.app`)
3. Clique em **Start** — você verá a pontuação do PWA
4. Se quiser gerar pacote para lojas (Play Store, Microsoft Store), clique em **Package for stores**

---

## ✅ Checklist final

- [ ] `icon-192.png` e `icon-512.png` na pasta raiz
- [ ] Site publicado no Netlify com HTTPS
- [ ] SW registrado (DevTools → Application → Service Workers)
- [ ] Manifest detectado (DevTools → Application → Manifest)
- [ ] Botão "Instalar app" aparecendo no browser
