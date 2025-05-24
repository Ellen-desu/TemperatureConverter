"use strict";

const $ = (selector) => { return document.querySelector(selector); }

const input_temp = $("#input-temperature");
const input_temp_type = $("#input-temperature-type");
const target_temp = $("#target-temperature-type");

const result = $("#result");
const formula = $("#formula");


/* Celsius */
function celsius_to_fahrenheit(value) {
    if (value === "") {
        formula.innerHTML = "(<b>°C</b> x 9/5) + 32 = <b>°F</b>";
        return;
    };
    value = Number(value);
    const res = (value * 9/5) + 32;
    
    formula.innerHTML = `(${value}<b>°C</b> x 9/5) + 32 = ${res}<b>°F</b`;
    result.value = `${res}°F`;
};

function celsius_to_kelvin(value) {
    if (value === "") {
        formula.innerHTML = "<b>°C</b> + 273.15 = <b>K</b>";
        return;
    };
    value = Number(value);
    const res = value + 273.15;
    
    formula.innerHTML = `${value}<b>°C</b> + 273.15 = ${res}<b>K</b>`;
    result.value = `${res}K`;
    
};

/* Fahrenheit */
function fahrenheit_to_celsius(value) {
    if (value === "") {
        formula.innerHTML = "(<b>°F</b> - 32) x 5/9 = <b>°C</b>";
        return;
    };
    value = Number(value);
    const res = (value - 32) * 5/9;
    
    formula.innerHTML = `(${value}<b>°F</b> - 32) x 5/9 = ${res}<b>°C</b>`;
    result.value = `${res}°C`;
};

function fahrenheit_to_kelvin(value) {
    if (value === "") {
        formula.innerHTML = "(<b>°K</b> - 32) x 5/9 = <b>K</b>";
        return;
    };
    value = Number(value);
    const res = (value - 32) * 5/9 + 273.15;
    
    formula.innerHTML = `(${value}<b>°K</b> - 32) x 5/9 = ${res}<b>K</b>`
    result.value = `${res}K`;
    
};

/* Kelvin */
function kelvin_to_celsius(value) {
    if (value === "") {
        formula.innerHTML = "<b>K</b> - 273.15 = <b>°C</b>";
        return;
    };
    value = Number(value);
    const res = value - 273.15;
    
    formula.innerHTML = `${value}<b>K</b> - 273.15 = ${res}<b>°C</b>`
    result.value = `${res}°C`;
};

function kelvin_to_fahrenheit(value) {
    if (value === "") {
        formula.innerHTML = "(<b>K</b> - 273.15) x 9/5 + 32 = <b>°F</b>";
        return;
    };
    
    value = Number(value);
    const res = (value - 273.15) * 9/5 + 32;

    formula.innerHTML = `(${value}<b>K</b> - 273.15) x 9/5 + 32 = ${res}<b>°F</b>`
    result.value = `${res}°F`;
};

$("main").addEventListener("change", (e) => {
    switch (input_temp_type.value) {
        case "celsius":
            switch (target_temp.value) {
                case "fahrenheit":
                    celsius_to_fahrenheit(input_temp.value);
                    break;
                
                case "kelvin":
                    celsius_to_kelvin(input_temp.value);
                    break;
                
                default:
                    formula.innerHTML = "<b>°C</b> = <b>°C</b>"
                    result.value = input_temp.value;
            }
            break;
        
        case "fahrenheit":
            switch (target_temp.value) {
                case "celsius":
                    fahrenheit_to_celsius(input_temp.value);
                    break;
                
                case "kelvin":
                    fahrenheit_to_kelvin(input_temp.value);
                    break;
                
                default:
                    formula.innerHTML = "<b>°F</b> = <b>°F</b>";
                    result.value = input_temp.value;
            };
            break;
        
        case "kelvin":
            switch (target_temp.value) {
                case "celsius":
                    kelvin_to_celsius(input_temp.value);
                    break;
                
                case "fahrenheit":
                    kelvin_to_fahrenheit(input_temp.value);
                    break;
                    
                default:
                    formula.innerHTML = "<b>K</b> = <b>K</b>";
                    result.value = input_temp.value;
            };
            break;
        
                
    }
});