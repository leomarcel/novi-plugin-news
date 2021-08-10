const React = novi.react.React;
import SettingsItem from "./SettingsItem";
import Settings from "./Settings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-news-card",
    title: "News card Carousel Plugin",
    description: "Novi Plugin for display News card",
    version: "1.0.2",
    dependencies: {
        novi: "0.9.0"
    },
    defaults: {
        querySelector: ".card"
    },
    ui: {
        editor: [SettingsItem],
        settings: <Settings/>,
    },
    onLanguageChange : onLanguageChange
};
function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-news-card");
    plugin.ui.editor[1].title = messages.editor.settings.title;
    plugin.ui.editor[1].tooltip = messages.editor.settings.tooltip;
    plugin.ui.editor[1].header[1] = <span>{messages.editor.settings.header}</span>;

    plugin.ui.editor[2].title = messages.editor.addSlide.title;
    plugin.ui.editor[2].tooltip = messages.editor.addSlide.tooltip;

    plugin.ui.editor[3].title = messages.editor.removeSlide.title;
    plugin.ui.editor[3].tooltip = messages.editor.removeSlide.tooltip;

    return plugin;
}
novi.plugins.register(Plugin);