import React from 'react';
import Header from './header';
import Navbar from './navbar';

interface PageInterface {
  children?: React.ReactNode;
}

const Page: React.FunctionComponent<PageInterface> = ({ children }) => {
  return (
    <div className="flex justify-center h-[100vh]">
      <div className="relative flex flex-col bg-white w-full h-full max-w-[720px]">
        <Header />
        <div className="flex-1 overflow-y-auto">{children}</div>
        <Navbar />
      </div>
    </div>
  );
};

export default Page;
