import {useState} from "react";
import {nanoid} from "nanoid";
import {addTodo} from "../../stores/todo";
import {useDispatch, useSelector} from "react-redux";

const Add = () => {

    const dispatch = useDispatch()

    // getting user from provider
    const { user } = useSelector(state => state.auth)

    const [todo, setTodo] = useState('')

    const handleSubmit = e => {

        e.preventDefault() // destroy default behavior

        dispatch(addTodo({ // add todoItem to todoList
            title: todo,
            done: false,
            id: nanoid(),
            userId: user.id
        }))

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