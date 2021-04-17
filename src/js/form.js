const modalClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');
const submitButton = document.querySelector('.button_submit');

const form = document.querySelector('.contacts__form');

let closeHandler = function (evt) {
	evt.preventDefault();
	overlay.style.display = 'none';
  };

modalClose.addEventListener('click', closeHandler);

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		closeHandler(evt);
	}
});

// Временное отключение валидации
form.setAttribute('novalidate', true);

form.addEventListener('submit', function (evt) {
	evt.preventDefault();

	// Добавление класса, при котором невалидные поля подсвечены
	// Это нужно, чтобы до первого сабмита форма не была с красными полями
	form.classList.add('contacts__form_invalid');

	// Включение валидации формы
	form.removeAttribute('novalidate');

	if (!form.checkValidity()) {
		setTimeout(function() {
			// Повторный вызов сабмита при включенной валидации покажет подсказки
			submitButton.click();
			// Временное отключение валидации для показа невалидных полей
			form.setAttribute('novalidate', true);
		}, 0);
		} else {
			form.removeAttribute('novalidate');
			form.classList.remove('contacts__form_invalid');
			overlay.style.display = 'block';
			// form.submit();
			form.reset();
			form.setAttribute('novalidate', true);
		}
});

