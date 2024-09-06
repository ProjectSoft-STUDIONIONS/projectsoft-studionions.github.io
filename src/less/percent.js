registerPlugin({
	install: function (less, pluginManager, functions) {
		functions.add('pb', function (a, b) {
			// Функция проверки что значение число
			function calc(r) {
				if (Number.isNaN(Number.parseFloat(r.value))) {
					r.value = 1;
					return r;
				}
				r.value = parseFloat(r.value);
				return r;
			}
			// Простая проверка переданных данных
			if(!a) {
				a = {
					value: 1
				};
			}
			if(!b) {
				b = {
					value: 0
				}
			}
			// Если передали строку, то вернёт еденицу. На ноль делить нельзя
			a.value = (Number.isNaN(Number.parseFloat(a.value))) ? 1 : (parseFloat(a.value) ? parseFloat(a.value) : 1);
			// Если передали строку, то вернёт ноль.
			b.value = (Number.isNaN(Number.parseFloat(b.value))) ? 0 : parseFloat(b.value);
			// Возвращяем проценты
			return ((b.value / a.value) * 100) + '%';
		}); 
	} 
});