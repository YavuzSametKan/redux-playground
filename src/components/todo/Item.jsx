import {useAutoAnimate} from "@formkit/auto-animate/react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, editTodo} from "../../stores/todo";
import {openModal} from "../../stores/modal";

const Item = ({ todo }) => {

    const [animationParent] = useAutoAnimate()

    const dispatch = useDispatch()

    // getting user from provider
    const { user } = useSelector(state => state.auth)

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }

    const handleEdit = () => {
        dispatch(openModal({
            name: 'edit-todo',
            data: todo
        }))
    }

    const handleUpdateDone = () => {
        dispatch(editTodo({
            id: todo.id,
            title: todo.title,
            done: !todo.done
        }))
    }

    return (

        <li
            className="w-full pl-6 pr-2 min-h-14 flex justify-between items-center bg-blue-100 rounded-full"
            ref={animationParent}
        >
            <div className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={handleUpdateDone}
                />

                <p className={`text-md ${todo.done && "line-through"}`}>{todo.title}</p>
            </div>

            {todo.userId === user.id &&
                <div className="inline-flex gap-2">
                    <button
                        onClick={handleEdit}
                        className="button"
                    >
                        Edit
                    </button>

                    <button
                        onClick={handleDelete}
                        className="button bg-red-500 hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            }

        </li>

    )
}

export default Item;