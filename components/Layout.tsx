import React from 'react';
import Header from './Header';
import Content from './Content';

export default function Layout(props: { children: JSX.Element }): JSX.Element {
  const { children } = props;

  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
