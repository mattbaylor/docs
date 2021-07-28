__NUXT_JSONP__("/features/click-and-open-tracking", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{document:{slug:"click-and-open-tracking",description:"",title:"Click & Open Tracking",position:3.1,category:"Features",toc:[{id:y,depth:m,text:z},{id:A,depth:m,text:B},{id:C,depth:m,text:D},{id:E,depth:m,text:F},{id:G,depth:m,text:H},{id:I,depth:o,text:J},{id:K,depth:o,text:L},{id:M,depth:o,text:N}],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"Postal supports tracking opens & clicks from e-mails. There are a number of additional steps required to configure this."}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"warning"},children:[{type:a,value:"\nBy default, this functionality is disabled.\n"}]},{type:a,value:c},{type:b,tag:n,props:{id:y},children:[{type:b,tag:h,props:{ariaHidden:g,href:"#how-it-works",tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Once enabled, Postal will automatically scan your outgoing messages and replace any links with a new link that goes via your Postal web server. When the link is clicked, Postal will log the click and redirect to the user to the original URL automatically. The links that are included in the e-mail should be on the same domain as the sender and therefore you need to configure a subdomain like "},{type:b,tag:e,props:{},children:[{type:a,value:"click.yourdomain.com"}]},{type:a,value:" and point it to your Postal server."}]},{type:a,value:c},{type:b,tag:n,props:{id:A},children:[{type:b,tag:h,props:{ariaHidden:g,href:"#the-tracking-web-server",tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To facilitate the logging & redirection, Postal runs a separate web server process that listens on ports 5010 (for HTTP) and 5011 (for HTTPS). This web server is designed to respond quickly to requests and is able to support TLS using Let's Encrypt automatically. Postal will handle the generation of certificates for any \"tracking domains\" that you add."}]},{type:a,value:c},{type:b,tag:n,props:{id:C},children:[{type:b,tag:h,props:{ariaHidden:g,href:"#setup-lets-encrypt",tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Postal includes Let's Encrypt support for generating certificates automatically for tracking domains. You need to register your LE private key before you can use this. Do this by providing your e-mail address to the "},{type:b,tag:e,props:{},children:[{type:a,value:"register-lets-encrypt"}]},{type:a,value:" method. By doing this you are agreeing to the Let's Encrypt terms."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,O]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"postal register-lets-encrypt youremail@example.comn\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{id:E},children:[{type:b,tag:h,props:{ariaHidden:g,href:"#enable-the-fast-server",tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You'll need to enable this by enabling the fast server in the configuration."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To avoid conflict with your management interface, you will need another static IP address that has ports 80 and 443 available. You should add something like this to your "},{type:b,tag:e,props:{},children:[{type:a,value:"postal.yml"}]},{type:a,value:" configuration file. Replacing the bind address with the second IP address that you wish to use for the tracking server."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,"language-yaml"]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{className:[l,t,u]},children:[{type:a,value:"fast_server"}]},{type:b,tag:d,props:{className:[l,v]},children:[{type:a,value:w}]},{type:a,value:P},{type:b,tag:d,props:{className:[l,t,u]},children:[{type:a,value:"enabled"}]},{type:b,tag:d,props:{className:[l,v]},children:[{type:a,value:w}]},{type:a,value:" "},{type:b,tag:d,props:{className:[l,"boolean","important"]},children:[{type:a,value:g}]},{type:a,value:P},{type:b,tag:d,props:{className:[l,t,u]},children:[{type:a,value:"bind_address"}]},{type:b,tag:d,props:{className:[l,v]},children:[{type:a,value:w}]},{type:a,value:" 192.168.0.4\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You will need to make sure that your "},{type:b,tag:e,props:{},children:[{type:a,value:"nginx"}]},{type:a,value:" server isn't already listening on this IP address. This can be configured in "},{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fetc\u002Fnginx\u002Fsites-enabled\u002Fdefault"}]},{type:a,value:". You should update the "},{type:b,tag:e,props:{},children:[{type:a,value:"listen"}]},{type:a,value:" lines as appropriate."}]},{type:a,value:c},{type:b,tag:n,props:{id:G},children:[{type:b,tag:h,props:{ariaHidden:g,href:"#once-enabled",tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:x,props:{id:I},children:[{type:b,tag:h,props:{ariaHidden:g,href:"#disable-tracking-on-a-per-e-mail-basis",tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you don't wish to track anything in an email you can add a header to your e-mails before sending it."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,O]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"X-AMP: skip\n"}]}]}]},{type:a,value:c},{type:b,tag:x,props:{id:K},children:[{type:b,tag:h,props:{ariaHidden:g,href:"#disabling-tracking-for-certain-link-domains",tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If there are certain domains you don't wish to track links, you can define these on the tracking domain settings page. For example, if you list "},{type:b,tag:e,props:{},children:[{type:a,value:"yourdomain.com"}]},{type:a,value:" no links to this domain will be tracked."}]},{type:a,value:c},{type:b,tag:x,props:{id:M},children:[{type:b,tag:h,props:{ariaHidden:g,href:"#disabling-tracking-on-a-per-link-basis",tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you wish to disable tracking for a particular link, you can do so by inserting "},{type:b,tag:e,props:{},children:[{type:a,value:"+notrack"}]},{type:a,value:" as shown below:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:Q,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"https+notrack:\u002F\u002Fatech.media"}]}]},{type:a,value:c},{type:b,tag:Q,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"http+notrack:\u002F\u002Fappmail.io\u002Fdocumentation"}]}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Ffeatures",path:"\u002Fen\u002Ffeatures\u002Fclick-and-open-tracking",extension:".md",createdAt:R,updatedAt:R,to:"\u002Ffeatures\u002Fclick-and-open-tracking"},prev:{slug:"spam-and-virus-checking",title:"Spam & Virus Checking",to:"\u002Ffeatures\u002Fspam-and-virus-checking"},next:{slug:"ip-pools",title:"IP Pools",to:"\u002Ffeatures\u002Fip-pools"}}],fetch:{},mutations:[]}}("text","element","\n","span","code","p","true","a",-1,"icon","icon-link","token",2,"h2",3,"div","nuxt-content-highlight","pre","line-numbers","key","atrule","punctuation",":","h3","how-it-works","How it works","the-tracking-web-server","The tracking web server","setup-lets-encrypt","Setup Let's Encrypt","enable-the-fast-server","Enable the fast server","once-enabled","Once enabled...","disable-tracking-on-a-per-e-mail-basis","Disable tracking on a per e-mail basis","disabling-tracking-for-certain-link-domains","Disabling tracking for certain link domains","disabling-tracking-on-a-per-link-basis","Disabling tracking on a per link basis","language-text","\n  ","li","2021-07-28T17:53:41.019Z")));