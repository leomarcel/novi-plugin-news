import SettingsBody from "./SettingsBody";
import axios from 'axios';
const React = novi.react.React;
const Icon = novi.ui.icon;
const messages = novi.language.getDataByKey("novi-plugin-news-teams");
let icon = <Icon>
    <svg viewBox="0 0 329.312 329.311" style={{ height: 20, width: 20, maxWidth: "inherit", maxHeight: "inherit" }}>
        <path d="M275.342,199.306c-8.328,7.849-18.561,13.644-29.939,16.67c10.664,16.892,17.948,36.208,20.639,57.105
            c0.516,4.035-0.229,7.95-1.946,11.499h58.541c1.874,0,3.705-0.858,5.008-2.348c1.249-1.418,1.844-3.23,1.622-4.96
            C324.947,243.633,303.799,214.913,275.342,199.306z"/>
        <path d="M207.83,176.242c2.342,1.663,4.594,3.441,6.821,5.242c2.24,1.813,4.456,3.651,6.575,5.597
            c6.035,5.513,11.59,11.541,16.604,18.032c9.476-1.729,18.146-5.771,25.4-11.535c1.825-1.453,3.572-2.984,5.206-4.636
            c1.531-1.549,2.948-3.206,4.294-4.912c7.722-9.812,12.369-22.139,12.369-35.56c0-31.771-25.851-57.622-57.622-57.622
            c-6.677,0-13.066,1.198-19.035,3.302c2.084,7.341,3.272,15.057,3.272,23.059c0,19.053-6.395,36.602-17.053,50.77
            C199.201,170.513,203.608,173.234,207.83,176.242z"/>
        <path d="M121.58,284.581h10.761h111.902c2.925,0,5.669-1.219,7.536-3.333c1.64-1.855,2.372-4.203,2.054-6.599
            c-2.679-20.915-10.395-40.082-21.708-56.487c-1.393-2.012-2.804-4.005-4.299-5.933c-1.718-2.198-3.543-4.3-5.387-6.39
            c-5.296-5.969-11.108-11.438-17.396-16.327c-2.149-1.675-4.365-3.26-6.623-4.791c-2.204-1.496-4.408-2.973-6.702-4.33
            c-1.717-1.021-3.488-1.957-5.26-2.9c-1.735,1.724-3.543,3.369-5.428,4.942c-1.58,1.309-3.243,2.51-4.918,3.711
            c-1.658,1.188-3.375,2.3-5.123,3.362c-0.834,0.511-1.65,1.045-2.51,1.525c-0.258,0.145-0.498,0.318-0.756,0.457
            c-12.106,6.677-25.995,10.496-40.77,10.496c-23.182,0-44.198-9.374-59.517-24.5c-35.773,19.006-61.9,54.523-67.368,97.122
            c-0.312,2.413,0.426,4.768,2.078,6.647c1.858,2.107,4.6,3.326,7.509,3.326h105.111H121.58z"/>
        <path d="M74.707,167.295c1.519,1.579,3.11,3.086,4.765,4.527c12.733,11.085,29.312,17.852,47.483,17.852
            c13.823,0,26.709-3.963,37.716-10.706c1.763-1.087,3.474-2.233,5.131-3.453c1.598-1.177,3.146-2.396,4.63-3.692
            c0.102-0.09,0.198-0.187,0.3-0.271c1.544-1.356,3.039-2.769,4.462-4.257c1.507-1.574,2.954-3.195,4.317-4.9
            c9.932-12.403,15.913-28.1,15.913-45.195c0-6.092-0.835-11.977-2.264-17.639c-0.523-2.072-1.117-4.107-1.814-6.107
            c-0.684-1.96-1.435-3.891-2.275-5.779c-11.331-25.271-36.674-42.943-66.116-42.943c-39.956,0-72.466,32.51-72.466,72.469
            c0,17.09,5.978,32.786,15.907,45.189C71.755,164.1,73.2,165.721,74.707,167.295z"/>
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
    // team-members-variant-1
    // team-members-variant-2
    // team-members-variant-3
    // team-members-variant-4
    // team-members-variant-5
    // team-members-variant-6
    // team-members-variant-7

    let state = bodyStates[0];

    let values = {
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

    axios.post(`/l/builder/app/php/get-teams-by-menus`, settingsReq)
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
            doc.querySelector(".teams").setAttribute("menus", menus);
            doc.querySelector(".teams").setAttribute("layout", values.selectLayout.toString());
            
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
