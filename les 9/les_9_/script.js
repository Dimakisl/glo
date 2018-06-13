let userAgent = navigator.userAgent;
alert(userAgent);

let modal = document.getElementById('myModal');
let img = document.getElementById('MyImg');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');

let span = document.getElementsByClassName('close')[0];

let ie = (userAgent.indexOf('Edge') != -1 || userAgent.indexOf('rv') != -1)

if(ie)
{

img.onclick = function () {
	modal.style.display = 'block';
	modalImg.src = this.src;
	captionText.innerHTML = this.alt; 
}



span.onclick = function(e){
	modal.style.display = 'none';
}

window.onclick = function(e)
{
		if(e.target == modal)
		modal.style.display = 'none';
}
}else{
	modalImg.classList.remove('modal-content');
	modal.style.display = 'block';
	modalImg.src = img.src;
	modalImg.style.transform = 'scale(1.5)';

	span.onclick = function(e){
		modal.style.display = 'none';
	}
}
