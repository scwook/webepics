const doughnutChartSVG =
    '<svg width"174" height="174" style="fill:none"> \
<circle class="type1-1-widget-background" cx="80" cy="80" r="80" /> \
<circle class="type1-1-widget-foreground" id="test1" cx="80" cy="80" r="80" style="stroke-dasharray: 503; stroke-dashoffset: 503;" /> \
</svg>'

const isSimulation = true;

const widgetTitleNodeClass = "widgetTitle";
const widgetValueNodeClass = "widgetValue";
const propertiesFormTitleInputID = "propertiesTitleInput";
const propertiesFormPvNameInputID = "propertiesPvNameInput";

// Widget Type1-1 : Text Value
function widgetType1_1(containerID, widgetInfo) {
    const titleNode = document.createElement("div");
    titleNode.classList.add(widgetTitleNodeClass);
    titleNode.innerText = widgetInfo.title;

    const valueNode = document.createElement("div");
    valueNode.classList.add(widgetValueNodeClass);
    valueNode.style.setProperty("--fontSize", "60px");
    valueNode.style.top = 90 + "px";
    valueNode.innerText = "Undefined";

    const childContainer = containerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(valueNode);

    return true;
}

// Widget Type2-1  : Line Doughnut
function widgetType2_1(containerID, widgetInfo, widgetInfo) {
    // var valueNode = document.createElement("div");
    // valueNode.classList.add(widgetValueNodeClass);
    // valueNode.style.setProperty("--fontSize", "30px");
    // valueNode.style.top = 125 + "px";
    // valueNode.innerText = "Undefined";

    // const widgetHTML = doughnutChartSVG;
    // const doughnutChartNode = document.createElement("div");
    // doughnutChartNode.classList.add("widgetContainer");
    // doughnutChartNode.innerHTML = widgetHTML;

    // const childContainer = containerID.childNodes[1];
    // childContainer.appendChild(titleNode);
    // childContainer.appendChild(doughnutChartNode);
    // childContainer.appendChild(valueNode);
}

function widgetType3_1(containerID, widgetInfo, widgetInfo) {
    const canvasNode = document.createElement("canvas");
    canvasNode.style.width = "100%";
    canvasNode.style.height = "100%";
    const childContainer = containerID.childNodes[1];

    childContainer.appendChild(canvasNode);

    const chartConfig = {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Dataset 1',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: []
                }
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'realtime',
                    realtime: {
                        delay: 2000,
                        duration: 60000,
                        refresh: 1000,
                        frameRate: 30,
                        onRefresh: chartRefresh
                    }
                }
            }
        }
    };

    const myChart = new Chart(canvasNode, chartConfig);

    containerID.childNodes[0].getElementsByClassName("deleteButton")[0].onclick =
        function () { deleteMonitoring(containerID, myChart) };
}

function createWidget(containerID, widgetType, widgetInfo) {
    switch (widgetType) {
        case "type1-1":
            var status = widgetType1_1(containerID, widgetInfo);
            if (status) {
                updateMonitoringData(containerID, "widget", widgetInfo);
                startMonitoringType1(containerID, widgetInfo);
            }
            else {
                alert("Widget Create Error");
            }

            break;

        case "type2-1":
            break;

        case "type3-1":
            var status = widgetType3_1(containerID, widgetInfo);
            if (status) {
                startMonitoringType3(containerID, widgetInfo);
            }
            break;
        default:
    }
}

function widgetPropertiesType1(containerID, widgetType) {
    // const propertiesFormElement = document.createElement("form");
    // propertiesFormElement.setAttribute("id", "widget-properties-form");
    // propertiesFormElement.setAttribute("name", "widgetProperties")

    const propertiesFormNode = document.getElementById("widget-properties-form");
    propertiesFormNode.innerHTML = "";

    // Title Field
    const propertiesBox1 = document.createElement("div");
    propertiesBox1.classList.add("widgetPropertiesBox");

    const titleLabelElement = document.createElement("label");
    titleLabelElement.innerText = "Title";
    const titleInputElement = document.createElement("input");
    titleInputElement.setAttribute("id", propertiesFormTitleInputID);

    propertiesBox1.appendChild(titleLabelElement);
    propertiesBox1.appendChild(titleInputElement);

    // Process Variable Name Field
    const propertiesBox2 = document.createElement("div");
    propertiesBox2.classList.add("widgetPropertiesBox");

    const pvNameLabelElement = document.createElement("label");
    pvNameLabelElement.innerText = "PV Name";

    const pvNameInputElement = document.createElement("input");
    pvNameInputElement.setAttribute("id", propertiesFormPvNameInputID);

    propertiesBox2.appendChild(pvNameLabelElement);
    propertiesBox2.appendChild(pvNameInputElement);

    // Create Button
    const propertiesCreateBox = document.createElement("div");
    propertiesCreateBox.classList.add("widgetPropertiesBox");

    const createButtonElement = document.createElement("button");
    createButtonElement.setAttribute("type", "button");
    createButtonElement.setAttribute("id", "widget-properties-create-button");
    createButtonElement.innerText = "Create";
    createButtonElement.addEventListener("click", function () {
        let title = document.getElementById(propertiesFormTitleInputID).value;
        let pvName = document.getElementById(propertiesFormPvNameInputID).value;

        let widgetInfo = {
            "type" : widgetType,
            "title": title,
            "pvname": pvName
        }

        createWidget(containerID, widgetType, widgetInfo);
        // monitoringInfo.push(widgetInfo);

        const propertiesContainer = document.getElementById("widget-properties-container");
        propertiesContainer.style.display = "none";
    });

    propertiesCreateBox.appendChild(createButtonElement);
    // 
    propertiesFormNode.appendChild(propertiesBox1);
    propertiesFormNode.appendChild(propertiesBox2);
    // propertiesFormNode.appendChild(pvNameLabelElement);
    // propertiesFormNode.appendChild(pvNameInputElement);
    propertiesFormNode.appendChild(propertiesCreateBox);

    const propertiesContainer = document.getElementById("widget-properties-container");
    // propertiesContainer.appendChild(propertiesFormNode);

    propertiesContainer.style.display = "flex";
}

