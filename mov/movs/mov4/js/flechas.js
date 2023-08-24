const ftop=document.getElementById('ftop');
const fdown=document.getElementById('fdown');
const fleft=document.getElementById('fleft');
const fright=document.getElementById('fright');

ftop.addEventListener('mousedown',function(){
	ftopPresionado();
});
ftop.addEventListener('mouseup',function(){
	myCar.teclaPress="";
});

fdown.addEventListener('mousedown',function(){
	fdownPresionado();
});
fdown.addEventListener('mouseup',function(){
	myCar.teclaPress="";
});

fleft.addEventListener('mousedown',function(){
	fleftPresionado();
});
fleft.addEventListener('mouseup',function(){
	myCar.teclaPress="";
});

fright.addEventListener('mousedown',function(){
	frightPresionado();
});
fright.addEventListener('mouseup',function(){
	myCar.teclaPress="";
});

function ftopPresionado(){
	if(myCar.giro && myCar.girook===false){
		myCar.girar('up');
	}else{
		if(myCar.direccion!=='down' && myCar.direccion!=='up'){
			myCar.teclaPress='up';
		}
	}
}

function fdownPresionado(){
	if(myCar.giro && myCar.girook===false){
		myCar.girar('down');
	}else{
		if(myCar.direccion!=='up' && myCar.direccion!=='down'){
			myCar.teclaPress='down';
		}
	}
}

function fleftPresionado(){
	if(myCar.giro && myCar.girook===false){
		myCar.girar('left');
	}else{
		if(myCar.direccion!=='right' && myCar.direccion!=='left'){
			myCar.teclaPress='left';
		}
	}
}

function frightPresionado(){
	if(myCar.giro && myCar.girook===false){
		myCar.girar('right');
	}else{
		if(myCar.direccion!=='left' && myCar.direccion!=='right'){
			myCar.teclaPress='right';
		}
	}
}