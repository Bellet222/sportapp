import React, {useState} from 'react';
import Header from '../Components/Header';
import Tabtrain from '../Components/Tabtrain';
import Modal from '../Components/Modal';

export const Training = () => {

    
    const [modalActive, setModalActive] = useState(false);

    const [blocks, setBlocks] = useState([
        
    ]);

    const removePost = (block) => {
        setBlocks(blocks.filter(p => p.number !== block.number ))
    }

    return (
        <>
            <Modal 
            addTraining={(newBlock) => 
                        // ...[{name}] = {}, {}  / {name}
            setBlocks([...blocks, newBlock])} 
            active={modalActive} 
            setActive={setModalActive}
            />
            <Header/>
            <div className='training'>
                <h3>ВАШИ ТРЕНИРОВКИ</h3>
                <div className='add_training'>
                    <p>Добавить</p>
                    <button className='add_btn' onClick={() => setModalActive(true)}>+</button>
                    <p>тренировку</p>
                </div>
            </div>


            <div className="block_tr">

            {blocks.map((block, index) =>
                <Tabtrain remove = {removePost} number = {index + 1} block = {block} key = {block.name}/>
            )}
            
            </div>
           
        </>
    );
};

