"use client"
const { configureStore } = require("@reduxjs/toolkit");


const stores=configureStore({
    reducer:{
        Axios:reduce,
        profileStats:Modalslice
    },
    devTools:true,
    
})

export const store=stores