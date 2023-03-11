import React, { ReactNode } from 'react';

interface RootTemplateProps{
    children?:ReactNode
}

const RootTemplate = (props:RootTemplateProps) => {
    return (
        <div className='w-screen h-screen'>
            {props.children}
        </div>
    );
};

export default RootTemplate;