
var $el = document.querySelector("[data-mailto]");
if ($el && $el.dataset.mailto) {
	// Sort of obfuscating email
	// If javascript is disabled, don't show email
	// Decodes a base64 string and reverses it to get the actual email
	$el.href = "mailto:" + atob($el.dataset.mailto).split("").reverse().join("");
	$el.style.display = "initial";
}