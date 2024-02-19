import React, { useEffect } from 'react';
import './Modal.css'

const Modal = ({ isVisible, pers, hide }) => {
    // console.log(pers);

    useEffect(() => {
        // при рождении убрать скролл
        document.body.style.overflow = 'hidden'
        // при нажатии на ESC закрыть модальное окно
        document.addEventListener('keydown', (e) => {
            e.code === 'Escape' && hide()
        })
        // при рождении навесить другое событие на кнопку назад у браузера
        if (isVisible) {
            window.history.pushState(null, "", window.location.href);
            window.onpopstate = () => hide()
        }
        return () => {
            // при закрытии мод-го окна вернуть скролл
            document.body.style.overflow = 'auto'
            //  при закрытии убрать действие с ESC
            document.removeEventListener('keydown', () => { })
            // при закрытии вернуть действие по умолчанию на кнопку назад в браузере
            if (!isVisible) window.history.back();
            window.onpopstate = () => { }
        }
    }, [])
    return (
        <div onClick={hide} className='modal'>
            <div onClick={(e) => e.stopPropagation()} className='modal_container'>
                <span onClick={hide} className='close'>&#10006;</span>
                <h2 className='pers_name_modal'>Name: {pers.name}</h2>
                <img className='pers_image' src={pers.image} alt="avatar" />
                <h4 className='pers_info'>Status: {pers.status} </h4>
                <h4 className='pers_info'>Gender: {pers.gender} </h4>
                <h4 className='pers_info'>Species: {pers.species}</h4>
            </div>

        </div>
    );
};

export default Modal;