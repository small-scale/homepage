import m from "mithril"

import Layout from "../src/view/layout"

import Splash from "../src/view/sections/splash"
import Projects from "../src/view/sections/projects"
import Consulting from "../src/view/sections/consulting"
import Contact from "../src/view/sections/contact"





     m.route(document.body, "/",{
   
       
        "/":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, {title: "",
                step: null,
                nextLink: null,
                nextCopy: null,
                prevLink: null,
                prevCopy: null }, [m(Splash), m(Projects), m(Consulting), m(Contact)])
            }
        }, 
    })
     
   