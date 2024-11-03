import Header from "./components/todo/Header";
import { useState } from "react";
import AddTodo from "./components/todo/Add";
import TodoList from "./components/todo/List";
import Container from "./components/Container";
import Modal from "./components/Modal";

const App = () => {

    const [todos, setTodos] = useState([])
    const [user, setUser] = useState(false)
    const [modal, setModal] = useState(false)

    const handleCloseModal = () => {
        setModal(false)
    }

    return (
        <main className="flex flex-col gap-4">
            {modal && <Modal name={modal.name} data={modal.data} close={handleCloseModal} />}
            <Header user={user} setUser={setUser} />
            <Container>
                <AddTodo setTodos={setTodos} user={user} />
                <TodoList todos={todos} setTodos={setTodos} user={user} setModal={setModal} />
            </Container>
        </main>
    )
}

export default App
