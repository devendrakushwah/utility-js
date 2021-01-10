const max = (list) => {
	if(list.length == 0){
		return [];
	}
	return Math.max(...list);
}
module.exports = max;
