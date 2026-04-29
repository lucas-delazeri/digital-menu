import './card.css';
import { useFoodDataDelete } from '../../hooks/useFoodDataMutate';

interface CardProps {
    id: number;
    price: number;
    title: string;
    image: string;
}

export function Card({ id, price, image, title }: CardProps) {
    const { mutate } = useFoodDataDelete();

    return (
        <div className="card">
            <img
                className="delete-icon"
                src="/icon-close.png"
                alt="fechar"
                onClick={() => mutate(id)}
            />

            {image && (
                <img className="food-image" src={image} alt={title} />
            )}

            <h2>{title}</h2>
            <p><b>Valor:</b> {price}</p>
        </div>
    );
}