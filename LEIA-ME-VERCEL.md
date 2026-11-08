# Publicar na Vercel

Este ZIP é um projeto completo. Os arquivos do projeto ficam diretamente na pasta que você descompactar.

1. Extraia o ZIP e envie a pasta para o seu repositório GitHub.
2. Na Vercel, importe o repositório. Use a raiz do projeto como Root Directory.
3. Clique em Deploy. O arquivo `vercel.json` já define as opções abaixo.

| Configuração | Valor |
| --- | --- |
| Framework | Vite |
| Instalação | `npm ci` |
| Build | `npm run build` |
| Pasta de saída | `dist` |

Todas as imagens, capas, símbolo e fontes estão incluídos em `public/`. A pasta `dist/` também acompanha o site compilado. Os vídeos continuam incorporados do YouTube e precisam de internet. As rotas internas, como `/day/1`, já possuem fallback para abrir corretamente ao atualizar a página.

Para publicar pelo terminal, execute `npx vercel` dentro da pasta do projeto e siga as etapas da sua conta. Para produção, use `npx vercel --prod`.

Os quatro arquivos dos bônus ainda precisam ser preenchidos em `src/content/catalog.ts`, no campo `fileUrl` de cada item. O acesso e o progresso continuam locais por e-mail, como no modelo aprovado. Veja `README.md` para as opções de integração de compras.
