webpackJsonp([1],{"68BJ":function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"container",attrs:{id:"app"}},[o("h1",{staticClass:"text-center"},[o("img",{staticStyle:{"vertical-align":"middle","padding-right":".5rem"},attrs:{src:"static/logo.png",height:"50px",width:"50px"}}),t._v(t._s(t.msg))]),t._v(" "),o("p",[o("router-link",{staticClass:"button",attrs:{to:"/"}},[t._v("All To-Dos")]),t._v(" \n    "),o("router-link",{staticClass:"button right",attrs:{to:"/new"}},[t._v("New")])],1),t._v(" "),o("router-view")],1)},staticRenderFns:[]},i=o("VU/8")({name:"app",data:function(){return{msg:"Welcome to Your Vue.js App"}}},s,!1,function(t){o("c6yu")},null,null).exports,a=o("/ocq"),r={name:"todo",data:function(){return{completeMsg:"Mark Complete",isComplete:!1}},props:{todo:Object},methods:{toggle:function(){this.isComplete=!this.isComplete,this.isComplete?this.completeMsg="Undo":this.completeMsg="Mark Complete"}}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item",class:{"item-complete":t.isComplete}},[o("span",{staticClass:"text-larger"},[t._v(t._s(t.todo.title))]),t._v(" "),o("a",{staticClass:"button text-smaller right",attrs:{href:"#/edit/"+t.todo._id}},[t._v("Edit")]),t._v(" "),o("a",{staticClass:"button text-smaller right",on:{click:t.toggle}},[t._v(t._s(t.completeMsg))]),t._v(" "),o("br"),o("span",{staticClass:"text-smaller"},[t._v("    "+t._s(t.todo.description))])])},staticRenderFns:[]},l=o("VU/8")(r,c,!1,function(t){o("ZcMo")},null,null).exports,d=o("8UgH"),u=new d.a("todoDB"),p={};d.a.debug.disable(),p.allDocs=function(){return u.allDocs({include_docs:!0})},p.create=function(t){return u.post(t)},p.read=function(t){return u.get(t)},p.update=function(t){return u.put(t)},p.delete=function(t){return u.remove(t)},p.reloadDocs=function(t,e){p.allDocs().then(function(o){t[e]=[];for(var n=0;n<o.total_rows;n++)t[e].push(o.rows[n].doc)})};var v=p,m={components:{Todo:l},data:function(){return{todos:[]}},created:function(){v.reloadDocs(this,"todos")}},_={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-medium"},[t.todos.length>0?o("div",{staticClass:"item-list text-left"},[t._l(t.todos,function(t){return o("todo",{attrs:{todo:t}})}),t._v(" "),o("p",{staticClass:"text-right"},[t._v(t._s(t.todos.length)+" item(s) to do")])],2):t._e(),t._v(" "),t.todos.length<1?o("div",{staticClass:"text-center"},[t._m(0),t._v(" "),o("p",[t._v("Create a new item using the 'New' button")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("Congrats!")]),this._v(" No todos found.")])}]},h=o("VU/8")(m,_,!1,function(t){o("68BJ")},null,null).exports,f={data:function(){return{title:"",description:"",status:""}},methods:{create:function(){var t=this;this.status="Saving...";var e={type:"todo",title:this.title,description:this.description,created:(new Date).toJSON()};v.create(e).then(function(){t.status="Successfully Created."}).catch(function(e){console.log(e),t.status=e})}}},g={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"text-left"},[o("h2",[t._v("New Item")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"full-width text-larger",attrs:{type:"text",placeholder:"Enter title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("br"),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"full-width",attrs:{placeholder:"content"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"text-right"},[o("code",[t._v(t._s(t.status))]),t._v(" \n    "),o("button",{staticClass:"button",on:{click:t.create}},[t._v("Create")]),t._v(" \n    "),o("router-link",{attrs:{to:"/"}},[t._v("Cancel")])],1)])},staticRenderFns:[]},C=o("VU/8")(f,g,!1,function(t){o("oCFR")},null,null).exports,x={data:function(){return{todo:"",status:""}},created:function(){this.read()},watch:{$route:"read"},methods:{read:function(){var t=this;v.read(this.$route.params.id).then(function(e){t.todo=e})},update:function(){var t=this;this.status="Saving...";var e={_id:this.todo._id,_rev:this.todo._rev,type:"todo",title:this.todo.title,description:this.todo.description,created:this.todo.created,modified:(new Date).toJSON()};v.update(e).then(function(){v.read(e._id).then(function(e){t.todo=e}),t.status="Successfully Saved."}).catch(function(e){console.log(e),t.status=e})},remove:function(){var t=this;this.status="";confirm("Ok to delete this item?")&&(this.status="Deleting...",v.delete(this.todo).then(function(){t.todo="",t.status="Deleted."}).catch(function(e){console.log(e),t.status=e}))}}},w={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"text-left"},[o("h2",[t._v("Edit Item")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],staticClass:"full-width text-larger",attrs:{type:"text",placeholder:"Enter a Title"},domProps:{value:t.todo.title},on:{input:function(e){e.target.composing||t.$set(t.todo,"title",e.target.value)}}}),o("br"),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todo.description,expression:"todo.description"}],staticClass:"full-width",attrs:{placeholder:"Enter a Description"},domProps:{value:t.todo.description},on:{input:function(e){e.target.composing||t.$set(t.todo,"description",e.target.value)}}}),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"text-right"},[o("code",[t._v(t._s(t.status))]),t._v(" \n    "),o("button",{staticClass:"button",on:{click:t.update}},[t._v("Update")]),t._v(" \n    "),o("button",{staticClass:"button",on:{click:t.remove}},[t._v("Delete")]),t._v(" \n    "),o("router-link",{attrs:{to:"/"}},[t._v("Cancel")])],1),t._v("\n  Created: "),o("code",[t._v(t._s(t.todo.created))]),o("br"),t._v("\n  Modified: "),o("code",[t._v(t._s(t.todo.modified))])])},staticRenderFns:[]},b=o("VU/8")(x,w,!1,function(t){o("heAk")},null,null).exports;n.a.use(a.a);var k=new a.a({routes:[{path:"/",name:"home",component:h},{path:"/new",name:"new",component:C},{path:"/edit/:id",name:"edit",component:b}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:k,template:"<App/>",components:{App:i}})},ZcMo:function(t,e){},c6yu:function(t,e){},heAk:function(t,e){},oCFR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b02f2d3fc32062efdeba.js.map