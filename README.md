# ☕ Sol & Sabor Capixaba

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

**Sol & Sabor Capixaba** é uma aplicação web moderna de menu digital para cafeteria, desenvolvida com HTML5, CSS3 e JavaScript puro. O projeto apresenta um design responsivo e elegante, com suporte a modo escuro/claro e animações suaves.

### 🎯 Funcionalidades

- ✅ **Menu Digital Completo** - Cafés, tortas, bebidas geladas e salgados
- 🌓 **Modo Escuro/Claro** - Alterna entre temas com persistência no navegador
- 📱 **Design Responsivo** - Adaptado para desktop, tablet e mobile
- 🎨 **Animações Suaves** - Efeitos de entrada e interação
- 🖼️ **Efeito Parallax** - Fundo com movimento suave ao rolar
- ⏰ **Informações de Contato** - Horários de funcionamento e dados de contato
- 💾 **Persistência de Tema** - Lembra a preferência do usuário

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com variáveis CSS, flexbox e animações
- **JavaScript ES6+** - Interatividade e armazenamento local
- **LocalStorage API** - Persistência do tema escolhido
- **Intersection Observer API** - Animações ao scroll

## 📂 Estrutura do Projeto

```
Menu Cafeteria/
│
├── index.html              # Página principal
├── README.md               # Documentação do projeto
│
├── css/
│   ├── style.css          # Estilos principais
│   └── dark-mode.css      # Estilos do modo escuro
│
├── js/
│   └── main.js            # Lógica de interação e animações
│
└── images/
    ├── coffee.png         # Ícone de café
    ├── sun.png            # Ícone de sol
    ├── torta.png          # Ícone de torta
    └── coffee_background.jpg  # Imagem de fundo
```

## 🎨 Características do Design

### Paleta de Cores

**Modo Claro:**
- Primária: `#5c2c0a` (Marrom escuro)
- Destaque: `rgb(164, 6, 6)` (Vermelho)
- Fundo do menu: `rgba(225, 187, 187, 0.95)` (Rosé claro)

**Modo Escuro:**
- Primária: `#d1b7a3` (Bege claro)
- Destaque: `#c54a4a` (Vermelho claro)
- Fundo do menu: `rgba(30, 30, 30, 0.95)` (Cinza escuro)

### Animações

- **fadeInUp** - Entrada suave de elementos
- **slideIn** - Deslizamento lateral das seções
- **Hover effects** - Movimento nos itens do menu
- **Parallax** - Efeito de profundidade no fundo

## 💻 Como Usar

1. **Clone o repositório ou baixe os arquivos**
   ```bash
   git clone https://github.com/seu-usuario/menu-cafeteria.git
   ```

2. **Abra o arquivo `index.html` no navegador**
   - Dê um duplo clique no arquivo
   - Ou arraste-o para a janela do navegador
   - Ou use um servidor local (Live Server, http-server, etc.)

3. **Navegue pelo menu**
   - Use o botão no topo para alternar entre modo claro e escuro
   - Role a página para ver as animações
   - Aproveite o efeito parallax no fundo

## 🔧 Personalizações Possíveis

### Alterar Cores

Edite as variáveis CSS em [css/style.css](css/style.css):

```css
:root {
    --primary-color: #5c2c0a;
    --accent-color: rgb(164, 6, 6);
    --menu-bg: rgba(225, 187, 187, 0.95);
}
```

### Adicionar Itens ao Menu

No [index.html](index.html), adicione novos artigos seguindo o padrão:

```html
<article class="item">
  <p class="flavor">Nome do Item</p>
  <p class="price">R$ 00.00</p>
</article>
```

### Modificar Imagem de Fundo

Substitua o arquivo `images/coffee_background.jpg` ou altere em [css/style.css](css/style.css):

```css
body {
    background-image: url(../images/sua-imagem.jpg);
}
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints para:

- **Desktop**: > 481px
- **Mobile**: ≤ 480px

## 🌟 Recursos Avançados

### Persistência de Tema

O tema escolhido (claro/escuro) é salvo no `localStorage` e restaurado automaticamente na próxima visita.

### Intersection Observer

Detecta quando elementos entram na viewport para aplicar animações suaves.

### Event Delegation

Gerenciamento eficiente de eventos para melhor performance.

## 📝 Próximas Melhorias (Roadmap)

- [ ] Sistema de busca/filtro de itens
- [ ] Carrinho de compras
- [ ] Integração com sistema de pedidos
- [ ] Galeria de fotos dos produtos
- [ ] Avaliações de clientes
- [ ] Mapa de localização integrado
- [ ] Internacionalização (i18n)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Diego B. Silva**  
DBSolutions

---

## 📞 Informações da Cafeteria

**Sol & Sabor Capixaba**  
📍 Rua Joaquim da Silva Lima, nº 167, Centro - Guarapari/ES  
📞 (27) 3262-1234  
📱 (27) 99999-8888  
✉️ contato@solesabor.com.br

### Horário de Funcionamento

- **Segunda a Sexta:** 07:00 - 19:00
- **Sábado:** 08:00 - 18:00
- **Domingo:** 08:00 - 13:00

---

⭐ Se você gostou deste projeto, considere dar uma estrela!

Desenvolvido com ☕ e ❤️ por DBSolutions | © 2024-2026
