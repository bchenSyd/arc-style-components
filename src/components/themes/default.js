// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer'
import { injectGlobal } from 'styled-components';
import FontBoldWeb from '../assets/fonts/Graphik-Bold-Web.woff';
import FontRegularWeb from '../assets/fonts/Graphik-Regular-Web.woff';
import FontEgypWeb from '../assets/fonts/GuardianEgyp-Light-It-Web.woff';
import FontEgypLtWeb from '../assets/fonts/GuardianEgyp-Light-Web.woff';


const theme = {}

theme.palette = {
  primary: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  grayscale: [
    '#212121',
    '#414141',
    '#616161',
    '#9e9e9e',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
}

theme.reversePalette = reversePalette(theme.palette)


injectGlobal`
  @font-face {
    font-family: 'Graphik-Bold-Web';
    src: url('${FontBoldWeb}') format('woff');
  }
  @font-face {
    font-family: 'Graphik-Regular-Web';
    src: url('${FontRegularWeb}') format('woff');
  }
  @font-face {
    font-family: 'GuardianEgyp-Light-It-Web';
    src: url('${FontEgypWeb}') format('woff');
  }
  @font-face {
    font-family: 'GuardianEgyp-Light-Web';
    src: url('${FontEgypLtWeb}') format('woff');
  }
`
theme.fonts = {
  primary: 'Graphik-Regular-Web, GuardianEgyp-Light-Web',
  pre: 'GuardianEgyp-Light-It-Web',
  quote: 'Graphik-Bold-Web',
}

theme.sizes = {
  maxWidth: '1100px',
}

export default theme
