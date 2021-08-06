import SettingsBody from "./SettingsBody";
import axios from 'axios';
const React = novi.react.React;
const Icon = novi.ui.icon;
const messages = novi.language.getDataByKey("novi-plugin-news-document");
let icon = <Icon>
    <svg viewBox="0 0 20 20" style={{ height: 20, width: 20, maxWidth: "inherit", maxHeight: "inherit" }}>
    <path d="M2.9,10c0-1.9,0-3.7,0-5.7c0-1.8,1.2-3,3-3c2.8,0,5.5,0,8.3,0c1.8,0,3,1.2,3,3c0,3.7,0,7.4,0,11.3c0,1.6-1.2,3-3,3
	c-2.8,0-5.7,0-8.3,0c-1.6,0-2.8-1.2-3-3C2.9,13.7,2.9,11.9,2.9,10z M15.8,10c0-1.8,0-3.5,0-5.5c0-0.2,0-0.4,0-0.5
	c0-0.9-0.7-1.4-1.6-1.4c-2.8,0-5.7,0-8.5,0C5,2.6,4.5,2.9,4.3,3.6C4.1,3.8,4.1,4.2,4.1,4.5c0,3.7,0,7.2,0,11v0.2
	c0,1.1,0.7,1.8,1.8,1.8c2.8,0,5.5,0,8.3,0c0.2,0,0.4,0,0.5,0c0.9-0.2,1.2-0.9,1.2-1.8C15.8,13.7,15.8,11.9,15.8,10z"/>
<path d="M8.7,14.8c-0.7,0-1.6,0-2.3,0c-0.5,0-0.7-0.2-0.7-0.5c0-0.4,0.2-0.7,0.7-0.7c1.6,0,3.2,0,4.8,0c0.5,0,0.7,0.2,0.7,0.7
	c0,0.4-0.4,0.5-0.7,0.5C10.3,14.8,9.4,14.8,8.7,14.8z"/>
<path d="M10,10.7c1.2,0,2.5,0,3.7,0c0.4,0,0.7,0.2,0.7,0.5c0,0.4-0.2,0.5-0.5,0.7h-0.2c-2.5,0-4.8,0-7.2,0c-0.5,0-0.7-0.2-0.7-0.5
	c0-0.4,0.2-0.7,0.7-0.7C7.5,10.7,8.7,10.7,10,10.7z"/>
<path d="M10,8.1c1.2,0,2.5,0,3.7,0c0.4,0,0.7,0.2,0.7,0.5c0,0.4-0.2,0.5-0.5,0.7h-0.2c-2.5,0-4.8,0-7.2,0c-0.5,0-0.7-0.2-0.7-0.5
	s0.2-0.7,0.7-0.7C7.5,8.1,8.7,8.1,10,8.1z"/>
<path d="M10,5.2c1.2,0,2.5,0,3.7,0c0.4,0,0.7,0.2,0.7,0.5c0,0.4-0.2,0.5-0.5,0.7h-0.2c-2.5,0-5,0-7.2,0c-0.5,0-0.9-0.4-0.9-0.7
	C5.5,5.4,5.7,5,6.2,5C7.5,5.2,8.7,5.2,10,5.2z"/>
    </svg>
</Icon>;

let SettingsItem = {
    trigger: icon,
    tooltip: messages.editor.settings.tooltip,
    title: messages.editor.settings.title,
    header: [icon, <span>{messages.editor.settings.header}</span>],
    body: [<SettingsBody />],
    closeIcon: "submit",
    onSubmit: onSubmitAction,
    width: 350,
    height: 170,
    submitOnBlur: false,
    // onTriggerClick: removeSlide
};

export default SettingsItem;

function onSubmitAction(headerStates, bodyStates) {
    //documents
    //documents-variant-1
    //documents-variant-2
    //documents-variant-3
    //documents-variant-4
    //documents-variant-5
    //documents-variant-6
    //documents-variant-7
    //documents-variant-8

    let state = bodyStates[0];

    let values = {
        items: state.items,
        selectLayout: state.selectLayout,
        selectMenu: state.selectMenu
    };

    if (values.selectMenu <= 0) return;

    var settingsReq = new FormData()
    let menus = [];
    for (let i = 0; i < values.selectMenu.length; i++) {
        menus.push(values.selectMenu[i].value);
    }

    settingsReq.append('menus', menus);
    settingsReq.append('layout', values.selectLayout);
    settingsReq.append('nbr', values.items);

    axios.post(`/l/builder/app/php/get-paths-by-menus`, settingsReq)
        .then(res => {
            // console.log(res.data);
            var parser = new DOMParser();
            var doc = parser.parseFromString(res.data, 'text/html');

            //si pas d'image par default
            for (let i = 0; i < doc.body.querySelectorAll("img").length; i++) {
                if (doc.body.querySelectorAll("img")[i].getAttribute("src").length <= 0)
                    doc.body.querySelectorAll("img")[i].setAttribute("src", "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
            }
            doc.querySelector(".owl-carousel").setAttribute("menus", menus);
            doc.querySelector(".owl-carousel").setAttribute("layout", values.selectLayout.toString());
            doc.querySelector(".owl-carousel").setAttribute("nbr", values.items.toString());
            let content = doc.body.querySelector("section");

            console.log(content);

            for (let i = 0; i < 6; i++) {
                if (state.element.classList.contains("section")) {
                    novi.element.insertElement(content, state.element)
                    novi.element.remove(state.element);
                    novi.page.forceUpdate();
                    return;
                }
                else state.element = state.element.parentElement
            }
        });
}
