import {Component, useEffect, useRef} from "react";
//ref获取实例
// 对于属性代理虽然不能直接获取组件内的状态，但是可以通过 ref 获取组件实例，获取到组件实例，就可以获取组件的一些状态，或是手动触发一些事件，进一步强化组件，但是注意的是：类组件才存在实例，函数组件不存在实例。
function Hoc(Component){
    return class WrapComponent extends Component{
        constructor(){
            super()
            this.node = null /* 获取实例，可以做一些其他的操作。 */
        }
        render(){
            return <Component {...this.props}  ref={(node) => this.node = node }  />
        }
    }
}

function ClickHoc (Component){
    return  function Wrap(props){
        const dom = useRef(null)
        useEffect(()=>{
            const handleClick = () => console.log('发生点击事件')
            dom.current.addEventListener('click',handleClick)
            return () => dom.current.removeEventListener('click',handleClick)
        },[])
        return  <div ref={dom}  ><Component  {...props} /></div>
    }
}

@ClickHoc
class Index extends React.Component{
    render(){
        return <div className='index'  >
            <p>hello，world</p>
            <button>组件内部点击</button>
        </div>
    }
}
export default ()=>{
    return <div className='box'  >
        <Index />
        <button>组件外部点击</button>
    </div>
}