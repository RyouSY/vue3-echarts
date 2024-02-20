import Mock from 'mockjs'
import MockIndex from "./mock_index"
Mock.setup({
    timeout: "300",
});
const mocks = [...MockIndex];
export function mockXHR() {
    let i;
    for (i of mocks) {
        Mock.mock(new RegExp(i.url), i.type || "get", i.response);
    }
}
