let fbuttons = document.querySelectorAll('.fbutton');

fbuttons.forEach((btn) => {
	btn.addEventListener('click', function () {
		console.log(btn.innerHTML);
	});
});

console.log(fbuttons);
