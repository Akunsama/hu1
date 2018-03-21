/*
<<<<<<< HEAD
* action 创建函数
*/
export const ADD_TODO = "ADD_TODO";

export function addTodo(payload) {
  return { type: "ADD_TODO", payload };
=======
 * action 创建函数
 */
export const ADD_TODO = 'ADD_TODO';

export function addTodo(text) {
  return { type: 'ADD_TODO', text }
>>>>>>> 24c994fed3d9d4853703c444a3b6a786be656646
}
