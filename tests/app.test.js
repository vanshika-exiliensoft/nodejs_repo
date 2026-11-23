const { getMessage } = require("../src/index");

describe("Node.js Application Tests", () => {
    test("should return the correct welcome message", () => {
        expect(getMessage()).toBe("Hello from Node.js application!");
    });

    test("should return a string", () => {
        expect(typeof getMessage()).toBe("string");
    });
});