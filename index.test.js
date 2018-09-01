const runDecacheTest = require("./runDecacheTest");

test("runDecacheTest is defined", () => {
	expect(runDecacheTest).toBeDefined();
});

test("runDecacheTest inside jest can decache something that isn't cached?", () => {
	runDecacheTest();
	expect(1).toEqual(1);
});
