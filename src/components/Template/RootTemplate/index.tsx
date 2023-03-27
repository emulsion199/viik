import React, { ReactNode } from 'react';

interface RootTemplateProps {
   children?: ReactNode;
}

const RootTemplate = (props: RootTemplateProps) => {
   return <div className='w-full h-full bg-bg-default '>{props.children}</div>;
};

export default RootTemplate;
