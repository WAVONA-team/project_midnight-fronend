import { type Track } from 'project_midnight';

export type FilterOptions = {
  query?: string;
  sortType?: keyof Track;
};
