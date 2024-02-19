import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Output.css'

const Output = ({ data }) => {
    console.log(data);
    const [isVisible, setIsVisible] = useState(false)
    const [currentPers, setCurrentPers] = useState(null)

    const showModal = (id) => {
        setCurrentPers(id);
        setIsVisible(true)
    }

    const hideModal = (e) => {
        // if (e.target.className === 'close' || e.target.className === 'modal') {
        //     setIsVisible(false)
        // }
        setIsVisible(false)
    }
    return (
        <div className='output'>

            {
                data.length > 0 &&
                data.map(pers => (

                    <div className='card' key={pers.id}>
                        <div>
                            <h3 className='pers_name'>{pers.name}</h3>
                            <img className='avatar' src={pers.image} alt="avatar" />
                        </div>
                        <div className='btn_more_wp'>
                            <button className='btn_more'
                                onClick={() => showModal(pers.id)}>More...</button>
                        </div>
                        {isVisible &&
                            currentPers === pers.id &&
                            <Modal isVisible={isVisible} pers={pers} hide={hideModal} />}
                    </div>
                ))
            }
        </div>
    );
};

export default Output;