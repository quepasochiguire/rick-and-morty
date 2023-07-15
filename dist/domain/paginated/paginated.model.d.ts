import { PaginatedProps } from './paginated.props';
declare class Paginated<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    next: number | null;
    previous: number | null;
    constructor(props: PaginatedProps<T>);
    getSnapshot(): PaginatedProps<T>;
}
export default Paginated;
