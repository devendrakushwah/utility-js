const tail = require('./tail');
const head = require('./head');

const reduce = (list, functionToApply, initial = '') =>
{
    var result = initial + applyFunction(list, functionToApply, '');
    if(result == ''){
    	return undefined;
    }
    return result;
}

const applyFunction = (list, functionToApply, result) => {
   if(list.length > 0 ){
        return result + functionToApply(head(list), applyFunction(tail(list), functionToApply, result));
   }
   return result;
}
module.exports = reduce;