import React from 'react';

interface IFlaskReadState {
    data: string
}
// this class takes no props and has a basic state
export default class FlaskRead extends React.Component<{}, IFlaskReadState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: ""
        }
    }

    async componentDidMount() {
        let response = await fetch('/', {
            method: 'GET',
            headers: {
                "Content-Type": "text/plain"
            }
        }).then((res) => res.text());
        this.setState({data: response});
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        );
    }
}