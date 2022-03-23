import { Popover, Radio, Space } from "antd";
import { useContext } from "react";
import langConfig from "../config/lang.json";
import { Context } from "../services/Context/Context";
import { Theme } from "../services/Context/Theme";
import settingsConfig from "../config/settings.json";
import "./Settings.css";
import Switch from "./Switch";
import { languageGet } from "../services/Helper/CacheManager";
import { SvgSettings } from "./SvgIcon/SvgIcon";

export default function () {


    const { themes, theme, setTheme, changeTheme } = useContext(Theme);
    const { lang, changeLang } = useContext(Context);

    const Header = (props) => {
        return <h1 style={{ borderColor: themes[theme].color, color: themes[theme].color }}>{props.name[lang]}</h1>
    }

    return (
        <Popover
            className="setting"
            trigger="click"
            placement="bottomRight"
            content={
                <div className="setting_panel panel">
                    <Header name={settingsConfig[0]} />
                    <div className="switch_group">
                        <Switch default={languageGet() === 'zh'} on={() => changeLang(true)} off={() => changeLang(false)} />
                        <div style={{ color: themes[theme].color }}>{langConfig[lang]}</div>
                    </div>
                    <Header name={settingsConfig[1]} />

                    <Radio.Group
                        onChange={(e) => { changeTheme(e.target.value); }}
                        buttonStyle='solid'
                        value={theme}
                    >
                        <Space direction="vertical">
                            {
                                themes.map((v, k) =>
                                    <Radio.Button value={k} key={k} style={{ background: v.color }}>{v.name[lang]}</Radio.Button>
                                )
                            }
                        </Space>
                    </Radio.Group>
                </div>
            }>
            <div className="controller panel_container setting"
                style={{ borderColor: themes[theme].color, fill: themes[theme].color }}>
                <SvgSettings />
            </div>
        </Popover>
    );
}