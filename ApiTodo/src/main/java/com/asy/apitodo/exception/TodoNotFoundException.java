package com.asy.apitodo.exception;

//TODO NOT FOUND EXCEPTION
public class TodoNotFoundException extends RuntimeException {
    public TodoNotFoundException(String message) {
        super(message);
    }
}