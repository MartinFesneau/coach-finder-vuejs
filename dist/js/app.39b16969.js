(function(e){function t(t){for(var c,s,i=t[0],o=t[1],l=t[2],d=0,b=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);u&&u(t);while(b.length)b.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(c=!1)}c&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var c={},r={app:0},n=[];function s(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=c,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1141:function(e,t,a){"use strict";a("d6ff")},1486:function(e,t,a){"use strict";a("8de3")},"1b97":function(e,t,a){"use strict";a("d8cc")},2087:function(e,t,a){},"2ba7":function(e,t,a){"use strict";a("33ed")},"33ed":function(e,t,a){},"4e53":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("a766");var c=a("7a23"),r=a("6c02"),n=(a("a4d3"),a("e01a"),{class:"h2"}),s={class:"h3"},i=Object(c["g"])("h2",{class:"h2"},"Interested ? Reach out now",-1),o=Object(c["f"])("Contact");function l(e,t,a,r,l,u){var d=Object(c["x"])("base-badge"),b=Object(c["x"])("base-card"),f=Object(c["x"])("base-button"),j=Object(c["x"])("router-view");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("section",null,[Object(c["g"])(b,null,{default:Object(c["E"])((function(){return[Object(c["g"])("h2",n,Object(c["z"])(u.fullName),1),Object(c["g"])("h3",s,"$"+Object(c["z"])(u.rate)+"/hour",1),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(u.areas,(function(e){return Object(c["p"])(),Object(c["d"])(d,{key:e,type:"".concat(e,"-full"),title:e},null,8,["type","title"])})),128))]})),_:1})]),Object(c["g"])("section",null,[Object(c["g"])(b,null,{default:Object(c["E"])((function(){return[Object(c["g"])("header",null,[i,Object(c["g"])(f,{link:"",to:u.contactLink},{default:Object(c["E"])((function(){return[o]})),_:1},8,["to"])]),Object(c["g"])(j)]})),_:1})]),Object(c["g"])("section",null,[Object(c["g"])(b,null,{default:Object(c["E"])((function(){return[Object(c["g"])("p",null,Object(c["z"])(u.description),1)]})),_:1})])],64)}a("7db0");var u={props:["id"],data:function(){return{selectedCoach:null}},computed:{fullName:function(){return this.selectedCoach.firstName+" "+this.selectedCoach.lastName},contactLink:function(){return this.$route.path+"/"+this.id+"/contact"},areas:function(){return this.selectedCoach.areas},rate:function(){return this.selectedCoach.hourlyRate},description:function(){return this.selectedCoach.description}},created:function(){var e=this;this.selectedCoach=this.$store.getters["coaches/coaches"].find((function(t){return t.id===e.id}))}};u.render=l;var d=u,b=Object(c["H"])("data-v-37cae8a5");Object(c["s"])("data-v-37cae8a5");var f={class:"controls"},j=Object(c["f"])("Refresh"),O=Object(c["f"])("Register as coach"),p={key:0},h={key:1};Object(c["q"])();var m=b((function(e,t,a,r,n,s){var i=Object(c["x"])("coach-filter"),o=Object(c["x"])("base-button"),l=Object(c["x"])("coach-item"),u=Object(c["x"])("base-card");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("section",null,[Object(c["g"])(i,{onChangeFilter:s.setFilters},null,8,["onChangeFilter"])]),Object(c["g"])("section",null,[Object(c["g"])(u,null,{default:b((function(){return[Object(c["g"])("div",f,[Object(c["g"])(o,{onClick:s.loadCoaches},{default:b((function(){return[j]})),_:1},8,["onClick"]),s.isCoach?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])(o,{key:0,link:"",to:"/register"},{default:b((function(){return[O]})),_:1}))]),s.hasCoaches?(Object(c["p"])(),Object(c["d"])("ul",p,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.filteredCoaches,(function(e){return Object(c["p"])(),Object(c["d"])(l,{key:e.id,id:e.id,"first-name":e.firstName,"last-name":e.lastName,rate:e.hourlyRate,areas:e.areas},null,8,["id","first-name","last-name","rate","areas"])})),128))])):(Object(c["p"])(),Object(c["d"])("h3",h,"No coaches found"))]})),_:1})])],64)})),v=(a("4de4"),a("caad"),a("2532"),{class:"bg-white border-gray-50 my-12 pb-6 w-auto justify-center items-center overflow-hidden md:max-w-sm rounded-lg mx-auto shadow-lg"}),g={class:"mt-8"},y={class:"text-lg text-center font-semibold"},k={class:"text-sm font-bold text-center"},x={class:"mt-2 pt-3 flex flex-wrap mx-6 border-t justify-center"},C={class:"action flex justify-center py-2"},V=Object(c["f"])("Contact"),w=Object(c["f"])("Details");function _(e,t,a,r,n,s){var i=Object(c["x"])("base-badge"),o=Object(c["x"])("base-button");return Object(c["p"])(),Object(c["d"])("li",v,[Object(c["g"])("div",g,[Object(c["g"])("h3",y,Object(c["z"])(s.fullName),1),Object(c["g"])("h4",k,"$"+Object(c["z"])(a.rate)+"/hour",1),Object(c["g"])("div",x,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(a.areas,(function(e){return Object(c["p"])(),Object(c["d"])(i,{key:e,title:e,type:"".concat(e,"-full")},null,8,["title","type"])})),128))]),Object(c["g"])("div",C,[Object(c["g"])(o,{mode:"flat",link:"",to:s.coachContactLink},{default:Object(c["E"])((function(){return[V]})),_:1},8,["to"]),Object(c["g"])(o,{link:"",to:s.coachDetailsLink},{default:Object(c["E"])((function(){return[w]})),_:1},8,["to"])])])])}a("9911");var I=Object(c["H"])("data-v-4fea5e52"),N=I((function(e,t,a,r,n,s){var i=Object(c["x"])("router-link");return a.link?(Object(c["p"])(),Object(c["d"])(i,{key:1,to:a.to,class:a.mode},{default:I((function(){return[Object(c["w"])(e.$slots,"default")]})),_:3},8,["to","class"])):(Object(c["p"])(),Object(c["d"])("button",{key:0,class:a.mode},[Object(c["w"])(e.$slots,"default")],2))})),F={props:{mode:{type:String,required:!1,default:null},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"}}};a("88aa");F.render=N,F.__scopeId="data-v-4fea5e52";var q=F,R={components:{BaseButton:q},props:["id","firstName","lastName","rate","areas"],computed:{fullName:function(){return this.firstName+" "+this.lastName},coachContactLink:function(){return this.$route.path+"/"+this.id+"/contact"},coachDetailsLink:function(){return this.$route.path+"/"+this.id}}};R.render=_;var $=R,A=Object(c["H"])("data-v-1c056de3");Object(c["s"])("data-v-1c056de3");var S=Object(c["g"])("h2",{class:"h2"},"Find your coach",-1),B=Object(c["g"])("h3",{class:"h3"},"Select an area of expertise: ",-1),H={class:"filter-option"},L={for:"frontend"},D={class:"filter-option"},P={for:"backend"},U={class:"filter-option"},z={for:"career"};Object(c["q"])();var E=A((function(e,t,a,r,n,s){var i=Object(c["x"])("base-badge"),o=Object(c["x"])("base-card");return Object(c["p"])(),Object(c["d"])(o,null,{default:A((function(){return[S,B,Object(c["g"])("span",H,[Object(c["g"])("input",{type:"checkbox",id:"frontend",checked:"",onChange:t[1]||(t[1]=function(){return s.setFilter&&s.setFilter.apply(s,arguments)})},null,32),Object(c["g"])("label",L,[Object(c["g"])(i,{onClick:t[2]||(t[2]=function(e){return n.frontActive=!n.frontActive}),type:n.frontActive?"frontend-white":"frontend-full",title:"frontend",class:"cursor-pointer"},null,8,["type"])])]),Object(c["g"])("span",D,[Object(c["g"])("input",{type:"checkbox",id:"backend",checked:"",onChange:t[3]||(t[3]=function(){return s.setFilter&&s.setFilter.apply(s,arguments)})},null,32),Object(c["g"])("label",P,[Object(c["g"])(i,{onClick:t[4]||(t[4]=function(e){return n.backActive=!n.backActive}),type:n.backActive?"backend-white":"backend-full",title:"backend",value:"backend",class:"cursor-pointer"},null,8,["type"])])]),Object(c["g"])("span",U,[Object(c["g"])("input",{type:"checkbox",id:"career",checked:"",onChange:t[5]||(t[5]=function(){return s.setFilter&&s.setFilter.apply(s,arguments)})},null,32),Object(c["g"])("label",z,[Object(c["g"])(i,{onClick:t[6]||(t[6]=function(e){return n.careerActive=!n.careerActive}),type:n.careerActive?"career-white":"career-full",title:"career",value:"career",class:"cursor-pointer"},null,8,["type"])])])]})),_:1})})),M=a("ade3"),J=a("5530"),T={emits:["change-filter"],data:function(){return{frontActive:!1,backActive:!1,careerActive:!1,badgeClass:"frontend-white",filters:{frontend:!0,backend:!0,career:!0}}},methods:{setFilter:function(e){var t=e.target.id,a=e.target.checked,c=Object(J["a"])(Object(J["a"])({},this.filters),{},Object(M["a"])({},t,a));this.filters=c,this.$emit("change-filter",c)}}};a("997b");T.render=E,T.__scopeId="data-v-1c056de3";var G=T,Y={components:{CoachItem:$,CoachFilter:G},data:function(){return{activeFilters:{frontend:!0,backend:!0,career:!0}}},computed:{filteredCoaches:function(){var e=this,t=this.$store.getters["coaches/coaches"];return t.filter((function(t){return!(!e.activeFilters.frontend||!t.areas.includes("frontend"))||(!(!e.activeFilters.backend||!t.areas.includes("backend"))||!(!e.activeFilters.career||!t.areas.includes("career")))}))},hasCoaches:function(){return this.$store.getters["coaches/hasCoaches"]},isCoach:function(){return this.$store.getters["coaches/isCoach"]}},methods:{setFilters:function(e){this.activeFilters=e},loadCoaches:function(){this.$store.dispatch("coaches/loadCoaches")}},created:function(){this.loadCoaches()}};a("6482");Y.render=m,Y.__scopeId="data-v-37cae8a5";var K=Y,Q=Object(c["g"])("h2",{class:"h2"},"Register as a coach",-1);function W(e,t,a,r,n,s){var i=Object(c["x"])("coach-form"),o=Object(c["x"])("base-card");return Object(c["p"])(),Object(c["d"])("section",null,[Object(c["g"])(o,null,{default:Object(c["E"])((function(){return[Q,Object(c["g"])(i,{onSaveData:s.saveData},null,8,["onSaveData"])]})),_:1})])}a("ac1f"),a("5319");var X=Object(c["H"])("data-v-78c4b222");Object(c["s"])("data-v-78c4b222");var Z=Object(c["g"])("label",{class:"label",for:"firstname"},"First name",-1),ee={key:0},te=Object(c["g"])("label",{class:"label",for:"lastname"},"Last name",-1),ae={key:0},ce=Object(c["g"])("label",{class:"label",for:"descriptio"},"Description",-1),re={key:0},ne=Object(c["g"])("label",{class:"label",for:"rate"},"Hourly rate",-1),se={key:0},ie=Object(c["g"])("h3",{class:"h3 py-2"},"Areas of expertise:",-1),oe={for:"frontend"},le=Object(c["g"])("label",{for:"backend"},"Backend development",-1),ue=Object(c["g"])("label",{for:"career"},"Career advisory",-1),de={key:0},be={key:0},fe=Object(c["f"])("Register");Object(c["q"])();var je=X((function(e,t,a,r,n,s){var i=Object(c["x"])("base-badge"),o=Object(c["x"])("base-button");return Object(c["p"])(),Object(c["d"])("form",{onSubmit:t[15]||(t[15]=Object(c["G"])((function(){return s.submitForm&&s.submitForm.apply(s,arguments)}),["prevent"]))},[Object(c["g"])("div",{class:["form-control mb-4",{invalid:!n.firstName.isValid}]},[Z,Object(c["F"])(Object(c["g"])("input",{class:"input",type:"text",id:"firstname","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.firstName.val=e}),onBlur:t[2]||(t[2]=function(e){return s.clearValidity("firstName")})},null,544),[[c["C"],n.firstName.val,void 0,{trim:!0}]]),n.firstName.isValid?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("p",ee,"First name must not be empty"))],2),Object(c["g"])("div",{class:["form-control mb-4",{invalid:!n.lastName.isValid}]},[te,Object(c["F"])(Object(c["g"])("input",{class:"input",type:"text",id:"lastname","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.lastName.val=e}),onBlur:t[4]||(t[4]=function(e){return s.clearValidity("lastName")})},null,544),[[c["C"],n.lastName.val,void 0,{trim:!0}]]),n.lastName.isValid?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("p",ae,"Last name must not be empty"))],2),Object(c["g"])("div",{class:["form-control mb-4",{invalid:!n.description.isValid}]},[ce,Object(c["F"])(Object(c["g"])("textarea",{class:"text-area",row:"5",id:"description","onUpdate:modelValue":t[5]||(t[5]=function(e){return n.description.val=e}),onBlur:t[6]||(t[6]=function(e){return s.clearValidity("description")})},null,544),[[c["C"],n.description.val,void 0,{trim:!0}]]),n.description.isValid?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("p",re,"Description must not be empty"))],2),Object(c["g"])("div",{class:["form-control mb-4",{invalid:!n.rate.isValid}]},[ne,Object(c["F"])(Object(c["g"])("input",{class:"input",type:"number",id:"rate","onUpdate:modelValue":t[7]||(t[7]=function(e){return n.rate.val=e}),onBlur:t[8]||(t[8]=function(e){return s.clearValidity("rate")})},null,544),[[c["C"],n.rate.val,void 0,{number:!0}]]),n.rate.isValid?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("p",se,"Rate must be greater than 0"))],2),Object(c["g"])("div",{class:["form-control mb-4",{invalid:!n.areas.isValid}]},[ie,Object(c["g"])("div",null,[Object(c["F"])(Object(c["g"])("input",{type:"checkbox",id:"frontend",value:"frontend","onUpdate:modelValue":t[9]||(t[9]=function(e){return n.areas.val=e}),onBlur:t[10]||(t[10]=function(e){return s.clearValidity("areas")})},null,544),[[c["B"],n.areas.val]]),Object(c["g"])("label",oe,[Object(c["g"])(i,{type:"frontend-white",title:"frontend",value:"frontend"})])]),Object(c["g"])("div",null,[Object(c["F"])(Object(c["g"])("input",{type:"checkbox",id:"backend",value:"backend","onUpdate:modelValue":t[11]||(t[11]=function(e){return n.areas.val=e}),onBlur:t[12]||(t[12]=function(e){return s.clearValidity("areas")})},null,544),[[c["B"],n.areas.val]]),le]),Object(c["g"])("div",null,[Object(c["F"])(Object(c["g"])("input",{class:"coucou",type:"checkbox",id:"career",value:"career","onUpdate:modelValue":t[13]||(t[13]=function(e){return n.areas.val=e}),onBlur:t[14]||(t[14]=function(e){return s.clearValidity("areas")})},null,544),[[c["B"],n.areas.val]]),ue]),n.areas.isValid?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("p",de,"At least one expertise must be selected"))],2),n.formIsValid?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("p",be,"Please fix the above errors")),Object(c["g"])(o,null,{default:X((function(){return[fe]})),_:1})],32)})),Oe={emit:["save-data"],data:function(){return{frontIsClicked:!1,firstName:{val:"",isValid:!0},lastName:{val:"",isValid:!0},description:{val:"",isValid:!0},rate:{val:null,isValid:!0},areas:{val:[],isValid:!0},formIsValid:!0}},methods:{clearValidity:function(e){this[e].isValid=!0},validateForm:function(){this.formIsValid=!0,""===this.firstName.val&&(this.firstName.isValid=!1,this.formIsValid=!1),""===this.lastName.val&&(this.lastName.isValid=!1,this.formIsValid=!1),""===this.description.val&&(this.description.isValid=!1,this.formIsValid=!1),(!this.rate.val||this.rate.val<0)&&(this.rate.isValid=!1,this.formIsValid=!1),0===this.areas.val.length&&(this.areas.isValid=!1,this.formIsValid=!1)},submitForm:function(){if(this.validateForm(),this.formIsValid){var e={first:this.firstName.val,last:this.lastName.val,desc:this.description.val,rate:this.rate.val,areas:this.areas.val};this.$emit("save-data",e)}}}};a("1141");Oe.render=je,Oe.__scopeId="data-v-78c4b222";var pe=Oe,he={components:{CoachForm:pe},methods:{saveData:function(e){this.$store.dispatch("coaches/addACoach",e),this.$router.replace("/coaches")}}};he.render=W;var me=he,ve=Object(c["H"])("data-v-8bb66754");Object(c["s"])("data-v-8bb66754");var ge={class:"form-control pt-4"},ye=Object(c["g"])("label",{class:"label",for:"email"},"Your email",-1),ke={class:"form-controm"},xe=Object(c["g"])("label",{class:"label",for:"message"},"Your message",-1),Ce={key:0,class:"errors"},Ve={class:"actions"},we=Object(c["f"])("Send message");Object(c["q"])();var _e=ve((function(e,t,a,r,n,s){var i=Object(c["x"])("base-button");return Object(c["p"])(),Object(c["d"])("form",{onSubmit:t[3]||(t[3]=Object(c["G"])((function(){return s.submitForm&&s.submitForm.apply(s,arguments)}),["prevent"]))},[Object(c["g"])("div",ge,[ye,Object(c["F"])(Object(c["g"])("input",{type:"email",id:"email",class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.email=e})},null,512),[[c["C"],n.email,void 0,{trim:!0}]])]),Object(c["g"])("div",ke,[xe,Object(c["F"])(Object(c["g"])("textarea",{id:"message",rows:"5",class:"text-area","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.message=e})},null,512),[[c["C"],n.message,void 0,{trim:!0}]])]),n.formIsValid?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("p",Ce," Please enter a valid email or a non empty message ")),Object(c["g"])("div",Ve,[Object(c["g"])(i,null,{default:ve((function(){return[we]})),_:1})])],32)})),Ie={data:function(){return{email:"",message:"",formIsValid:!0}},methods:{submitForm:function(){this.formIsValid=!0,""!=this.email&&this.email.includes("@")&&""!=this.message?(this.$store.dispatch("requests/contactCoach",{email:this.email,message:this.message,coachId:this.$route.params.id}),this.$router.replace("/coaches")):this.formIsValid=!1}}};a("e06d");Ie.render=_e,Ie.__scopeId="data-v-8bb66754";var Ne=Ie,Fe=Object(c["H"])("data-v-4e072085");Object(c["s"])("data-v-4e072085");var qe=Object(c["g"])("header",null,[Object(c["g"])("h2",{class:"h2"},"Request received")],-1),Re={key:0},$e={key:1,class:"h3"};Object(c["q"])();var Ae=Fe((function(e,t,a,r,n,s){var i=Object(c["x"])("request-item"),o=Object(c["x"])("base-card");return Object(c["p"])(),Object(c["d"])("section",null,[Object(c["g"])(o,null,{default:Fe((function(){return[qe,s.hasRequests?(Object(c["p"])(),Object(c["d"])("ul",Re,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.receivedRequests,(function(e){return Object(c["p"])(),Object(c["d"])(i,{key:e.id,email:e.userEmail,message:e.userMessage},null,8,["email","message"])})),128))])):(Object(c["p"])(),Object(c["d"])("h3",$e,"You haven't received any request yet!"))]})),_:1})])})),Se=Object(c["H"])("data-v-561dd3b8"),Be=Se((function(e,t,a,r,n,s){return Object(c["p"])(),Object(c["d"])("li",null,[Object(c["g"])("div",null,[Object(c["g"])("a",{href:s.emailLink},Object(c["z"])(a.email),9,["href"])]),Object(c["g"])("p",null,Object(c["z"])(a.message),1)])})),He={props:["email","message"],computed:{emailLink:function(){return"mailto:"+this.email}}};a("1b97");He.render=Be,He.__scopeId="data-v-561dd3b8";var Le=He,De={components:{RequestItem:Le},computed:{receivedRequests:function(){return this.$store.getters["requests/requests"]},hasRequests:function(){return this.$store.getters["requests/hasRequests"]}}};a("2ba7");De.render=Ae,De.__scopeId="data-v-4e072085";var Pe=De;const Ue={};var ze=Ue,Ee=Object(r["a"])({history:Object(r["b"])(),routes:[{path:"/",redirect:"/coaches"},{path:"/coaches",component:K},{path:"/coaches/:id",component:d,props:!0,children:[{path:"contact",component:Ne}]},{path:"/register",component:me},{path:"/requests",component:Pe},{path:"/:notFound(.*)",component:ze}]}),Me=Ee,Je=a("5502"),Te={registerCoach:function(e,t){e.coaches.push(t)},setCoaches:function(e,t){e.coaches=t}},Ge=(a("d3b7"),a("96cf"),a("1da1")),Ye={addACoach:function(e,t){return Object(Ge["a"])(regeneratorRuntime.mark((function a(){var c,r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=e.rootGetters.userId,r={firstName:t.first,lastName:t.last,description:t.desc,hourlyRate:t.rate,areas:t.areas},a.next=4,fetch("https://vue-coach-finder-app-default-rtdb.europe-west1.firebasedatabase.app/coaches/".concat(c,".json"),{method:"PUT",body:JSON.stringify(r)});case 4:n=a.sent,n.ok,e.commit("registerCoach",Object(J["a"])(Object(J["a"])({},r),{},{id:c}));case 7:case"end":return a.stop()}}),a)})))()},loadCoaches:function(e){return Object(Ge["a"])(regeneratorRuntime.mark((function t(){var a,c,r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://vue-coach-finder-app-default-rtdb.europe-west1.firebasedatabase.app/coaches.json");case 2:return a=t.sent,t.next=5,a.json();case 5:for(n in c=t.sent,a.ok,r=[],c)s={id:n,firstName:c[n].firstName,lastName:c[n].lastName,description:c[n].description,hourlyRate:c[n].hourlyRate,areas:c[n].areas},r.push(s);e.commit("setCoaches",r);case 10:case"end":return t.stop()}}),t)})))()}},Ke=(a("45fc"),{coaches:function(e){return e.coaches},hasCoaches:function(e){return e.coaches&&e.coaches.length>0},isCoach:function(e,t,a,c){var r=t.coaches,n=c.userId;return r.some((function(e){return e.id===n}))}}),Qe={namespaced:!0,state:function(){return{coaches:[{id:"c1",firstName:"Maximilian",lastName:"Schwarzmüller",areas:["frontend","backend","career"],description:"I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",hourlyRate:30},{id:"c2",firstName:"Julie",lastName:"Jones",areas:["frontend","career"],description:"I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",hourlyRate:30}]}},mutations:Te,actions:Ye,getters:Ke},We={addRequest:function(e,t){e.requests.push(t)}},Xe={contactCoach:function(e,t){var a={id:(new Date).toISOString,coachId:t.coachId,userEmail:t.email,userMessage:t.message};e.commit("addRequest",a)}},Ze={requests:function(e,t,a,c){var r=c.userId;return console.log(e.requests),e.requests.filter((function(e){return e.coachId==r}))},hasRequests:function(e,t){return t.requests&&t.requests.length>0}},et={namespaced:!0,state:function(){return{requests:[]}},getters:Ze,mutations:We,actions:Xe},tt=Object(Je["a"])({modules:{coaches:Qe,requests:et},state:function(){return{userId:"c3"}},getters:{userId:function(e){return e.userId}}}),at=tt;function ct(e,t,a,r,n,s){var i=Object(c["x"])("the-header"),o=Object(c["x"])("router-view");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(i),Object(c["g"])(o)],64)}var rt=Object(c["H"])("data-v-798c2684");Object(c["s"])("data-v-798c2684");var nt={class:"bg-gray-300\t"},st={class:"flex justify-between py-4 border-b-1 border-gray-400 block mx-72"},it={class:"font-mono font-semibold text-xl"},ot=Object(c["f"])("Find a coach"),lt={class:"flex justify-evenly object-right"},ut={class:"font-semibold text-gray-800 mr-8 "},dt=Object(c["f"])("All coaches"),bt={class:"font-semibold text-gray-800"},ft=Object(c["f"])("Requests");Object(c["q"])();var jt=rt((function(e,t){var a=Object(c["x"])("router-link");return Object(c["p"])(),Object(c["d"])("header",nt,[Object(c["g"])("nav",st,[Object(c["g"])("h1",it,[Object(c["g"])(a,{to:"/"},{default:rt((function(){return[ot]})),_:1})]),Object(c["g"])("ul",lt,[Object(c["g"])("li",ut,[Object(c["g"])(a,{to:"/coaches"},{default:rt((function(){return[dt]})),_:1})]),Object(c["g"])("li",bt,[Object(c["g"])(a,{to:"/requests"},{default:rt((function(){return[ft]})),_:1})])])])])}));a("bf1f");const Ot={};Ot.render=jt,Ot.__scopeId="data-v-798c2684";var pt=Ot,ht={components:{TheHeader:pt}};a("ad4f");ht.render=ct;var mt=ht,vt=Object(c["H"])("data-v-5272333e");Object(c["s"])("data-v-5272333e");var gt={class:"card "};Object(c["q"])();var yt=vt((function(e,t){return Object(c["p"])(),Object(c["d"])("div",gt,[Object(c["w"])(e.$slots,"default")])}));a("64e8");const kt={};kt.render=yt,kt.__scopeId="data-v-5272333e";var xt=kt,Ct=Object(c["H"])("data-v-f13d929c"),Vt=Ct((function(e,t,a,r,n,s){return Object(c["p"])(),Object(c["d"])("span",{class:[a.type,"text-xs mr-2 my-1 uppercase rounded tracking-wider text-white  py-1 px-2  cursor-default"]},Object(c["z"])(a.title),3)})),wt={props:["title","type"]};a("1486");wt.render=Vt,wt.__scopeId="data-v-f13d929c";var _t=wt,It=Object(c["c"])(mt);It.use(Me),It.use(at),It.component("base-card",xt),It.component("base-button",q),It.component("base-badge",_t),It.mount("#app")},6482:function(e,t,a){"use strict";a("e5fb")},"64e8":function(e,t,a){"use strict";a("b821")},8278:function(e,t,a){},"87c5":function(e,t,a){},"88aa":function(e,t,a){"use strict";a("a73e")},"8de3":function(e,t,a){},"997b":function(e,t,a){"use strict";a("2087")},a73e:function(e,t,a){},a766:function(e,t,a){},ad4f:function(e,t,a){"use strict";a("4e53")},b821:function(e,t,a){},bf1f:function(e,t,a){"use strict";a("8278")},d6ff:function(e,t,a){},d8cc:function(e,t,a){},e06d:function(e,t,a){"use strict";a("87c5")},e5fb:function(e,t,a){}});
//# sourceMappingURL=app.39b16969.js.map