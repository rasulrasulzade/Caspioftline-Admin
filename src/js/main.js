import "../styles/main.sass"

'use strict'
import lazyload from "./lazyload"
import navbar from "./navbar"
import {membersAccordion} from "./members"

$(document).ready(function(){
lazyload()

navbar();
membersAccordion();
});