import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { useState } from 'react';
import { ButtonMenuCall } from '../components/Buttons';
import "./Layout.css";

export default function (props) {

    const header = props.header;
    const sider = props.sider;
    const content = props.content;

    const [siderCollapes, setSiderCollapes] = useState(true);

    return (
        <Layout className='layout'>
            <Header>
                {header}
                {/* <div className='header'> */}
                {/* <ButtonMenu init={!siderDefaultCollapsed} none={!menu} round outlined active onClick={() => setSiderCollapes(pre => !pre)} />
                    <div id="content_title_container">
                        {title}
                    </div>
                    <ButtonBack round outlined /> */}
                {/* </div> */}
            </Header>
            <Layout>
                <Sider trigger={null} collapsible
                    collapsed={siderCollapes}
                    collapsedWidth={0}>
                    {sider}
                    {/* {menuContent} */}
                </Sider>
                <Content>
                    {content}
                    {/* <div id="content_block"> */}
                    {/* {pureContent} */}
                    {/* </div> */}
                </Content>
                <ButtonMenuCall onClick={() => setSiderCollapes(pre => !pre)} />
            </Layout>
        </Layout>
    );
}