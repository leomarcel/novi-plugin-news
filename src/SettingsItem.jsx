import SettingsBody from "./SettingsBody";
import axios from 'axios';
const React = novi.react.React;
const Icon = novi.ui.icon;
const messages = novi.language.getDataByKey("novi-plugin-news-document");
let icon = <Icon>
    <svg viewBox="0 0 392.53 482.14" style={{ height: 20, width: 20, maxWidth: "inherit", maxHeight: "inherit" }}>
    <path d="M142,310.19c0-8-5.55-12.78-15.35-12.78a34.54,34.54,0,0,0-8.14.77v25.7a31.44,31.44,0,0,0,6.59.5C135.57,324.38,142,319.1,142,310.19Z" transform="translate(-44.81)"/>
    <path d="M202.71,297.68a40.86,40.86,0,0,0-8.91.77v56.9a36,36,0,0,0,6.85.39c17.8.13,29.42-9.67,29.42-30.45C230.2,307.23,219.61,297.68,202.71,297.68Z" transform="translate(-44.81)"/>
    <path d="M315.46,0H121.81A51.38,51.38,0,0,0,70.5,51.31V241.07h-5a20.67,20.67,0,0,0-20.67,20.68v125.4a20.67,20.67,0,0,0,20.67,20.68h5v23a51.37,51.37,0,0,0,51.31,51.32H386a51.36,51.36,0,0,0,51.3-51.32V121.45ZM99.05,284.38a162.47,162.47,0,0,1,26.58-1.8c12.13,0,20.77,2.32,26.58,7a25.41,25.41,0,0,1,9.29,20.13c0,8.51-2.83,15.74-8,20.64-6.72,6.32-16.65,9.16-28.26,9.16a51.22,51.22,0,0,1-6.72-.38v31.1H99.05ZM386,450.71H121.81a19.9,19.9,0,0,1-19.87-19.89v-23H348.25a20.68,20.68,0,0,0,20.68-20.68V261.75a20.68,20.68,0,0,0-20.68-20.68H101.94V51.31a19.9,19.9,0,0,1,19.87-19.85l181.89-.19V98.5a35.6,35.6,0,0,0,35.59,35.59l65.86-.19.74,296.92A19.89,19.89,0,0,1,386,450.71Zm-212-80.91V284.38a177,177,0,0,1,26.58-1.8c16.51,0,27.22,3,35.61,9.29,9,6.71,14.71,17.41,14.71,32.78,0,16.64-6.06,28.13-14.46,35.22-9.15,7.61-23.09,11.22-40.12,11.22A169.29,169.29,0,0,1,174.07,369.8Zm140.82-50.57v16H283.66v35H263.92v-87h53.16v16.12H283.66v19.88Z" transform="translate(-44.81)"/>
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
            
            doc.querySelector(".document").setAttribute("menus", menus);
            doc.querySelector(".document").setAttribute("layout", values.selectLayout.toString());
            doc.querySelector(".document").setAttribute("nbr", values.items.toString());

            console.log(doc.body.querySelector("section"));

            for (let i = 0; i < 6; i++) {
                if (state.element.classList.contains("section")) {
                    novi.element.insertElement(doc.body.querySelector("section"), state.element)
                    novi.element.remove(state.element);
                    novi.page.forceUpdate();
                    return;
                }
                else state.element = state.element.parentElement
            }
        });
}
