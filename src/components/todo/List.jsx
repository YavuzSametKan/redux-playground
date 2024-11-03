import TodoItem from "./Item";
import {useAutoAnimate} from "@formkit/auto-animate/react";

const List = ({ todos, setTodos, user, setModal }) => {

    const [animationParent] = useAutoAnimate()

    return (
        <ul
            ref={animationParent}
            className="w-full flex flex-col gap-4"
        >
            {todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                    user={user}
                    setModal={setModal}
                />
            )}
        </ul>
    )
}

export default List;