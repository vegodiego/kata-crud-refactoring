package co.com.sofka.crud.Todo;

public interface InterfaceServiceTodo {

    public Iterable<Todo> list();
    public Todo save(Todo todo);
    public void delete(Long id);
    public Todo get(Long id);
}
