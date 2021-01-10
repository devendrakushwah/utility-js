const tail = require('./tail');
const head = require('./head');

const map = (list, functionToApply) =>
{
    var result = [];
    return applyFunction(list, functionToApply, result);
}

const applyFunction = (list, functionToApply, result) => {
   if(list.length  > 0 ){
        result.push(functionToApply(head(list)));
        return applyFunction(tail(list), functionToApply, result);
   }
    return result;
}
module.exports = map;