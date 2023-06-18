import {writable} from "svelte/store";
import {supabase} from "../supabase.js";
export const todos = writable([]);

export const name = writable('Svelte');

export const addTodo = (text) => {
    todos.update((cur) =>{
        const newTodos = [...cur, {text, completed: false, id: Date.now()}];
    })
}

export const deleteTodo = (id) => {
    todos.update((todos) => todos.filter((todo)=> todo.id !== id))
}