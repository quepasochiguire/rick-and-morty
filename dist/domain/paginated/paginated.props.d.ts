export interface PaginatedProps<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    next?: number;
    previous?: number;
}
