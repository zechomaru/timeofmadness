(function(){var p=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return r.apply(null,arguments)};var ea=(new Date).getTime();var ga={overlays:1,interstitials:2,vignettes:2,inserts:3,immersives:2};var t=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},y=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},ha=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ia=function(a,b){if(!a)return b;var c=a.match(ha);return c?c[0]:b};var ja=t("0.15"),ka=t("0.0"),la=t("0.01"),ma=t("0.001"),na=t("0.01"),oa=t("0.001"),pa=t("0.2"),qa=y("true",!0),ra=t("0.001");var sa=y("false",!1),ta=y("false",!1),ua=y("false",!1),va=ua||!ta;var wa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},xa=/&/g,ya=/</g,za=/>/g,Aa=/"/g,Ba=/'/g,Ca=/\x00/g,Da={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},z={"'":"\\'"},Ea=function(a,b){return a<b?-1:a>b?1:0};var D=function(a){D[" "](a);return a};D[" "]=function(){};var F=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{D(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(d){return!1}},G=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(e){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},Fa=/^(-?[0-9.]{1,30})$/,Ga=function(a){return Fa.test(a)&&(a=Number(a),!isNaN(a))?a:null};var Ha=document,J=window;var Ia=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var K=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},N=function(a){return!!a&&"function"==typeof a&&!!a.call},Ja=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},O=function(a,b){if(a.indexOf)return-1<a.indexOf(b);for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Ka=function(a){var b=document;b.addEventListener?b.addEventListener("DOMContentLoaded",a,!1):b.attachEvent&&b.attachEvent("onDOMContentLoaded",
    a)},La=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},P=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},Ma=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Na=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},Oa=function(){var a=window;return F(a.top)?a.top:null},Pa=/(^| )adsbygoogle($| )/;var Qa=!!window.google_async_iframe_id,Ra=function(a,b,c){var d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&Ja(d,e+"="+a[e]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var Sa=!0,Ta=Math.random(),Ua={},Xa=function(a,b,c,d){var e=Va,g,f=Sa;try{g=b()}catch(h){try{var l=Ia(h);b="";h.fileName&&(b=h.fileName);var k=-1;h.lineNumber&&(k=h.lineNumber);f=e(a,l,b,k,c)}catch(m){Wa("pAR",m)}if(!f)throw h;}finally{if(d)try{d()}catch(n){}}return g},Va=function(a,b,c,d,e,g){var f={};if(e)try{e(f)}catch(h){}f.context=a;f.msg=b.substring(0,512);c&&(f.file=c);0<d&&(f.line=d.toString());f.url=Ha.URL.substring(0,512);f.ref=Ha.referrer.substring(0,512);Ya(f);Za("jserror",f,g);return Sa},
    Za=function(a,b,c){try{if(("jserror"==a?Math.random():Ta)<(c||.01)){var d="/pagead/gen_204?id="+a+$a(b),e="http"+("http:"==J.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+d,e=e.substring(0,2E3);J.google_image_requests||(J.google_image_requests=[]);var g=J.document.createElement("img");g.src=e;J.google_image_requests.push(g)}}catch(f){}},Wa=function(a,b){try{var c=Ia(b),d="";b.fileName&&(d=b.fileName);var e=-1;b.lineNumber&&(e=b.lineNumber);Va(a,c,d,e,void 0,void 0)}catch(g){Za("jserror",
        {context:"mRE",msg:g.toString()+"\n"+(g.stack||"")},void 0)}},Ya=function(a){var b=a||{};K(Ua,function(a,d){b[d]=J[a]})},ab=function(a,b){return function(){var c=arguments;return Xa(a,function(){return b.apply(void 0,c)},void 0,void 0)}},bb=function(a,b){return ab(a,b)},cb=function(a){return ab("aa:reactiveTag",a)},$a=function(a){var b="";K(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};var db=null,eb=function(){if(!db){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,F(a))b=a;else break;db=b}return db};var R={T:{j:"17415661",i:"17415662"},wa:{j:"453848100",i:"453848101"},la:{j:"828064124",i:"828064125"},ka:{j:"828064127",i:"828064128"},ma:{j:"828064170",i:"828064171"},V:{j:"453848130",i:"453848131",H:"453848132",I:"453848133"},W:{j:"453848120",i:"453848121",H:"453848122",I:"453848123"},xa:{j:"20040030",i:"20040031"},na:{j:"24819312",i:"24819313"},pa:{j:"24819310",i:"24819311"},qa:{j:"24819308",i:"24819309"},X:{ja:"828064119"},ta:{j:"10573501",i:"10573502"},v:{j:"10573591",i:"10573592"},ua:{j:"10573511",
    i:"10573512"},w:{j:"10573581",i:"10573582"},Z:{j:"10573521",i:"10573522"},u:{j:"10573571",i:"10573572"},oa:{j:24819400,i:24819401}};var fb=function(){},hb=function(a,b,c){switch(typeof b){case "string":gb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var e="",g=0;g<d;g++)c.push(e),hb(a,b[g],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(g=b[e],"function"!=typeof g&&(c.push(d),gb(e,c),c.push(":"),hb(a,g,c),
    d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},ib={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},jb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,gb=function(a,b){b.push('"');b.push(a.replace(jb,function(a){if(a in ib)return ib[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return ib[a]=e+b.toString(16)}));b.push('"')};var kb=function(a){var b=arguments.length;if(1==b&&"array"==aa(arguments[0]))return kb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var S;a:{var lb=p.navigator;if(lb){var mb=lb.userAgent;if(mb){S=mb;break a}}S=""}var T=function(a){return-1!=S.indexOf(a)};var nb=T("Opera")||T("OPR"),U=T("Trident")||T("MSIE"),pb=T("Edge"),qb=T("Gecko")&&!(-1!=S.toLowerCase().indexOf("webkit")&&!T("Edge"))&&!(T("Trident")||T("MSIE"))&&!T("Edge"),rb=-1!=S.toLowerCase().indexOf("webkit")&&!T("Edge"),sb=function(){var a=S;if(qb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(pb)return/Edge\/([\d\.]+)/.exec(a);if(U)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(rb)return/WebKit\/(\S+)/.exec(a)},tb=function(){var a=p.document;return a?a.documentMode:void 0},ub=function(){if(nb&&
    p.opera){var a=p.opera.version;return"function"==aa(a)?a():a}var a="",b=sb();b&&(a=b?b[1]:"");return U&&(b=tb(),b>parseFloat(a))?String(b):a}(),vb={},wb=function(a){if(!vb[a]){for(var b=0,c=wa(String(ub)).split("."),d=wa(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var f=c[g]||"",h=d[g]||"",l=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var m=l.exec(f)||["","",""],n=k.exec(h)||["","",""];if(0==m[0].length&&0==n[0].length)break;b=Ea(0==m[1].length?0:parseInt(m[1],
    10),0==n[1].length?0:parseInt(n[1],10))||Ea(0==m[2].length,0==n[2].length)||Ea(m[2],n[2])}while(0==b)}vb[a]=0<=b}},xb=p.document,yb=xb&&U?tb()||("CSS1Compat"==xb.compatMode?parseInt(ub,10):5):void 0;var zb=null,Ab=qb||rb||nb||"function"==typeof p.atob;var Bb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Cb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];K(a,function(a,d){if(null!=a){var e;try{var g=[];hb(new fb,a,g);e=g.join("")}catch(f){}e&&(e=e.replace(/\//g,"\\$&"),Ja(b,d,"=",e,";"))}});return b.join("")};var Db={U:"google_auto_instream_debug",Y:"google_anchor_debug",aa:"google_ifsl_debug",ba:"google_inflate_debug",ca:"google_ia_debug",ea:"google_ia_debug_fi",$:"google_scr_debug",da:"google_ia_debug_allow_onclick",fa:"google_ia_debug_verify_onclick",ga:"google_ladder_rung_debug",ha:"google_lat_debug",ia:"google_lat_debug_all",ra:"googleads",sa:"google_resize_debug",va:"google_supersize_debug",ya:"google_visible_intentful_click"};var V=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}},Fb=function(a){var b=!1;K(Db,function(c){a&&a.indexOf?-1!=a.indexOf(c)?c=!0:(c=Eb(c),c="go"!=c&&-1!=a.indexOf(c)?!0:!1):c=!1;c&&(b=!0)});return b},Eb=function(a){var b="";K(a.split("_"),function(a){b+=a.substr(0,2)});return b};var W=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},Gb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var Hb=function(){return T("iPad")||T("Android")&&!T("Mobile")||T("Silk")};var Ib={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Jb=/^([0-9.]+)px$/,Kb=/^([0-9.]+)$/,Lb=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var e="google_ad_"+c[d];if(!b.hasOwnProperty(e)){var g;g=(g=(g=Jb.exec(a[c[d]]))?Number(g[1]):null)?Math.round(g):null;null!=g&&(b[e]=g)}}},Mb=function(a,b){var c=b.document.documentElement;try{var d=c.getBoundingClientRect();return a.getBoundingClientRect().top-d.top}catch(e){return 0}};var Nb={rectangle:1,horizontal:2,vertical:4,autorelaxed:1},Ob=[{width:970,height:90,format:2},{width:728,height:90,format:2},{width:468,height:60,format:2},{width:336,height:280,format:1},{width:320,height:100,format:2},{width:320,height:50,format:2},{width:300,height:600,format:4},{width:300,height:250,format:1},{width:250,height:250,format:1},{width:234,height:60,format:2},{width:200,height:200,format:1},{width:180,height:150,format:1},{width:160,height:600,format:4},{width:125,height:125,format:1},
    {width:120,height:600,format:4},{width:120,height:240,format:4}];var Pb=function(a,b){return b.width-a.width||b.height-a.height},Qb=function(a){return O(W(a),R.v.i)};kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var Rb;if(!(Rb=!qb&&!U)){var Sb;if(Sb=U)Sb=9<=yb;Rb=Sb}Rb||qb&&wb("1.9.1");U&&wb("9");Sa=!sa;Ua={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var Tb=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:G([c,d],b)},Ub=function(a,b,c,d){a=a.google_active_plles=a.google_active_plles||[];O(W(b),c)&&a.push(c);O(W(b),d)&&a.push(d)};var Vb=function(a,b,c){Xa("files::getSrc",function(){if("https:"==J.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Wb=function(a,b,c){c||(c=va?"https":"http");return Vb(a,b,c)};var Xb=null;var Yb=function(a){this.m=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:r(this.R,this)});this.N=a.google_iframe_oncopy},Zb;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    /[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(xa,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(ya,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace(za,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(Aa,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(Ba,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(Ca,"&#0;")));Zb=X;Yb.prototype.set=function(a,b){this.N.handlers[a]=b;this.m.addEventListener&&this.m.addEventListener("load",r(this.J,this,a),!1)};
    Yb.prototype.J=function(a){a=this.m.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};Yb.prototype.R=function(a,b){var c=$b("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var $b=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var ac=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Y,Z=function(a){this.s=[];this.m=a||window;this.l=0;this.o=null;this.G=0},bc=function(a,b){this.K=a;this.S=b};Z.prototype.enqueue=function(a,b){0!=this.l||0!=this.s.length||b&&b!=window?this.B(a,b):(this.l=2,this.D(new bc(a,window)))};Z.prototype.B=function(a,b){this.s.push(new bc(a,b||this.m));cc(this)};Z.prototype.L=function(a){this.l=1;if(a){var b=bb("sjr::timeout",r(this.C,this,!0));this.o=this.m.setTimeout(b,a)}};
    Z.prototype.C=function(a){a&&++this.G;1==this.l&&(null!=this.o&&(this.m.clearTimeout(this.o),this.o=null),this.l=0);cc(this)};Z.prototype.M=function(){return!(!window||!Array)};Z.prototype.O=function(){return this.G};Z.prototype.nq=Z.prototype.enqueue;Z.prototype.nqa=Z.prototype.B;Z.prototype.al=Z.prototype.L;Z.prototype.rl=Z.prototype.C;Z.prototype.sz=Z.prototype.M;Z.prototype.tc=Z.prototype.O;var cc=function(a){var b=bb("sjr::tryrun",r(a.P,a));a.m.setTimeout(b,0)};
    Z.prototype.P=function(){if(0==this.l&&this.s.length){var a=this.s.shift();this.l=2;var b=bb("sjr::run",r(this.D,this,a));a.S.setTimeout(b,0);cc(this)}};Z.prototype.D=function(a){this.l=0;a.K()};
    var dc=function(a){try{return a.sz()}catch(b){return!1}},ec=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&dc(a)&&N(a.nq)&&N(a.nqa)&&N(a.al)&&N(a.rl)},fc=function(){if(Y&&dc(Y))return Y;var a=eb(),b=a.google_jobrunner;return ec(b)?Y=b:a.google_jobrunner=Y=new Z(a)},gc=function(a,b){fc().nq(a,b)},hc=function(a,b){fc().nqa(a,b)};var ic=Qa?1==P(J):!P(J),jc=function(){var a=ua?"https":"http",b=D("script"),c;c=ia("","pagead2.googlesyndication.com");return["<",b,' src="',Wb(c,"/pagead/js/r20150630/r20150626/show_ads_impl.js",a),'"></',b,">"].join("")},kc=function(a,b,c,d){return function(){var e=!1;d&&fc().al(3E4);var g=a.document.getElementById(b);g&&!F(g.contentWindow)&&
        3==a.google_top_js_status&&(a.google_top_js_status=6);try{var f=a.document.getElementById(b).contentWindow;if(F(f)){var h=a.document.getElementById(b).contentWindow,l=h.document;l.body&&l.body.firstChild||(l.open(),h.google_async_iframe_close=!0,l.write(c))}else{var k=a.document.getElementById(b).contentWindow,m;g=c;g=String(g);if(g.quote)m=g.quote();else{f=['"'];for(h=0;h<g.length;h++){var n=g.charAt(h),u=n.charCodeAt(0),l=h+1,L;if(!(L=Da[n])){var x;if(31<u&&127>u)x=n;else{var v=n;if(v in z)x=z[v];
        else if(v in Da)x=z[v]=Da[v];else{var A=v,q=v.charCodeAt(0);if(31<q&&127>q)A=v;else{if(256>q){if(A="\\x",16>q||256<q)A+="0"}else A="\\u",4096>q&&(A+="0");A+=q.toString(16).toUpperCase()}x=z[v]=A}}L=x}f[l]=L}f.push('"');m=f.join("")}k.location.replace("javascript:"+m)}e=!0}catch(w){k=eb().google_jobrunner,ec(k)&&k.rl()}e&&(e=$b("google_async_rrc",c),(new Yb(a)).set(b,kc(a,b,e,!1)))}},lc=function(a){var b=["<iframe"];K(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},
        nc=function(a,b,c){mc(a,b,c,function(a,b,g){a=a.document;for(var f=b.id,h=0;!f||a.getElementById(f);)f="aswift_"+h++;b.id=f;b.name=f;f=Number(g.google_ad_width);h=Number(g.google_ad_height);16==g.google_reactive_ad_format?(g=a.createElement("div"),g.innerHTML=Ra(b,f,h),c.appendChild(g.firstChild)):c.innerHTML=Ra(b,f,h);return b.id})},mc=function(a,b,c,d){var e=D("script"),g={},f=b.google_ad_height;g.width='"'+b.google_ad_width+'"';g.height='"'+f+'"';g.frameborder='"0"';g.marginwidth='"0"';g.marginheight=
            '"0"';g.vspace='"0"';g.hspace='"0"';g.allowtransparency='"true"';g.scrolling='"no"';g.allowfullscreen='"true"';g.onload='"'+Zb+'"';d=d(a,g,b);var g=oc(b)?G(["c","e"],pa):null,h=b.google_ad_output,f=b.google_ad_format;f||"html"!=h&&null!=h||(f=b.google_ad_width+"x"+b.google_ad_height,"e"==g&&(f+="_as"));h=!b.google_ad_slot||oc(b);f=f&&h?f.toLowerCase():"";b.google_ad_format=f;for(var f=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],h=[],l=0,k=c;k&&25>l;k=
            k.parentNode,++l)h.push(9!=k.nodeType&&k.id||"");(h=h.join())&&f.push(h);b.google_ad_unit_key=Ma(f.join(":")).toString();f=a.google_adk2_experiment=a.google_adk2_experiment||G(["C","E"],oa)||"N";if("E"==f){f=[];for(h=0;c&&25>h;++h){l="";l=(l=9!=c.nodeType&&c.id)?"/"+l:"";a:{if(c&&c.nodeName&&c.parentElement)for(var k=c.nodeName.toString().toLowerCase(),m=c.parentElement.childNodes,n=0,u=0;u<m.length;++u){var L=m[u];if(L.nodeName&&L.nodeName.toString().toLowerCase()==k){if(c==L){k="."+n;break a}++n}}k=
            ""}f.push((c.nodeName&&c.nodeName.toString().toLowerCase())+l+k);c=c.parentElement}c=f.join()+":";f=a;h=[];if(f)try{for(var x=f.parent,l=0;x&&x!=f&&25>l;++l){for(var v=x.frames,k=0;k<v.length;++k)if(f==v[k]){h.push(k);break}f=x;x=f.parent}}catch(A){}b.google_ad_unit_key_2=Ma(c+h.join()).toString()}else"C"==f&&(b.google_ad_unit_key_2="ctrl");x=Cb(b);v=null;c=G(["C","E"],ra);if("E"==c)a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var q=encodeURIComponent(window.JSON.stringify(b)),
            w;if(Ab)w=p.btoa(q);else{f=[];for(l=h=0;l<q.length;l++){for(var H=q.charCodeAt(l);255<H;)f[h++]=H&255,H>>=8;f[h++]=H}var B=aa(f);if("array"!=B&&("object"!=B||"number"!=typeof f.length))throw Error("encodeByteArray takes an array as a parameter");if(!zb)for(zb={},q=0;65>q;q++)zb[q]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(q);q=zb;H=[];for(B=0;B<f.length;B+=3){var E=f[B],fa=B+1<f.length,M=fa?f[B+1]:0,Q=B+2<f.length,ob=Q?f[B+2]:0,h=E>>2,l=(E&3)<<4|M>>4,k=(M&15)<<2|ob>>
            6,m=ob&63;Q||(m=64,fa||(k=64));H.push(q[h],q[l],q[k],q[m])}w=H.join("")}v=w;break a}Za("sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0})}catch(yc){Wa("sblob",yc)}v=""}else"C"==c&&(v="{C}");var C;b=b.google_ad_client;if(w=ic){if(!Xb)b:{E=[J.top];w=[];for(fa=0;M=E[fa++];){w.push(M);try{if(M.frames)for(var I=M.frames.length,Q=0;Q<I&&1024>E.length;++Q)E.push(M.frames[Q])}catch(Ec){}}for(I=0;I<w.length;I++)try{if(C=w[I].frames.google_esf){Xb=C;break b}}catch(Fc){}Xb=null}w=!Xb}w?(C={style:"display:none"},
            C["data-ad-client"]=ac(b),C.id="google_esf",C.name="google_esf",C.src=Wb(ia("","googleads.g.doubleclick.net"),"/pagead/html/r20150630/r20150626/zrt_lookup.html"),C=lc(C)):C="";I=(new Date).getTime();b=a.google_top_experiment;if(w=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;E=a.google_always_use_delayed_impressions_experiment;g=["<!doctype html><html><body>",C,"<",e,">",
            x,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',ea,";",c?'google_pub_vars = "'+v+'";':"",b?'google_top_experiment="'+b+'";':"",w?'google_async_for_oa_experiment="'+w+'";':"",E?'google_always_use_delayed_impressions_experiment="'+E+'";':"",g?'google_append_as_for_format_override="'+g+'";':"","google_bpp=",I>ea?I-ea:1,";google_async_rrc=0;</",e,">",jc(),"</body></html>"].join("");(a.document.getElementById(d)?gc:hc)(kc(a,d,g,!0))},
        pc=Math.floor(1E6*Math.random()),qc=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var e=c[d].indexOf("=");-1!=e&&(b[c[d].substr(0,e)]=c[d].substr(e+1))}}catch(g){}c=b[3];if(b[1]==pc&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=
            0}},oc=function(a){return a.google_override_format||!Ib[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used},rc=function(a,b){var c=navigator;if(qa&&a&&b&&c){var d=a.document,c=d.createElement("script"),e=ac(b);c.async=!0;c.type="text/javascript";c.src=Wb("pagead2.googlesyndication.com","/pub-config/"+e+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}};var sc=function(a){return Pa.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},uc=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");tc(a,b,c)},tc=function(a,b,c){vc(a,b,c);if(!wc(a,b,c)){La(c);1==P(c)&&rc(c,b.google_ad_client);K(Bb,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&"html"!=d)throw Error("No support for google_ad_output="+d);Xa("aa::main",function(){nc(c,b,a)})}},wc=function(a,b,c){var d;var e=b.google_ad_slot;
        d=c.google_ad_modifications;if(!d||Gb(d.ad_whitelist,e,b.google_tag_origin))d=null;else{var g=d.space_collapsing||"none";d=(e=Gb(d.ad_blacklist,e))?{A:!0,F:e.space_collapsing||g}:d.remove_ads_by_default?{A:!0,F:g}:null}return d&&d.A?("slot"==d.F&&(null!==Ga(a.getAttribute("width"))&&a.setAttribute("width",0),null!==Ga(a.getAttribute("height"))&&a.setAttribute("height",0),a.style.width="0px",a.style.height="0px"),!0):!(d=Na(a,c))||"none"!=d.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||
        b.google_reactive_ads_config?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0)},vc=function(a,b,c){for(var d=a.attributes,e=d.length,g=0;g<e;g++){var f=d[g];if(/data-/.test(f.name)){var h=f.name.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(h)||(f=f.value,"google_reactive_ad_format"==h&&(f=+f,f=isNaN(f)?null:f),null===f||(b[h]=f))}}d=c.google_ad_modifications=c.google_ad_modifications||{};d.plle||
    (d.plle=!0,d=d.loeids=d.loeids||[],e=R.v,(e=Tb(c,la,e.j,e.i))&&d.push(e),e=R.w,(e=Tb(c,ma,e.j,e.i))&&d.push(e),e=R.u,(e=Tb(c,na,e.j,e.i))&&d.push(e));Fb(c.location.hash)&&(b.google_adtest="on");if(b.google_enable_content_recommendations&&1==b.google_reactive_ad_format)b.google_ad_width=V(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=
        V(c).clientWidth||0,b.google_ad_height=V(c).clientHeight||0,a.style.display="none";else if(9==b.google_reactive_ad_format)b.google_ad_width=V(c).clientWidth||0,b.google_ad_height=V(c).clientHeight||0,a.style.display="none";else if(d=b.google_ad_format,"auto"==d||/^((^|,) *(horizontal|vertical|rectangle|autorelaxed) *)+$/.test(d)){d=R.v;Ub(b,c,d.j,d.i);d=R.w;Ub(b,c,d.j,d.i);d=R.u;Ub(b,c,d.j,d.i);d=a.offsetWidth;if(O(W(c),R.u.i)||Qb(c)){e=a;g=Infinity;do{a:{if(e&&e.style&&e.style.height&&(h=/^(\d+)px$/.exec(e.style.height))){h=
        +h[1];break a}h=null}h&&(g=Math.min(g,h))}while(e=e.parentNode);e=g}else e=void 0;var g=b.google_ad_format,l;if("auto"==g)l=V(c).clientWidth,l=Math.min(1200,l),l=d/l,h=Qb(c)&&!(488>V(c).clientWidth)&&.6<l?2:.25>=l?4:3;else for(l in h=0,Nb)-1!=g.indexOf(l)&&(h|=Nb[l]);b&&(b.google_responsive_formats=h);a:{l="number"==typeof e?e:Infinity;if(Qb(c)){for(var f=1+P(c),k=Mb(a,c)/V(c).clientHeight,f=!Hb()&&(T("iPod")||T("iPhone")||T("Android")||T("IEMobile"))?1==f?.22>k?[7,8,3,12,6,14,4,1,10,11,13,0,2,15,
        5,9]:.7>k?[3,7,8,14,12,4,6,1,10,2,0,13,15,11,5,9]:[3,7,8,4,6,14,12,2,1,0,10,13,5,9,11,15]:2==f?1.18>k?[3,7,8,14,12,4,1,0,6,2,10,9,5,15,11,13]:3.04>k?[3,7,8,14,4,2,1,6,0,12,10,5,9,11,15,13]:[3,7,8,4,6,1,2,14,12,0,5,10,11,9,15,13]:2.3>k?[3,7,14,8,1,12,0,2,6,4,10,5,13,11,9,15]:5.6>k?[3,7,8,14,1,2,12,4,0,6,10,5,11,9,13,15]:[3,7,8,0,12,14,1,4,2,6,5,13,10,11,15,9]:Hb()?1==f?.18>k?[3,7,8,12,6,1,14,0,4,10,2,5,13,15,9,11]:.49>k?[3,8,6,7,12,1,0,14,2,10,4,5,13,9,11,15]:[3,8,7,6,1,12,0,2,14,4,10,5,9,13,15,11]:
        2==f?.7>k?[3,8,6,7,1,0,12,2,14,10,4,9,5,13,11,15]:1.58>k?[3,8,7,6,1,12,0,2,14,10,4,9,5,13,11,15]:[3,8,7,6,1,12,0,2,14,4,10,9,5,11,13,15]:1.03>k?[3,12,6,8,1,7,0,14,2,10,4,5,9,11,15,13]:2.55>k?[3,8,6,7,12,1,2,0,14,4,10,5,9,11,15,13]:[3,8,12,6,7,1,0,2,14,4,10,5,9,11,15,13]:1==f?.21>k?[3,12,7,6,1,8,0,4,2,10,14,11,5,15,9,13]:.54>k?[3,7,6,1,12,8,2,0,4,10,14,9,5,11,15,13]:[3,7,1,6,12,2,0,8,4,10,14,5,9,11,15,13]:2==f?.6>k?[3,7,1,12,6,0,2,8,4,10,14,9,5,11,13,15]:1.53>k?[3,7,1,6,12,2,0,8,4,10,14,5,9,11,13,
        15]:[3,7,1,6,12,2,0,8,4,10,14,5,9,11,15,13]:.74>k?[3,7,12,6,1,2,8,0,4,14,10,9,13,5,11,15]:1.95>k?[3,7,6,12,1,2,8,0,4,10,14,5,9,11,13,15]:[3,7,6,12,1,2,8,0,4,14,10,5,9,11,15,13],k=[],m=0;m<f.length;++m)k.push(Ob[f[m]]);f=k}else f=Ob.slice(0).sort(Pb);if(O(W(c),R.w.i)){for(var k=f.length,m=[],n=0;n<k;++n){var u=Math.floor(Math.random()*(n+1));m[n]=m[u];m[u]=f[n]}f=m}if(m=k=488>V(c).clientWidth)m=Math.min(V(c).clientHeight,16*V(c).clientWidth/9),m=Mb(a,c)<m-100;for(n=0;n<f.length;n++)if(u=f[n],u.width<=
        d&&u.height<=l&&u.format&h&&!(320==u.width&&(k&&50==u.height||!k&&100==u.height)||m&&250<=u.height)){l=u;break a}l=null}if(!l)throw Error("Cannot find a responsive size for a container of width="+d+"px and height="+e+"px data-ad-format="+g);b.google_ad_width=300<d&&300<l.height?l.width:2!=l.format&&Qb(c)?l.width:1200<d?1200:Math.round(d);b.google_ad_height=l.height;a.style.height=l.height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else if(!Kb.test(b.google_ad_width)&&
        !Jb.test(a.style.width)||!Kb.test(b.google_ad_height)&&!Jb.test(a.style.height)?(d=Na(a,c),a.style.width=d.width,a.style.height=d.height,Lb(d,b),b.google_loader_features_used=256):(Lb(a.style,b),b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height||(d=a.style.width,a.style.width="100%",e=a.offsetWidth,a.style.width=d,b.google_available_width=e)),e=b.google_ad_width,d=b.google_ad_height,e&&d&&!Ib[e+"x"+d]&&(d=G("CD ED CA EA CW EW".split(" "),ka)))"CD"==d?
        b.google_overflowing_ads_experiment=d:((e=/W$/.test(d)&&728>e)||(e=/^E/.test(d),g=V(c),a&&a.getBoundingClientRect&&g&&g.getBoundingClientRect?(c=a.getBoundingClientRect(),g=g.getBoundingClientRect(),c=Math.min(c.right,g.right)-Math.max(c.left,g.left),c=Math.round(Math.max(0,c))):c=0,160>c||15>b.google_ad_width-c?a=!1:(g=a.style.width||"",a.style.width="100%",l=a.offsetWidth,160>l||0>c-l?(a.style.width=g,a=!1):(e?(b.google_ad_width=c,a.style.width=c+"px"):a.style.width=g,a=!0)),e=!a&&"ED"!=d),e||(b.google_overflowing_ads_experiment=
        d));0<b.google_reactive_ad_format&&!b.google_pgb_reactive&&(b.google_pgb_reactive=3)},xc=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(sc(d)&&(!a||d.id==a))return d;return null},zc=!1,Ac=function(a){var b={};K(ga,function(c,e){a.hasOwnProperty(e)&&(b[e]=a[e])});ba(a.enable_page_level_ads)&&(b.page_level_pubvars=a.enable_page_level_ads);var c=document.createElement("ins");c.className="adsbygoogle";c.style.display="none";document.body.appendChild(c);uc(c,
        {google_reactive_ads_config:b,google_ad_client:a.google_ad_client})},Bc=function(a){if(zc)throw Error("adsbygoogle.push(): Only one 'enable_page_level_ads'  allowed per page.");if(Oa())zc=!0;else throw Error("adsbygoogle.push(): Page-level tag must be placed in top window.");document.body?Ac(a):Ka(cb(function(){Ac(a)}))},Cc=function(a){var b;a:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){b=!0;break a}throw Error("adsbygoogle.push(): 'google_ad_client' is missing from the tag config.");
    }b=!1}if(b)Bc(a);else{b=a.element;a=a.params||{};if(b){if(!sc(b)&&(b=b.id&&xc(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");}else if(b=xc(),!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");uc(b,a)}},Dc=function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:F(a.top)?
            1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=J.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=G(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],ja),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",qc,!1):a.attachEvent&&a.attachEvent("onmessage",qc);window.google_top_js_status=3;a={0:"google_loc_request",1:pc};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=
        2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{Cc(a)}catch(e){throw window.setTimeout(Dc,0),e;}d&&d.loaded||(window.adsbygoogle={push:Cc,loaded:!0})};Dc();})();