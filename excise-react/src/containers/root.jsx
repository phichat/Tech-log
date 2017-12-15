import React from 'react';
const a = 1;
function getMessage() {
    return 'Hellow world'
}

export default () => (
    <div>
        <h1>{getMessage()}</h1>
        <div>hello world react hot loaders</div>
    </div>
)