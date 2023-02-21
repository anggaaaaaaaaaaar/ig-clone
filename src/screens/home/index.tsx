import React from 'react';
import { HomeComponent, SharedComponent } from '../../components';

const Index: React.FunctionComponent = () => {
  return (
    <SharedComponent.Page>
      <HomeComponent.Stories />
    </SharedComponent.Page>
  );
};

export default Index;
