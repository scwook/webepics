const isSimulation = true;

const TYPE2_1_SVG = '<svg height="100%" viewBox="0 0 100 100"><circle class="widget-type2-1" cx="50" cy="50" r="50" style="fill: #e61a74"/></svg>';


function openWidgetPropertiesType1_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type1-1-properties-container");
    widgetPropertiesContainer.style.display = "flex";
}

function openWidgetPropertiesType2_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type2-1-properties-container");
    widgetPropertiesContainer.style.display = "flex";
}


function createWidgetType1_1() {
    let pageIndex = getMonitoringPageIndex();
    const monitoringContainer = document.getElementsByClassName("monitoringContainer")[pageIndex];

    let formSize = 'size1by1';
    let childContainerID = createNewMonitor(monitoringContainer, formSize);

    let pvName = document.getElementById("widget-type1-1-pvname").value;
    let title = document.getElementById("widget-type1-1-title").value;
    let unit = document.getElementById("widget-type1-1-unit").value;

    let formatContainer = document.getElementById("widget-type1-1-format");
    let format = formatContainer.querySelector("input[type=radio]:checked").value;

    let widgetInfo = {
        "type": 'type1-1',
        "pvname": pvName,
        "title": title,
        "unit": unit,
        "format": format
    }

    // createWidget(containerID, widgetType, widgetInfo);
    // monitoringInfo.push(widgetInfo);

    const propertiesContainer = document.getElementById("widget-type1-1-properties-container");
    propertiesContainer.style.display = "none";

    const titleNode = document.createElement("div");
    titleNode.classList.add("widgetTitle");
    titleNode.innerText = title;

    const valueContainer = document.createElement("div");
    valueContainer.classList.add("widgetValueContainer");

    const valueContainerNode = document.createElement("div");
    valueContainerNode.classList.add("widgetValueContainer");

    const valueNode = document.createElement("div");
    valueNode.classList.add("widgetValue");

    const valueExpNode = document.createElement("div");
    valueExpNode.classList.add("widgetValueExp");

    const valueUnitNode = document.createElement("div");
    valueUnitNode.classList.add("widgetValueUnit");

    valueContainerNode.appendChild(valueNode);
    valueContainerNode.appendChild(valueExpNode);
    valueContainerNode.appendChild(valueUnitNode);

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(valueContainerNode);

    startMonitoringType1(childContainer, widgetInfo);
}

function createWidgetType2_1() {
    let pageIndex = getMonitoringPageIndex();
    const monitoringContainer = document.getElementsByClassName("monitoringContainer")[pageIndex];

    let formSize = 'size1by1';
    let childContainerID = createNewMonitor(monitoringContainer, formSize);

    let pvName = document.getElementById("widget-type2-1-pvname").value;
    let title = document.getElementById("widget-type2-1-title").value;
    let zeroName = document.getElementById("widget-type2-1-zero-name").value;
    let oneName = document.getElementById("widget-type2-1-one-name").value;

    let widgetInfo = {
        "type": 'type2-1',
        "pvname": pvName,
        "title": title,
        "zeroname": zeroName,
        "onename": oneName
    }

    // createWidget(containerID, widgetType, widgetInfo);
    // monitoringInfo.push(widgetInfo);

    const propertiesContainer = document.getElementById("widget-type2-1-properties-container");
    propertiesContainer.style.display = "none";

    const titleNode = document.createElement("div");
    titleNode.classList.add("widgetTitle");
    titleNode.innerText = title;

    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("widgetType2Container");

    // const svgContainerNode = document.createElement("div");
    // svgContainerNode.classList.add("widgetType2SVGContainer");

    // let widgetSVG = TYPE2_1_SVG;
    // const svgNode = document.createElement('div');
    // svgNode.innerHTML = widgetSVG;
    // svgContainerNode.appendChild(svgNode);

    let widgetSVG = TYPE2_1_SVG;
    widgetContainer.innerHTML = widgetSVG;

    const widgetValueContainer = document.createElement("div");
    widgetValueContainer.classList.add("widgetType2ValueContainer");
    widgetValueContainer.innerText = "";

    widgetContainer.appendChild(widgetValueContainer);


    // const valueNode = document.createElement("div");
    // valueNode.classList.add("widgetType2Value");
    // valueContainerNode.appendChild(valueNode);

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(widgetContainer);
    // childContainer.appendChild(valueContainerNode);

    startMonitoringType2(childContainer, widgetInfo);
}


function cancelWidgetProperties(id) {
    let formNode = id.parentNode;
    formNode.parentNode.style.display = "none";
}

function getDecimalFormat(value) {
    return Math.round(value);
}

function getRealFormt(value, precision) {
    return value.toFixed(precision);
}

function getExpFormat(value, precision) {
    let realValue = value;
    let expValue = 0;
    if (Math.abs(value) < 1) {
        while (true) {
            realValue *= 10;
            expValue -= 1;

            if (Math.abs(realValue >= 1)) break;
        }

    } else if (Math.abs(value) >= 10) {
        while (true) {
            realValue /= 10;
            expValue += 1;

            if (Math.abs(realValue) < 10) break;
        }
    }

    return [realValue.toFixed(precision), expValue];
}


// Simulation
function startMonitoringType1(id, data) {
    // const valueNodeID = id.querySelector("." + widgetValueNodeClass);
    const valueNodeID = id.querySelector(".widgetValue");
    const expNodeID = id.querySelector(".widgetValueExp");
    const unitNodeID = id.querySelector(".widgetValueUnit");

    if (isSimulation) {
        setInterval(function () {
            let value = Math.random() * 0.0001;
            switch (data.format) {
                case "decimal":
                    let decimalValue = getDecimalFormat(value);
                    valueNodeID.innerText = decimalValue;
                    break;

                case "real":
                    let realValue = getRealFormt(value, 2);
                    valueNodeID.innerText = realValue;
                    break;

                case "exp":
                    let expValue = getExpFormat(value, 2);
                    valueNodeID.innerText = expValue[0];
                    expNodeID.innerText = expValue[1];
                    break;

                default:

            }

            unitNodeID.innerText = data.unit;

        }, 1000);
    }
    else {

    }
}

function startMonitoringType2(id, data) {
    // const valueNodeID = id.querySelector("." + widgetValueNodeClass);
    const valueNodeID = id.querySelector(".widgetType2ValueContainer");

    if (isSimulation) {
        setInterval(function () {
            let value = Math.round(Math.random() * 10);
            if (value < 5) {
                if (data.zeroname) {
                    valueNodeID.innerText = data.zeroname;
                }
                else {
                    valueNodeID.innerText = value;
                }
            }
            else if (value >= 5) {
                if (data.onename) {
                    valueNodeID.innerText = data.onename;
                }
                else {
                    valueNodeID.innerText = value;
                }
            }

        }, 3000);
    }
    else {

    }
}