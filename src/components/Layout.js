import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <header>
                <Link to = '/'>Главная</Link>
                <Link to = '/menu'>Меню</Link>
                <Link to = '/photo'>Фотоальбом</Link>
                <Link to = '#'>+7(495)313-43-43</Link>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer className = 'container'>2021</footer>
        </>
    )
}

export { Layout }