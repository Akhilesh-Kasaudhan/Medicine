import React from 'react'

function ApiLoader() {
    return (
        <React.Fragment>
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ApiLoader;