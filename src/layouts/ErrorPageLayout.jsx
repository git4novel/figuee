import React from 'react';
import ErrorPage from '../ErrorPage';
import Header from '../Shared/Header';
import useTitleHook from '../hooks/useTitleHook';

const ErrorPageLayout = () => {
    useTitleHook('ErrorPage')
    return (
        <div className=''>
            <ErrorPage/>
        </div>
    );
};

export default ErrorPageLayout;