# 🤖 TecnoInclusão | Projeto de Desenvolvimento Front-End

Este repositório contém o projeto da plataforma web da ONG **TecnoInclusão**, desenvolvido como trabalho da disciplina de **Desenvolvimento Front-End para Web**. O objetivo foi criar uma aplicação dinâmica, responsiva e acessível, aplicando os fundamentos de HTML5, CSS3, e JavaScript avançado.

### 🔗 Repositório e Autor
* **Autor:** Tiago Armond Magnani
* **Repositório:** [https://github.com/tiago-magnani/tecnoinclus-o-projeto](https://github.com/tiago-magnani/tecnoinclus-o-projeto)

---

## ✨ Visão Geral da Plataforma

A plataforma simula um sistema completo para uma ONG focada em inclusão digital, com funcionalidades que atendem a diferentes perfis de usuários (Visitante, Doador, Voluntário e Administrador - simulado via interface).

### 🚀 Como Visualizar o Projeto

#### 🌐 Opção 1: Visualização via GitHub Pages (Recomendado para Avaliação)

O link abaixo aponta para a versão pública e hospedada do site:

[**[https://github.com/tiago-magnani]**]([https://github.com/tiago-magnani])


#### 💻 Opção 2: Visualização Local

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/tiago-magnani/tecnoinclus-o-projeto.git]
    ```
2.  **Navegue até a Pasta:**
    ```bash
    cd tecnoinclus-o-projeto
    ```
3.  **Abra o arquivo principal no navegador:**
    Basta abrir o arquivo `index.html` diretamente no seu explorador de arquivos.

---

## 📋 Especificações Técnicas e Funcionalidades (Entregas Consolidadas)

O projeto foi desenvolvido para atender a todos os requisitos das quatro entregas.

### I. Fundamentos e Estrutura (HTML5)

| Requisito | Detalhes da Implementação |
| :--- | :--- |
| **Páginas Obrigatórias** | Implementação de `index.html`, `projetos.html`, e `cadastro.html`. |
| **Estrutura Semântica** | Uso de tags como `<header>`, `<main id="main-content">`, `<section>`, `<article>`, `<figure>`, `<footer>`, e `<address>`. |
| **Formulário Complexo** | `cadastro.html` utiliza `<fieldset>`, `<legend>`, `type="date"`, e `pattern` para validação nativa. |
| **Imagens Otimizadas** | Uso de caminhos relativos e arquivos dedicados (`hero-banner.jpg`, `logo.png`, etc.) na pasta `/assets/img/`. |

### II. Design e Componentes (CSS3)

| Requisito | Detalhes da Implementação |
| :--- | :--- |
| **Sistema de Design** | Variáveis CSS no `:root` com 8 cores, 5 tamanhos de fonte e espaçamento modular (base 8px). |
| **Leiautes Responsivos** | Uso de **Flexbox** para componentes internos (`cards`, `header`) e sistema de **5 Breakpoints** (`768px`, `992px`, etc.). |
| **Navegação Sofisticada** | Menu principal com **Submenu Dropdown** e navegação **Mobile (Menu Hambúrguer)**. |
| **Componentes Visuais** | Estilização completa de botões (com `hover`, `focus`, `active`, `disabled`), `badges` e `alerts` (feedback). |

### III. Interatividade e Dinâmica (JavaScript Avançado)

| Requisito | Detalhes da Implementação |
| :--- | :--- |
| **SPA Básico (Manipulação do DOM)** | Navegação por links (`.html`) carrega o conteúdo dentro de `<main id="main-content">` via `$.get()`, simulando um SPA. |
| **Máscaras de Input (JS)** | Uso do **jQuery Mask Plugin** em `main.js` para aplicar máscaras nos campos: CPF, Telefone (adaptativo 8/9 dígitos) e CEP. |
| **Validação de Consistência** | Lógica JS (em `cadastro.html`) que verifica: **1)** CPF incompleto e **2)** Idade mínima (16 anos) para inscrição, fornecendo feedback visual (`.input-error` e `alert-danger`). |
| **Sistema de Templates** | Uso de Template String JS para criar o alerta de "Novidade" dinamicamente na página de projetos. |

### IV. Acessibilidade e Práticas Profissionais (WCAG e GitHub)

| Requisito | Detalhes da Implementação |
| :--- | :--- |
| **Acessibilidade (WCAG 2.1 AA)** | **Contraste de Cores** verificado e aplicado. Implementação de atributos **ARIA** (`role`, `aria-expanded`, `aria-label`) nos menus e componentes dinâmicos. |
| **Navegação por Teclado** | Estilização explícita do estado `:focus` em todos os elementos interativos. |
| **Modo Escuro (Acessibilidade)** | Implementação de um **Toggle Switch** que alterna entre modos claro e escuro, usando `localStorage` para persistência e variáveis CSS para alto contraste. |
| **Controle de Versão** | Histórico de *commits* semântico e organizado, seguindo a lógica de *branching* profissional (simulado). |

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura e Semântica
* **CSS3:** Estilização, Responsividade (Flexbox/Grid), Acessibilidade (Dark Mode)
* **JavaScript (JS) e jQuery:** SPA, Máscaras de Input, Validação de Formulário e Controle de Eventos.

---
*Este projeto é uma entrega acadêmica de Front-End e simula a funcionalidade completa de uma aplicação web.*
# tecnoinclusão
