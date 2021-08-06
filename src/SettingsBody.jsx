import axios from 'axios';
const React = novi.react.React;
const Component = novi.react.Component;
const InputNumber = novi.ui.inputNumber;
const Editor = novi.editor;
const Language = novi.language;
import Multiselect from 'multiselect-react-dropdown';

export default class Body extends Component {
    constructor(props) {
        super(props);
        let items = this.getItems(props.element).length;
        let selectLayout = this.getTemplate(props.element);
        let menus = [];
        let selectMenu = null;
        Editor.setBodyHeight(220);

        this.state = {
            items,
            menus,
            selectMenu,
            selectLayout,
            initValue: {
                items
            },
            element: props.element,
            childElement: props.childElement
        };

        this._handleNumberItemChange = this._handleNumberItemChange.bind(this);
        this.getMenu = this.getMenu.bind(this);
        this.getTemplate = this.getTemplate.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onSelect = this.onSelect.bind(this);

        this.messages = Language.getDataByKey("novi-plugin-news-document");

        this.style = `
        .owl-wrap{
            padding: 0 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            color: #6E778A;
        }
        .owl-switcher{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 16px;
            -webkit-transition: 0.15s all cubic-bezier(0.4, 0, 1, 1);
            transition: 0.15s all cubic-bezier(0.4, 0, 1, 1);
            opacity: 1;
            visibility: visible;
        }
        .owl-switcher.disabled{
            opacity: 0;
            visibility: hidden;
            height: 0;
            margin-top: 0;
        }
      
        .owl-switcher .novi-input{
            width: 55px;
        }  
        .owl-wrap .Select-menu-outer, .owl-wrap .Select-menu{
            max-height: 8selectLayout5px;
        }
        .owl-group{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .blockSelect{
            display: block;
        }
        .selectTemplate{
            width: 100%;
        }
        .btnSelectTemplate {
            font-weight: 400;
            transition: 0.33s all ease-in;
            border: 3px;
            letter-spacing: 0;
            white-space: normal;
            max-width: 100%;
            background-color: #6E778A;
            color: white;
            display: inline-block;
            border-radius: 3px;
            padding-left: 3px;
            padding-right: 3px;
            font-size: 11px;
            line-height: 24px;
            position: relative;
            cursor: pointer;
        }
        .hr_settings {
            border: 1px solid #6E778A;
            width: 100%;
            margin-top: 20px;
        }
        .title_carousel {
            margin: 0px;
            color: white;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .multiple_selected {
            width: 100%;
            color: white;
            background-color: #282F3D;
            border: none;
            overflow: hidden;
        }
        .chip{
            font-size: inherit!important;
            padding: 2px 5px;
        }
        `;
    }

    componentDidMount() {
        this.getMenu();
    }

    getMenu(){
        axios.get("/l/builder/app/php/get-paths-menus")
        .then(res => {
            const menus = res.data;
            for (const [key, value] of Object.entries(menus)) {
                let tempdata = { label: value, value: key }
                let menutemp = this.state.menus;
                menutemp.push(tempdata)
                this.setState({ menus: menutemp });
            }
        });
    }

    getTemplate(element){
        for (let i = 0; i < 5; i++) {
            if (element.getAttribute("template")) return element.getAttribute("template")
            else element = element.parentElement
        }
    }

    render() {
        return (
            <div className="owl-wrap">
                <style>{this.style}</style>
                <p className="novi-label title_carousel" style={{ "margin": 0 }}>
                {this.messages.editor.settings.title}
                </p>

                <div className="owl-switcher blockSelect">
                    <p className="novi-label" style={{ "margin": 0 }}>
                    {this.messages.editor.settings.body.titleMenu}
                    </p>
                    <div className="owl-switcher">
                        <Multiselect
                            options={this.state.menus}
                            selectedValues={this.state.selectMenu}
                            onSelect={this.onSelect}
                            onRemove={this.onRemove}
                            displayValue="label"
                        />
                    </div>
                </div>

                <div className="owl-switcher blockSelect">
                    <p className="novi-label" style={{ "marginTop": "0" }}>
                        {this.messages.editor.settings.body.visibleItems}
                    </p>
                    <div className="owl-switcher">
                        <InputNumber min={1} max={50} value={this.state.items} onChange={this._handleNumberItemChange} />
                    </div>
                </div>
            </div>
        )
    }

    onSelect(selectedList, selectedItem) {
        if (selectedList.length >= 3) Editor.setBodyHeight(240);
        if (selectedList.length >= 6) Editor.setBodyHeight(255);
        if (selectedList.length >= 8) Editor.setBodyHeight(260);
        this.setState({ selectMenu: selectedList });
    }

    onRemove(selectedList, removedItem) {
        if (selectedList.length <= 3) Editor.setBodyHeight(220);
        if (selectedList.length <= 6) Editor.setBodyHeight(240);
        if (selectedList.length <= 8) Editor.setBodyHeight(255);
        this.setState({ selectMenu: selectedList });
    }

    _handleNumberItemChange(value) {
        this.setState({
            items: value
        });
    }

    getItems(element) {
        return [
            novi.element.getAttribute(element, 'data-items') || null,
            novi.element.getAttribute(element, 'data-xs-items') || null,
            novi.element.getAttribute(element, 'data-sm-items') || null,
            novi.element.getAttribute(element, 'data-md-items') || null,
            novi.element.getAttribute(element, 'data-lg-items') || null,
            novi.element.getAttribute(element, 'data-xl-items') || null,
        ]
    }
}