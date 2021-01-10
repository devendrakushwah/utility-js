const min = (list) => {
	if(list.length == 0){
		return [];
	}
	return Math.min(...list);
}
module.exports = min;
