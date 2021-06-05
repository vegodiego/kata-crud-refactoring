package co.com.sofka.crud.TodoList;

import co.com.sofka.crud.Todo.Todo;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;


@Entity
public class TodoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
