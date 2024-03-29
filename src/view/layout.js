import m from "mithril"
//import Colors from "../../style/styles"

const Layout = {
    route: null,

    view: (vnode)=>{
     // const path = (m.route.get()==="") || (m.route.get()==="/report") || (m.route.get()==="/results") 
        return m("div",{class:"wrapper flex flex-column", style:"min-height:100vh"},[
            m("nav", {"class":`dt w-100 flex items-center justify-between ${vnode.attrs.full ? "mw12": "mw8"} border-box center pa3 pb3-ns pb0 ph5-l`, style:"flex-shrink:0"},
              [
                  
                    m("img", {"class":"dib w4","src":"static/logotest.png","alt":"small scale"}),
                   // m("img", {"class":"dib w4","src":"static/ncsc.png","alt":"National Center for State Courts"}),

                    //m("a", {class:"ba bw1 b--purple purple fw7 Inter pa2 pointer"}, "Sign up")
                  
             
              ]
            ), 
            m("main", {"class":`pa3 pa5-ns pt3-ns pt0 ${vnode.attrs.full ? "mw12": "mw8"} center spvar fw4 near-black`, style:"flex-grow:1"},
              [


                 vnode.children,
                 m("iframe", {"src":"https://clicktoagree.substack.com/embed","scrolling":"no", "width":"480","height":"320","frameborder":"0", style:"border:1px solid #EEE; background:white;"}),

             

              ]
            ), 
            m("footer", {"class":"dt mt5 w-100 db center pb0", style:"flex-shrink:0"},[
             m("div",[
                m("div", {"class":"h1 pv1 w-100 dt", style:"background-color: hsl(27,100%,70%)"}, " "),
                m("div", {"class":"h1 pv1 w-100 dt",  style:"background-color: hsl(8,67%,60%)"}," "),
                m("div", {"class":"h1 pv1 w-100 dt",  style:"background-color: hsl(330,50%,40%)"}," "),
              ]),
              m("div", {"class":" h4 pv3 ph5-ns ph3 w-100 dt",  style:"background-color: hsl(234,55%,16%)"},[
                

              ]),
            ])
          ]);
    }
}

export default Layout