import React, {useState} from 'react';

const Modal = ({active, setActive, props, addTraining}) => {


    const [name, setName] = useState('');
    const [sides, setSides] = useState('');
    const [quant , setQuant] = useState('');


    function handleClick () {
        {addTraining(
            {
                name,
                sides,
                quant
            }
        )};

        setName('')
        setSides('')
        setQuant('')
        
        setActive(false)
      };

    return (
    <>
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation() }>
                <h4>Новая тренировка</h4>
                <div className="inputs">

                    <div className="input-1 inp-st">
                        <p>Название тренировки</p>
                        <input 
                            onChange={e => setName(e.target.value)}
                            value={name}
                            type="text" 
                            placeholder='До 20 символов' 
                        />
                    </div>


                    <div className="little-inp">
                        <div className="input-2 inp-st">
                            <p>Подходов</p>
                            <input 
                            onChange={e => setSides(e.target.value)}
                            value={sides}
                            type="text" 
                            placeholder='' 
                            />
                        </div>

                        <div className="input-3 inp-st">
                            <p>Раз</p>
                            <input
                            onChange={e => setQuant(e.target.value)}
                            value={quant}
                            type="text" 
                            placeholder='' 
                            />
                        </div>
                    </div>

                </div>
            <div className='modal-btn'>
                <button onClick={handleClick}>
                    Готово
                </button>
            </div>
                
                </div>
            </div>
    </>
    );
};

export default Modal;