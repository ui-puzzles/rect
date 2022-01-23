import { FC } from 'react';

import Tabs from './tabs';
import TabPane from './tabPane';
import { TabsProps, TabPaneProps } from './interface';

export type { TabsProps, TabPaneProps } from './interface';

type ITabsComp = FC<TabsProps> & {
  TabPane: FC<TabPaneProps>;
};

export const CompTabs = Tabs as ITabsComp;

CompTabs.TabPane = TabPane;

export default CompTabs;
