const index = require("./index")
// @ponicode
describe("index.fetchData", () => {
    test("0", async () => {
        await index.fetchData("China")
    })

    test("1", async () => {
        await index.fetchData("FR")
    })

    test("2", async () => {
        await index.fetchData("GB")
    })

    test("3", async () => {
        await index.fetchData("United States")
    })

    test("4", async () => {
        await index.fetchData("France")
    })

    test("5", async () => {
        await index.fetchData(undefined)
    })
})

// @ponicode
describe("index.fetchDailyData", () => {
    test("0", async () => {
        await index.fetchDailyData()
    })
})

// @ponicode
describe("index.fetchCountries", () => {
    test("0", async () => {
        await index.fetchCountries()
    })
})
