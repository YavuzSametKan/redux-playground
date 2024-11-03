import {useState} from "react";
import {nanoid} from "nanoid";

const Add = ({ setTodos, user }) => {

    const [todo, setTodo] = useState('')

    const handleSubmit = e => {

        e.preventDefault() // destroy default behavior

        setTodos(todos => [{
            title: todo,
            done: false,
            id: nanoid(),
            user: user.id
        }, ...todos])  // add todoItem to todoList

        setTodo('') // reset input

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="h-12 w-full flex gap-2"
        >

            <input
                type="text"
                placeholder="TODO..."
                value={todo}
                onChange={e => setTodo(e.target.value)}
                className="border-2 border-zinc-300 rounded-full outline-zinc-500 flex-[6] px-5"
            />

            <button
                type="submit"
                disabled={!todo || !user}
                className="button bg-green-500 hover:bg-green-600 flex-[1]"
            >
                Add
            </button>

        </form>

    )
}

export default Add;