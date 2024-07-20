import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button } from '@etn/components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <div className={'flex w-full h-screen items-center justify-center bg-etn-secondary-950'}>
            <Button>Click me</Button>
        </div>
    </React.StrictMode>,
);
