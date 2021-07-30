import SettingsBody from "./SettingsBody";
import axios from 'axios';
const React = novi.react.React;
const Icon = novi.ui.icon;
const messages = novi.language.getDataByKey("novi-plugin-news");
let icon = <Icon>
    <svg viewBox="0 0 20 20" style={{ height: 20, width: 20, maxWidth: "inherit", maxHeight: "inherit" }}>
        <path d="M17.5,20h-16C0.7,20,0,19.3,0,18.5v-16C0,1.7,0.7,1,1.5,1h16C18.3,1,19,1.7,19,2.5v16C19,19.3,18.3,20,17.5,20z M1.5,2
        C1.2,2,1,2.2,1,2.5v16C1,18.8,1.2,19,1.5,19h16c0.3,0,0.5-0.2,0.5-0.5v-16C18,2.2,17.8,2,17.5,2H1.5z"/>
        <path d="M2.1,7.7L2.1,7.7c0.3,0,0.5-0.2,0.5-0.5V5.5l1.5,2c0.1,0.1,0.2,0.2,0.4,0.2h0c0,0,0,0,0,0c0,0,0,0,0,0h0
            c0.3,0,0.5-0.2,0.5-0.5V4c0-0.3-0.2-0.5-0.5-0.5h0C4.3,3.5,4.1,3.7,4.1,4v1.7l-1.5-2C2.6,3.6,2.4,3.5,2.2,3.5h0c0,0,0,0,0,0
            c0,0,0,0,0,0h0C1.9,3.5,1.7,3.7,1.7,4v3.2C1.7,7.5,1.9,7.7,2.1,7.7z"/>
        <path d="M8.1,6.8H6.6V6.1h1.3c0.3,0,0.5-0.2,0.5-0.5v0c0-0.3-0.2-0.5-0.5-0.5H6.6V4.5h1.5c0.3,0,0.5-0.2,0.5-0.5v0
            c0-0.3-0.2-0.5-0.5-0.5h-2C5.8,3.5,5.6,3.7,5.6,4v3.2c0,0.3,0.2,0.5,0.5,0.5h2.1c0.3,0,0.5-0.2,0.5-0.5C8.6,7,8.4,6.8,8.1,6.8z"/>
        <path d="M10.3,7.7L10.3,7.7C10.4,7.7,10.4,7.7,10.3,7.7C10.4,7.7,10.4,7.7,10.3,7.7L10.3,7.7c0.3,0,0.5-0.1,0.5-0.3l0.6-1.8l0.6,1.8
            c0.1,0.2,0.3,0.3,0.5,0.3h0c0,0,0,0,0,0s0,0,0,0h0c0.2,0,0.4-0.1,0.5-0.3l1.1-3.2c0.1-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.4-0.2
            h-0.1c-0.2,0-0.4,0.1-0.5,0.3l-0.6,1.8L12,3.9c-0.1-0.2-0.3-0.3-0.5-0.3h-0.1c-0.2,0-0.4,0.1-0.5,0.3l-0.6,1.8L9.8,3.9
            C9.7,3.7,9.5,3.5,9.3,3.5H9.3c-0.2,0-0.3,0.1-0.4,0.2C8.8,3.9,8.7,4,8.8,4.2l1.1,3.2C10,7.6,10.1,7.7,10.3,7.7z"/>
        <path d="M15.8,7.7c1.1,0,1.6-0.6,1.6-1.3c0-1-0.8-1.2-1.3-1.4c-0.6-0.2-0.6-0.2-0.6-0.4c0-0.1,0.2-0.2,0.5-0.2
            c0.2,0,0.4,0.1,0.6,0.1c0.2,0.1,0.5,0.1,0.7-0.2l0,0c0.1-0.1,0.1-0.2,0.1-0.4c0-0.1-0.1-0.2-0.2-0.3c-0.3-0.2-0.7-0.3-1.1-0.3
            c-1,0-1.5,0.6-1.5,1.2c0,0.9,0.8,1.2,1.3,1.4c0.6,0.2,0.6,0.2,0.6,0.4c0,0.2-0.3,0.2-0.6,0.2c-0.3,0-0.5-0.1-0.7-0.3
            c-0.1-0.1-0.2-0.1-0.3-0.1c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.3,0.1l0,0c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.1,0.1,0.3,0.1,0.3
            C14.7,7.5,15.3,7.7,15.8,7.7z"/>
        <path d="M7.2,9.2H2.6c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h4.7c0.5,0,0.9-0.4,0.9-0.9C8.2,9.6,7.8,9.2,7.2,9.2z" />
        <path d="M7.2,12.3H2.6c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h4.7c0.5,0,0.9-0.4,0.9-0.9C8.2,12.7,7.8,12.3,7.2,12.3z" />
        <path d="M7.2,15.5H2.6c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h4.7c0.5,0,0.9-0.4,0.9-0.9C8.2,15.9,7.8,15.5,7.2,15.5z" />
        <path d="M16.8,9H9.6C9.3,9,9.1,9.3,9.1,9.6v7.4c0,0.3,0.2,0.5,0.5,0.5h7.2c0.3,0,0.5-0.2,0.5-0.5V9.6C17.4,9.3,17.1,9,16.8,9z" />
    </svg>
