
# Gitech

**Desenvolvido por**: LacamJC

---

## Descrição

O projeto **Gitech** é um site institucional focado em apresentar os serviços de manutenção profissional de máquinas de pré e pós-impressão, além de soluções de acabamento para o setor gráfico. O objetivo é fornecer aos usuários informações detalhadas sobre os serviços, como otimização de desempenho, manutenção preventiva e reparo emergencial, além de facilitar o contato com a empresa.

---

## Funcionalidades

- **Navegação Simples**: O site contém seções para **Home**, **Quem Somos**, **Serviços**, **Dúvidas Frequentes** e **Contato**, proporcionando uma navegação clara e objetiva.
- **Responsive Design**: A interface foi construída com o objetivo de ser responsiva, adaptando-se bem a dispositivos móveis e desktops.
- **Interatividade**: O site inclui funcionalidades interativas, como o sistema de visibilidade das seções e a cópia do e-mail de contato ao clicar no campo.

---

## Estrutura de Diretórios

```plaintext
├── index.html               # Página principal do site
├── exec.js                  # Script para automação de commits e pushs no Git
├── package.json             # Dependências do projeto
├── scss/
│   ├── main.css             # Estilos principais do site
├── img/                     # Imagens usadas no projeto
│   ├── undraw_qa_engineers_dg-5-p.svg   # Imagem de engenheiro de QA
│   ├── undraw_photocopy_re_gln4.svg     # Imagem de cópia
│   ├── undraw_subscribe_vspl.svg         # Imagem de assinatura
├── js/
│   ├── copy.js              # Script para copiar o e-mail ao clicar
│   ├── visibility.js        # Script de visibilidade para animação ao rolar a página
└── node_modules/            # Diretório gerado com as dependências do Node.js
```

---

## Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo web.
- **CSS**: Estilos e design do site, com a utilização de **SCSS**.
- **JavaScript**: Interatividade no site, como visibilidade de elementos e cópia de e-mail.
- **ShellJS**: Utilizado no script `exec.js` para automação de comandos Git.
- **Readline-Sync**: Usado no `exec.js` para interagir com o usuário para obter a mensagem de commit.

