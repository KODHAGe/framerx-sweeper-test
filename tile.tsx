import * as React from "react"
import { PropertyControls, ControlType } from "framer"

const style: React.CSSProperties = {
    height: "40px",
    width: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "#BDBDBD",
    overflow: "hidden",
    boxSizing: 'border-box',
    fontFamily: 'VT323',
    fontSize: "2em",
    fontWeight: 900
};

// Define type of property
interface Props {
    number: number,
    state: string,
    bomb: boolean,
    onClick: any
}

export class tile extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        number: 0,
        state: "closed",
        bomb: false,
        onClick: ''
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    }

    checkNumber () {
        if(this.props.bomb) {
            return "💣"
        } else if (this.props.number === 0) {
            return ""
        } else {
            return this.props.number
        }
    }

    state = {
        "color": "rgba(0, 0, 0, 0)",
        "state": "closed",
        "number": this.checkNumber(),
        "border": "3px solid"
    }

    handleState = () => {
        if(this.state.state = "closed") {
            this.setState({'state': 'opened'})
            this.setState({'border': '1px solid #7B7B7B'})
            if (this.state.number === '💣') {
                this.setState({'color': 'black'})
            } else if (this.state.number === 1) {
                this.setState({'color': 'blue'})
            } else if (this.state.number === 2) {
                this.setState({'color': 'green'})
            } else if (this.state.number === 3) {
                this.setState({'color': 'red'})
            } else if (this.state.number === 4) {
                this.setState({'color': 'purple'})
            }
        }
    }

    clickHandler = () => {
        this.props.onClick()
        this.handleState()
    }

    render() {
        let statestyle = {
            color: this.state.color,
            border: this.state.border,
            borderTopColor: "#fff",
            borderLeftColor: "#fff",
            borderRightColor: "#7B7B7B",
            borderBottomColor: "#7B7B7B",
        }
        return <div style={{...style, ...statestyle}} onClick={this.clickHandler}>{this.state.number}</div>;
    }
}
