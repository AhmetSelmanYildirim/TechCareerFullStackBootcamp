package com.asy.apitodo.service;

import com.asy.apitodo.entity.Todo;
import com.asy.apitodo.exception.TodoNotFoundException;
import com.asy.apitodo.repository.ITodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    // INJECTION
    @Autowired
    private ITodoRepository todoRepository;

    // CREATE
    public Todo saveTodo(Todo todo){
        return todoRepository.save(todo);
    }

    // LIST
    public List<Todo> findAllTodo(){
        return todoRepository.findAll();
    }

    // FIND BY ID
    public Todo findTodoById(Long todoId){
        if(todoRepository.existsById(todoId)){
            return todoRepository.findById(todoId).get();
        }else{
            throw new TodoNotFoundException("Todo not found with id: " + todoId);
        }
    }

    // UPDATE
    public Todo updateTodo(Long todoId, Todo todo){
        if (todoRepository.existsById(todoId)) {

            todo.setId(todoId);
            return todoRepository.save(todo);
        } else {
            throw new TodoNotFoundException("Todo not found with id: " + todoId);
        }
    }

    // DELETE BY ID
    public void deleteTodoById(Long todoId){
        if(todoRepository.existsById(todoId)){
            todoRepository.deleteById(todoId);
        }else{
            throw new TodoNotFoundException("Todo not found with id: " + todoId);
        }
    }

    // DELETE ALL
    public void deleteAll(){
        todoRepository.deleteAll();
    }

    // DELETE COMPLETED
    public void deleteCompletedTodos() {
        todoRepository.deleteCompletedTodos();
    }


}
