(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{8392:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/users",function(){return a(9416)}])},4011:function(e,s,a){"use strict";var t=a(6154);let i=t.Z.create({baseURL:"http://localhost/proyects/api-king-hotel/public/api/"});s.Z=i},5740:function(e,s,a){"use strict";function t(){$(document).on("click","#mainSidebarToggle",function(e){e.preventDefault(),$("body.horizontalmenu").toggleClass("main-navbar-show")}),$(".main-menu .with-sub").on("click",function(e){var s=$(this),a=s.next(),t=".nav-sub";if(a.is(t)&&a.is(":visible"))a.slideUp(300,function(){a.removeClass("open")}),a.parent("li").removeClass("show");else if(a.is(t)&&!a.is(":visible")){var i=s.parents("ul").first();i.find("ul:visible").slideUp(300).removeClass("open");var n=s.parent("li");a.slideDown(300,function(){a.addClass("open"),i.find("li.show").removeClass("show"),n.addClass("show")})}a.is(t)&&e.preventDefault()}),$(".main-menu .sub-with-sub").on("click",function(e){var s=$(this),a=s.next(),t=".sub-nav-sub";if(a.is(t)&&a.is(":visible"))a.slideUp(300,function(){a.removeClass("open")}),a.parent("li").removeClass("show");else if(a.is(t)&&!a.is(":visible")){var i=s.parents("ul").first();i.find("ul:visible").slideUp(300).removeClass("open");var n=s.parent("li");a.slideDown(300,function(){a.addClass("open"),i.find("li.show").removeClass("show"),n.addClass("show")})}a.is(t)&&e.preventDefault()});let e=!1;$(".main-profile-menu").on("click",function(s){!0==e?($("#user_menu").removeClass("show"),e=!1):($("#user_menu").addClass("show"),e=!0)})}a.d(s,{O:function(){return t}})},9416:function(e,s,a){"use strict";a.r(s);var t=a(5893),i=a(7294),n=a(4011),l=a(9109),r=a(5740);function o(e){return(0,i.useEffect)(()=>{let s=e.data,a=$("#tb_demo").DataTable({data:s,responsive:!0,language:{searchPlaceholder:"Buscar...",sSearch:"",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",last:"\xdaltimo",next:"Siguiente",previous:"Anterior"},infoFiltered:"(filtrado de un total de _MAX_ registros)",emptyTable:"Ning\xfan dato disponible en esta tabla",info:"Mostrando _START_ a _END_ de _TOTAL_ registros"},columns:[{data:"name"},{data:"email"},{data:"id",render:function(e,s){return'<div class="button-list"><a href="#" class="btn"><i class="ti ti-pencil td_edit"  model_id="'.concat(e,'"></i></a> <a href="#" class="btn"><i class="ti ti-trash td_delete" model_id="').concat(e,'"></i></a> </div> ')}}],initComplete:function(){var s=this.api();s.$(".td_delete").click(function(){var s;s=this.getAttribute("model_id"),e.itemDelete(s)}),s.$(".td_edit").click(function(){var s;s=this.getAttribute("model_id"),e.itemEdit(s)})}});return()=>{a.destroy()}},[e]),(0,t.jsx)("table",{id:"tb_demo",className:"table table-bordered border-bottom  no-footer",children:(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Nombre"}),(0,t.jsx)("th",{children:"Email"}),(0,t.jsx)("th",{children:"Accion"})]})})})}s.default=function(){let[e,s]=(0,i.useState)(null),[c,d]=(0,i.useState)(!0),[m,u]=(0,i.useState)(!0),[h,f]=(0,i.useState)(""),[b,p]=(0,i.useState)(""),[v,x]=(0,i.useState)(""),[j,g]=(0,i.useState)(0),[N,w]=(0,i.useState)([]);async function y(){try{await n.Z.post("users",{name:h,password:v,email:b}),notif({type:"success",msg:"Guardado correctamente!",position:"center"});let e=await n.Z.get("users"),s=await e.data;w(s),f("")}catch(e){notif({type:"error",msg:'<i class="far fa-sad-tear"></i> Algo sal\xedo mal',position:"center"})}}async function _(e){try{var s=async function(s){if(s){await n.Z.delete("users/"+e),notif({type:"success",msg:"Eliminado correctamente!",position:"center"});let s=await n.Z.get("users"),a=await s.data;w(a)}else notif({type:"error",msg:'<i class="far fa-sad-tear"></i>',position:"center"})};notif_confirm({textaccept:"Eliminar",textcancel:"Cerrar",message:"Deseas eliminar?",callback:s}),f("")}catch(e){notif({type:"error",msg:'<i class="far fa-sad-tear"></i> Algo sal\xedo mal',position:"center"})}}async function C(){try{await n.Z.put("users/"+j,{name:h,password:v,email:b}),notif({type:"success",msg:"Actualizado correctamente!",position:"center"});let e=await n.Z.get("users"),s=await e.data;w(s),f("")}catch(e){notif({type:"error",msg:'<i class="far fa-sad-tear"></i> Algo sal\xedo mal',position:"center"})}}async function A(e){d(!1);let s=[...N].find(s=>s.id==e);f(s.name),x(s.password),p(s.email),g(s.id);let{Modal:t}=a(8877),i=new t("#modalModel",{backdrop:"static",keyboard:!1});i.show(),d(!1)}async function k(e){p(e.target.value)}async function E(e){x(e.target.value)}async function U(e){f(e.target.value)}return(0,i.useEffect)(()=>{(0,r.O)(),u(!0);let e=async()=>{try{let e=await n.Z.get("users"),s=await e.data;w(s)}catch(e){}finally{u(!1)}};e()},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.Z,{modulo:"Setting",page:"Users",children:[m?(0,t.jsxs)("div",{id:"global-loader",children:[" ",(0,t.jsx)("img",{src:"/assets/loader.svg",className:"loader-img",alt:"Loader"})," "]}):"",(0,t.jsxs)("div",{className:"page-header",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"main-content-title tx-24 mg-b-5",children:"Usuarios"}),(0,t.jsxs)("ol",{className:"breadcrumb",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)("a",{href:"#",children:"Configuraci\xf3n"})}),(0,t.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Usuarios"})]})]}),(0,t.jsx)("div",{className:"d-flex",children:(0,t.jsx)("div",{className:"justify-content-center",children:(0,t.jsxs)("button",{type:"button",onClick:function(){let{Modal:e}=a(8877),s=new e("#modalModel",{backdrop:"static",keyboard:!1});s.show(),d(!0)},className:"btn btn-primary my-2 btn-icon-text",children:[(0,t.jsx)("i",{className:"fe fe-plus-circle"})," NUEVO"]})})})]}),(0,t.jsx)("div",{className:"modal ",id:"modalModel",role:"dialog",children:(0,t.jsx)("div",{className:"modal-dialog modal-sm",role:"document",children:(0,t.jsxs)("div",{className:"modal-content",children:[(0,t.jsxs)("div",{className:"modal-header",children:[(0,t.jsx)("h6",{className:"modal-title",children:c?"NUEVO":"ACTUALIZAR"}),(0,t.jsx)("button",{"aria-label":"Close",className:"btn-close","data-bs-dismiss":"modal",type:"button"})]}),(0,t.jsx)("div",{className:"modal-body",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsx)("label",{htmlFor:"",children:"Nombre"}),(0,t.jsx)("input",{className:" form-control",value:h,onChange:U})]}),(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsx)("label",{htmlFor:"",children:"Email"}),(0,t.jsx)("input",{className:" form-control",value:b,onChange:k})]}),(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsx)("label",{htmlFor:"",children:"Password"}),(0,t.jsx)("input",{type:"password",className:" form-control",value:v,onChange:E})]})]})}),(0,t.jsxs)("div",{className:"modal-footer justify-content-end",children:[!0==c?(0,t.jsx)("button",{className:"btn ripple btn-primary",type:"button",onClick:y,"data-bs-dismiss":"modal",children:"GUARDAR"}):(0,t.jsx)("button",{className:"btn ripple btn-primary",type:"button",onClick:C,"data-bs-dismiss":"modal",children:"ACTUALIZAR"}),(0,t.jsx)("button",{className:"btn ripple btn-secondary","data-bs-dismiss":"modal",type:"button",children:"CERRAR"})]})]})})}),(0,t.jsx)("div",{className:"row row-sm",children:(0,t.jsx)("div",{className:"col-md-12 col-lg-12",children:(0,t.jsxs)("div",{className:"card custom-card",children:[(0,t.jsx)("div",{className:"card-header  border-bottom-0 pb-0",children:(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"d-flex",children:(0,t.jsx)("label",{className:"main-content-label my-auto pt-2",children:"Lista de usuarios"})})})}),(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)(o,{data:N,itemDelete:_,itemEdit:A})})]})})})]})})}}},function(e){e.O(0,[827,245,877,109,774,888,179],function(){return e(e.s=8392)}),_N_E=e.O()}]);