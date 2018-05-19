webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-toolbar",{attrs:{color:"blue darken-3",dark:""}},[e("v-toolbar-title",{domProps:{textContent:this._s(this.title)}}),this._v(" "),e("v-spacer")],1),this._v(" "),e("v-content",[e("router-view")],1)],1)},staticRenderFns:[]},n=a("VU/8")({data:function(){return{title:"Tracing Iraynon-Bukinon Trail"}},name:"App"},i,!1,null,null,null).exports,s=a("/ocq"),l={data:function(){return{participants:[],race_category:[{name:"11KM",color:"teal"},{name:"21KM",color:"white"},{name:"50KM",color:"yellow"}]}},firestore:function(){return{participants:h.collection("participants").orderBy("last_name")}},methods:{showDetails:function(t){this.$router.push("/"+t)}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("router-link",{attrs:{to:"/add-new-runner"}},[a("v-btn",{attrs:{fab:"",dark:"",absolute:"",right:"",bottom:"",color:"blue mb-4"}},[a("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.race_category,function(e){return a("v-flex",{attrs:{xs4:""}},[a("v-card",{staticClass:"mr-1"},[a("v-toolbar",{attrs:{color:e.color}},[a("v-toolbar-title",[t._v(t._s(e.name))]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("accessible_forward")])],1)],1),t._v(" "),a("v-list",t._l(t.participants,function(r){return r.race_category==e.name?a("v-list-tile",{key:r.id,attrs:{avatar:""},on:{click:function(e){t.showDetails(r.id)}}},[a("v-avatar",{attrs:{color:"female"==r.gender?"pink":"black",size:"30px"}},[a("span",{staticClass:"white--text"},[t._v(t._s(r.last_name.charAt(0).toUpperCase()))])]),t._v(" "),a("v-list-tile-content",{staticClass:"pl-1"},[a("v-list-tile-title",{domProps:{textContent:t._s(r.last_name+"  "+r.first_name)}})],1),t._v(" "),a("v-list-tile-action",{staticClass:"text-xs-right"},[a("v-chip",{attrs:{label:"",color:"female"==r.gender?"pink":"black","text-color":"white"}},[t._v(t._s(r.bib_number))])],1)],1):t._e()}))],1)],1)}))],1)},staticRenderFns:[]},o=a("VU/8")(l,c,!1,null,null,null).exports,p={data:function(){return{valid:!0,snackbar:!1,participant:{first_name:"",last_name:"",email:"",contact_number:"",shirt_size:"",gender:"",race_category:"",emergency_contact_person:"",emergency_contact_number:"",created_at:new Date},lists:{shirt_size:["small","medium","large","extra_large"],race_category:["11KM","21KM","50KM"],gender:["male","female"]},requiredRules:[function(t){return!!t||"Field is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}]}},methods:{submit:function(t,e){this.$refs.form.validate()&&(h.collection("participants").add(t),this.snackbar=!0,this.$router.push("/"))},clear:function(){this.$refs.form.reset()}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("router-link",{attrs:{to:"/"}},[a("v-btn",{attrs:{fab:"",dark:"",small:"",absolute:"",right:"",color:"primary"}},[a("v-icon",{attrs:{dark:""}},[t._v("arrow_back")])],1)],1),t._v(" "),a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md12:""}},[a("v-radio-group",{attrs:{rules:t.requiredRules,row:""},model:{value:t.participant.race_category,callback:function(e){t.$set(t.participant,"race_category",e)},expression:"participant.race_category"}},t._l(t.lists.race_category,function(t){return a("v-radio",{key:t,attrs:{label:""+t,value:t}})}))],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"Bib Number"},model:{value:t.participant.bib_number,callback:function(e){t.$set(t.participant,"bib_number",e)},expression:"participant.bib_number"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Last Name",rules:t.requiredRules,required:""},model:{value:t.participant.last_name,callback:function(e){t.$set(t.participant,"last_name",e)},expression:"participant.last_name"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"First Name",rules:t.requiredRules,required:""},model:{value:t.participant.first_name,callback:function(e){t.$set(t.participant,"first_name",e)},expression:"participant.first_name"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"E-mail",rules:t.emailRules,required:""},model:{value:t.participant.email,callback:function(e){t.$set(t.participant,"email",e)},expression:"participant.email"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Contact Number"},model:{value:t.participant.contact_number,callback:function(e){t.$set(t.participant,"contact_number",e)},expression:"participant.contact_number"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm3:"",md3:""}},[a("v-radio-group",{attrs:{rules:t.requiredRules,row:""},model:{value:t.participant.gender,callback:function(e){t.$set(t.participant,"gender",e)},expression:"participant.gender"}},t._l(t.lists.gender,function(t){return a("v-radio",{key:t,attrs:{label:""+t,value:t}})}))],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm3:"",md3:""}},[a("v-select",{attrs:{items:t.lists.shirt_size,label:"Shirt Size"},model:{value:t.participant.shirt_size,callback:function(e){t.$set(t.participant,"shirt_size",e)},expression:"participant.shirt_size"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Nationality"},model:{value:t.participant.nationality,callback:function(e){t.$set(t.participant,"nationality",e)},expression:"participant.nationality"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Emergency Contact Person"},model:{value:t.participant.emergency_contact_person,callback:function(e){t.$set(t.participant,"emergency_contact_person",e)},expression:"participant.emergency_contact_person"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Emergency Contan Number"},model:{value:t.participant.emergency_contact_number,callback:function(e){t.$set(t.participant,"emergency_contact_number",e)},expression:"participant.emergency_contact_number"}})],1)],1),t._v(" "),a("v-btn",{attrs:{disabled:!t.valid,color:"primary"},on:{click:function(e){t.submit(t.participant,t.snackbar)}}},[t._v(" submit ")]),t._v(" "),a("v-btn",{on:{click:t.clear}},[t._v("clear")])],1)],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{top:"",right:"",color:"green"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" \n    New Participant Successfully Added!\n    "),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},staticRenderFns:[]},d=a("VU/8")(p,u,!1,null,null,null).exports,m={data:function(){return{valid:!0,snackbar:!1,participant:[],lists:{shirt_size:["small","medium","large","extra_large"],race_category:["11KM","21KM","50KM"],gender:["male","female"]},requiredRules:[function(t){return!!t||"Field is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}]}},firestore:function(){return{participant:h.collection("participants").doc(this.$route.params.id)}},methods:{update:function(t,e){this.$refs.form.validate()&&(t.updated_at=new Date,h.collection("participants").doc(this.$route.params.id).update(t),this.snackbar=!0,this.$router.push("/"))},cancel:function(){this.$router.push("/")}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("router-link",{attrs:{to:"/"}},[a("v-btn",{attrs:{fab:"",dark:"",small:"",absolute:"",right:"",color:"primary"}},[a("v-icon",{attrs:{dark:""}},[t._v("arrow_back")])],1)],1),t._v(" "),a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md12:""}},[a("v-radio-group",{attrs:{row:""},model:{value:t.participant.race_category,callback:function(e){t.$set(t.participant,"race_category",e)},expression:"participant.race_category"}},t._l(t.lists.race_category,function(t){return a("v-radio",{key:t,attrs:{label:""+t,value:t}})}))],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"Bib Number"},model:{value:t.participant.bib_number,callback:function(e){t.$set(t.participant,"bib_number",e)},expression:"participant.bib_number"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Last Name",rules:t.requiredRules,required:""},model:{value:t.participant.last_name,callback:function(e){t.$set(t.participant,"last_name",e)},expression:"participant.last_name"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"First Name",rules:t.requiredRules,required:""},model:{value:t.participant.first_name,callback:function(e){t.$set(t.participant,"first_name",e)},expression:"participant.first_name"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"E-mail",rules:t.emailRules,required:""},model:{value:t.participant.email,callback:function(e){t.$set(t.participant,"email",e)},expression:"participant.email"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Contact Number"},model:{value:t.participant.contact_number,callback:function(e){t.$set(t.participant,"contact_number",e)},expression:"participant.contact_number"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm3:"",md3:""}},[a("v-radio-group",{attrs:{row:""},model:{value:t.participant.gender,callback:function(e){t.$set(t.participant,"gender",e)},expression:"participant.gender"}},t._l(t.lists.gender,function(t){return a("v-radio",{key:t,attrs:{label:""+t,value:t}})}))],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm3:"",md3:""}},[a("v-select",{attrs:{items:t.lists.shirt_size,label:"Shirt Size"},model:{value:t.participant.shirt_size,callback:function(e){t.$set(t.participant,"shirt_size",e)},expression:"participant.shirt_size"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Nationality"},model:{value:t.participant.nationality,callback:function(e){t.$set(t.participant,"nationality",e)},expression:"participant.nationality"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Emergency Contact Person"},model:{value:t.participant.emergency_contact_person,callback:function(e){t.$set(t.participant,"emergency_contact_person",e)},expression:"participant.emergency_contact_person"}})],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Emergency Contan Number"},model:{value:t.participant.emergency_contact_number,callback:function(e){t.$set(t.participant,"emergency_contact_number",e)},expression:"participant.emergency_contact_number"}})],1)],1),t._v(" "),a("v-btn",{attrs:{disabled:!t.valid,color:"primary"},on:{click:function(e){t.update(t.participant,t.snackbar)}}},[t._v(" Update ")]),t._v(" "),a("v-btn",{on:{click:t.cancel}},[t._v("cancel")])],1)],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{top:"",right:"",color:"green"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" \n    New Participant Successfully Updated!\n    "),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},staticRenderFns:[]},f=a("VU/8")(m,v,!1,null,null,null).exports;r.a.use(s.a);var _=new s.a({routes:[{path:"/",name:"Dashboard",component:o},{path:"/add-new-runner",name:"AddRunner",component:d},{path:"/:id",name:"ViewRunner",component:f}],mode:"history"}),b=a("3EgV"),x=a.n(b),k=(a("7zck"),a("hnaQ")),g=a("yviF"),y=a.n(g);a("881v");a.d(e,"db",function(){return h}),r.a.use(x.a),r.a.use(k.a),y.a.initializeApp({apiKey:"AIzaSyDna9jNhldWLaipvOwPSfTZoeLMkl5TeIY",authDomain:"tibt-2154d.firebaseapp.com",databaseURL:"https://tibt-2154d.firebaseio.com",projectId:"tibt-2154d",storageBucket:"tibt-2154d.appspot.com",messagingSenderId:"749115480902"});var h=y.a.firestore();h.settings({timestampsInSnapshots:!0}),r.a.config.productionTip=!1,new r.a({el:"#app",router:_,components:{App:n},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.0ae94a641585fa1a2a70.js.map