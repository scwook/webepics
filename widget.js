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

function openWidgetPropertiesType6_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type6-1-properties-container");
    widgetPropertiesContainer.style.display = "flex";
}

function openWidgetPropertiesType7_1() {
    let widgetPropertiesContainer = document.getElementById("widget-type7-1-properties-container");
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

    const widgetBoxContainer = document.createElement("div");
    widgetBoxContainer.classList.add("widgetType5BoxContainer");

    widgetBoxContainer.style.setProperty('--startPosition', '0px');
    widgetBoxContainer.style.setProperty('--endPosition', '100px');

    widgetBoxContainer.classList.remove('moveAnimation');

    void widgetBoxContainer.offsetHeight;

    widgetBoxContainer.classList.add('moveAnimation');

    const widgetSubBoxContainer = document.createElement("div");
    widgetSubBoxContainer.classList.add("widgetType5SubBoxContainer");

    const widgetSubSubBoxContainer = document.createElement("div");
    widgetSubSubBoxContainer.classList.add("widgetType5SubSubBoxContainer");

    widgetSubBoxContainer.appendChild(widgetSubSubBoxContainer);
    widgetBoxContainer.appendChild(widgetSubBoxContainer);

    const widgetValueContainer = document.createElement("div");
    widgetValueContainer.classList.add("widgetType5ValueContainer");
    widgetValueContainer.innerText = "Value";

    widgetContainer.appendChild(widgetValueContainer);
    widgetContainer.appendChild(widgetBoxContainer);

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(widgetContainer);

    startMonitoringType5(childContainer, widgetInfo);
}

function createWidgetType6_1() {
    let pageIndex = getMonitoringPageIndex();
    const monitoringContainer = document.getElementsByClassName("monitoringContainer")[pageIndex];

    let formSize = 'size1by1';
    let childContainerID = createNewMonitor(monitoringContainer, formSize);

    let pvName = document.getElementById("widget-type6-1-pvname").value;
    let title = document.getElementById("widget-type6-1-title").value;
    let min = document.getElementById("widget-type6-1-min").value;
    let max = document.getElementById("widget-type6-1-max").value;

    let widgetInfo = {
        "type": 'type6-1',
        "pvname": pvName,
        "title": title,
        "min": min,
        "max": max
    }

    // createWidget(containerID, widgetType, widgetInfo);
    // monitoringInfo.push(widgetInfo);

    const propertiesContainer = document.getElementById("widget-type6-1-properties-container");
    propertiesContainer.style.display = "none";

    const titleNode = document.createElement("div");
    titleNode.classList.add("widgetTitle");
    titleNode.innerText = title;

    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("widgetType6Container");

    let widgetSVG = TYPE3_1_SVG;
    widgetContainer.innerHTML = widgetSVG;

    const widgetValueContainer = document.createElement("div");
    widgetValueContainer.classList.add("widgetType6ValueContainer");
    widgetValueContainer.innerText = "";

    widgetContainer.appendChild(widgetValueContainer);

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(widgetContainer);

    // startMonitoringType6(childContainer, widgetInfo);
}

function createWidgetType7_1() {
    let pageIndex = getMonitoringPageIndex();
    const monitoringContainer = document.getElementsByClassName("monitoringContainer")[pageIndex];

    let formSize = 'size1by1';
    let childContainerID = createNewMonitor(monitoringContainer, formSize);

    let pvName = document.getElementById("widget-type7-1-pvname").value;
    let title = document.getElementById("widget-type7-1-title").value;
    let min = document.getElementById("widget-type7-1-min").value;
    let max = document.getElementById("widget-type7-1-max").value;

    let widgetInfo = {
        "type": 'type7-1',
        "pvname": pvName,
        "title": title,
        "min": min,
        "max": max
    }

    // createWidget(containerID, widgetType, widgetInfo);
    // monitoringInfo.push(widgetInfo);

    const propertiesContainer = document.getElementById("widget-type7-1-properties-container");
    propertiesContainer.style.display = "none";

    const titleNode = document.createElement("div");
    titleNode.classList.add("widgetTitle");
    titleNode.innerText = title;

    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("widgetType7Container");

    let widgetSVG = TYPE7_1_SVG;
    widgetContainer.innerHTML = widgetSVG;

    const widgetValueContainer = document.createElement("div");
    widgetValueContainer.classList.add("widgetType7ValueContainer");
    widgetValueContainer.innerText = "";

    widgetContainer.appendChild(widgetValueContainer);

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(widgetContainer);

    startMonitoringType7(childContainer, widgetInfo);
}

function cancelWidgetProperties(id) {
    let formNode = id.parentNode;
    formNode.parentNode.style.display = "none";
}

