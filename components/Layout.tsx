import React from 'react';
import Header from './Header'
import Content from './Content'

export default function Layout(props: { children: Object }) {
    return (
        <>
            <Header />
            <Content>{props.children}</Content>
        </>
    );
}
