import React, { useContext } from 'react';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { CryptoDataContext } from '../state/context';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

const MuiThemeProvider = ({ children }: Props): JSX.Element => {
  const { state } = useContext(CryptoDataContext);

  const theme = createTheme({
    palette: { mode: state.darkMode ? 'dark' : 'light' },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;

// export function App() {
//   const [mode, setMode] = useState<PaletteMode>('light');
//   const colorMode = React.useMemo(
//     () => ({
//       // The dark mode switch would invoke this method
//       toggleColorMode: () => {
//         setMode((prevMode: PaletteMode) =>
//           prevMode === 'light' ? 'dark' : 'light',
//         );
//       },
//     }),
//     [],
//   );

//   // Update the theme only if the mode changes
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <Page />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }
