import {classForSaveResponse} from "./classForSaveResponse";


export var start = 0;
export  var end = 0;
export  var savedResponse = new classForSaveResponse();
export var itemsLength = 0;

export function setStart(value) {
    start = value;
}

export function setEnd(value) {
    end = value;
}

export function setItemsLength(value) {
    itemsLength = value;
}
