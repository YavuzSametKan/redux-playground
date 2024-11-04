import Header from "./components/todo/Header";
import AddTodo from "./components/todo/Add";
import TodoList from "./components/todo/List";
import Container from "./components/Container";
import Modal from "./components/modals";
import {useSelector} from "react-redux";
import {useAutoAnimate} from "@formkit/auto-animate/react";

const App = () => {

    const { open : isModalOpen } = useSelector(state => state.modal)

    return (

        <main className="flex flex-col gap-4">
            {isModalOpen && <Modal />}
            <Header/>
            <Container>
                <AddTodo/>
                <TodoList/>
            </Container>
        </main>

    )

}

export default App
