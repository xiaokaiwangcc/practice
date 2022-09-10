// dva中动态加载
import {Component} from "react";

export default function DynamicHoc(loadRouter) {
    return class Content extends Component {
        state = {Component: null}

        componentDidMount() {
            if (this.state.Component) return
            loadRouter()
                .then(module => module.default) // 动态加载 component 组件
                .then(Component => this.setState({Component},
                ))
        }

        render() {
            const {Component} = this.state
            return Component ? <Component {
                                              ...this.props
                                          }
            /> : '加载中'
        }
    }
}