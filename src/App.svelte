<script>
    import {todos} from './store/index.js'
    import CreateTodo from './components/CreateTodo.svelte'
    import Todo from './components/Todo.svelte'

    const storageTodos = localStorage.getItem('todos')
    if(storageTodos){
        $todos =  JSON.parse(storageTodos)
    }
</script>

<div class="container">
    <CreateTodo />
    <div class="todos">
        {#each $todos as todo (todo.id)}
            <Todo todo={todo} />
        {/each}
    </div>
</div>

<style lang="scss">
    .todos {
        padding: 40px, 0;
    }
</style>