import {useAutoAnimate} from "@formkit/auto-animate/react";

const Item = ({ todo, setTodos, user, setModal }) => {

    const [animationParent] = useAutoAnimate()

    const handleDelete = () => {
        setTodos(
            todos => todos.filter(
                t => t.id !== todo.id
            )
        )
    }

    const handleEdit = () => {
        setModal({
            name: 'edit-todo',
            data: todo
        })
    }

    return (

        <li
            className="w-full pl-6 pr-2 min-h-14 flex justify-between items-center bg-blue-100 rounded-full"
            ref={animationParent}
        >

            <span className="text-lg">{todo.title}</span>

            {todo.user === user.id &&
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