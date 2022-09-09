import React, {Component} from 'react';
import TestContext from "./context";

class ClassUseContext extends Component {
    static contextType = TestContext
    render() {
        const value = this.context
        return (
            <div>
                ClassUseContext
                {
                    JSON.stringify(value)
                }
                <br/>
                <button onClick={() => {
                    this.context.setStore('ClassUseContext 改变')
                }}>
                    this.context.setStore('ClassUseContext 改变')
                </button>
            </div>
        );
    }
}

export default ClassUseContext