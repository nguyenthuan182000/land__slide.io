(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{659:function(t,e,o){"use strict";var n=o(9),r=(o(48),o(65),o(105)),l={computed:{shortcuts:function(){var t=this;return r.b.map((function(e){return{text:t.$t(e.text),onClick:e.onClick}}))}},methods:{onAction:function(t,data,e){var o=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var r,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t&&data&&e){n.next=2;break}return n.abrupt("return");case 2:return o.loading=!0,n.prev=3,n.next=6,o.$cheetahAxios[t](data);case 6:o.$toast.success(o.$t("messages.information.action",{name:e})),o.$emit("modify"),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(3),console.error(n.t0),(c=(null===n.t0||void 0===n.t0||null===(r=n.t0.response)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.messages)||"")?o.$toast.error(c):o.$toast.error(o.$t("messages.error.failed_to_action",{name:e}));case 15:return n.prev=15,o.loading=!1,n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[3,10,15,18]])})))()}}};e.a=l},672:function(t,e,o){var content=o(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("dcf14f84",content,!0,{sourceMap:!1})},684:function(t,e,o){"use strict";o(672)},685:function(t,e,o){var n=o(42)(!1);n.push([t.i,".card[data-v-3d54c77a]{margin-top:28px;margin-left:28px;margin-right:28px}.input-group[data-v-3d54c77a]{width:50%}",""]),t.exports=n},691:function(t,e,o){"use strict";o.r(e);var n=o(9),r=(o(48),o(68)),l=o(69),c=o(66),d=function(){function t(e){Object(r.a)(this,t),this.userId=Object(c.get)(e,"userId",0),this.age=Object(c.get)(e,"age",null),this.gender=Object(c.get)(e,"gender",null),this.occupation=Object(c.get)(e,"occupation",null),this.updateAction="updateProfile"}return Object(l.a)(t,[{key:"getFormData",value:function(){return{age:this.age,gender:this.gender,occupation:this.occupation}}}]),t}(),f=o(659),m=o(193),v=o(194),h={mixins:[f.a,m.a,v.a],data:function(){return{model:new d,modelType:this.$t("user.user")}},methods:{onUpdateProfile:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUserLogin().userId;case 2:return t.model.userId=e.sent,e.next=5,t.$cheetahAxios.updateProfile(t.model).then((function(e){t.$toast.success(t.$t("messages.information.updated")),t.$router.push("/land-slide")})).catch((function(e){console.log(e),t.$toast.error(t.$t("messages.error.failed_change_profile"))}));case 5:case"end":return e.stop()}}),e)})))()}}},x=(o(684),o(10)),w={components:{ChangeProfile:Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(o){var n=o.handleSubmit;return[e("b-form",{staticClass:"d-flex flex-column h-100",on:{submit:function(e){return e.preventDefault(),n(t.onUpdateProfile)}}},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"text-primary font-size-1-1rem font-weight-bold"},[e("svg",{staticClass:"svg-inline--fa fa-pencil-alt fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pencil-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"}})]),t._v("\n          Change profile\n        ")])]),t._v(" "),e("div",{staticClass:"card-body flex-fill p-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-12"},[e("b-form-group",{staticClass:"has-required-sign label-md-right",attrs:{label:t.$t("profile.age"),"label-for":"value","label-cols-md":"4","content-cols-md":"8","content-cols-lg":"7"}},[e("b-input-group",[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("font-awesome-icon",{staticClass:"w-1rem",attrs:{icon:"lock"}})],1),t._v(" "),e("b-form-input",{attrs:{id:"value",placeholder:t.$t("profile.age"),type:"text"},model:{value:t.model.age,callback:function(e){t.$set(t.model,"age",e)},expression:"model.age"}})],1)],1)],1),t._v(" "),e("div",{staticClass:"col-12 col-lg-12"},[e("b-form-group",{staticClass:"has-required-sign label-md-right",attrs:{label:t.$t("profile.gender"),"label-for":"value","label-cols-md":"4","content-cols-md":"8","content-cols-lg":"7"}},[e("b-input-group",[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("font-awesome-icon",{staticClass:"w-1rem",attrs:{icon:"lock"}})],1),t._v(" "),e("b-form-input",{attrs:{id:"value",placeholder:t.$t("profile.gender"),type:"text"},model:{value:t.model.gender,callback:function(e){t.$set(t.model,"gender",e)},expression:"model.gender"}})],1)],1)],1),t._v(" "),e("div",{staticClass:"col-12 col-lg-12"},[e("b-form-group",{staticClass:"has-required-sign label-md-right",attrs:{label:t.$t("profile.occupation"),"label-for":"value","label-cols-md":"4","content-cols-md":"8","content-cols-lg":"7"}},[e("b-input-group",[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("font-awesome-icon",{staticClass:"w-1rem",attrs:{icon:"lock"}})],1),t._v(" "),e("b-form-input",{attrs:{id:"value",placeholder:t.$t("profile.occupation"),type:"text"},model:{value:t.model.occupation,callback:function(e){t.$set(t.model,"occupation",e)},expression:"model.occupation"}})],1)],1)],1)])]),t._v(" "),e("footer",{staticClass:"card-footer bg-white text-center"},[e("b-button",{staticClass:"min-w-100px mx-1",attrs:{type:"submit",variant:"primary",title:"Add"}},[e("font-awesome-icon",{attrs:{icon:"save"}}),t._v("\n          "+t._s(t.$t("common.save"))+"\n        ")],1),t._v(" "),e("b-button",{staticClass:"min-w-100px mx-1",attrs:{variant:"outline-primary",title:"Cancel"},on:{click:function(e){return t.$emit("cancel")}}},[e("font-awesome-icon",{attrs:{icon:"arrow-left"}}),t._v("\n          "+t._s(t.$t("common.cancel"))+"\n        ")],1)],1)])]}}])})],1)}),[],!1,null,"3d54c77a",null).exports},methods:{goToList:function(){this.$router.push("/land-slide")}}},$=Object(x.a)(w,(function(){return(0,this._self._c)("change-profile",{on:{cancel:this.goToList}})}),[],!1,null,null,null);e.default=$.exports}}]);