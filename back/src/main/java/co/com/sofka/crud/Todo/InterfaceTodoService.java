package co.com.sofka.crud.Todo;

public interface InterfaceTodoService {

    public Iterable<Todo> list();
    public Todo save(TodoDTO todoDTO);
    public Todo update(TodoDTO todoDTO);
    public void delete(Long id);
    public Todo get(Long id);
}
