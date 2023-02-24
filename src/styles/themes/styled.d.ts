import 'styled-components';

import { defaultTheme } from './index';

type ITheme = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}
