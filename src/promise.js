var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("время вышло!"));
  }, 1000);
});

promise1
  .then(
    result => console.log("Fulfilled: " + result),
    error => console.log("Rejected: " + error.message) 
  );

var promise2 = new Promise((resolve, reject) => {
  throw new Error("o_O");
})

promise2.catch(console.log); 


var promise3 = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('first');
	}, 1000);
});

promise3.then(result=>{
	console.log(result);
	return new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve(result + '-second');
	}, 1000);
	});
})
.then(result=>{
	console.log(result);
	return result + '-third';
})
.then(result=>{
	console.log(result);
	throw(new Error(result + 'error'));
	
})
.catch(error=>{
	console.log(error);
});


/*
Promise.all
Promise.race

Promise.resolve
Promise.reject
*/