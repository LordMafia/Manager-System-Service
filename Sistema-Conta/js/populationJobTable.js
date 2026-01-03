const form = document.getElementById('saleForm');
const tableBody = document.querySelector('#salesTable tbody');
const dialog = document.querySelector('.dialog-scrolling');

form.addEventListener('submit', function (event) {
    console.log("123");
    
  event.preventDefault(); // impede reload

  // Captura dos dados
  const data = new FormData(form);

  const date = data.get('date');
  const service = data.get('typeService');
  const materials = data.get('materyTag');
  const total = data.get('total');
  const name = data.get('nameClient');

  // Cria linha
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${formatDate(date)}</td>
    <td>${service}</td>
    <td>${materials}</td>
    <td>R$ ${Number(total).toFixed(2)}</td>
    <td>${name}</td>
  `;

  // Adiciona na tabela
  tableBody.appendChild(tr);

  // Limpa formulário
  form.reset();

  // Fecha dialog
  dialog.hide();
});

// Formata data (YYYY-MM-DD → DD/MM/YYYY)
function formatDate(date) {
  if (!date) return '';
  const [y, m, d] = date.split('-');
  return `${d}/${m}/${y}`;
}
