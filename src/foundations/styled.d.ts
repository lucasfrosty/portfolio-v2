import type {ThemeProperties} from '../utilities/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProperties {}
}
