import TodoItem from "./Item";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {useSelector} from "react-redux";

const List = () => {

    // getting todos from provider
    const { todos } = useSelector(state => state.todo)

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
                />
            )}
        </ul>
    )
}

export default List;