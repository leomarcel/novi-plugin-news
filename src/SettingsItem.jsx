import SettingsBody from "./SettingsBody";
import axios from 'axios';
const React = novi.react.React;
const Icon = novi.ui.icon;
const messages = novi.language.getDataByKey("novi-plugin-news-calendar");
let icon = <Icon>
    <svg viewBox="0 0 290.25 259.99" style={{ height: 20, width: 20, maxWidth: "inherit", maxHeight: "inherit" }}>
        <path d="M200.31,190.54h42.06a14.21,14.21,0,0,0,1.6.16l97.42.14q38,0,75.95.14a3.89,3.89,0,0,1,2,.45,51.58,51.58,0,0,1,5.16,3.46c4.11,3.27,7.55,7,7.78,12.68.3,7.25.71,14.5.72,21.74q.15,74.26.16,148.51a3,3,0,0,1-1.06,2.27Q397.49,414.62,363,449.2a4,4,0,0,1-3.09,1.28q-97.94,0-195.88,0a17,17,0,0,1-10.31-3,24.84,24.84,0,0,1-8.91-10c-.6-1.29-1.27-2.55-1.91-3.83V243.55c.06-.78.17-1.56.18-2.34.24-10.55.55-21.1.64-31.65A16.24,16.24,0,0,1,149,197.49c2.93-2.79,5.9-5.6,10.25-6,2-.17,4-.34,6-.38,8.58-.15,17.16-.25,25.73-.38C194.12,190.71,197.22,190.61,200.31,190.54ZM221.5,360.1c-4.29,0-8.58,0-12.86,0a9.53,9.53,0,0,0-2.18.35c-2.13.55-2.79,1.53-2.44,3.66.42,2.48.87,4.95,1.33,7.42a36.92,36.92,0,0,0,12.45,21.91,40.67,40.67,0,0,0,18,8.81c12,2.78,23.68,1.32,35.21-2.61,11.85-4,19-12.6,22.39-24.16,2.32-7.93,2-16.22,0-24.32-2.21-9.07-7.46-15.74-16-19.74-.83-.39-1.63-.85-2.48-1.29,1.61-1.26,3.38-2.21,4.55-3.65a103.06,103.06,0,0,0,7.26-10,11.22,11.22,0,0,0,1.47-5.19c.25-5,.36-10.06.19-15.09a20.61,20.61,0,0,0-1.45-7.62c-4.22-9.33-11.3-15.57-21.33-18.08a77,77,0,0,0-24.41-1.74,33.49,33.49,0,0,0-25.31,13.68c-3.79,5-5.85,10.82-7.29,16.85-.76,3.16-1.31,6.36-1.91,9.56-.13.69-.3,1.57.85,1.67,4.81.45,9.62.94,14.43,1.32a2.37,2.37,0,0,0,2.68-2.16c.67-2.93,1.41-5.85,2.32-8.71,1.38-4.38,3.38-8.43,7-11.45,7.75-6.47,19.77-6.94,28.59-1,5.65,3.78,8.71,8.89,7.74,15.92-.08.64-.1,1.28-.14,1.92-.39,5.84-2.91,10.37-8.14,13.22-1.78,1-3.56,1.93-5.4,2.75A27.21,27.21,0,0,1,245,324.46c-1.9,0-3.8,0-5.67,0v15.34c2.73,0,5.35-.11,8,0a85.24,85.24,0,0,1,10,.91c8.59,1.51,14.73,6.19,17.62,14.6s1.47,16.09-4.24,22.85c-5,5.95-11.68,8.73-19.33,9.27-5.44.38-10.75-.18-15.62-2.92-6.09-3.41-9.52-8.88-11.65-15.27C223,366.23,222.32,363.11,221.5,360.1ZM360.83,403c1.94-45,1.18-89.59.85-134.22-3.77-.22-7.33-.34-10.86-.67a3.22,3.22,0,0,0-3.47,1.75c-.81,1.35-1.83,2.57-2.74,3.86A29.55,29.55,0,0,1,329.92,285c-4.37,1.48-8.91,2.47-13.41,3.53-3.73.88-3.85.78-4,4.58-.14,3.22,0,6.46,0,9.83l30.65.7v1.63c0,8.44.09,16.88.17,25.32q.33,34.26.71,68.52c0,2.65.43,3.28,2.81,3.43C351.4,402.78,356,402.84,360.83,403ZM216.1,232.33a25.67,25.67,0,0,0-1-3.11,16.63,16.63,0,0,0-5.66-6.9c-3.36-2.33-6.88-3.68-10.76-1a41.07,41.07,0,0,0-3.46,2.25,11.1,11.1,0,0,0-3.74,12c1.53,5.94,8,10.44,13.54,9.18s8.92-4.78,10.67-10A15.91,15.91,0,0,0,216.1,232.33Zm169.14-.42c0-8.12-6.58-11.48-12.81-11.59s-11.3,5.73-11.22,12.76A11.56,11.56,0,0,0,373,244.73C380,244.72,385.27,239.18,385.24,231.91Z" transform="translate(-142.86 -190.54)"/>
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
    submitOnBlur: false
};

export default SettingsItem;

function onSubmitAction(headerStates, bodyStates) {
    // calendar-variant-1

    let state = bodyStates[0];

    let values = {
        items: state.items,
        selectLayout: state.selectLayout,
        selectClubs: state.selectClubs,
        selectDomains: state.selectDomains
    };

    if (values.selectClubs <= 0 && values.selectDomains <= 0) return;

    var settingsReq = new FormData()

    let clubs = [];
    for (let i = 0; i < values.selectClubs.length; i++) {
        clubs.push(values.selectClubs[i].value);
    }

    let domains = [];
    for (let i = 0; i < values.selectDomains.length; i++) {
        domains.push(values.selectDomains[i].value);
    }

    settingsReq.append('clubs', clubs);
    settingsReq.append('domains', domains);
    settingsReq.append('layout', values.selectLayout);
    settingsReq.append('nbr', values.items);

    axios.post(`/l/builder/app/php/get-assdom-by-menus`, settingsReq)
        .then(res => {
            console.log("response data")
            console.log(res.data);
            var parser = new DOMParser();
            var doc = parser.parseFromString(res.data, 'text/html');

            //si pas d'image par default
            for (let i = 0; i < doc.body.querySelectorAll("img").length; i++) {
                if (doc.body.querySelectorAll("img")[i].getAttribute("src").length <= 0)
                    doc.body.querySelectorAll("img")[i].setAttribute("src", "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
            }
            doc.querySelector(".calendar").setAttribute("clubs", clubs);
            doc.querySelector(".calendar").setAttribute("domains", domains);
            doc.querySelector(".calendar").setAttribute("layout", values.selectLayout.toString());
            doc.querySelector(".calendar").setAttribute("nbr", values.items.toString());
            
            let content = doc.body.querySelector("section");

            console.log("content")
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
