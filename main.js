const getData = () => {
    return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
.then(response => response.json())
}
const womenData = getData()
.then(parsedResponse => {
    console.log(parsedResponse);
    return parsedResponse;
})
console.log("women data", womenData)

const HTMLrep = (inventorObj) => {
    return `
        <section id="card">
        <h2>Inventor: ${inventorObj.inventor}</h2>
        <h3>Invention: ${inventorObj.invention}</h3>
        <p>For more info click <a href="${inventorObj.moreDetails}">here</a></p>
        </section>
        `
}

const displayList = () => {
    getData()
    .then(response => {
        for (obj of response) {
            document.querySelector("main").innerHTML += HTMLrep(obj);
        }
    })
}

displayList();