import { StateProvider as Provider } from './models';
import { StateContextProvider as ReduxStateContextProvider } from './redux';

export const StateProvider: Provider = ReduxStateContextProvider;
