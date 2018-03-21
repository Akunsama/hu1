/*
* action 创建函数
*/
export const ADD_TODO = "ADD_TODO";

export function addTodo(payload) {
  return { type: "ADD_TODO", payload };
}
