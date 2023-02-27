import * as React from 'react';
import { IVerticalTabsWebpartProps } from './IVerticalTabsWebpartProps';
import "./App.css";
import Tabs from './Tabs';

export default class VerticalTabsWebpart extends React.Component<IVerticalTabsWebpartProps, {}> {
  public render(): React.ReactElement<IVerticalTabsWebpartProps> {


    return (
      <section>
        < Tabs />
      </section>
    );
  }
}
