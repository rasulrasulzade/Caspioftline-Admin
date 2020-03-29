import "../styles/main.sass"

'use strict'
import lazyload from "./lazyload"
import navbar from "./navbar"

$(document).ready(function(){
lazyload()

navbar();
});