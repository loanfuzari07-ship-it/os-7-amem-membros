# Os 7 Améns da Madrugada

Nova área de membros em português, baseada no visual escuro e dourado do arquivo de referência. O arquivo original não foi alterado.

## Conteúdo

- Sete cards com imagens distintas e os sete vídeos enviados, na ordem do briefing.
- Página individual com capa, player YouTube incorporado dentro do aplicativo, conclusão do dia e navegação. Não há botão que abra os vídeos em uma página externa.
- Progresso salvo por e-mail neste navegador. Marcar um dia novamente não duplica o progresso.
- Instrução de horário sugerido às quatro da manhã, com liberdade para escolher e manter outro horário.
- Quatro bônus com capas próprias, cadeado e contagem de 72 horas a partir do primeiro acesso. A contagem usa a data de primeiro acesso salva e não reinicia ao sair ou atualizar a página.
- Ajuda, minha conta e instalação como PWA. Os vídeos dependem de internet.

## Executar e compilar

Requer Node.js 22.13+.

```sh
npm ci
npm run dev
npm test
npm run build
```

A pasta `dist/` já acompanha o build para hospedagem. Pode ser publicada em hospedagem estática com fallback das rotas para index.html. Há configurações para Vercel e Netlify.

## Pontos para concluir a publicação comercial

1. Os quatro arquivos dos bônus ainda não foram enviados. Configure `fileUrl` para cada bônus em `src/content/catalog.ts`. Após as 72 horas, o card fica desbloqueado; enquanto não houver arquivo, a página informa que o material está em preparação. Nenhum conteúdo de outro produto foi apresentado como bônus.
2. O modelo original usa acesso local por e-mail, sem senha e sem verificação real de compra. Esse comportamento foi mantido com uma base local separada para este produto. `authService.verifyPurchase` ainda é um ponto de integração, não autenticação de compradores. Para proteção real, validação de compra e bloqueio de bônus devem ser feitos no servidor.
3. Progresso e data de acesso ficam no localStorage do navegador. Não há sincronização entre dispositivos. O temporizador local não substitui controle de acesso no servidor.
4. O e-mail de suporte foi preservado do arquivo-base: lanovdigital@gmail.com. Confirme o endereço antes de publicar.

## Onde alterar

- Dias, títulos, vídeos, capas e arquivos dos bônus: `src/content/catalog.ts`.
- Nome, suporte e 72 horas: `src/config.ts`.
- Layout e telas: `src/App.tsx`.
- Estilo original: `src/styles.css`; adaptações: `src/member.css`.
- Identidade e PWA: `public/brand/amens-symbol.svg`, `vite.config.ts` e `index.html`.

## Player YouTube

Incorporação pelo domínio youtube-nocookie.com, carregada após clicar na capa, com controles, tela cheia, reprodução em linha no celular e interface em português. `rel=0` restringe recomendações ao mesmo canal; o YouTube não permite desligá-las totalmente. `iv_load_policy=3` desativa anotações onde suportado. Não foram usados parâmetros obsoletos que prometem esconder a marca ou as sugestões.

Documentação: https://developers.google.com/youtube/player_parameters

## Validação

Build de produção e testes de associação exata dos vídeos, conclusão idempotente e limite de 72 horas. Conferência visual no navegador, incluindo largura de celular; player do primeiro vídeo carregado; conclusão persistida após recarregar; telas de bônus bloqueados conferidas.
