import {Children, cloneElement, Component, createElement, forwardRef} from "react";

class Index extends Component{
    render(){
        return <div>
            <ul>
                <li>react</li>
                <li>vue</li>
                <li>Angular</li>
            </ul>
        </div>
    }
}
//修改渲染树
function HOC (Component){
    return class Advance extends Component {
        render() {
            const element = super.render()
            const otherProps = {
                name:'alien'
            }
            /* 替换 Angular 元素节点 */
            const appendElement = createElement('li' ,{} , `hello ,world , my name  is ${ otherProps.name }` )
            console.log('Children', Children)
            const newchild =  Children.map(element.props.children.props.children,(child,index)=>{
                if(index === 2) return appendElement
                return  child
            })
            return cloneElement(element, element.props, newchild)
        }
    }
}
export default HOC(Index)