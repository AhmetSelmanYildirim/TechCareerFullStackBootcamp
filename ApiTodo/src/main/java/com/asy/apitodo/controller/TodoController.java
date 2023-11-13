package com.asy.apitodo.controller;

import com.asy.apitodo.entity.Todo;
import com.asy.apitodo.service.TodoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/todo")
public class TodoController {
    @Autowired
    //INJECTION
    private TodoService todoService;

    //CREATE
    // http://localhost:4000/api/todo/
    @PostMapping()
    public ResponseEntity<?> saveTodo (@RequestBody @Valid Todo todo, BindingResult result){
        if (result.hasErrors()) {
            List<String> errors = result.getAllErrors().stream()
                    .map(error -> error.getDefaultMessage())
                    .collect(Collectors.toList());
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
        Todo todoObject = todoService.saveTodo(todo);
        return new ResponseEntity<Todo>(todoObject, HttpStatus.CREATED);
    }

    //FIND ALL
    // http://localhost:4000/api/todo
    @GetMapping()
    public ResponseEntity<List<Todo>> getAllTodo(){
        List<Todo> todoList = todoService.findAllTodo();
        return new ResponseEntity<List<Todo>>(todoList,HttpStatus.OK);
    }

    //FIND BY ID
    // http://localhost:4000/api/todo/1
    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable("id") Long id){
        Todo todoObject = todoService.findTodoById(id);
        return new ResponseEntity<Todo>(todoObject,HttpStatus.FOUND);
    }

    //UPDATE
    // http://localhost:4000/api/todo/1
    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable("id") Long id, @RequestBody Todo todo) {
        Todo todoObject = todoService.updateTodo(id,todo);
        return new ResponseEntity<Todo>(todoObject, HttpStatus.OK);
    }

    //DELETE BY ID
    // http://localhost:4000/api/todo/delete/1
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable("id") Long id){
        todoService.deleteTodoById(id);
        return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
    }

    //DELETE COMPLETED
    // http://localhost:4000/api/todo/delete/completed
    @DeleteMapping("/delete/completed")
    public ResponseEntity<Void> deleteCompletedTodos(){
        todoService.deleteCompletedTodos();
        return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
    }

    //DELETE ALL
    // http://localhost:4000/api/todo/delete/all
    @DeleteMapping("/delete/all")
    public ResponseEntity<Void> deleteAll(){
        todoService.deleteAll();
        return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
    }
}
