import React from "react";

import { Input } from "../stories/Input";

interface Props {
  handleSearchChange: (event: any) => void;
  value: string;
}

const AutocompleteSearchBar: React.FC<Props> = ({
  handleSearchChange,
  value,
}) => {
  return (
    <div className='search-input'>
      <Input
        value={value}
        name='search'
        type='text'
        placeholder='Search Restaurant'
        onChange={(event) => handleSearchChange(event.target.value)}
      />
    </div>
  );
};

export default AutocompleteSearchBar;
