import * as React from 'react';
export interface SearchProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Search for Products". */
  text1?: string;
}
export declare const Search: React.FC<SearchProps>;
export default Search;
