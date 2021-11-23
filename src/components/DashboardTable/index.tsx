import React, { useContext } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { getSymbol } from '../../config/data';
import { FormattedCryptoObject } from '../../config/types';
import { CryptoDataContext } from '../../state/context';
import { intlNumberFormat } from '../../utils/format-number';
import { timeFromUnix } from '../../utils/time';
import Icon from '../Icon';
import { TableWrapper } from './styled';

const DashboardTable = (): JSX.Element => {
  const { state } = useContext(CryptoDataContext);
  const newData = state.cryptoDetails as FormattedCryptoObject[];
  const currency = state.dashboardCurrency;

  const newRows = newData.map((cryptoItem, index) => {
    return {
      id: index + 1,
      icon: cryptoItem.crypto,
      code: getSymbol(cryptoItem.crypto),
      name: cryptoItem.crypto,
      price: intlNumberFormat(cryptoItem[currency], currency),
      change: `${cryptoItem[`${currency}_24h_change`].toFixed(8)}%`,
      volume: intlNumberFormat(cryptoItem[`${currency}_24h_vol`], currency),
      cap: intlNumberFormat(cryptoItem[`${currency}_market_cap`], currency),
      updated: timeFromUnix(cryptoItem['last_updated_at']),
    };
  });

  const columns: GridColDef[] = [
    {
      field: 'icon',
      renderCell: (params) => {
        return <Icon code={params.row.name} size={20} />;
      },
      headerName: '',
      width: 60,
    },
    { field: 'code', headerName: 'Crypto', width: 80 },
    {
      field: 'name',
      headerName: 'Name',
      width: 100,
      cellClassName: 'crypto-name-cell',
    },
    { field: 'price', headerName: 'Price', width: 160 },
    {
      field: 'change',
      headerName: '24h Change',
      width: 140,
      cellClassName: (params) =>
        `change-cell-${params.row.change > 0 ? 'up' : 'down'}`,
    },
    { field: 'volume', headerName: '24h Volume', width: 180 },
    { field: 'cap', headerName: 'Market Cap', width: 180 },
    { field: 'updated', headerName: 'Last Updated', width: 150 },
  ];

  return (
    <TableWrapper>
      <DataGrid
        rows={newRows}
        columns={columns}
        autoHeight
        density={'comfortable'}
      />
    </TableWrapper>
  );
};

export default DashboardTable;
