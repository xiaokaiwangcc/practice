// 属性增强
// function withRouter(Component) {
//     const displayName = `withRouter(${Component.displayName || Component.name})`;
//     const C = props => {
//         /*  获取 */
//         const { wrappedComponentRef, ...remainingProps } = props;
//         return (
//             <RouterContext.Consumer>
//                 {context => {
//                     return (
//                         <Component
//                             {...remainingProps} // 组件原始的props
//                             {...context}        // 存在路由对象的上下文，history  location 等
//                             ref={wrappedComponentRef}
//                         />
//                     );
//                 }}
//             </RouterContext.Consumer>
//         );
//     };
//
//     C.displayName = displayName;
//     C.WrappedComponent = Component;
//     /* 继承静态属性 */
//     return hoistStatics(C, Component);
// }
// export default withRouter