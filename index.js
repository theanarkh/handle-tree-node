
function type(value) {
    return Object.prototype.toString.call(value).replace(/\[object (.+)\]/, '$1');
}

exports.handlerTreeNode = function handlerTreeNode(obj, handlers) {
    
    if (type(obj) !== 'Array' && type(obj) !== 'Object') {
        if ('value' in handlers && type(handlers.value) === 'Function') {
            obj = handlers.value(obj);
        }
        return obj;
    }

    let ret = type(obj) === 'Array' ? [] : {};
    // clone
    for(let [k,v] of Object.entries(obj)) {
        if ('key' in handlers && type(handlers.key) === 'Function') {
            k = handlers.key(k);
        }
        ret[k] = handlerTreeNode(v, handlers);
        if ('node' in handlers && type(handlers.node) === 'Function') {
            ret = handlers.node(ret);
        }
    }
    
    return ret;
  }
