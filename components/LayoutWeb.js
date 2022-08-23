import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Footer } = Layout;
import HeaderWeb from './HeaderWeb'

function LayoutWeb({ children }) {
    return (
        <Layout className="layout">
            <HeaderWeb />
            <Content>
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Nam Tuoc ©2022 Created by Nam Tuoc
            </Footer>
        </Layout>
    )
}

export default LayoutWeb