let a = 1;
for (let i = 0;i< 2;i++)
{
	var y = 0;
	let x = 1;
	{
		let z = x;
		let x = z;
		
	}
	console.log('test - ' + x + '-' + 'i');
}

try{
	y;
	a;
	x;
}
catch (e){	
	console.log(e);
}

try{
	i;
}
catch (e){
	console.log(e);
}

try{
	z;
}
catch (e){
	console.log(e);
}

for (let i = 0; i < 10; i++)
{
    setTimeout(function () {
        console.log(i);
    }, 0);
}