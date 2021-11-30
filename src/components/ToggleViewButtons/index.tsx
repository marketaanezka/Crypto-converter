import React from 'react';

import AppsIcon from '@mui/icons-material/Apps';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface Props {
  handleChangeView: React.Dispatch<React.SetStateAction<string>>;
  dashboardView: string;
  width: string[];
}

const ToggleViewButtons = ({
  handleChangeView,
  dashboardView,
  width,
}: Props): JSX.Element => {
  const onViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: React.MouseEvent
  ): void => {
    event.preventDefault();
    handleChangeView(newView as unknown as string);
  };

  return (
    <ToggleButtonGroup
      value={dashboardView}
      exclusive
      onChange={onViewChange}
      aria-label="dashboard view"
      sx={{
        width: width,
      }}
    >
      <ToggleButton value="grid" aria-label="grid cards">
        <AppsIcon />
      </ToggleButton>
      <ToggleButton value="list" aria-label="list table">
        <TableRowsIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleViewButtons;
