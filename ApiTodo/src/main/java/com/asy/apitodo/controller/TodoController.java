package com.asy.apitodo.controller;

import com.asy.apitodo.entity.Todo;
import com.asy.apitodo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/")
public class TodoController {
    @Autowired
    private TodoService todoService;
    @PostMapping("/api/todo")
    public ResponseEntity<Todo> saveTodo (@RequestBody Todo todo){
        Todo todoObject = todoService.saveTodo(todo);
        return new ResponseEntity<Todo>(todoObject, HttpStatus.CREATED);
    }

    @GetMapping("/api/todo")
    public ResponseEntity<List<Todo>> getAllTodo(){
        List<Todo> todoList = todoService.findAllTodo();
        return new ResponseEntity<List<Todo>>(todoList,HttpStatus.OK);
    }

    @GetMapping("/api/todo/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable("id") Long id){
        Todo todoObject = todoService.findTodoById(id);
        return new ResponseEntity<Todo>(todoObject,HttpStatus.FOUND);
    }

    @PutMapping("/api/todo/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable("id") Long id, @RequestBody Todo todo) {
        Todo todoObject = todoService.updateTodo(id,todo);
        return new ResponseEntity<Todo>(todoObject, HttpStatus.FOUND);
    }

    @DeleteMapping("/api/todo/delete/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable("id") Long id){
        todoService.deleteTodoById(id);
        return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/api/todo/delete/completed")
    public ResponseEntity<Void> deleteCompletedTodos(){
        todoService.deleteCompletedTodos();
        return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/api/todo/delete/all")
    public ResponseEntity<Void> deleteAll(){
        todoService.deleteAll();
        return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
    }
}
