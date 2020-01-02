import m from "mithril"

const Order = ["purpose", "beneficiaries", "assets", "management", "permissions", "risks"]

const Layout = {
    
    view: (vnode)=>{
      const path = (m.route.get()==="") || (m.route.get()==="/report") || (m.route.get()==="/results") 
        return [
            m("nav", {"class":"dt w-100  flex border-box center pa3 pb3-ns pb0 ph5-l"},
              [
                m("a", {"class":"dtc v-mid mid-gray  tl-ns tc mb1","href":"#","title":"Home"},
                  [
                    m("img", {"class":"dib h3","src":"static/longpink.png","alt":"small scale"}),

                  ]
                ),m("a", {"class":"dtc v-mid mid-gray mt2 ml4 tl-ns tc mb1","href":"#","title":"Home"},
                [
                  m("img", {"class":"dib w3","src":"static/wordmark.png","alt":"small scale"}),

                ]
              ), 
         
              ]
            ), 
            m("article", {"class":"pa3 pa5-ns pt3-ns pt0 mw7 center spvar fw4 near-black"},
              [
      
                m("h1", {"class":"f2 spartan f-headline-ns fw7", "style":`color:${vnode.attrs.color || "black"}`}, 
                  vnode.attrs.title
                ),
                m("section", {"class":"f4-ns f5 lh-copy"}, 
                 vnode.children
                ),
              
                  m("section", {"class":"pv4 mt5 tc"},
                  [
                    m("iframe", {"src":"https://smallscale.substack.com/embed","scrolling":"no","height":"320","frameborder":"0"})

                  ]
                )

              ]
            ), 

            m("footer", {"class":"dt w-100 border-box center pb0 v-bottom"},[
             m("div",[
                m("div", {"class":"h1 pv1 w-100 dt", style:"background-color: hsl(27,100%,70%)"}, " "),
                m("div", {"class":"h1 pv1 w-100 dt",  style:"background-color: hsl(8,67%,60%)"}," "),
                m("div", {"class":"h1 pv1 w-100 dt",  style:"background-color: hsl(330,50%,40%)"}," "),
              ]),
              m("div", {"class":" h4 pv3 ph5-ns ph3 w-100 dt",  style:"background-color: hsl(234,55%,16%)"},[
                

              ]),
            ])
            //" {{> menu }} "
          ]
    }
}

export default Layout