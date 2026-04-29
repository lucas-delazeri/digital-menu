import './card.css';

interface CardProps {
    price: number;
    title: string;
    image: string;
}

export function Card({ price, image, title }: CardProps) {
    return (
        <div className="card">
            <img className="delete-icon" src="/icon-close.png" alt="fechar" />
            <img className="food-image" src={image} alt={title} />
            <h2>{title}</h2>
            <p><b>Valor:</b> {price}</p>
        </div>
    );
}