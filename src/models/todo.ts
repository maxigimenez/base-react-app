/**
 * Transform into a class if bussiness logic necessary
 * class Todo {
 *  id: number = null;
 *  text: string = '';
 *  completed = false;
 * 
 *  getAuthor() {...}
 * }
 */
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
