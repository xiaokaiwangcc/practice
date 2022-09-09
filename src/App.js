import './App.css';
import TimeCount from "./React/TimeCount";
import Parent from "./React/Parent";
import ClassSetState from "./React/setState/ClassSetState";
import FnSetState from "./React/setState/FnSetState";
import StateDemo from "./React/setState/SetStateDemo";
import DemoRef from "./React/Ref/DemoRef";
import MemoryRef from "./React/Ref/MemoryRef";

function App() {
    // const eb = new EventBus()
    //
    // eb.on('事件1', () => {
    //     console.log('我是事件1')
    // })
    // const callId = eb.on('事件1', () => {
    //     console.log('我是订阅B')
    // })
    // const callId3 = eb.on('事件2', (name, age) => {
    //     console.log('我是订阅C')
    // })
    // eb.once('事件once',(name, age) => {
    //     console.log('我是事件once')
    // })
    // // eb.emit('事件2', 1,27)
    // // eb.emit('事件2', 1,27)
    // // eb.emit('事件2', 1,27)
    // // eb.emit('事件2', 1,27)
    // // eb.off('事件2', callId3)
    // // eb.emit('事件2', 1,27)
    // eb.emit('事件once', 1,27)
    // eb.emit('事件once', 1,27)
    // eb.emit('事件once', 1,27)
    // eb.emit('事件once', 1,27)
    return (
        <div className="App">
            {/*<BfcDemo />*/}
            {/*<InlineBlockAndBlock />*/}
            <TimeCount />
            {/*<DoubleFly />*/}
            {/*<CurryingFunc />*/}
            <Parent />
            <ClassSetState />
            <FnSetState />
            <StateDemo />
            <DemoRef />
            <MemoryRef />
        </div>
    );
}

export default App;
