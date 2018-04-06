/*
* action 创建函数
*/

export function addTodo(payload) {
  return { type: "ADD_TODO", payload };
}

export function addProductIndex(payload) {
  return { type: "ADD_PRODUCTINDEX", payload};
}
