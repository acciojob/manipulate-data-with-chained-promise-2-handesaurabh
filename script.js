//your JS code here. If required.
const numbers=[1,2,3,4];
const output=document.getelementById("output");
const promise=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(numbers);
	},3000)
})
numbers
.then((arr)=>{
	return new Promise((resolve)=>{
		const evenNum=arr.filter((num)=>num%2===0);
		output.innerText=evenNum.join(",");
		resolve(evenNum);
	},1000)
})
.then((even)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const multiply=even.map((num)=>num*2);
			output.innerText=multiply.join(",");
			resolve(multiply);
		},2000)
	})
})
.then((result)=>console.log("Result: ",result));