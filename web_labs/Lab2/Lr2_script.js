function RetArg(arg) {return arg;}

function RetArgF(obj){ 
	var arg = obj.arg_ret.value;
	console.log(arg);
	obj.res1.value = arg;
}

function Summ(arg, arg2){
	return arg + arg2;
}

function SummF(obj){
	var arg1;
	var arg2;
	if (obj.checkbox.value === "string"){
		arg1 = obj.arg_summ1.value;
		arg2 = obj.arg_summ2.value;
	}
	else if (obj.checkbox.value === "number"){
		arg1 = parseFloat(obj.arg_summ1.value);
		arg2 = parseFloat(obj.arg_summ2.value);
	}
	else if (obj.checkbox.value === "number_or_zero"){
		isNaN(obj.arg_summ1.value) ? arg1 = 0 : arg1 = parseFloat(obj.arg_summ1.value);
		isNaN(obj.arg_summ2.value) ? arg2 = 0 : arg2 = parseFloat(obj.arg_summ2.value);
	}
	obj.res2.value = arg1 + arg2;
	console.log(arg1 + arg2);
}

function Sqr(){
	var array = [1, 3, "nope", 9, "rt3", "", 5];
	console.log(array);
	var newArray = Array(array.length);
	for (let i = 0; i < array.length; i++){
		isNaN(array[i]) ? newArray[i] = 0 : newArray[i] = array[i] * array[i];
	}
	return newArray;
}

function ClearForm(obj){
	obj.arg_ret.value = "";
	obj.res1.value = "";
	obj.arg_summ1.value = "";
	obj.arg_summ2.value = "";
	obj.res2.value = "";
}