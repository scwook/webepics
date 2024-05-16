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

    let widgetInfo = {
        "type": 'type1-1',
        "title": title,
        "pvname": pvName,
        "unit": unit
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

    const valueNode = document.createElement("div");
    valueNode.classList.add("widgetValue");
    // valueNode.style.setProperty("--fontSize", "60px");
    // valueNode.style.top = 90 + "px";
    valueNode.innerText = "6.19";

    const childContainer = childContainerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(valueNode);
}