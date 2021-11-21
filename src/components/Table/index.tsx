import React, { useContext } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { CryptoDataContext } from '../../state/context';
import { FormattedCryptoObject } from '../../config/types';
import { getSymbol } from '../../config/data';

import Icon from '../Icon';

const Table = (): JSX.Element => {
  const { state } = useContext(CryptoDataContext);
  const newData = state.cryptoDetails as FormattedCryptoObject[];
  const currency = state.dashboardCurrency;

  const newRows = newData.map((cryptoItem, index) => {
    return {
      id: index + 1,
      icon: <Icon code={cryptoItem.crypto} size={10} />,
      code: getSymbol(cryptoItem.crypto),
      name: cryptoItem.crypto,
      price: cryptoItem[currency],
      change: cryptoItem[`${currency}_24h_change`],
      volume: cryptoItem[`${currency}_24h_vol`],
      cap: cryptoItem[`${currency}_market_cap`],
      updated: cryptoItem['last_updated_at'],
    };
  });

  const columns: GridColDef[] = [
    {
      field: 'icon',
      renderCell: (params) => {
        console.log(params.row.name);
        return <Icon code={params.row.name} size={20} />;
      },
      width: 20,
    },
    { field: 'code', headerName: 'Code', width: 150 },
    { field: 'icon', headerName: 'Icon', width: 150 },
    { field: 'name', headerName: 'Cryptocurrency', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'change', headerName: '24h change', width: 150 },
    { field: 'volume', headerName: '24h volume', width: 150 },
    { field: 'cap', headerName: 'Market Cap', width: 150 },
    { field: 'updated', headerName: 'Last Updated', width: 150 },
  ];

  console.log('newrows', newRows);

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={newRows} columns={columns} />
    </div>
  );
};

export default Table;
