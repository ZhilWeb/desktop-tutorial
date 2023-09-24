let d_not_more = document.getElementsByClassName('not_more');
let d_more = document.getElementsByClassName('more');
const showInfoButton = document.getElementById('button');
count = 0;

showInfoButton.addEventListener('click', function () {
	let d;
	if(count % 2 === 0){
		d = d_not_more;
	} else{
		d = d_more;
	}
	

	if(d[0].className === "short_info not_more" || d[0].className === "long_info not_more"){
		for(let i = d.length - 1; i >= 0; i--){
			{
				d[i].className = d[i].className.replace(" not_more", " more");	
			}
		}
	} else{
		for(let i = d.length - 1; i >= 0; i--){
			{
				d[i].className = d[i].className.replace(" more", " not_more");
			}
		}
	}
	count++;
});

