'use strict';

import { Platform } from 'react-native';

export const Color =  {
  DarkPrimary: '#303F9F',
  Primary: '#3F51B5',
  LightPrimary: '#C5CAE9',
  Accent: '#FFEB3B',
  Dark: '#212121',
  DarkGray: '#757575',
  Gray: '#BDBDBD',
  LightGray: '#EEEEEE',
  White: '#FFFFFF'
};

export const AppBarHHeight = Platform.OS === 'ios' ? 44 : 56;
export const StatusBarHeight = Platform.OS === 'ios' ? 20 : 0;
export const NavBarHeight = AppBarHHeight + StatusBarHeight;



