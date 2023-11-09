package com.asy.apitodo.service;

import com.asy.apitodo.entity.Todo;
import com.asy.apitodo.exception.TodoNotFoundException;
import com.asy.apitodo.repository.ITodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private ITodoRepository todoRepository;

    public Todo saveTodo(Todo todo){
        return todoRepository.save(todo);
    }
    public List<Todo> findAllTodo(){
        return todoRepository.findAll();
    }
    public Todo findTodoById(Long todoId){
        return todoRepository.findById(todoId).get();
    }
    public Todo updateTodo(Long todoId, Todo todo){
        if (todoRepository.existsById(todoId)) {
            todo.setId(todoId);
            return todoRepository.save(todo);
        } else {
            throw new TodoNotFoundException("Todo not found with id: " + todoId);
        }
    }
    public void deleteTodoById(Long todoId){
        todoRepository.deleteById(todoId);
    }
    public void deleteAll(){
        todoRepository.deleteAll();
    }

    public void deleteCompletedTodos() {
        todoRepository.deleteCompletedTodos();
    }


}
