import {component$, useContext} from '@builder.io/qwik';
import {ROOTSTATE} from '../global/global';

export const App = component$(() => {
    const state = useContext(ROOTSTATE);
    return (
        <>
            <span>Title: {state.title}</span>
            <button onClick$={() => state.title = 'test'}>Set title to Test</button>
        </>
    );
});
