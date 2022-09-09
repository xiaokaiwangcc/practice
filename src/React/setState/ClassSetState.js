import {Component} from "react";
import ReactDOM from 'react-dom'
const { unstable_batchedUpdates } = ReactDOM

export default class ClassSetState extends Component{
    state = { number:0 }

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(nextProps, prestate){
        console.log('getDerivedStateFromProps nextProps', nextProps)
        console.log('getDerivedStateFromProps prestate', prestate)
        if (prestate.number === 1){
            return {
                ...prestate,
                number: 222
            }
        }else {
            return null
        }
    }


    /**
     *     综上所述， React 同一级别更新优先级关系是:
     *     flushSync 中的 setState > 正常执行上下文中 setState > setTimeout ，Promise 中的 setState。
     */

    handleClick= () => {
        // this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
        // console.log(this.state.number)
        // this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback2', this.state.number)  })
        // console.log(this.state.number)
        // this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
        // console.log(this.state.number)

        // 同步更新
        // setTimeout(()=>{
        //     this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
        //     console.log(this.state.number)
        //     this.setState({ number:this.state.number + 1 },()=>{    console.log( 'callback2', this.state.number)  })
        //     console.log(this.state.number)
        //     this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
        //     console.log(this.state.number)
        // }, 0)

        // 强制批量更新
        // setTimeout(()=>{
        //     unstable_batchedUpdates(() => {
        //         this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
        //         console.log(this.state.number)
        //         this.setState({ number:this.state.number + 1 },()=>{    console.log( 'callback2', this.state.number)  })
        //         console.log(this.state.number)
        //         this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
        //         console.log(this.state.number)
        //     })
        // }, 0)

        // flushSync 提高优先级
        setTimeout(()=>{
            this.setState({ number: 1  })
        })
        this.setState({ number: 2  })
        ReactDOM.flushSync(()=>{
            this.setState({ number: 3  })
        })
        this.setState({ number: 4  })
    }
    render(){
        console.log(this.state.number)
        return <div>
            { this.state.number }
            <button onClick={ this.handleClick }  >number++</button>
        </div>
    }
}