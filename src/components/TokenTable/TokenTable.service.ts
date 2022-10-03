import {DescTableKeys, TableKeys} from "./TokenTable.types";

export function getHeader(header: TableKeys | DescTableKeys): TableKeys {
    switch (header) {
        case '-conditions':
            return 'conditions'

        case '-free':
            return 'free'
        case '-hedge':
            return 'hedge'
        case '-name':
            return 'name'
        case '-roi':
            return 'roi'
        case '-status':
            return 'status'
        case '-type':
            return 'type'
        case '-volume':
            return 'volume'
        default:
            return header
    }
}