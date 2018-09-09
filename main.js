class ArrayList{
	constructor(){
		this.array = [];
		const arrVal = Object.values(this)[0];
		return arrVal
	}
	push(ele){
        arrVal.push(ele)
        return arrVal

	}
	pop(){
		arrVal.pop()
        return arrVal
	}
	unshift(val){
		arrVal.unshift(val)
		 // console.log(arrVal)
        return arrVal
	}
	map(callBack){
        return arrVal.map(callBack)
	}
	filter(callBack){
		return arrVal.filter(callBack)
	}
	find(){
		return arrVal.find()
	}
	clear(){
		return arrVal.clear()
	}
	reduce(callBack, initialValue){
       return arrVal.reduce(callBack, initialValue)
	}
	concat(array){
        return arrVal.concat(array)
	}


}

let myArr = new ArrayList()
myArr.push('2')
myArr.push('5')
myArr.push('hi')
myArr.push('bye')
console.log(myArr)
// console.log(myArr.pop())
// myArr.unshift('hello')
// let res = myArr.reduce((a, b)=>{return a + b}, 0)
let myArr2 = [1,2,5,7]
let res = myArr.concat(myArr2)
console.log(res)
// for(const ele of myArr){
// 	console.log(ele)
// }