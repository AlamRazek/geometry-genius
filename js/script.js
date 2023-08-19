let total = 0;

function calculateTriangleArea() {

    // get triangle base value
    const baseInput = document.getElementById('triangle-base');
    const baseInputValue = parseFloat(baseInput.value);

    const heightInput = document.getElementById('triangle-height');
    const heightInputValue = parseFloat(heightInput.value);
    // validate input
    if (isNaN(baseInputValue) || isNaN(heightInputValue)) {
        alert('inputia is number nay');
        baseInput.value = '';
        heightInput.value = '';
        return;
    }
    const area = 0.5 * baseInputValue * heightInputValue;
    const areaValue = document.getElementById('tri-area-value');
    areaValue.innerText = area;
    addTOCalculationRntry('Triangle', area)

}


function calculateRectangleArea() {
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValue = parseFloat(rectangleWidth.value);
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = parseFloat(rectangleLength.value);
    // validate input
    if (isNaN(rectangleWidthValue) || isNaN(rectangleLengthValue)) {
        alert('inputia is number nay');
        rectangleWidth.value = '';
        rectangleLength.value = '';
        return;
    }
    const area = rectangleWidthValue * rectangleLengthValue;
    const areaValues = document.getElementById('rec-area-value');
    areaValues.innerText = area;
    addTOCalculationRntry('Rectangle', area)


}


// reUseable Function --> will reduce code duplication

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    // validate input
    if (isNaN(base) || isNaN(height)) {
        alert('inputia is number nay');

        return;
    }

    const areaCal = base * height;
    setInnerText('para-area-value', areaCal)

    // add to calculation
    addTOCalculationRntry('paralelogram', areaCal)

}

// elips area value
function calculateEllipseArea() {
    const major = getInputValue('major-elip');
    const minor = getInputValue('minor-elip');
    // validate input
    if (isNaN(major) || isNaN(minor)) {
        alert('inputia is number nay');
        return;
    }
    const area = 3.14 * major * minor;
    const twoDecimalArea = area.toFixed(2)
    setInnerText('elip-area-value', twoDecimalArea)
    addTOCalculationRntry('Ellipse', twoDecimalArea)
}

// Rhombus area calculation
function calculateRhombusArea() {
    const mainDiemention = getInputValue('major-rhom');
    const secondDiemention = getInputValue('minor-rhom');
    const area = 0.5 * mainDiemention * (secondDiemention * 2);
    setInnerText('Rhombus', area);
    addTOCalculationRntry(areatype, area)
}

// Pentagon area calculation
function calculatePentagonArea() {
    const majorPenta = getInputValue('major-penta');
    const minorPenta = getInputValue('minor-penta');
    const area = 0.5 * majorPenta * minorPenta;
    setInnerText('penta-area-value', area);
    addTOCalculationRntry('Pentagon', area);
}


// re-useable functions

// for-area-value
function getInputValue(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}


// set inner text 
function setInnerText(id, text) {
    const setText = document.getElementById(id);
    setText.innerText = text;
}



// add to calculation FileSystemEntry(area)
function addTOCalculationRntry(areatype, area) {
    const calculationEntry = document.getElementById('calculator-ul');

    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('text-xl')
    p.classList.add('mt-2')
    p.innerHTML = `${count + 1}. ${areatype} ${area} cm<sup>2</sup> <button class='btn btn-sm btn-secondary'>Convert</button>`;
    calculationEntry.appendChild(p);

}