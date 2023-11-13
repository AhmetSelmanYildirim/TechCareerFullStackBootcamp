package com.asy.apitodo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

//LOMBOK
@Entity
@Table(name="todos")
@Getter
@Setter
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private Boolean completed;
}
