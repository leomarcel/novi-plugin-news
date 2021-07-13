import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
import * as Excerpts from "./Excerpts";
const messages = novi.language.getDataByKey("novi-plugin-news");
const MoveSlideRightItem = {
    trigger: <Icon>{Icons.ICON_ENTER_RIGHT}</Icon>,
    tooltip: messages.editor.moveSlideRight.tooltip,
    closeIcon: "submit",
    title: messages.editor.moveSlideRight.title,
    excerpt : Excerpts.canMoveRight,
    onTriggerClick: moveSlideRight,
    highlightChild: true,
};

export default MoveSlideRightItem;


function moveSlideRight(element, childElement) {
    novi.element.hover(element);
    let staticSlide = novi.element.getStaticReference(childElement);
    if (!staticSlide) return novi.element.hover(element);

    // use append for last prev slide
    if (Utils.isLastPrevSlide(element, childElement)){
        if (element.owl){
            appendStatic(element, childElement);
            moveElementRight(element, childElement, staticSlide, true);
        }
        else {
            appendStatic(element, childElement);
            novi.page.forceUpdate();
        }
    }
    else {
        let nextSlide = Utils.getNextElement(element, childElement),
            nextStaticSlide = novi.element.getStaticReference(nextSlide);

        if (!nextStaticSlide) return novi.element.hover(element);

        if (element.owl){
            novi.element.insertStaticBefore(staticSlide, nextSlide);
            moveElementRight(element, childElement, staticSlide);
        }
        else {
            novi.element.insertStaticBefore(staticSlide, nextSlide);
            novi.page.forceUpdate();
        }
    }
}

function moveElementRight(element, childElement, staticItem, last){
    let news = element.owl;
    let itemIndex = Utils.getRemoveElementIndex(element, childElement);
    let newItem = novi.element.map(staticItem);
    news.trigger('remove.owl.news', itemIndex);
    if (last){
        news.trigger('add.owl.news', [newItem]);
    }
    else{
        news.trigger('add.owl.news', [newItem, itemIndex + 1]);
    }
    news.trigger('refresh.owl.news');
}

function appendStatic(element, currentSlide){
    let staticElement = novi.element.getStaticReference(currentSlide);
    let staticSlideParent = novi.element.getStaticReference(element);
    novi.element.appendStatic(staticElement, staticSlideParent);
}


