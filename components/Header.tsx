import React from 'react';
import {
  Input, Menu, Dropdown, Button,
} from 'antd';

import { EllipsisOutlined } from '@ant-design/icons';
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
  const onSearch = (value: string) => console.log(value);

  return (
    <header className={styles['global-header']}>
      <nav className={styles['global-header--nav']}>
        <ul>
          <li>
            <a href="/">
              Logo
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/discover">Discover</a>
          </li>
          <li>
            <a href="/library">Library</a>
          </li>
        </ul>

        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 330, margin: '0 1em 0 0' }}
        />

        <Button type="primary">Sign in</Button>

        <Button className={styles['global-header--nav--create-button']}>Create account</Button>

        <a href="/upload">Upload</a>

        <Dropdown overlay={menu} trigger={['click']}>
          <a
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            aria-hidden="true"
          >
            <EllipsisOutlined />
          </a>
        </Dropdown>
      </nav>
    </header>
  );
}
