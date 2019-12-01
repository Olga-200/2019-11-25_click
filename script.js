
for (let i=0; i <100; i++) {
	document.getElementById('block').innerHTML+='<div id="box"></div>'
}
document.getElementById('block').addEventListener('click', function(event) {

});

(rest = () => {
	var block = document.querySelector('#block'), boxes = block.querySelectorAll('#box');
	boxes.forEach(el => el.onclick = e =>{
		el.classList.toggle('black');
		bl = block.innerHTML;
	});
	document.querySelector('#clear').onclick = () => boxes.forEach(el => el.className = '');
	document.querySelector('#restore').onclick = () => {
		block.innerHTML = bl;
		rest();
	};

})();




