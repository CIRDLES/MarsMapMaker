import React from 'react'
import 'semantic-ui-react';
import { connect } from 'react-redux';
import FontAwesome from '../../node_modules/react-fontawesome';



class DropDown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
    }


    render() {

        let filter = (f) => {
            if (f.type === this.props.fieldType)
                return <option value="item">{f.title}</option>;

        }

        return (

            <select class="ui search dropdown">
                {this.props.list.map((field) => (
                    filter(field)
                ))}
            </select>

            // <div class="ui compact menu">
            //     <div class="ui simple dropdown item">
            //         Dropdown
            //         <i class="dropdown icon"></i>
            //         <div class="menu">
            //             {this.props.list.map((field) => (
            //                 <div class="item">{field.title}</div>
            //             ))}
            //         </div>
            //     </div>
            // </div>

        )
    }
}


export default connect(null)(DropDown)
