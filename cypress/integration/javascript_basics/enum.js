const browsers = {

    CHROME: "chrome",
    FF: "firefox",
    EDGE: "EDGE",
    SAFARI: "safari"
}

let browsers = browsers.CHROME

function execute() {
    switch (browsers) {
        case browsers.CHROME:
            console.log("execute chrome")
            break;

        case browsers.FF:
            console.log('execute firefox')
            break;

        case browsers.EDGE:
            console.log("execute Edge")
            break;

        case browsers.SAFARI:
            console.log("execute Safari")
            break;
    }
}

console.log(execute())