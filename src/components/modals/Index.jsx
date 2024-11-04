import Container from "../Container.jsx"
import {useDispatch, useSelector} from "react-redux"
import {closeModal} from "../../stores/modal.js"
import modals from "../../modals.js";

const Index = () => {

    const dispatch = useDispatch()

    // getting modal name and modal data from provider
    const { name, data } = useSelector(state => state.modal)

    const modal = modals.find(m => m.name === name)

    const handleClose = () => {
        dispatch(closeModal())
    }

    return (

        <div className="modal-overlay w-full h-screen fixed flex items-center justify-center z-10 bg-black bg-opacity-50">
            <Container>
                <div className="flex flex-col bg-white z-20 p-6 gap-4 rounded-3xl">
                    <header className="flex justify-between items-center py-4 border-b-2 border-b-zinc-300">
                        <h1 className="text-xl font-semibold">{name}</h1>

                        <button
                            onClick={handleClose}
                            className="button bg-red-500 hover:bg-red-600"
                        >
                            Close
                        </button>
                    </header>

                    <modal.element data={data} close={handleClose} />
                </div>
            </Container>
        </div>

    )
}

export default Index;