const isSimulation = true;

const TYPE2_1_SVG = '<svg height="100%" viewBox="0 0 100 100"><circle class="widgetType2_1Circle" cx="50" cy="50" r="50" style="fill: #e61a74"/></svg>';
const TYPE3_1_SVG = '<svg height="100%" viewBox="0 0 100 100" style="transform:rotate(-90deg)">\
<circle class="widgetType3_1Background" cx="50" cy="50" r="45" style="fill:none; stroke:#e61a74; stroke-width: 10px"/>\
<circle id="test" class="widgetType3_1Foreground" cx="50" cy="50" r="45" \
style="fill:none; stroke:#27AAE1; stroke-width: 10px; stroke-dasharray:283; stroke-dashoffset:283; stroke-linecap:round; "/>\
</svg>';

const TYPE4_1_SVG = '<svg height="100%" viewBox="0 0 20 100">\
<defs><linearGradient id="linear-gradient" x1="9.89" y1="93.79" x2="10.12" y2="-.06" gradientUnits="userSpaceOnUse">\
<stop offset="0" stop-color="#29ABE2"><animate class="linearGradientPoint1" begin="indefinite" dur="1s" attributeName="offset" fill="freeze" from="0" to="0" keySplines=" 0.0 0.4 0.1 1" keyTimes="0;1" calcMode="spline" /></stop>\
<stop offset="0" stop-color="#29ABE2" stop-opacity="0.1"><animate class="linearGradientPoint2" begin="indefinite" dur="1s" attributeName="offset" fill="freeze"from="0" to="0" keySplines=" 0.0 0.4 0.1 1" keyTimes="0;1" calcMode="spline" /></stop>\
</linearGradient></defs>\
<rect fill="url(#linear-gradient)" class="cls-1" x="1" y="1" width="18" height="98" rx="9" ry="9"style="stroke:none; stroke-width:2px;" /></svg>';


function openWidgetPropertiesType1_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type1-1-properties-container");
    widgetPropertiesContainer.style.display = "flex";
}

function openWidgetPropertiesType2_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type2-1-properties-container");
    widgetPropertiesContainer.style.display = "flex";
}

function openWidgetPropertiesType3_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type3-1-properties-container");
    widgetPropertiesContainer.style.display = "flex";
}

function openWidgetPropertiesType4_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type4-1-properties-container");
    widgetPropertiesContainer.style.display = "flex";
}

function openWidgetPropertiesType5_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type5-1-properties-container");
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

function createWidgetType3_1() {
    let pageIndex = getMonitoringPageIndex();
    const monitoringContainer = document.getElementsByClassName("monitoringContainer")[pageIndex];

    let formSize = 'size1by1';
    let childContainerID = createNewMonitor(monitoringContainer, formSize);

    let pvName = document.getElementById("widget-type3-1-pvname").value;
    let title = document.getElementById("widget-type3-1-title").value;
    let min = document.getElementById("widget-type3-1-min").value;
    let max = document.getElementById("widget-type3-1-max").value;

    let widgetInfo = {
        "type": 'type3-1',
        "pvname": pvName,
        "title": title,
        "min": min,
        "max": max
    }

    // createWidget(containerID, widgetType, widgetInfo);
    // monitoringInfo.push(widgetInfo);

    const propertiesContainer = document.getElementById("widget-type3-1-properties-container");
    propertiesContainer.style.display = "none";

    const titleNode = document.createElement("div");
    titleNode.classList.add("widgetTitle");
    titleNode.innerText = title;

    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("widgetType3Container");

    let widgetSVG = TYPE3_1_SVG;
    widgetContainer.innerHTML = widgetSVG;

    const widgetValueContainer = document.createElement("div");
    widgetValueContainer.classList.add("widgetType3ValueContainer");
    widgetValueContainer.innerText = "";

    widgetContainer.appendChild(widgetValueContainer);

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(widgetContainer);

    startMonitoringType3(childContainer, widgetInfo);
}

function createWidgetType4_1() {
    let pageIndex = getMonitoringPageIndex();
    const monitoringContainer = document.getElementsByClassName("monitoringContainer")[pageIndex];

    let formSize = 'size1by1';
    let childContainerID = createNewMonitor(monitoringContainer, formSize);

    let pvName = document.getElementById("widget-type4-1-pvname").value;
    let title = document.getElementById("widget-type4-1-title").value;
    let min = document.getElementById("widget-type4-1-min").value;
    let max = document.getElementById("widget-type4-1-max").value;

    let widgetInfo = {
        "type": 'type4-1',
        "pvname": pvName,
        "title": title,
        "min": min,
        "max": max
    }

    // createWidget(containerID, widgetType, widgetInfo);
    // monitoringInfo.push(widgetInfo);

    const propertiesContainer = document.getElementById("widget-type4-1-properties-container");
    propertiesContainer.style.display = "none";

    const titleNode = document.createElement("div");
    titleNode.classList.add("widgetTitle");
    titleNode.innerText = title;

    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("widgetType4Container");

    const widgetValueContainer = document.createElement("div");
    widgetValueContainer.classList.add("widgetType4ValueContainer");
    widgetValueContainer.innerText = "Value";

    const widgetSVGContainer = document.createElement("div");
    widgetSVGContainer.classList.add("widgetType4SVGContainer");
    // widgetSVGContainer.innerText = "SVG";

    let widgetSVG = TYPE4_1_SVG;
    widgetSVGContainer.innerHTML = widgetSVG;

    widgetContainer.appendChild(widgetValueContainer);
    widgetContainer.appendChild(widgetSVGContainer);

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(widgetContainer);

    startMonitoringType4(childContainer, widgetInfo);
}

