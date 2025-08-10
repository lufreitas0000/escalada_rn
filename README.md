# Guia de Escalada - Rio Grande do Norte

## Sobre o Projeto

Este repositório contém o código-fonte do site "Guia de Escalada do Rio Grande do Norte", um projeto open-source focado em fornecer informações detalhadas, croquis e dicas sobre os setores de escalada do estado. O objetivo é criar uma plataforma moderna, rápida, de fácil navegação e mantida pela própria comunidade de escaladores.

O site é estático, projetado para ser hospedado em plataformas como GitHub Pages, garantindo alta performance e baixo custo de manutenção.

---

## Estrutura de Arquivos e Pastas

A organização do projeto foi pensada para ser modular e escalável, facilitando a adição de novas regiões, setores e vias no futuro.



```
escalada-rn/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── regioes/
│   ├── serra-caiada.html
│   └── patu.html
├── setores/
│   ├── falesia-face-leste.html
│   └── setor-boulder.html
└── vias/
    ├── cavalo-de-troia.html
    └── (...).html
```


### Descrição dos Diretórios

* **Raiz (`/`)**: Contém os arquivos centrais da aplicação.
    * `index.html`: A página inicial (home) do site.
    * `style.css`: A folha de estilos global, que contém todo o design system (variáveis de cor, fontes, etc.).
    * `script.js`: O arquivo JavaScript principal, responsável por todas as interatividades (filtros, galerias, etc.).

* **`assets/`**: Armazena todos os recursos estáticos.
    * `images/`: Fotos das vias, paisagens e croquis.
    * `icons/`: Ícones em formato SVG (padrão Lucide Icons).
    * `fonts/`: Arquivos de fontes locais, caso não sejam carregadas via Google Fonts.

* **`regioes/`**: Contém os arquivos HTML para cada grande região de escalada (ex: Serra Caiada). Cada página aqui serve como um hub para os setores daquela região.

* **`setores/`**: Contém os arquivos HTML para cada setor específico. Estas páginas apresentam a lista de vias do setor.

* **`vias/`**: Contém os arquivos HTML para cada via individual, com todos os seus detalhes (graduação, extensão, história, fotos, etc.).

---

## Como Contribuir

_Instruções sobre como a comunidade pode contribuir com novas informações, correções ou fotos serão adicionadas aqui no futuro._
