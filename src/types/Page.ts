export interface Page<T> {
    content: T[];
    number: number;        // current page index (0-based)
    size: number;          // page size
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
}
