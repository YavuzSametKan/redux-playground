import {useState} from "react";
import {useDispatch} from "react-redux";
import {editTodo} from "../../stores/todo";

const EditTodo = ({ data, close }) => {

    const dispatch = useDispatch()

    const [todo, setTodo] = useState(data.title)
    const [done, setDone] = useState(data.done)

    const submitHandle = e => {
        e.preventDefault()
        dispatch(editTodo({
            id: data.id,
            title: todo,
            done
        }))
        close()
    }

    return (
        <form
            onSubmit={submitHandle}
            className="flex flex-col gap-4 items-start"
        >
            <label className="w-full flex gap-2 items-center">
                <span className="text-lg">TODO:</span>
                <input
                    type="text"
                    value={todo}
                    placeholder="Refactor Shit Codes"
                    onChange={e => setTodo(e.target.value)}
                    className="h-12 w-full border-2 border-zinc-300 rounded-full outline-zinc-500 px-5"
                />
            </label>

            <label className="inline-flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={done}
                    onChange={e => setDone(e.target.checked)}
                />
                <span className="text-lg">Is Done?</span>
            </label>

            <button
                type="submit"
                className="button w-full"
            >
                Update
            </button>
        </form>
    )
}

export default EditTodo;