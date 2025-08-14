import gsap from 'gsap';

import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(TextPlugin)
    gsap.registerPlugin(SplitText) 
    gsap.registerPlugin(ScrambleTextPlugin)
    return {
        provide: {
            gsap,
            SplitText,
        }
    }
})