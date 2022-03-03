import { Animator, batch, Fade, Sticky } from 'react-scroll-motion';
import Template from '../Template';
import './Contents.css';
import Layout, { Header, Content, Footer } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { useEffect, useState } from 'react';
import { scrollToBottom, scrollToTop } from '../../../services/Helper/ScrollHelper';
import { Menu } from 'antd';
import { SvgMenu } from '../../blocks/SvgIcon/SvgIcon';
import { ButtonBack, ButtonMenu } from '../../blocks/Buttons/Buttons';
import { ButtonScrollDown } from '../../blocks/Buttons/ButtonScrollDown';
import './Markdown.css';
export default function Contents(props) {

    const coverIcon = props.coverIcon;
    const coverNotes = props.coverNotes;

    const menu = props.menu;
    const title = props.title;

    const pureContent = props.pureContent;
    console.log(title, menu)

    const [siderCollapes, setSiderCollapes] = useState(true);

    useEffect(() => {
        scrollToTop('auto');
        const timer = setTimeout(() => {
            scrollToBottom();
        }, 6000);
        return () => clearTimeout(timer);
    }, [props])

    return (
        <Template
            className='contents'
            page1={
                <Animator animation={batch(Sticky(), Fade())}>
                    <div className='content_cover'>
                        {coverIcon}
                        <br></br><br></br>
                        {coverNotes}
                    </div>
                </Animator>
            }
            page2={
                <Animator animation={batch(Sticky(), Fade())}>
                    <Layout className='content_container'>
                        <Sider trigger={null} collapsible
                            collapsed={siderCollapes}
                            collapsedWidth={0}
                            defaultCollapsed={true}>
                            <Menu mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                    nav 1
                                </Menu.Item>
                                <Menu.Item key="2">
                                    nav 2
                                </Menu.Item>
                                <Menu.Item key="3">
                                    nav 3
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header>
                                <div className='header'>
                                    <ButtonMenu none={!menu} round outlined active onClick={() => setSiderCollapes(pre => !pre)} />
                                    <h1>{title}</h1>
                                    <ButtonBack round outlined />
                                </div>
                            </Header>
                            <Content>
                                {pureContent}
                            </Content>
                        </Layout>
                    </Layout>
                </Animator>
            }
        />
    );
}