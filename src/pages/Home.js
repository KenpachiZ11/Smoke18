import Cards from "../components/Cards"
import Forms from "../components/Forms"
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

                <div className = 'forms_map'>
                    <h1>Мы ждем тебя!</h1>
                </div>

                <div className = 'forms'>
                    <Maps/>
                    <Forms/>
                </div>
                
            </div>
        </div>
    )
}
export {Home}