const form = document.getElementById('converter-form');
const resultBlock = document.getElementById('result');
const madAmount = document.getElementById('mad-amount');
const markup = document.getElementById('markup');
const total = document.getElementById('total');

const formatMAD = new Intl.NumberFormat('fr-MA', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const eur = Number(form.eur.value);
  const rate = Number(form.rate.value);

  if (!Number.isFinite(eur) || !Number.isFinite(rate) || eur < 0 || rate <= 0) {
    resultBlock.hidden = true;
    return;
  }

  const convertedMAD = eur * rate;
  const markupMAD = convertedMAD * 0.015;
  const totalMAD = convertedMAD + markupMAD;

  madAmount.textContent = formatMAD.format(convertedMAD);
  markup.textContent = formatMAD.format(markupMAD);
  total.textContent = formatMAD.format(totalMAD);
  resultBlock.hidden = false;
});
