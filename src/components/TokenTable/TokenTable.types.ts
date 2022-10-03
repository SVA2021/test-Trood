export interface TokenTableItem {
    id: number
    name: string
    status: ItemStatusType
    type: TokenType
    conditions: string
    volume: number
    roi: number
    free: number
    hedge: number
}

export const TableKeyArray = ['name', 'status', 'type', 'conditions', 'volume', 'roi', 'free', 'hedge',] as ['name', 'status', 'type', 'conditions', 'volume', 'roi', 'free', 'hedge',]

export const StatusArray = ['green', 'yellow', 'red'] as const
export const TokenTypeArray = ['TRST', 'THT', 'THC'] as const

export type TableKeys = typeof TableKeyArray[number]
export type DescTableKeys = `-${typeof TableKeyArray[number]}`
export type ItemStatusType = typeof StatusArray[number]
export type TokenType = typeof TokenTypeArray[number]

export interface FilterType {
    status: ItemStatusType | null
    type: TokenType | null
    active: 'type' | 'status'
}

export interface TokenTableProps {
    items: TokenTableItem[]
    header: TableKeys | DescTableKeys
    filters: FilterType
    onSort: (v: TableKeys | DescTableKeys) => void
    onFilter: (v: FilterType) => void
    onBuy: (v: number) => void
}
