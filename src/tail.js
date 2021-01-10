const tail = (list) => {
	if(list.length == 0){
		return null;
	}
	var aux = [];
	var index = list.length - 1;
	return findTail(list, index, aux);
}

const findTail = (list, index, aux) =>{
	if(index == 0){
		return aux;
	}
	aux.unshift(list[index]);
	return findTail(list, index-1, aux);
}

module.exports = tail;
