import "../styles/main.sass"

'use strict'
import lazyload from "./lazyload"
import navbar from "./navbar"
import {candidatesAccordion} from "./canditates"
import {archiveAccordion} from "./archive"


$(document).ready(function(){
lazyload()

navbar();
candidatesAccordion();
archiveAccordion();
});