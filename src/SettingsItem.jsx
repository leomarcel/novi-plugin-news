import SettingsBody from "./SettingsBody";
import axios from 'axios';
const React = novi.react.React;
const Icon = novi.ui.icon;
const messages = novi.language.getDataByKey("novi-plugin-news-card");
let icon = <Icon>
    <svg viewBox="0 0 368.03 388.35" style={{ height: 20, width: 20, maxWidth: "inherit", maxHeight: "inherit" }}>
        <path d="M398.36,466.38l71.32-93.71v4.83q0,68.26,0,136.53c0,26.81-17.21,43.9-44.12,43.9-16.77,0-33.54.08-50.31-.1a9.08,9.08,0,0,1-5.8-2.26q-77.2-76.94-154.22-154.07c-.55-.55-1-1.18-1.22-1.39q41.44-41.43,82.65-82.65C320.59,372.9,361.05,417.78,398.36,466.38Z" transform="translate(-121.99 -169.6)"/>
        <path d="M397.82,435.16c-28.39-37.44-58.05-73.11-77.86-115.43-8.81-18.84-14.31-38.51-13.91-59.57.89-46.34,38-86.72,83.06-90.26,48.3-3.79,90.34,28,99.18,74.92,4.49,23.82-.22,46.31-9.32,68.18-11,26.42-26.91,49.95-43.66,72.92-11.28,15.47-23,30.61-34.57,45.88C400,432.79,399.11,433.68,397.82,435.16Zm.33-132.87a40.84,40.84,0,1,0-41.06-40.57A40.88,40.88,0,0,0,398.15,302.29Z" transform="translate(-121.99 -169.6)"/>
        <path d="M296.75,210.49c-2.69,8-5.81,15.72-7.81,23.67-4.67,18.57-4.27,37.32-.51,56,.59,2.92.23,5-2,7.2q-80.55,80.34-161,160.83c-.86.85-1.79,1.63-3.43,3.12v-5.49q0-101.07,0-202.14c0-25.91,17.29-43.31,43.19-43.36q63.72-.11,127.43,0C294,210.32,295.43,210.44,296.75,210.49Z" transform="translate(-121.99 -169.6)"/>
        <path d="M198.56,414.51l143.13,143c-1.26.13-2.41.37-3.56.37q-87.44,0-174.86,0c-23.38,0-41.12-18-41.24-41.38,0-7.5-.11-15,.08-22.51a8,8,0,0,1,1.76-5.06q36.8-37.05,73.81-73.88A4.48,4.48,0,0,1,198.56,414.51Z" transform="translate(-121.99 -169.6)"/>
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
    // card-variant-1

    let state = bodyStates[0];

    let values = {
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

    axios.post(`/l/builder/app/php/get-assdom-by-menus`, settingsReq)
        .then(res => {
            // console.log(res.data);
            var parser = new DOMParser();
            var doc = parser.parseFromString(res.data, 'text/html');

            doc.querySelector(".card").setAttribute("clubs", clubs);
            doc.querySelector(".card").setAttribute("domains", domains);
            doc.querySelector(".card").setAttribute("layout", values.selectLayout.toString());

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
