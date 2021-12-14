import React from 'react'
import { useState } from 'react';
import Modal from './Modal';

const Forms = () => {

    function handleClick (e) {
        e.preventDefault()

        const 
                name = document.querySelector(('[name="name"]')),
                tel = document.querySelector(('[name="phone"]'))

        const plan = {
            name: name.value,
            tel: tel.value
        }

        console.log(plan);    
    }
    
    const [modalActive, setModalActive] = useState('')
    console.log(modalActive);

    return (
        <div className = 'container'>
                <form action = '#' method = 'post' id = 'form' className = 'form'>
                    <div>
                        <h3>Забронируйте столик</h3>

                        <label>
                            <h4>Имя:</h4>
                                <input type = 'text' name = 'name' placeholder = 'Как к вам обратиться?'></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            <h4>Ваш телефон:</h4>
                                <input type = 'tel' name = 'phone' placeholder = 'Оставь телефончик))'></input>
                        </label>
                    </div>
                    <div className = 'btn'>
                        <button type = 'button' onClick = {handleClick}>Отправить</button>
                            <Modal active = {modalActive} setActive = {setModalActive}>

                            </Modal>
                    </div>
                </form>
            </div>
    )
}

export default Forms
