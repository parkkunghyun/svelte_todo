<script>
    import {todos,saveStorage} from '../store/index'
    export let todo

    let isEditMode = false
    let title = ''
    function onEditMode(){
        isEditMode = true
        title = todo.title
    }
    function offEditMode(){
        isEditMode = false
    }
    function updateTodo(){
        todo.title =title
        saveStorage()
        offEditMode()
    }
    function deleteTodo(){
        $todos = $todos.filter(t=> t.id !== todo.id)
        saveStorage()
    }

</script>

<div class="todo">
    {#if isEditMode}
        <div class="edit-mode">
            <input type="text" class="form-control" bind:value={title} on:keyup={(e)=>{
                if(e.key === 'Enter')updateTodo()
            }}>
            <button class="btn btn-primary" on:click={updateTodo}>OK</button>
            <button class="btn btn-secondary" on:click={offEditMode}>CANCEL</button>
        </div>
    {:else}
        <div class="normal-mode">
            <div class="title">
                {todo.title}
            </div>
            <button class="btn btn-secondary" on:click={onEditMode}>
                Edit
            </button>
            <button class="btn btn-danger" on:click={deleteTodo}>
                Delete
            </button>
        </div>

    {/if}
    <div class="edit-mode"></div>
    <div class="normal-mode"></div>
</div>

<style lang="scss">
    .todo {
        padding: 10px 14px;
        border-radius:6px;

        &:hover {
            background-color: $gray-100;
        }
    }
    .edit-mode, 
    .normal-mode {
        display:flex;
    }
    .title {
        flex-grow: 1;
        display: flex;
        align-items:  center;
        font-size: 18px;
    }
    .btn {
        flex-shrink: 0;
        margin-left:5px;
    }

</style>