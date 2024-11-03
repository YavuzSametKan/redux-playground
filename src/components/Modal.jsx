import Container from "./Container";

const Modal = ({ name, data, close }) => {

    return (

        <div
            className="modal-overlay size-full flex items-center justify-center z-10 bg-black bg-opacity-50 absolute"
        >
            <Container>
                <div className="bg-white z-20 p-6">
                    <header className="flex justify-between items-center py-4 border-b-2 border-b-zinc-300">
                        <h1 className="text-xl font-semibold">{name}</h1>

                        <button
                            onClick={close}
                            className="button bg-red-500 hover:bg-red-600"
                        >
                            Close
                        </button>
                    </header>
                </div>
            </Container>
        </div>

    )
}

export default Modal;