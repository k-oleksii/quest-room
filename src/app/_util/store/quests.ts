import { create } from 'zustand';

interface IFilters {
  filterType: string;
  setFilterType: (type: string) => void;
}

export const useQuests = create<IFilters>(set => ({
  filterType: 'all',
  setFilterType: type => set(state => ({ ...state, filterType: type })),
}));
