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
        let selectLayout = this.getTemplate(props.element);
        let menus = [];
        Editor.setBodyHeight(220);
        let selectMenu = null;
        let items = 10;

        this.messages = Language.getDataByKey("novi-plugin-news");
        let placeholder = this.messages.editor.settings.body.placeholder;
        let group = null;

        this.state = {
            items,
            menus,
            group,
            placeholder,
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
        this.getPredefinedItems = this.getPredefinedItems.bind(this);
        this.getPredefinedMenu = this.getPredefinedMenu.bind(this);
        this.arraySearch = this.arraySearch.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.setEditor = this.setEditor.bind(this);
        this.getArrMenu = this.getArrMenu.bind(this);

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

    getMenu() {
        axios.get("/l/builder/app/php/get-posts-menus")
            .then(res => {
                let response = this.getArrMenu(res.data);
                this.setState({ menus: response });

                this.state.selectMenu = this.getPredefinedMenu(this.state.element);
                this.state.items = this.getPredefinedItems(this.state.element);
            });
    }

    getArrMenu(res) {
        let response = [];
        for (const [i, j] of Object.entries(res)) {
            response.push({ label: j, value: i });
        }

        if (typeof response[0].label === "object") {
            let temps = [];
            for (let i = 0; i < response.length; i++) {
                for (const [key, label] of Object.entries(response[i].label)) {
                    temps.push({ group: response[i].value, label: label, value: key });
                }
            }
            this.state.group = "group";
            response = temps;
        }
        return response;
    }

    getPredefinedItems(element) {
        try {
            for (let i = 0; i < 5; i++) {
                if (element.hasAttribute("nbr")) return element.getAttribute("nbr");
                else element = element.parentElement
            }
            return 10;
        } catch (e) {
            return 10;
        }
    }

    arraySearch(arr, val) {
        for (let el = 0; el < arr.length; el++) {
            if (arr[el].value == val) return arr[el].label   
        }
        return null
    }

    getPredefinedMenu(element) {
        try {
            for (let i = 0; i < 5; i++) {
                if (element.getAttribute("menus")) {
                    let res = element.getAttribute("menus").split(",");
                    let arr = [];
                    let ms = this.state.menus;
                    for (let i = 0; i < res.length; i++) {
                        arr.push({ label: this.arraySearch(ms, res[i]), value: res[i] })
                    }
                    this.state.placeholder = "";
                    return arr;
                }
                else element = element.parentElement
            }
            return null;
        } catch (e) {
            return null;
        }
    }

    getTemplate(element) {
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
                            placeholder= {this.state.placeholder}
                            groupBy={this.state.group}
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
        this.state.placeholder = selectedList.length == 0 ? this.messages.editor.settings.body.placeholder : "";
        this.setState({ selectMenu: selectedList });
        this.setEditor()
    }

    onRemove(selectedList, removedItem) {
        this.state.placeholder = selectedList.length == 0 ? this.messages.editor.settings.body.placeholder : "";
        this.setState({ selectMenu: selectedList });
        this.setEditor()
    }

    _handleNumberItemChange(value) {
        this.setState({
            items: value
        });
    }

    setEditor(){
        let selectedListsLength = (this.state.selectMenu ? this.state.selectMenu.length : 0);
        Editor.setBodyHeight(210 + (12 * selectedListsLength))
    }
}