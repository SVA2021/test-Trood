import {TableHead} from "../TableHead"
import {TableRow} from "../TableRow"
import {getHeader} from "./TokenTable.service"
import {TokenTableProps} from "./TokenTable.types"

export const TokenTable = ({items, header, filters, onBuy, onFilter, onSort}: TokenTableProps) => {

    let sortValue = getHeader(header)
    let sign = header.startsWith('-') ? -1 : 1
    let filteredArray = filters[filters.active] === null
        ? items
        : items.filter((item) => item[filters.active] === filters[filters.active])
    let result = filteredArray.sort((a, b) => sign * (a[sortValue] > b[sortValue] ? 1 : -1))

    return (
        <div className="token-table">
            <TableHead
                filters={filters}
                header={header}
                onFilter={onFilter}
                onSort={onSort}
            />
            <div className="token-table__wrapper">
                {
                    result.map((item) =>
                        <TableRow
                            key={item.id}
                            item={item}
                            onBuy={() => onBuy(item.id)}
                        />)
                }
            </div>
        </div>
    )
}