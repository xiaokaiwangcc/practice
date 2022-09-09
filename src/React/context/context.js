//创建一个文件，暂且命名为context.js，导出createContext()的返回值
import {createContext} from "react";

const TestContext = createContext(undefined);
TestContext.displayName = 'MyTestContext';
export default TestContext