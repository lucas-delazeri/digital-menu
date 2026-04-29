import './App.css';
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { useState } from 'react';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
    const { data } = useFoodData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <button className="new-item" onClick={handleOpenModal}>
                Novo item
            </button>

            <h1>Cardápio</h1>

            <div className="card-grid">
                {data?.map((foodData) => (
                    <Card
                        key={foodData.id}
                        id={foodData.id}
                        price={foodData.price}
                        title={foodData.title}
                        image={foodData.image}
                    />
                ))}
            </div>

            {isModalOpen && (
                <CreateModal closeModal={handleCloseModal} />
            )}
        </div>
    );
}

export default App;