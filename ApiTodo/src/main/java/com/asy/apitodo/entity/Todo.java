package com.asy.apitodo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

//LOMBOK
@Entity
@Table(name="todos")
@Getter
@Setter
public class Todo {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title", nullable = false, length = 100)
    @NotBlank(message = "Title cannot be blank")
    private String title;

    @Column(name = "completed", nullable = false)
    @NotNull(message = "Completed status cannot be null")
    private Boolean completed;
}
