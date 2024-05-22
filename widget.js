const isSimulation = true;


function openWidgetPropertiesType1_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type1-1-properties-container");
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

    // valueNode.innerText = "6.19";
    // valueExpNode.innerText = "-7";
    // valueUnitNode.innerText = "mm";

    valueContainerNode.appendChild(valueNode);
    valueContainerNode.appendChild(valueExpNode);
    valueContainerNode.appendChild(valueUnitNode);

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(valueContainerNode);

    startMonitoringType1(childContainer, widgetInfo);
}

function cancelWidgetType1_1(id) {
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