// function widgetPropertiesType2() {
//     const propertiesFormElement = document.createElement("form");
//     propertiesFormElement.setAttribute("id", "widget-properties-form");

//     const titleLabelElement = document.createElement("label");
//     titleLabelElement.innerText = "Title";
//     const titleInputElement = document.createElement("input");

//     const pvNameLabelElement = document.createElement("label");
//     pvNameLabelElement.innerText = "PV Name";
//     const pvNameInputElement = document.createElement("input");

//     propertiesFormElement.appendChild(titleLabelElement);
//     propertiesFormElement.appendChild(titleInputElement);
//     propertiesFormElement.appendChild(pvNameLabelElement);
//     propertiesFormElement.appendChild(pvNameInputElement);

//     const propertiesContainer = document.getElementById("widget-properties-container");
//     propertiesContainer.appendChild(propertiesFormElement);

//     propertiesContainer.style.display = "flex";
// }

function widgetPropertiesType3(containerID, widgetType) {
    // const propertiesFormElement = document.createElement("form");
    // propertiesFormElement.setAttribute("id", "widget-properties-form");
    // propertiesFormElement.setAttribute("name", "widgetProperties")

    const propertiesFormNode = document.getElementById("widget-properties-form");
    propertiesFormNode.innerHTML = "";

    // Title Field
    const propertiesBox1 = document.createElement("div");
    propertiesBox1.classList.add("widgetPropertiesBox");

    const titleLabelElement = document.createElement("label");
    titleLabelElement.innerText = "Title";
    const titleInputElement = document.createElement("input");
    titleInputElement.setAttribute("id", propertiesFormTitleInputID);

    propertiesBox1.appendChild(titleLabelElement);
    propertiesBox1.appendChild(titleInputElement);

    // Process Variable Name Field
    const propertiesBox2 = document.createElement("div");
    propertiesBox2.classList.add("widgetPropertiesBox");

    const pvNameLabelElement = document.createElement("label");
    pvNameLabelElement.innerText = "PV Name";

    const pvNameInputElement = document.createElement("input");
    pvNameInputElement.setAttribute("id", propertiesFormPvNameInputID);

    propertiesBox2.appendChild(pvNameLabelElement);
    propertiesBox2.appendChild(pvNameInputElement);

    // Create Button
    const propertiesCreateBox = document.createElement("div");
    propertiesCreateBox.classList.add("widgetPropertiesBox");

    const createButtonElement = document.createElement("button");
    createButtonElement.setAttribute("type", "button");
    createButtonElement.setAttribute("id", "widget-properties-create-button");
    createButtonElement.innerText = "Create";
    createButtonElement.addEventListener("click", function () {
        let title = document.getElementById(propertiesFormTitleInputID).value;
        let pvName = document.getElementById(propertiesFormPvNameInputID).value;

        let widgetInfo = {
            "title": title,
            "pvname": pvName
        }

        createWidget(containerID, widgetType, widgetInfo);

        const propertiesContainer = document.getElementById("widget-properties-container");
        propertiesContainer.style.display = "none";
    });

    propertiesCreateBox.appendChild(createButtonElement);
    // 
    propertiesFormNode.appendChild(propertiesBox1);
    propertiesFormNode.appendChild(propertiesBox2);
    // propertiesFormNode.appendChild(pvNameLabelElement);
    // propertiesFormNode.appendChild(pvNameInputElement);
    propertiesFormNode.appendChild(propertiesCreateBox);

    const propertiesContainer = document.getElementById("widget-properties-container");
    // propertiesContainer.appendChild(propertiesFormNode);

    propertiesContainer.style.display = "flex";
}

function getChildNodeIndex(id) {
    const childContainerClass = document.getElementsByClassName("childContainer");
    let index = -1;

    let previousElement = id.previousElementSibling;
    for (let i = 0; i < childContainerClass.length; i++) {
        if (!previousElement) {
            index = i;
            break;
        }

        previousElement = previousElement.previousElementSibling;
    }

    return index;
}

function chartRefresh(chart) {
    chart.config.data.datasets[0].data.push({
        x: Date.now(),
        y: Math.random()
    });
}

function startMonitoringType1(id, data) {
    // const valueNodeID = id.querySelector("." + widgetValueNodeClass);

    if (isSimulation) {
        setInterval(function () {
            let value = (Math.random() * 10).toFixed(1);
            const valueNodeID = id.querySelector("." + widgetValueNodeClass);
            valueNodeID.innerText = value;
        }, 1000);
    }
    else {

    }
}

function startMonitoringType2(id, data) {

    if (isSimulation) {

    }
    else {

    }
}

function startMonitoringType3(id, data) {

    if (isSimulation) {

    }
    else {

    }
}