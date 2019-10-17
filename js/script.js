var flag = 0;

function insert(num) {
	let out = document.getElementById("output");
	if (flag == 1) {
		out.style.fontWeight = "normal";
		out.style.fontSize="25pt";
		out.style.color="#000000";
		out.innerHTML = "";
		flag = 0;
	}
	out.innerHTML += num;
}

function erase() {
	let out = document.getElementById("output");
	let str = String(out.innerHTML);
	str = str.substring(0, str.length - 1)
	out.innerHTML = str;
}

function result() {
	let out = document.getElementById("output");
	let str = String(out.innerHTML);
	aspLeft = new RegExp(/[(]+/gi);
	aspRight = new RegExp(/[)]+/gi);
	let a = 0, b = 0;
	try {
		if (aspLeft.test(str)) {
	 	a = str.match(/[(]/gi).length;
		}
		if (aspRight.test(str)) {
			str = str.replace(/[)]+/gi, "");
		}
		a -= b;
		while (a >= 1) {
			str = str.substring(0, str.length + 1) + ")";
			a--;
		}
		str = eval(str);
		if (str == undefined) {
			str = "";
		}
		out.innerHTML = str;
	} catch (err) {
		out.style.fontWeight = "bold";
		out.style.fontSize="15pt";
		out.style.color="red";
		out.innerHTML = "Digite uma expressão válida.";
		flag = 1;
	}
}

function clean() {
	let out = document.getElementById("output");
	out.innerHTML = "";
}
