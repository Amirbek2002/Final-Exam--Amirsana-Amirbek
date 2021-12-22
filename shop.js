function first() {
	document.getElementById('block-of__contsct').style.display = "grid";
	document.getElementById('block-of__contsct2').style.display = "none";
	document.getElementById('block-of__contsct3').style.display = "none";
}
function second() {
	document.getElementById('block-of__contsct2').style.display = "grid";
	document.getElementById('block-of__contsct').style.display = "none";
	document.getElementById('block-of__contsct3').style.display = "none";
}
function three() {
	document.getElementById('block-of__contsct').style.display = "none";
	document.getElementById('block-of__contsct2').style.display = "none";
	document.getElementById('block-of__contsct3').style.display = "grid";
}