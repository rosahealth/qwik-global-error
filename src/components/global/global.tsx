import {component$, createContext, useContext, useContextProvider, useStore} from '@builder.io/qwik';
import {App} from '../app/app';

export interface RootState {
    title: string;
    description: string;
}

export const ROOTSTATE = createContext<RootState>('Rootstate');

export const Global = component$(() => {
    // removing the following line makes the app "work"
    const state = useStore({
        title: '',
        description: ''
    });
    useContextProvider<RootState>(ROOTSTATE, state);
    return (
        <>
            <head>
                <meta charSet="utf-8"/>
                <title>{state.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
            <App></App>
            </body>
        </>
    );
});
