import { FC } from 'react';

import Layout from './layout';
import Header from './header';
import Aside from './aside';
import Main from './main';
import Footer from './footer';

import { LayoutProps, HeaderProps, AsideProps, MainProps, FooterProps } from './interface';

export type ILayoutComponent = FC<LayoutProps> & {
  Header: FC<HeaderProps>;
  Aside: FC<AsideProps>;
  Main: FC<MainProps>;
  Footer: FC<FooterProps>;
};

export type { LayoutProps, HeaderProps, AsideProps, MainProps, FooterProps } from './interface';

const CompLayout = Layout as ILayoutComponent;

CompLayout.Header = Header;
CompLayout.Aside = Aside;
CompLayout.Main = Main;
CompLayout.Footer = Footer;

export default CompLayout;
