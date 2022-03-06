import { Popover } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { useEffect, useState } from 'react';
import { Animator, batch, Fade } from 'react-scroll-motion';
import { scrollToBottom, scrollToTop } from '../../../services/Helper/ScrollHelper';
import { ButtonBack, ButtonMenu } from '../../blocks/Buttons/Buttons';
import Template from '../Template';
import './Contents.less';

export default function Contents(props) {

    const coverIcon = props.coverIcon;
    const coverNotes = props.coverNotes;

    const menu = props.menu;
    const title = props.title;
    const titleTooltip = props.titleTooltip;

    const pureContent = props.pureContent;

    const menuContent = props.menuContent;

    const siderDefaultCollapsed = props.siderDefaultCollapsed === true ? true : false;

    const [siderCollapes, setSiderCollapes] = useState(siderDefaultCollapsed);

    useEffect(() => {
        scrollToTop('auto');
        const timer = setTimeout(() => {
            scrollToBottom();
        }, 3900);
        return () => clearTimeout(timer);
    }, [props])

    return (
        <Template
            className='contents'
            page1={
                <Animator animation={batch(Fade())}>
                    <div className='content_cover'>
                        {coverIcon}
                        <br></br><br></br>
                        {coverNotes}
                    </div>
                </Animator>
            }
            page2={
                <Animator animation={batch(Fade())}>
                    <Layout className='content_container'>
                        <Sider trigger={null} collapsible
                            collapsed={siderCollapes}
                            collapsedWidth={0}
                            defaultCollapsed={siderDefaultCollapsed}>
                            {menuContent}

                        </Sider>
                        <Layout>
                            <Header>
                                <div className='header'>
                                    <ButtonMenu init={!siderDefaultCollapsed} none={!menu} round outlined active onClick={() => setSiderCollapes(pre => !pre)} />
                                    <Popover content={<div id="content_header_title_tooltip">{titleTooltip}</div>} trigger="hover" placement="bottom"  >
                                        <h1 id="content_header_title">{title}</h1>
                                    </Popover>
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