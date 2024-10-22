export interface SearchBarProps {
    onSearch?: (value: string) => void;
    onSort?: (option: string) => void;
    onFilter?: (filters: Record<string, boolean>) => void;
  }