</Icon>;

const SettingsItem = {
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
    // background-video-with-carousel
    // carousel-fullwidth
    // carousel-simple
    // carousel-with-pagination
    // post-carousel-variant-1
    // post-carousel-variant-3
    // post-carousel-variant-4
    // post-carousel-variant-2
    // post-carousel-variant-5
    // post-carousel-variant-6
    // services-variant-4

    let state = bodyStates[0];

    let values = {
        items: state.items,
        selectLayout: state.selectLayout,
        selectMenu: state.selectMenu,
    };

    var settingsReq = new FormData()
    let menus = [];
    for (let i = 0; i < values.selectMenu.length; i++) {
        menus.push(values.selectMenu[i].value);
    }
    settingsReq.append('menus', menus);
    settingsReq.append('layout', values.selectLayout);
    settingsReq.append('nbr', values.items);

    axios.post(`/l/builder/app/php/get-posts-by-menus`, settingsReq)
        .then(res => {
            console.log(res.data);

            var parser = new DOMParser();
            var doc = parser.parseFromString(res.data, 'text/html');

            for (let i = 0; i < doc.body.querySelectorAll("img").length; i++){
                if (doc.body.querySelectorAll("img")[i].getAttribute("src").length <= 0)
                    doc.body.querySelectorAll("img")[i].setAttribute("src", "https://t4.ftcdn.net/jpg/01/67/74/79/360_F_167747932_NE1da5cf9FM30QExtlFjbmk9ypItoJl2.jpg");
            }
            let content = doc.body;
            let origin = content.cloneNode(true);
            // content = content.innerHTML; 
            console.log(content)
            console.log("state.element")
            console.log(state.element)
            console.log(novi.element)
            // state.element.innerHTML = ";c"
            // novi.element.setAttribute(state.element, "template", ":c")

            // let staticSlide = novi.element.getStaticReference(childElement);
            // let newStaticSlide = staticSlide.cloneNode(true);
            // let staticSlideParent = novi.element.getStaticReference(element);
            // novi.element.appendStatic(newStaticSlide, staticSlideParent);
            // console.log("staticreference")
            // console.log(novi.element.getStaticReference(state.element))

            // novi.element.removeStatic(state.element.querySelectorAll("img")[0]); //ok
            content = content.querySelector("section");
            novi.element.appendStatic(content, state.element.parentElement.parentElement.parentElement.parentElement.parentElement); //new slide, slideparent
            
            
            // console.log("appendStatic")

            // console.log(novi.element.appendStatic(content, state.element.parentElement.parentElement.parentElement))
            console.log("ok")
            
            // novi.page.forceUpdate();
            // console.log(state.element.querySelector("section"))
            // state.element.parentElement.parentElement.parentElement.innerHTML = content;
            // if (state.element.querySelector("section")) state.element.innerHTML = content;
            // else if (state.element.parentElement.querySelector("section")) state.element.parentElement.innerHTML = content;
            // else if (state.element.parentElement.parentElement.querySelector("section")) state.element.parentElement.parentElement.innerHTML = content;
            // else if (state.element.parentElement.parentElement.parentElement.querySelector("section")) state.element.parentElement.parentElement.parentElement.innerHTML = content;
            // else if (state.element.parentElement.parentElement.parentElement.parentElement.querySelector("section")) state.element.parentElement.parentElement.parentElement.parentElement.innerHTML = content;
            // if (state.element.parentElement.has)
            // novi.page.forceUpdate();
        });
}
