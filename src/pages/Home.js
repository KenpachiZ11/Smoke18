import Cards from "../components/Cards"
import { Maps } from "../components/Maps"
import Messanger from "../components/Messanger"
import Slider from "../components/Slider"

const Home = () => {
    return (
        <div>
            <div className = 'container'>
                <div className = 'image'>
                    <Slider/>
                    <Messanger/>
                </div>
                <div>
                    <h1>Наши заведения</h1>
                    <Cards/>
                </div>
                <Maps/>
            </div>
        </div>
    )
}
export {Home}