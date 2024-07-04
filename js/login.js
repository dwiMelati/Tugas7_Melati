const form = document.querySelector('.daftar');
const inputs = form.querySelectorAll('input');
const select = form.querySelector('select');
const submitButton = form.querySelector('button[type="submit"]');

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value.trim() === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
});

select.addEventListener('mengubah', () => {
  const selectedOption = select.options[select.selectedIndex];
  console.log(`Opsi yang dipilih: ${selectedOption.text}`);
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const isValid = Array.from(inputs).every((input) => input.value.trim() !== '');
  if (isValid) {
    console.log('Formulir telah diserahkan!');
  } else {
    alert('Silakan isi semua kolom!');
  }
});
