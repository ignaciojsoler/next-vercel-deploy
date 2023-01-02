import React from 'react';

const DarkLayout = ({children}) => {
    const darkBg = {
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '30px',
        borderRadius: '10px'
    }
    return (
        <div style={darkBg}>
            {children}
        </div>
    );
}

export default DarkLayout;
