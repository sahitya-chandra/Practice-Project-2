import {atom} from "recoil";

export const currentUserAtom = atom({
    key: "currentUserAtom",
    default: JSON.parse(localStorage.getItem('user')) || null
})

