import { PaginatedProps } from './paginated.props';

class Paginated<T> {
  public data: T[];
  public total: number;
  public page: number;
  public limit: number;
  public next: number | null;
  public previous: number | null;

  constructor(props: PaginatedProps<T>) {
    this.data = props.data;
    this.total = props.total;
    this.page = props.page;
    this.limit = props.limit;
    this.next = props.next;
    this.previous = props.previous;
  }

  public getSnapshot(): PaginatedProps<T> {
    return {
      data: this.data,
      total: this.total,
      page: this.page,
      limit: this.limit,
      next: this.next,
      previous: this.previous,
    };
  }
}

export default Paginated;