function createWidgetType5_1() {
    let pageIndex = getMonitoringPageIndex();
    const monitoringContainer = document.getElementsByClassName("monitoringContainer")[pageIndex];

    let formSize = 'size1by1';
    let childContainerID = createNewMonitor(monitoringContainer, formSize);

    let pvName = document.getElementById("widget-type5-1-pvname").value;
    let title = document.getElementById("widget-type5-1-title").value;
    let min = document.getElementById("widget-type5-1-min").value;
    let max = document.getElementById("widget-type5-1-max").value;

    let widgetInfo = {
        "type": 'type5-1',
        "pvname": pvName,
        "title": title,
        "min": min,
        "max": max
    }

    // createWidget(containerID, widgetType, widgetInfo);
    // monitoringInfo.push(widgetInfo);

    const propertiesContainer = document.getElementById("widget-type5-1-properties-container");
    propertiesContainer.style.display = "none";

    const titleNode = document.createElement("div");
    titleNode.classList.add("widgetTitle");
    titleNode.innerText = title;

    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("widgetType5Container");

    const widgetValueContainer = document.createElement("div");
    widgetValueContainer.classList.add("widgetType5ValueContainer");
    widgetValueContainer.innerText = "Value";

    const widgetSVGContainer = document.createElement("div");
    widgetSVGContainer.classList.add("widgetType5SVGContainer");
    // widgetSVGContainer.innerText = "SVG";

    let widgetSVG = TYPE5_1_SVG;
    widgetSVGContainer.innerHTML = widgetSVG;

    widgetContainer.appendChild(widgetValueContainer);
    widgetContainer.appendChild(widgetSVGContainer);

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(widgetContainer);

    // startMonitoringType5(childContainer, widgetInfo);
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

function startMonitoringType3(id, data) {
    // const valueNodeID = id.querySelector("." + widgetValueNodeClass);

    if (isSimulation) {
        setInterval(function () {
            let value = Math.round(Math.random() * 100);
            const forgroundNodeID = id.querySelector(".widgetType3_1Foreground");
            const valueNodeID = id.querySelector(".widgetType3ValueContainer");
            if (!documentHidden) {
                valueNodeID.innerText = value;
                doughnutChartAnimation(forgroundNodeID, value);
            }

        }, 5000);
    }
    else {

    }
}

let currentPointValue = 0.0;
function startMonitoringType4(id, data) {
    // const valueNodeID = id.querySelector("." + widgetValueNodeClass);

    if (isSimulation) {
        setInterval(function () {
            let value = Math.random().toFixed(1);
            const point1NodeID = id.querySelector(".linearGradientPoint1");
            const point2NodeID = id.querySelector(".linearGradientPoint2");

            point1NodeID.setAttribute('from', currentPointValue);
            point1NodeID.setAttribute('to', value)

            point2NodeID.setAttribute('from', currentPointValue);
            point2NodeID.setAttribute('to', value);

            point1NodeID.beginElement();
            point2NodeID.beginElement();

            currentPointValue = value;

            const valueNodeID = id.querySelector(".widgetType4ValueContainer");
            valueNodeID.innerText = value;

            if (!documentHidden) {
                // valueNodeID.innerText = value;
                // doughnutChartAnimation(forgroundNodeID, value);
            }

        }, 5000);
    }
    else {

    }
}

function startMonitoringType4(id, data) {
    // const valueNodeID = id.querySelector("." + widgetValueNodeClass);

    if (isSimulation) {
        setInterval(function () {

            if (!documentHidden) {
                // valueNodeID.innerText = value;
                // doughnutChartAnimation(forgroundNodeID, value);
            }

        }, 5000);
    }
    else {

    }
}

const chartMaxLength = Math.ceil(90 * Math.PI);

function doughnutChartAnimation(chartID, chartValue) {
    let maxValue = 100;
    // let randomValue = Math.random() * maxValue;
    let value = chartValue;
    let valueToOffset = Math.floor(chartMaxLength - chartMaxLength / maxValue * value);

    let fgID = chartID;
    let currentDashOffset = parseInt(fgID.style.strokeDashoffset);

    let sign = valueToOffset - currentDashOffset;

    let dir = 0;
    if (sign > 0) {
        dir = -1; // anitclockwise, increase offset value
    } else if (sign < 0) {
        dir = 1; // clockwise, decrease offset value
    }

    if (dir == 0) {
        return;
    }

    let duration = 2000;
    let interval = 10;
    let count = 0;
    let maxCount = Math.floor(duration / interval);
    let x1 = 0.0;
    let x2 = 1.0;
    let dx = Math.abs(x1 - x2) / maxCount;
    let x = 0.0;
    let y = 0;
    let y1 = (dir == 1) ? valueToOffset : currentDashOffset;
    let y2 = (dir == 1) ? currentDashOffset : valueToOffset;
    let a = Math.abs(currentDashOffset - valueToOffset);
    let b = y1;

    let id = setInterval(function () {

        switch (dir) {
            case 1:
                y = a * Math.pow(2, -10 * x) + y1;
                break;

            case -1:
                y = a * (1 - Math.pow(2, -10 * x)) + y1;

                break;

            default:
                count = maxCount; // 
        }

        fgID.style.strokeDashoffset = Math.floor(y);

        x += dx;
        count += 1;

        if (count == maxCount) {
            clearInterval(id);
        }

    }, interval);
}