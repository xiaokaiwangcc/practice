import React, {useContext} from 'react';
import TestContext from "./context";

const FunctionUseContext = React.memo(function ({val, onChange}) {
    const context = useContext(TestContext)
    return (
        <TestContext.Consumer>
            {
                value => {
                    return (
                        <div style={{border: '1px solid', margin: '0 auto', width: 300, marginTop: 20}}>
                            {
                                `FunctionUseContext` + JSON.stringify(context)
                            }
                            <br/>
                            {
                                `value` + JSON.stringify(value)
                            }
                        </div>
                    )
                }
            }

        </TestContext.Consumer>
    );
});

export default FunctionUseContext