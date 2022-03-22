import m from "mithril"

import Layout from "../src/view/layout"



let params = (new URL(document.location)).searchParams;
let ref = params.get('ref'); // is the string "Jonathan Smith".
if(ref && ref=="ncsc"){
   
  window.location.assign("https://exit.smallscale.org")
     
}


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
                prevCopy: null }, [])
            }
        }, 
        
    })
     
   
