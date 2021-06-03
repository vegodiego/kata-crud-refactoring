package co.com.sofka.crud.Todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService implements InterfaceTodoService {

    @Autowired
    private TodoRepository repository;

    @Override
    public Iterable<Todo> list(){
        return repository.findAll();
    }

    @Override
    public Todo save(TodoDTO todoDTO){
        Todo todo = new Todo();
        todo.setName(todoDTO.getName());
        todo.setCompleted(todoDTO.isCompleted());
        todo.setTodoListId(todoDTO.getTodoListId());
        return repository.save(todo);
    }

    @Override
    public Todo update(TodoDTO todoDTO){
        Todo todo = repository.findById(todoDTO.getId()).orElseThrow();
        todo.setName(todoDTO.getName());
        todo.setCompleted(todoDTO.isCompleted());
        todo.setTodoListId(todoDTO.getTodoListId());
        return repository.save(todo);
    }

    @Override
    public void delete(Long id){
        repository.delete(get(id));
    }

    @Override
    public Todo get(Long id){
         return repository.findById(id).orElseThrow();
    }
}
