import m from "mithril"

import Layout from "../src/view/layout"

import Projects from "../src/view/sections/projects"
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
                prevCopy: null }, [m(Projects), m(Contact)])
            }
        }, 
    })
     
   