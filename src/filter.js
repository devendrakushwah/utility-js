const tail = require('./tail');
const head = require('./head');

const filter = (list, filterToApply) => {
    var result = [];
    return applyFilter(list, filterToApply, result);
}

const applyFilter = (list, filterToApply, result) => {
    if (list.length > 0) { 
        var currentHead = head(list);
        if (filterToApply(currentHead))
            result.push(currentHead);
        return applyFilter(tail(list), filterToApply, result);
    }
    return result;
}
module.exports = filter;