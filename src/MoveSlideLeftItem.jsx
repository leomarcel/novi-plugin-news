import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
import * as Excerpts from "./Excerpts";
const messages = novi.language.getDataByKey("novi-plugin-news");
const MoveSlideLeftItem = {
    trigger: <Icon>{Icons.ICON_ENTER_LEFT}</Icon>,
    tooltip: messages.editor.moveSlideLeft.tooltip,
    closeIcon: "submit",
    title: messages.editor.moveSlideLeft.title,
    excerpt : Excerpts.canMoveLeft,
    onTriggerClick: moveSlideLeft,
    highlightChild: true,
};

export default MoveSlideLeftItem;


function moveSlideLeft(element, childElement) {

    let staticSlide = novi.element.getStaticReference(childElement),
    prevSlide = Utils.getPrevElement(element, childElement),
    prevStaticSlide = novi.element.getStaticReference(prevSlide);


    if (!staticSlide || !prevStaticSlide) return;

    if (element.owl){
        moveStaticLeft(staticSlide, prevSlide);
        moveElementLeft(element, childElement, staticSlide);
    }
    else{
        moveStaticLeft(staticSlide, prevSlide);
        novi.page.forceUpdate();
    }

}

function moveStaticLeft(staticSlide, prevSlide){
    novi.element.insertStaticBefore(staticSlide, prevSlide);
}

function moveElementLeft(element, childElement, staticItem){
    let news = element.owl;
    let itemIndex = Utils.getRemoveElementIndex(element, childElement);
    let newItem = novi.element.map(staticItem);
    news.trigger('remove.owl.news', itemIndex);
    news.trigger('add.owl.news', [newItem, itemIndex - 1]);
    news.trigger('refresh.owl.news');
}


