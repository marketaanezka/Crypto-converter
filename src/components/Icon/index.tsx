import React from 'react';
import { ReactComponent as Canada } from '../../assets/flags/cad.svg';
import { ReactComponent as China } from '../../assets/flags/cny.svg';
import { ReactComponent as Czechia } from '../../assets/flags/czk.svg';
import { ReactComponent as Euro } from '../../assets/flags/eur.svg';
import { ReactComponent as UK } from '../../assets/flags/gbp.svg';
import { ReactComponent as Japan } from '../../assets/flags/jpy.svg';
import { ReactComponent as USA } from '../../assets/flags/usd.svg';
import { ReactComponent as Bitcoin } from '../../assets/crypto/bitcoin.svg';
import { ReactComponent as Cardano } from '../../assets/crypto/cardano.svg';
import { ReactComponent as Ethereum } from '../../assets/crypto/ethereum.svg';
import { ReactComponent as Chainlink } from '../../assets/crypto/chainlink.svg';
import { ReactComponent as Polkadot } from '../../assets/crypto/polkadot.svg';
import { ReactComponent as Ripple } from '../../assets/crypto/ripple.svg';
import { ReactComponent as Solana } from '../../assets/crypto/solana.svg';
import { ReactComponent as Tether } from '../../assets/crypto/tether.svg';
import { ReactComponent as UsdCoin } from '../../assets/crypto/usdcoin.svg';
import { ReactComponent as Vechain } from '../../assets/crypto/vechain.svg';
import { IconWrapper } from './styled';

interface SVGlist {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const icons: SVGlist = {
  cad: Canada,
  cny: China,
  czk: Czechia,
  eur: Euro,
  gbp: UK,
  jpy: Japan,
  usd: USA,
  bitcoin: Bitcoin,
  cardano: Cardano,
  ethereum: Ethereum,
  chainlink: Chainlink,
  polkadot: Polkadot,
  ripple: Ripple,
  solana: Solana,
  tether: Tether,
  usdcoin: UsdCoin,
  vechain: Vechain,
};

type Props = {
  code: string;
};

const Icon = ({ code }: Props): JSX.Element => {
  const stringCode = code.replaceAll('-', '');
  const Svg = icons[stringCode];
  return (
    <IconWrapper>
      <Svg width={20} height={20} />
    </IconWrapper>
  );
};

export default Icon;
