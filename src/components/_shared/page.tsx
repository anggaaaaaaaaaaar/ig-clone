import React from 'react';
import Header from './header';

interface PageInterface {
  children?: React.ReactNode;
}

const Page: React.FunctionComponent<PageInterface> = ({ children }) => {
  return (
    <div className="flex justify-center h-[100vh]">
      <div className="bg-white w-full h-full max-w-[720px]">
        <Header />
        <div className="px-5">{children}</div>
      </div>
    </div>
  );
};

export default Page;
