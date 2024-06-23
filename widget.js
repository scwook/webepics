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

const TYPE7_1_SVG = '<svg  height="100%" viewBox="0 0 100 100">\
  <defs><style>\
    .widgetType7_1FillColor1 {\
        fill: #e61a74;\
        stroke-width: 0px;\
      }\
      .widgetType7_1FillColor2 {\
        fill: #f498ba;\
        stroke-width: 0px;\
      }\
    </style></defs>\
  <circle class="cls-1" cx="50" cy="50" r="37.5" style="fill:none; stroke:#d41c5c; stroke-width:2px"/>\
  <g>\
    <polygon class="widgetType7_1FillColor1" points="48.8 .08 54.81 .08 51.2 3.69 45.19 3.69 48.8 .08"/>\
    <polygon class="widgetType7_1FillColor2" points="57.48 .63 63.41 1.67 59.23 4.6 53.3 3.55 57.48 .63"/>\
    <polygon class="widgetType7_1FillColor1" points="65.94 2.68 71.6 4.73 66.97 6.89 61.32 4.83 65.94 2.68"/>\
    <polygon class="widgetType7_1FillColor2" points="73.92 6.16 79.13 9.17 74.2 10.49 68.99 7.48 73.92 6.16"/>\
    <polygon class="widgetType7_1FillColor1" points="81.17 10.98 85.78 14.85 80.69 15.29 76.08 11.43 81.17 10.98"/>\
    <polygon class="widgetType7_1FillColor2" points="87.47 16.99 91.34 21.6 86.25 21.15 82.39 16.54 87.47 16.99"/>\
    <polygon class="widgetType7_1FillColor1" points="92.63 24 95.64 29.21 90.71 27.88 87.7 22.68 92.63 24"/>\
    <polygon class="widgetType7_1FillColor2" points="96.5 31.79 98.56 37.45 93.93 35.29 91.88 29.64 96.5 31.79"/>\
    <polygon class="widgetType7_1FillColor1" points="98.96 40.15 100 46.07 95.82 43.14 94.77 37.22 98.96 40.15"/>\
    <polygon class="widgetType7_1FillColor2" points="99.92 48.8 99.92 54.81 96.31 51.2 96.31 45.19 99.92 48.8"/>\
    <polygon class="widgetType7_1FillColor1" points="99.37 57.48 98.33 63.41 95.4 59.23 96.45 53.3 99.37 57.48"/>\
    <polygon class="widgetType7_1FillColor2" points="97.32 65.94 95.27 71.6 93.11 66.97 95.17 61.32 97.32 65.94"/>\
    <polygon class="widgetType7_1FillColor1" points="93.84 73.92 90.83 79.13 89.51 74.2 92.52 68.99 93.84 73.92"/>\
    <polygon class="widgetType7_1FillColor2" points="89.02 81.17 85.15 85.78 84.71 80.69 88.57 76.08 89.02 81.17"/>\
    <polygon class="widgetType7_1FillColor1" points="83.01 87.47 78.4 91.34 78.85 86.25 83.46 82.39 83.01 87.47"/>\
    <polygon class="widgetType7_1FillColor2" points="76 92.63 70.79 95.64 72.12 90.71 77.32 87.7 76 92.63"/>\
    <polygon class="widgetType7_1FillColor1" points="68.21 96.5 62.55 98.56 64.71 93.93 70.36 91.88 68.21 96.5"/>\
    <polygon class="widgetType7_1FillColor2" points="59.85 98.96 53.93 100 56.86 95.82 62.78 94.77 59.85 98.96"/>\
    <polygon class="widgetType7_1FillColor1" points="51.2 99.92 45.19 99.92 48.8 96.31 54.81 96.31 51.2 99.92"/>\
    <polygon class="widgetType7_1FillColor2" points="42.52 99.37 36.59 98.33 40.77 95.4 46.7 96.45 42.52 99.37"/>\
    <polygon class="widgetType7_1FillColor1" points="34.06 97.32 28.4 95.27 33.03 93.11 38.68 95.17 34.06 97.32"/>\
    <polygon class="widgetType7_1FillColor2" points="26.08 93.84 20.87 90.83 25.8 89.51 31.01 92.52 26.08 93.84"/>\
    <polygon class="widgetType7_1FillColor1" points="18.83 89.02 14.22 85.15 19.31 84.71 23.92 88.57 18.83 89.02"/>\
    <polygon class="widgetType7_1FillColor2" points="12.53 83.01 8.66 78.4 13.75 78.85 17.61 83.46 12.53 83.01"/>\
    <polygon class="widgetType7_1FillColor1" points="7.37 76 4.36 70.79 9.29 72.12 12.3 77.32 7.37 76"/>\
    <polygon class="widgetType7_1FillColor2" points="3.5 68.21 1.44 62.55 6.07 64.71 8.12 70.36 3.5 68.21"/>\
    <polygon class="widgetType7_1FillColor1" points="1.04 59.85 0 53.93 4.18 56.86 5.23 62.78 1.04 59.85"/>\
    <polygon class="widgetType7_1FillColor2" points=".08 51.2 .08 45.19 3.69 48.8 3.69 54.81 .08 51.2"/>\
    <polygon class="widgetType7_1FillColor1" points=".63 42.52 1.67 36.59 4.6 40.77 3.55 46.7 .63 42.52"/>\
    <polygon class="widgetType7_1FillColor2" points="2.68 34.06 4.73 28.4 6.89 33.03 4.83 38.68 2.68 34.06"/>\
    <polygon class="widgetType7_1FillColor1" points="6.16 26.08 9.17 20.87 10.49 25.8 7.48 31.01 6.16 26.08"/>\
    <polygon class="widgetType7_1FillColor2" points="10.98 18.83 14.85 14.22 15.29 19.31 11.43 23.92 10.98 18.83"/>\
    <polygon class="widgetType7_1FillColor1" points="16.99 12.53 21.6 8.66 21.15 13.75 16.54 17.61 16.99 12.53"/>\
    <polygon class="widgetType7_1FillColor2" points="24 7.37 29.21 4.36 27.88 9.29 22.68 12.3 24 7.37"/>\
    <polygon class="widgetType7_1FillColor1" points="31.79 3.5 37.45 1.44 35.29 6.07 29.64 8.12 31.79 3.5"/>\
    <polygon class="widgetType7_1FillColor2" points="40.15 1.04 46.07 0 43.14 4.18 37.22 5.23 40.15 1.04"/>\
  </g>\
  <g>\
    <polygon class="widgetType7_1FillColor1" points="51.06 6.07 45.77 6.07 48.94 9.24 54.23 9.24 51.06 6.07"/>\
    <polygon class="widgetType7_1FillColor2" points="43.41 6.55 38.2 7.47 41.88 10.05 47.09 9.13 43.41 6.55"/>\
    <polygon class="widgetType7_1FillColor1" points="35.97 8.36 31 10.17 35.07 12.06 40.04 10.25 35.97 8.36"/>\
    <polygon class="widgetType7_1FillColor2" points="28.95 11.42 24.37 14.07 28.71 15.23 33.29 12.59 28.95 11.42"/>\
    <polygon class="widgetType7_1FillColor1" points="22.57 15.67 18.52 19.07 22.99 19.46 27.05 16.06 22.57 15.67"/>\
    <polygon class="widgetType7_1FillColor2" points="17.03 20.95 13.62 25 18.1 24.61 21.5 20.56 17.03 20.95"/>\
    <polygon class="widgetType7_1FillColor1" points="12.48 27.12 9.84 31.7 14.17 30.54 16.82 25.95 12.48 27.12"/>\
    <polygon class="widgetType7_1FillColor2" points="9.08 33.98 7.27 38.95 11.34 37.06 13.15 32.08 9.08 33.98"/>\
    <polygon class="widgetType7_1FillColor1" points="6.92 41.33 6 46.54 9.68 43.97 10.6 38.75 6.92 41.33"/>\
    <polygon class="widgetType7_1FillColor2" points="6.07 48.94 6.07 54.23 9.24 51.06 9.24 45.77 6.07 48.94"/>\
    <polygon class="widgetType7_1FillColor1" points="6.55 56.59 7.47 61.8 10.05 58.12 9.13 52.91 6.55 56.59"/>\
    <polygon class="widgetType7_1FillColor2" points="8.36 64.03 10.17 69 12.06 64.93 10.25 59.96 8.36 64.03"/>\
    <polygon class="widgetType7_1FillColor1" points="11.42 71.05 14.07 75.63 15.23 71.29 12.59 66.71 11.42 71.05"/>\
    <polygon class="widgetType7_1FillColor2" points="15.67 77.43 19.07 81.48 19.46 77.01 16.06 72.95 15.67 77.43"/>\
    <polygon class="widgetType7_1FillColor1" points="20.95 82.97 25 86.38 24.61 81.9 20.56 78.5 20.95 82.97"/>\
    <polygon class="widgetType7_1FillColor2" points="27.12 87.52 31.7 90.16 30.54 85.83 25.95 83.18 27.12 87.52"/>\
    <polygon class="widgetType7_1FillColor1" points="33.98 90.92 38.95 92.73 37.06 88.66 32.08 86.85 33.98 90.92"/>\
    <polygon class="widgetType7_1FillColor2" points="41.33 93.08 46.54 94 43.97 90.32 38.75 89.4 41.33 93.08"/>\
    <polygon class="widgetType7_1FillColor1" points="48.94 93.93 54.23 93.93 51.06 90.76 45.77 90.76 48.94 93.93"/>\
    <polygon class="widgetType7_1FillColor2" points="56.59 93.45 61.8 92.53 58.12 89.95 52.91 90.87 56.59 93.45"/>\
    <polygon class="widgetType7_1FillColor1" points="64.03 91.64 69 89.83 64.93 87.94 59.96 89.75 64.03 91.64"/>\
    <polygon class="widgetType7_1FillColor2" points="71.05 88.58 75.63 85.93 71.29 84.77 66.71 87.41 71.05 88.58"/>\
    <polygon class="widgetType7_1FillColor1" points="77.43 84.33 81.48 80.93 77.01 80.54 72.95 83.94 77.43 84.33"/>\
    <polygon class="widgetType7_1FillColor2" points="82.97 79.05 86.38 75 81.9 75.39 78.5 79.44 82.97 79.05"/>\
    <polygon class="widgetType7_1FillColor1" points="87.52 72.88 90.16 68.3 85.83 69.46 83.18 74.05 87.52 72.88"/>\
    <polygon class="widgetType7_1FillColor2" points="90.92 66.02 92.73 61.05 88.66 62.94 86.85 67.92 90.92 66.02"/>\
    <polygon class="widgetType7_1FillColor1" points="93.08 58.67 94 53.46 90.32 56.03 89.4 61.25 93.08 58.67"/>\
    <polygon class="widgetType7_1FillColor2" points="93.93 51.06 93.93 45.77 90.76 48.94 90.76 54.23 93.93 51.06"/>\
    <polygon class="widgetType7_1FillColor1" points="93.45 43.41 92.53 38.2 89.95 41.88 90.87 47.09 93.45 43.41"/>\
    <polygon class="widgetType7_1FillColor2" points="91.64 35.97 89.83 31 87.94 35.07 89.75 40.04 91.64 35.97"/>\
    <polygon class="widgetType7_1FillColor1" points="88.58 28.95 85.93 24.37 84.77 28.71 87.41 33.29 88.58 28.95"/>\
    <polygon class="widgetType7_1FillColor2" points="84.33 22.57 80.93 18.52 80.54 22.99 83.94 27.05 84.33 22.57"/>\
    <polygon class="widgetType7_1FillColor1" points="79.05 17.03 75 13.62 75.39 18.1 79.44 21.5 79.05 17.03"/>\
    <polygon class="widgetType7_1FillColor2" points="72.88 12.48 68.3 9.84 69.46 14.17 74.05 16.82 72.88 12.48"/>\
    <polygon class="widgetType7_1FillColor1" points="66.02 9.08 61.05 7.27 62.94 11.34 67.92 13.15 66.02 9.08"/>\
    <polygon class="widgetType7_1FillColor2" points="58.67 6.92 53.46 6 56.03 9.68 61.25 10.6 58.67 6.92"/>\
  </g>\
  </svg>';


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

    // startMonitoringType7(childContainer, widgetInfo);
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

