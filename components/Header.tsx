import React from "react";
import { Input } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from '../styles/components/Header.module.scss';

const { Search } = Input;

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

export default function Layout() {
    const onSearch = value => console.log(value);

    return (
        <header className={styles.global__header}>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Discover</a>
                    </li>
                    <li>
                        <a href="#">Library</a>
                    </li>
                </ul>
            </nav>

            <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{ width: 200, margin: '0 10px' }}
            />

            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Click me <DownOutlined />
                </a>
            </Dropdown>
        </header>
    );
}
