//Find the unique results in array 



//1st way
//using the includes function of array
//time complexity:- O(n)
var arr1 = [1,2,3,45,12,45,6,1,2,7,90];
var arr2 = [];
for(var i = 0; i< arr1.length; i++){
	if(arr2.length > 0 ){
		if(!arr2.includes(arr1[i])) {arr2.push(arr1[i])}
	} else {
		arr2.push(arr1[i])
	}
}
console.log(arr2)

//2nd way
//time complexity:- O(n2)
var arr11 = [1,2,3,45,12,45,6,1,2,7,90];
var arr21 = [];
for(var i = 0; i< arr11.length; i++){
	if(arr21.length <= 0 ){
        arr21.push(arr11[i])	
	} else {
        var present = false
        for(var j=0; j<=arr21.length; j++) {
            if(arr21[j] === arr11[i]){
                present = true;
            }
        }
        if(!present){
            arr21.push(arr11[i])
        }
	}
}
console.log(arr21)

//3rd way
//using a object
var arr13 = [1,2,3,45,12,45,6,1,2,7,90];
var obj = {};
for(var i = 0; i< arr13.length; i++){
    if(obj[arr13[i]]){

    }else {
        obj[arr13[i]]=1
    }
}
console.log(Object.keys(obj).map(Number))