const rotationKeyframe = [
    { transform: "rotate(0)" },
    { transform: "rotate(360deg)" }

];

const rotationOption =
{
    duration: 5000,
    iterations: Infinity,
};

const moveKeyframe = [
    { transform: "translateY(0%)" },
    { transform: "translateY(100%)" },
];


const moveOption =
{
    duration: 2000,
    iterations: 1,
    fill: "forwards"
};


function widgetType5Move(moveContainerID, valueContainerID, animationID, pos) {
    let value = Math.floor(Math.random() * 100);

    valueContainerID.innerText = value;

    let sPos = pos;
    let ePos = value;

    moveKeyframe[0].transform = "translateY(" + sPos + "%)";
    moveKeyframe[1].transform = "translateY(" + ePos + "%)";

    animationID.cancel()
    animationID = moveContainerID.animate(moveKeyframe, moveOption);

    setTimeout(widgetType5Move, 5000, moveContainerID, valueContainerID, animationID, ePos);
}

function widgetType5Rotation(containerID, animationID) {
    let rotationValue = Math.random() < 0.2;

    if(rotationValue) {
        animationID.pause();
    }
    else {
        animationID.play();
    }

    setTimeout(widgetType5Rotation, 5000, containerID, animationID);
}

function startMonitoringType5(id, data) {

    if (isSimulation) {
        const moveContainerID = id.querySelector(".widgetType5SubBoxContainer");
        const rotationContainerID = id.querySelector(".widgetType5SubSubBoxContainer");
        const valueNodeID = id.querySelector(".widgetType5ValueContainer");

        let rotationAnimationID = rotationContainerID.animate(rotationKeyframe, rotationOption);
        let moveAnimationID = moveContainerID.animate(moveKeyframe, moveOption);

        rotationAnimationID.pause();
        moveAnimationID.pause();

        setTimeout(widgetType5Move, 5000, moveContainerID, valueNodeID, moveAnimationID, 100);
        setTimeout(widgetType5Rotation, 5000, rotationContainerID, rotationAnimationID);
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