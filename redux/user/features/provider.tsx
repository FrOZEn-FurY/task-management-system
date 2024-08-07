'use client';

import { Provider } from 'react-redux';
import { userStore } from '../store';

export default function UserProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={userStore}>
            {children}
        </Provider>
    );
}