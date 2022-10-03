import {BuyButton} from "../BuyButton"
import {ItemStatusType, TokenTableItem} from "../TokenTable/TokenTable.types"
import './TableRow.css'

interface TableRowProps {
    item: TokenTableItem
    onBuy: () => void
}

export const TableRow = ({item, onBuy, }: TableRowProps) => {

    const handleBuyClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        event.stopPropagation()
        onBuy()
    }

    function getColor(status: ItemStatusType) {
        switch (status) {
            case 'green':
                return '0, 255, 0,'
            case 'yellow':
                return '255, 255, 0,'
            case 'red':
                return '255, 0, 0,'
        }
    }

    const tableRowBgColor = `rgba(${getColor(item.status)} 0.25)`

    return (
        <a className="token-table__row row" style={{backgroundColor: tableRowBgColor}} href={`/project/${item.id}`} >
            <div className="row__item">
                <span className="status" style={{backgroundColor: item.status}} ></span>
                {item.name}
            </div>
            <div className="row__item">{item.type}</div>
            <div className="row__item">{item.conditions}</div>
            <div className="row__item">{item.volume.toLocaleString("ru-RU", {style: "currency", currency: "USD", maximumFractionDigits: 0})}</div>
            <div className="row__item">{(item.roi / 100).toLocaleString("ru-RU", {style: "percent"})}</div>
            <div className="row__item">{item.free}</div>
            <div className="row__item">{(item.hedge / 100).toLocaleString("ru-RU", {style: "percent"})}</div>
            <div className="row__item">
                <BuyButton onClick={handleBuyClick} />
            </div>
        </a>
    )
}