'use client';
/**
 * This is a general and root, wrapper, it gives us all the stores that we have made and wrap the application inside of itself.
 */
import { Provider } from 'react-redux';
import { store } from './store';

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}