import React from 'react';
import { Layout as AntdLayout } from 'antd';
const {Header, Sider, Content } = AntdLayout;

export default function Layout(props: any) {
    return (
        <AntdLayout>
            <Header>Header</Header>
            <AntdLayout>
                <Content>
                    { props.children }
                </Content>
                <Sider>Sider</Sider>
            </AntdLayout>
        </AntdLayout>
    );
}
