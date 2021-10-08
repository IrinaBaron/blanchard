var selector = document.querySelectorAll("input[type=tel]");

var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);



$(document).on('keypress', '.input-text', function (event) {
  var regex = new RegExp("^[А-Яа-яЁё ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
      event.preventDefault();
      return false;
  }
});

new JustValidate('.form', {
	rules: {
		name: {
			required: true,
			minLength: 2,
			maxLength: 35,
      number: false,
      regex: true,
      // accept: ""[а-яА-ЯёЁa-zA-Z]+",",
		},
		tel: {
			required: true,
			function: (name, value) => {
				const phone = selector[0].inputmask.unmaskedvalue()
				return Number(phone) && phone.length === 10
			}
		}
	},
	messages: {
		name: 'Недопустимый формат',
		tel: 'Укажите ваш телефон',
	},
  submitHandler: function(form) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          document.querySelector('.form__btn').addEventListener('click', () => {
            new GraphModal().open('second');
          });
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    form.reset();
  }
	
});