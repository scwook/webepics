const isSimulation = true;

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

    if (rotationValue) {
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

function startMonitoringType7(id, data) {

    const innerNodeID = id.querySelector(".widgetType7_1Inner");
    const outerNodeID = id.querySelector(".widgetType7_1Outer");
    const circleNodeID = id.querySelector(".widgetType7_1Circle");
    const valueNodeID = id.querySelector(".widgetType7ValueContainer");

    if (isSimulation) {
        setInterval(function () {
            let status = Math.random() < 0.5;
            if (status) {
                innerNodeID.style.animationPlayState = "paused";
                outerNodeID.style.animationPlayState = "paused";
            }
            else {
                let value = Math.floor(Math.random() * 100);
                valueNodeID.innerText = value;
                innerNodeID.style.animationPlayState = "running";
                outerNodeID.style.animationPlayState = "running";
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

