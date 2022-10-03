import {DescTableKeys, FilterType, StatusArray, TableKeys, TokenTableItem, TokenTypeArray} from "../TokenTable/TokenTable.types"
import './TableHead.css'

interface TableHeadProps {
    filters: FilterType
    header: TableKeys | DescTableKeys
    onSort: (v: TableKeys | DescTableKeys) => void
    onFilter: (v: FilterType) => void
}

export const TableHead = ({filters, header, onFilter, onSort}: TableHeadProps) => {

    const handleAllStatusClick = () => {
        onFilter({...filters, active: 'status', status: null})
    }

    const handleAllTypesClick = () => {
        onFilter({...filters, active: 'type', type: null})
    }

    const handleClick = (v: TableKeys) => {
        (v === header) ? onSort(`-${v}`) : onSort(v)
    }

    return (
        <div className="token-table__head head" >
            <div className="head__item">
                <button className="all__btn" onClick={handleAllStatusClick} >All</button>
                <select name="status" onChange={(e) => onFilter({...filters, active: 'status', status: StatusArray[+e.target.value]})} >
                    {StatusArray.map((item, index) =>
                        <option value={index} key={item} >{item}</option>
                    )}
                </select>
            </div>
            <div className="head__item">
                <button className="all__btn" onClick={handleAllTypesClick}>All</button>
                <select name="type" onChange={(e) => onFilter({...filters, active: 'type', type: TokenTypeArray[+e.target.value]})} >
                    {TokenTypeArray.map((item, index) =>
                        <option value={index} key={item} >{item}</option>
                    )}
                </select>
            </div>
            <div className="head__item" onClick={() => handleClick('conditions')} >
                Conditions
            </div>
            <div className="head__item" onClick={() => handleClick('volume')} >
                Volume
            </div>
            <div className="head__item" onClick={() => handleClick('roi')} >
                ROI
            </div>
            <div className="head__item" onClick={() => handleClick('free')} >
                Free float
            </div>
            <div className="head__item" onClick={() => handleClick('hedge')} >
                Insurance hedge
            </div>
            <div className="head__item"></div>

        </div>
    )
}