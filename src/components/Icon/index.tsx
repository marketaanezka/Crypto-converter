import React from 'react';
import { ReactComponent as Canada } from '../../assets/flags/cad.svg';
import { ReactComponent as China } from '../../assets/flags/cny.svg';
import { ReactComponent as Czechia } from '../../assets/flags/czk.svg';
import { ReactComponent as Euro } from '../../assets/flags/eur.svg';
import { ReactComponent as UK } from '../../assets/flags/gbp.svg';
import { ReactComponent as Japan } from '../../assets/flags/jpy.svg';
import { ReactComponent as USA } from '../../assets/flags/usd.svg';

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
};

type Props = {
  code: string;
};

const Icon = ({ code }: Props): JSX.Element => {
  const Svg = icons[code];
  return <Svg width={20} height={20} />;
};

export default Icon;
