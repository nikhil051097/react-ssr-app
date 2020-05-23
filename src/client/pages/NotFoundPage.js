import React from 'react';

const NotFoundPage = ( { staticContext = {} } ) => {
    staticContext.notFound = true;
    return (
        <div className="center" style={{marginTop: '200px'}}>
            <h3>Page Not Found :( </h3>
        </div>

    );
}

export default {
    component: NotFoundPage
};