import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/components/icon/icon.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/components/tree/tree.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/components/tree-item/tree-item.js';
const imgLogoPath = 'assets/logo.jpg';
const nameUser = 'USUÁRIO SILVIA DESIGN';

const sidebarConfiguration = `
      <div class="brand">
        <img src=" ${imgLogoPath} " alt="logo" class="logo" onerror="this.style.display='none'">
        <h1>${nameUser}</h1>
      </div>
      <nav>
        <ul>
        <li style="display:flex;flex-direction:row;align-items:center;gap:8px;">
          <sl-icon name="house" class="icon"></sl-icon>
          <a href="index.html">Dashboard</a>
        </li>
        <li style="display:flex;flex-direction:row;align-items:center;gap:8px;">
          <sl-icon name="cart-check" class="icon"></sl-icon>
          <a href="materiais.html">Materiais</a>
        </li>
        <li style="display:flex;flex-direction:row;align-items:center;gap:8px;">
          <sl-icon name="shop" class="icon"></sl-icon>
        <a href="jobs.html">Trabalho Feito</a>
        </li>
         <li style="display:flex;flex-direction:row;align-items:center;gap:8px;">
          <sl-icon name="clipboard-data" class="icon"></sl-icon>
          <a href="relatorio.html">Relatório</a>
        </li>

        <li style="display:flex;flex-direction:row;align-items:center;gap:8px;">
          <sl-tree>
            <sl-tree-item>
              <sl-icon name="cash-stack" class="icon"></sl-icon>
              <a>Financeiro</a>
              <sl-tree-item>
                <sl-icon name="cash-coin" class="icon"></sl-icon>
                <a href="caixa.html">Caixa</a>
              </sl-tree-item>
              <sl-tree-item>
                <sl-icon name="wallet2" class="icon"></sl-icon>
                <a href="carteira.html">Minha Carteira</a>
              </sl-tree-item>
            </sl-tree-item>
          </sl-tree>
        </li>

        </ul>
      </nav>
      <footer class="sidebar-foot">v1.0 — Sine Inc.</footer>
`;

document.querySelector('.sidebar').innerHTML = sidebarConfiguration;
