package com.asy.apitodo.repository;

import com.asy.apitodo.entity.Todo;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITodoRepository extends JpaRepository<Todo,Long> {
    @Transactional
    @Modifying
    @Query("DELETE FROM Todo t WHERE t.completed = true")
    void deleteCompletedTodos();

}
