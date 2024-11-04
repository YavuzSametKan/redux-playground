import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../../stores/auth";

const Header = () => {

    const dispatch = useDispatch()

    // getting user from provider
    const { user } = useSelector(state => state.auth)

    const handleLogin = (user) => dispatch(login(user))

    const handleLogout = () => dispatch(logout())

    const userNames = ["Yavuz Samet KAN", "Ahmet Suat CAN", "Serhat ERDEM", "Samet Berkant KOCA"]

    return (

        <header className="py-4 flex flex-col justify-between items-center bg-zinc-100 border-b-2 border-b-zinc-200 gap-4">

            <a
                href="/"
                className="h-6 text-xl inline-flex items-center gap-1"
            >
                <img
                    src="https://redux-toolkit.js.org/img/redux.svg"
                    alt="Logo Icon"
                    className="size-12 max-lg:size-10"
                />
                <b>Redux Playground</b>
            </a>

            <nav className={"inline-flex gap-2 items-center max-w-[60%] max-lg:max-w-[90%] overflow-x-auto " + (user ? "justify-center" : "justify-between")}>
                {user ? (<>
                    <span className="text-lg text-nowrap">
                        Welcome, {user.name}
                    </span>
                    <button
                        className="button bg-red-500 hover:bg-red-600"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </>) : (<>
                    <span className="text-lg max-lg:text-sm text-nowrap">Login as:</span>
                    {userNames.map((userName, i) =>
                        <button
                            key={i}
                            onClick={() => handleLogin({id: i, name: userName})}
                            className="button text-nowrap"
                        >
                            {userName}
                        </button>
                    )}
                </>)}

            </nav>

        </header>

    )
}

export default Header;