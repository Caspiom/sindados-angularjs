# SINDADOS-BA, atividade de AngularJS

Página com três componentes feitos em AngularJS 1.8.3: notificação toast, acordeão e paginação. Todos os dados são fictícios.

## Como rodar

Na pasta do projeto:

```
python3 -m http.server 8000
```

Abra http://localhost:8000. No GitHub Codespaces, a porta 8000 aparece na aba Portas. Abrir o `index.html` direto no navegador também funciona, porque o AngularJS está em `lib/` e não precisa de internet.

## Componentes

- `sind-toast` e `ToastService`: o serviço guarda mensagem, tipo (sucesso, erro ou urgente) e visibilidade. `show(mensagem, tipo)` abre o aviso e `$timeout` fecha em 4 segundos. O botão fecha na hora. Chamar `show` de novo reinicia o tempo.
- `sind-accordion`: recebe `itens` por `=` e `rotulo` por `@`. Abrir um item fecha os outros, e clicar no item aberto recolhe. Uma seta mostra o estado.
- `sind-pagination`: recebe `total-paginas` e `pagina-atual` por `=`, `rotulo` por `@` e a função `on-page-change` por `&`. Anterior e Próximo ficam desabilitados nos limites e a página atual aparece destacada.

## Estrutura

- `index.html` e `css/estilo.css`
- `js/app.js`: módulo principal e os módulos de cada componente
- `js/toast.service.js` e `js/sind-toast.directive.js`
- `js/sind-accordion.directive.js`
- `js/sind-pagination.directive.js`
- `js/pagina-inicial.controller.js`
- `lib/angular.min.js`

## O que foi testado

Testei no Firefox, em 360, 768 e 1280 px. O Chrome, o Safari e o toque em celular de verdade ficaram de fora.
