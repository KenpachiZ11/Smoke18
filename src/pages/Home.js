import Cards from "../components/Cards"
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

            </div>
            
        </div>
    )
}
export {Home}