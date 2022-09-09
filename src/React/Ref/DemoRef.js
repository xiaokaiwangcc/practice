import React, {Component} from 'react';

class DemoRef extends Component {
    divRef2 = null
    divRef3 = React.createRef(null)
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log(this.refs)
        console.log(this.divRef2)
        console.log(this.divRef3)
    }
    render() {
        return (
            <div ref='divRef'>
                DemoRef
                <div ref={node => {this.divRef2 = node}}>
                    divRef2
                    <div ref={this.divRef3}>
                        divRef3
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoRef