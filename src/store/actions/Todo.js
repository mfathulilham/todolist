import axios from "axios";

export function getTodoList() {
    return {
        type: "Todolist",
        payload: axios({
            method: 'GET',
            url:'https://virtserver.swaggerhub.com/kioser-tech/todo/1.0.0/',
        })
    };
}

export function postTodo(body) {
    console.log(body)
    return {
        type: "Post_Todolist",
        payload: body
    };
}

export function updateTodo(body) {
    return {
        type: "Update_Todolist",
        payload: body
    };
}

export function deleteTodo(id) {
    return {
        type: "Delete_Todolist",
        payload: id
    };
}