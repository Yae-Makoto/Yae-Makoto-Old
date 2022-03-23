import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useContext, useEffect, useState } from "react";
import { Context } from "../services/Context/Context";
import { Theme } from "../services/Context/Theme";

import "./t.css"

export default function (props) {

    const index = props.index;
    const onClick = props.onClick;
    const selectedKeys = props.selectedKeys;
    const { lang } = useContext(Context);
    const { themes, theme } = useContext(Theme);

    const menuStyle = `
        <style>
        .ant-menu-submenu-selected>.ant-menu-submenu-title,
        .ant-menu-submenu-active>.ant-menu-submenu-title{
            background-color: ${themes[theme].color}33 !important;
        }

        .ant-menu-submenu-selected>.ant-menu-submenu-title *,
        .ant-menu-submenu-active>.ant-menu-submenu-title * {
            color: black !important;
        }

        .ant-menu-item-active {
            background-color: ${themes[theme].color}33 !important;
            color: black !important;
        }

        .ant-menu-item-selected {
            background-color: ${themes[theme].color}66 !important;
            color: black !important;
        }

        .ant-menu-item-active.ant-menu-item-selected {
            color: black !important;
        }

        .ant-menu-item-selected::after {
            border-color: ${themes[theme].color} !important;
        }
        </style>
    `;

    const onMenuClick = ({ key }) => {
        const keyPath = key.split(' ').map(e => parseInt(e));
        onClick(index[keyPath[0]].file[keyPath[1]].file, index[keyPath[0]].file[keyPath[1]].name, keyPath);
    }

    useEffect(() => {
        onClick(index[0].file[0].file, index[0].file[0].name, [0, 0])
    }, [])

    return (
        <>
            <Menu mode="inline"
                defaultSelectedKeys={[`0 0`]}
                className="content_sider"
                defaultOpenKeys={['0']}
                onClick={onMenuClick}
                selectedKeys={selectedKeys}
            >
                {
                    index.map((val, key) => {
                        if (val['name']) {
                            return (
                                <SubMenu key={key} title={val.name[lang]}>
                                    {
                                        val.file.map((v, k) =>
                                            <Menu.Item key={`${key} ${k}`}>
                                                {v.name[lang]}
                                            </Menu.Item>
                                        )
                                    }
                                </SubMenu>
                            )
                        } else {
                            return (
                                <>
                                    {
                                        val.file.map((v) =>
                                            <Menu.Item key={v.file}>
                                                {v.name[lang]}
                                            </Menu.Item>
                                        )
                                    }
                                </>
                            )
                        }
                    })
                }
            </Menu>
            <div id="menu-style" dangerouslySetInnerHTML={{ __html: menuStyle }} />
        </>

    )
}
