import "../styles/main.sass"

'use strict'
import lazyload from "./lazyload"
import navbar from "./navbar"
import {candidatesAccordion} from "./canditates"
import {archiveAccordion} from "./archive"
import {oldProjectAcc} from "./oldProject"
import {handleTabInput} from "./tab"


$(document).ready(function(){
lazyload()

navbar();
candidatesAccordion();
archiveAccordion();
oldProjectAcc();
handleTabInput();
});