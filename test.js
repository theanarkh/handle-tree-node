const { handlerTreeNode } = require('./');
console.log(handlerTreeNode({A:{B:{C:'D'}}} ,{key: (key) => {
	return `${key[0].toLowerCase()}${key.slice(1)}`;
}}));