// import original module declaration
import {ThemeProperties} from '../utilities/theme';
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProperties {}
}
