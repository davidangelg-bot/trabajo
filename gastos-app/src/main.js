document.querySelector('#calcular').addEventListener('click', () => {
  const total = parseFloat(document.querySelector('#total').value);
  const personas = parseInt(document.querySelector('#personas').value);
  const resultado = document.querySelector('#resultado');

  if (isNaN(total) || isNaN(personas) || personas <= 0) {
    resultado.textContent = 'Ingresa valores válidos';
    resultado.style.color = 'red';
    return;
  }

  const pagoPorPersona = (total / personas).toFixed(2);
  resultado.style.color = '#28a745';
  resultado.textContent = `Cada uno paga: $${pagoPorPersona}`;
});