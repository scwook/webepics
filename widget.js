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

// Widget TypeText Update Widget
function widgetType1_1(containerID, widgetData) {
    const titleNode = document.createElement("div");
    titleNode.classList.add(widgetTitleNodeClass);
    titleNode.innerText = widgetData.title;

    const valueNode = document.createElement("div");
    valueNode.classList.add(widgetValueNodeClass);
    valueNode.style.setProperty("--fontSize", "60px");
    valueNode.style.top = 90 + "px";
    valueNode.innerText = "Undefined";

    const childContainer = containerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(valueNode);
    console.log(widgetData);
    return true;
}

// Widget Type2-1  : Line Doughnut
function widgetType2_1(containerID, widgetData) {
    var valueNode = document.createElement("div");
    valueNode.classList.add(widgetValueNodeClass);
    valueNode.style.setProperty("--fontSize", "30px");
    valueNode.style.top = 125 + "px";
    valueNode.innerText = "Undefined";

    const widgetHTML = doughnutChartSVG;
    const doughnutChartNode = document.createElement("div");
    doughnutChartNode.classList.add("widgetContainer");
    doughnutChartNode.innerHTML = widgetHTML;

    const childContainer = containerID.childNodes[1];
    childContainer.appendChild(titleNode);
    childContainer.appendChild(doughnutChartNode);
    childContainer.appendChild(valueNode);

}

function createWidget(containerID, widgetType) {
    // let formData = new FormData(document.getElementById("widget-properties-form"));
    let title = document.getElementById(propertiesFormTitleInputID).value;
    let pvName = document.getElementById(propertiesFormPvNameInputID).value;

    let widgetData = {
        "title" : title,
        "pvname" : pvName
    }

    switch (widgetType) {
        case "type1-1":
            let status = widgetType1_1(containerID, widgetData);
            if(status) {
                startMonitoringType1(containerID, widgetData);
            }
            else {
                alert("Widget Create Error");
            }

            break;

        case "type2-1":
            break;

        default:
    }

    const propertiesContainer = document.getElementById("widget-properties-container");
    propertiesContainer.style.display = "none";

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
    createButtonElement.addEventListener("click", function () { createWidget(containerID, widgetType) });

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

function widgetPropertiesType2() {
    const propertiesFormElement = document.createElement("form");
    propertiesFormElement.setAttribute("id", "widget-properties-form");

    const titleLabelElement = document.createElement("label");
    titleLabelElement.innerText = "Title";
    const titleInputElement = document.createElement("input");

    const pvNameLabelElement = document.createElement("label");
    pvNameLabelElement.innerText = "PV Name";
    const pvNameInputElement = document.createElement("input");

    propertiesFormElement.appendChild(titleLabelElement);
    propertiesFormElement.appendChild(titleInputElement);
    propertiesFormElement.appendChild(pvNameLabelElement);
    propertiesFormElement.appendChild(pvNameInputElement);

    const propertiesContainer = document.getElementById("widget-properties-container");
    propertiesContainer.appendChild(propertiesFormElement);

    propertiesContainer.style.display = "flex";
}

function startMonitoringType1(id, data) {
    // const valueNodeID = id.querySelector("." + widgetValueNodeClass);

    if(isSimulation) {
        setInterval(function () {
            let value =  (Math.random() * 10).toFixed(1);
            const valueNodeID = id.querySelector("." + widgetValueNodeClass);
            valueNodeID.innerText = value;
        }, 1000);
    }
    else {

    }
}