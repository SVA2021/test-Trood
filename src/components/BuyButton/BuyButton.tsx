import './BuyButton.css'

interface BuyButtonProps {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const BuyButton = ({onClick}: BuyButtonProps) => {
    return (
        <button className="buy" onClick={onClick} >
            Buy
        </button>
    )
}