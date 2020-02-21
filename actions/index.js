//index.js chứa các action (nó sẽ export ra cho các class có thể gọi tới các function bên trong nó)

import {INCREASE, DECREASE} from './types';

export const counterIncrease = () => ({type:INCREASE});
export const counterDecrease = () => ({type:DECREASE});