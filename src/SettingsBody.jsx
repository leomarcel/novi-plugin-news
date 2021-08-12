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
        let clubs = [];
        let domains = [];
        Editor.setBodyHeight(280);
        let selectClubs = null;
        let selectDomains = null;
        let items = 10;

        this.messages = Language.getDataByKey("novi-plugin-news-calendar");
        let placeholder = this.messages.editor.settings.body.placeholder;
        let placeholders = this.messages.editor.settings.body.placeholder;
        let groupClubs = null;
        let groupDomains = null;

        this.state = {
            clubs,
            domains,
            groupClubs,
            groupDomains,
            placeholder,
            placeholders,
            selectClubs,
            selectDomains,
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
        this.getPredefinedClubs = this.getPredefinedClubs.bind(this);
        this.getPredefinedDomains = this.getPredefinedDomains.bind(this);
        this.getPredefinedItems = this.getPredefinedItems.bind(this);
        this.arraySearch = this.arraySearch.bind(this);
        this.onRemoveClubs = this.onRemoveClubs.bind(this);
        this.onSelectClubs = this.onSelectClubs.bind(this);
        this.onRemoveDomains = this.onRemoveDomains.bind(this);
        this.onSelectDomains = this.onSelectDomains.bind(this);
        this.setEditor = this.setEditor.bind(this);
        this.getArrMenu = this.getArrMenu.bind(this);

        this.messages = Language.getDataByKey("novi-plugin-news-calendar");

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
        axios.get("/l/builder/app/php/get-assdom-menus")
            .then(res => {
                try {
                    let response = this.getArrMenu(res.data.clubs);
                    this.setState({ clubs: response });
                } catch (error) {
                    console.log("no data clubs")
                }

                try {
                    let response = this.getArrMenu(res.data.domains);
                    this.setState({ domains: response });
                } catch (error) {
                    console.log("no data domains")
                }

                this.state.selectClubs = this.getPredefinedClubs(this.state.element);
                this.state.selectDomains = this.getPredefinedDomains(this.state.element);
                this.state.items = this.getPredefinedItems(this.state.element);
            });
    }

    getArrMenu(res, type) {
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

            this.state.groupClubs = type === "clubs" ? "group" : null;
            this.state.groupDomains = type === "domains" ? "group" : null;

            response = temps;
        }
        return response;
    }

    arraySearch(arr, val) {
        for (let el = 0; el < arr.length; el++) {
            if (arr[el].value == val) return arr[el].label
        }
        return null
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

    getPredefinedClubs(element) {
        try {
            for (let i = 0; i < 5; i++) {
                if (element.hasAttribute("clubs")){
                    let res = element.getAttribute("clubs").split(",");
                    let arr = [];
                    let ms = this.state.clubs;
                    for (let i = 0; i < res.length; i++) {
                        arr.push({ label: this.arraySearch(ms, res[i]), value: res[i] })
                    }
                    this.state.placeholder = "";
                    return arr;
                }
                else element = element.parentElement
            }
            return null;
        }
        catch(e){
            return null
        }
    }

    getPredefinedDomains(element) {
        try {
            for (let i = 0; i < 5; i++) {
                if (element.hasAttribute("domains")) {
                    let res = element.getAttribute("domains").split(",");
                    let arr = [];
                    let ms = this.state.domains;
                    for (let i = 0; i < res.length; i++) {
                        arr.push({ label: this.arraySearch(ms, res[i]), value: res[i] })
                    }
                    this.state.placeholders = "";
                    return arr;
                }
                else element = element.parentElement
            }
            return null;
        }
        catch(e){
            return null
        }
    }

    getTemplate(element) {
        for (let i = 0; i < 5; i++) {
            try {
                if (element.hasAttribute("template")) return element.getAttribute("template")
                else element = element.parentElement
            }
            catch (e) {
                console.log("err getTemplate");
                return "calendar-variant-1";
            }
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
                        {this.messages.editor.settings.body.titleClub}
                    </p>
                    <div className="owl-switcher">
                        <Multiselect
                            options={this.state.clubs}
                            selectedValues={this.state.selectClubs}
                            onSelect={this.onSelectClubs}
                            onRemove={this.onRemoveClubs}
                            displayValue="label"
                            placeholder= {this.state.placeholder}
                            groupBy={this.state.groupClubs}
                        />
                    </div>
                </div>

                <div className="owl-switcher blockSelect">
                    <p className="novi-label" style={{ "margin": 0 }}>
                        {this.messages.editor.settings.body.titleDomains}
                    </p>
                    <div className="owl-switcher">
                        <Multiselect
                            options={this.state.domains}
                            selectedValues={this.state.selectDomains}
                            onSelect={this.onSelectDomains}
                            onRemove={this.onRemoveDomains}
                            displayValue="label"
                            placeholder= {this.state.placeholders}
                            groupBy={this.state.groupDomains}
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

    onSelectClubs(selectedList, selectedItem) {
        this.state.placeholder = selectedList.length == 0 ? this.messages.editor.settings.body.placeholder : "";
        this.setState({ selectClubs: selectedList });
        this.setEditor()
    }

    onRemoveClubs(selectedList, removedItem) {
        this.state.placeholder = selectedList.length == 0 ? this.messages.editor.settings.body.placeholder : "";
        this.setState({ selectClubs: selectedList });
        this.setEditor()
    }

    onSelectDomains(selectedList, selectedItem) {    
        this.state.placeholders = selectedList.length == 0 ? this.messages.editor.settings.body.placeholder : "";   
        this.setState({ selectDomains: selectedList });
        this.setEditor()
    }

    onRemoveDomains(selectedList, removedItem) {
        this.state.placeholders = selectedList.length == 0 ? this.messages.editor.settings.body.placeholder : "";
        this.setState({ selectDomains: selectedList });
        this.setEditor()
    }

    setEditor(){
        let selectedListsLength = (this.state.selectClubs ? this.state.selectClubs.length : 0) + (this.state.selectDomains ? this.state.selectDomains.length : 0);
        Editor.setBodyHeight(280 + (30 * selectedListsLength))
    }

    _handleNumberItemChange(value) {
        this.setState({
            items: value
        });
    }
}