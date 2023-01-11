import colors from 'styles/theme/colors';
import fonts from 'styles/theme/fonts';
import mixins from 'styles/theme/mixins';
import palette from 'styles/theme/palette';
import size from 'styles/theme/size';
import zIndex from 'styles/theme/zIndex';

const theme = { colors, palette, fonts, mixins, size, zIndex };

export type Theme = typeof theme;

export default theme;
