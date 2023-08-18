function calculateTriangleArea() {
    // get triangle base value
    const baseInput = document.getElementById('triangle-base');
    const baseInputValue = parseFloat(baseInput.value);
    const heightInput = document.getElementById('triangle-height');
    const heightInputValue = parseFloat(heightInput.value);
    const area = 0.5 * baseInputValue * heightInputValue;
    const areaValue = document.getElementById('tri-area-value');
    areaValue.innerText = area;
}


function calculateRectangleArea() {
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValue = parseFloat(rectangleWidth.value);
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = parseFloat(rectangleLength.value);
    const area = rectangleWidthValue * rectangleLengthValue;
    const areaValue = document.getElementById('rec-area-value');
    areaValue.innerText = area;


}


// reUseable Function --> will reduce code duplication

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const areaCal = base * height;
    setInnerText('para-area-value', areaCal)
}
// para-area-value
function getInputValue(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

// elips area value
function calculateEllipseArea() {
    const major = getInputValue('major-elip');
    const minor = getInputValue('minor-elip');
    const area = 3.14 * major * minor;
    const twoDecimalArea = area.toFixed(2)
    setInnerText('elip-area-value', twoDecimalArea)
}

// set inner text 
function setInnerText(id, text) {
    const setText = document.getElementById(id);
    setText.innerText = text;
}