(window["webpackJsonpconference-table-widget"]=window["webpackJsonpconference-table-widget"]||[]).push([[0],{108:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","notAuthenticated":"User is not authenticated.","loadingMore":"Loading more...","download":"Download file","dataDeleted":"Conference successfully deleted","yes":"Yes","no":"No","delete":""},"pagination":{"ariaLabels":{"firstPage":"first page","previousPage":"previous page","nextPage":"next page","lastPage":"last page"}},"filters":{"field":"Field","value":"Value","addFilter":"Add filter","clearFilters":"Clear filters","filter":"Filter","operator":"Operator","operators":{"equals":"equals","in":"in","specified":"specified","unspecified":"unspecified","contains":"contains"}},"entities":{"conference":{"deleteDialog":{"title":"Delete conference","description":"Are you sure?"},"noItems":"No conferences available","id":"ID","conferenceName":"entities.conference.conferenceName","location":"entities.conference.location"}}}')},109:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"couldNotFetchData":"Non \xe8 stato possibile caricare i dati dell\'entit\xe0","notAuthenticated":"L\'utente non \xe8 autenticato.","loadingMore":"Caricamento in corso...","download":"Scarica file","dataDeleted":"Conference eliminato/a con successo","yes":"Si","no":"No","delete":""},"pagination":{"ariaLabels":{"firstPage":"prima pagina","previousPage":"pagina precedente","nextPage":"pagina successiva","lastPage":"ultima pagina"}},"filters":{"field":"Campo","value":"Valore","addFilter":"Aggiungi filtro","clearFilters":"Rimuovi filtri","filter":"Filtro","operator":"Operatore","operators":{"equals":"\xe8 uguale a","in":"in","specified":"specificato","unspecified":"non specificato","contains":"contiene"}},"entities":{"conference":{"deleteDialog":{"title":"Elimina conference","description":"Sei sicuro/a?"},"noItems":"Nessun conferences disponibile","id":"ID","conferenceName":"entit\xe0.conference.conferenceName","location":"entit\xe0.conference.location"}}}')},126:function(e,t,a){e.exports=a(145)},145:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(24),i=a(25),o=a(27),c=a(111),l=a(6),s=a(0),u=a.n(s),d=a(11),f=a.n(d),p=a(90),m=a.n(p),h=a(208),b=a(110),g=a(213),v=a(207),O=a(15),E=u.a.createContext(null),j=a(14),y=[5,10,25],k={currentPage:0,itemsPerPage:y[y.length-1]},C=u.a.createContext({pagination:k}),w=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;Object(n.a)(this,a),r=t.call(this,e);var i="pagination"===e.paginationMode?y[0]:y[y.length-1];return r.state={pagination:Object(l.a)(Object(l.a)({},k),{},{itemsPerPage:i})},r.onChangeItemsPerPage=r.onChangeItemsPerPage.bind(Object(j.a)(r)),r.onChangeCurrentPage=r.onChangeCurrentPage.bind(Object(j.a)(r)),r}return Object(r.a)(a,[{key:"onChangeItemsPerPage",value:function(e){var t=e.target.value,a=parseInt(t,10);this.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{pagination:Object(l.a)(Object(l.a)({},e.pagination),{},{itemsPerPage:a,currentPage:0})})}))}},{key:"onChangeCurrentPage",value:function(e){var t=parseInt(e,10);this.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{pagination:Object(l.a)(Object(l.a)({},e.pagination),{},{currentPage:t})})}))}},{key:"render",value:function(){var e=this.state.pagination,t=this.props.children;return u.a.createElement(C.Provider,{value:Object(l.a)(Object(l.a)({},e),{},{onChangeCurrentPage:this.onChangeCurrentPage,onChangeItemsPerPage:this.onChangeItemsPerPage})},t)}}]),a}(u.a.Component);w.defaultProps={paginationMode:""};var P=a(22),D=a.n(P),F=a(19),N=a(40),x=a(20),R=a(206),S=a(194),I=a(73),M=a.n(I),A=a(4),L=a(107),T=a.n(L),U=a(5),z=a.n(U),W=(z.a.shape({initialized:z.a.bool,authenticated:z.a.bool}),a(74));z.a.oneOfType([z.a.func,z.a.shape({current:z.a.elementType}),z.a.shape(null)]);var H=function(e){var t=e.children,a=e.keycloak;return a.initialized&&a.authenticated?t:null},q=function(e){var t=e.children,a=e.keycloak;return a.initialized&&a.authenticated?null:t},K=a(193),X=a(212),J=a(192),V=a(190),G=a(191),Y=a(189),B=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={open:!1},r.handleOpen=r.handleOpen.bind(Object(j.a)(r)),r.discard=r.discard.bind(Object(j.a)(r)),r.confirm=r.confirm.bind(Object(j.a)(r)),r}return Object(r.a)(a,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(a.DISCARD)}},{key:"confirm",value:function(){this.handleClose(a.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,a=t.dialog,n=a.title,r=a.description,i=a.confirmLabel,o=a.discardLabel,c=t.Renderer;return u.a.createElement("div",null,u.a.createElement(c,{onClick:this.handleOpen}),u.a.createElement(X.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},u.a.createElement(Y.a,{id:"confirmation-dialog-title"},n),u.a.createElement(V.a,null,u.a.createElement(G.a,{id:"confirmation-dialog-description"},r)),u.a.createElement(J.a,null,u.a.createElement(K.a,{onClick:this.discard,autoFocus:!0},o),u.a.createElement(K.a,{onClick:this.confirm,color:"primary"},i))))}}]),a}(s.PureComponent);B.CONFIRM="CONFIRM",B.DISCARD="DISCARD";var Q=a(98),Z=a(210);function $(e){var t=function(t){Object(i.a)(c,t);var a=Object(o.a)(c);function c(){var t;Object(n.a)(this,c);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=a.call.apply(a,[this].concat(i))).renderWrappedComponent=function(a){var n=t.props,r=n.forwardedRef,i=Object(W.a)(n,["forwardedRef"]);return u.a.createElement(e,Object.assign({},i,{ref:r,pagination:a}))},t}return Object(r.a)(c,[{key:"render",value:function(){return u.a.createElement(C.Consumer,null,this.renderWrappedComponent)}}]),c}(s.Component);return t.defaultProps={forwardedRef:null},Object(s.forwardRef)((function(e,a){return u.a.createElement(t,Object.assign({},e,{forwardedRef:a}))}))}var _=a(99),ee=a.n(_),te=a(100),ae=a.n(te),ne=a(101),re=a.n(ne),ie=a(102),oe=a.n(ie),ce=Object(x.b)()(Object(A.a)({root:{flexShrink:0,marginLeft:"5px"}})((function(e){var t=e.classes,a=e.count,n=e.page,r=e.rowsPerPage,i=e.onChangePage,o=e.t;return u.a.createElement("div",{className:t.root},u.a.createElement(S.a,{onClick:function(){i(0)},disabled:0===n,"aria-label":o("pagination.ariaLabels.firstPage")},u.a.createElement(ee.a,null)),u.a.createElement(S.a,{onClick:function(){i(n-1)},disabled:0===n,"aria-label":o("pagination.ariaLabels.previousPage")},u.a.createElement(ae.a,null)),u.a.createElement(S.a,{onClick:function(){i(n+1)},disabled:n>=Math.ceil(a/r)-1,"aria-label":o("pagination.ariaLabels.nextPage")},u.a.createElement(re.a,null)),u.a.createElement(S.a,{onClick:function(){i(Math.max(0,Math.ceil(a/r)-1))},disabled:n>=Math.ceil(a/r)-1,"aria-label":o("pagination.ariaLabels.lastPage")},u.a.createElement(oe.a,null)))}))),le=(z.a.shape({id:z.a.number,conferenceName:z.a.string,location:z.a.string}),Object(x.b)()($((function(e){var t=e.children,a=e.pagination,n=e.paginationMode,r=e.items,i=e.count,o=e.t;return"infinite-scroll"===n?u.a.createElement(Q.a,{dataLength:r.length,next:function(){return a.onChangeCurrentPage(a.currentPage+1)},hasMore:r.length<i,loader:u.a.createElement("div",null,o("common.loadingMore"))},t):"pagination"===n?u.a.createElement(u.a.Fragment,null,t,i>0&&u.a.createElement(Z.a,{component:"div",rowsPerPageOptions:y,count:i,rowsPerPage:a.itemsPerPage,page:a.currentPage,SelectProps:{native:!0},onChangePage:a.onChangeCurrentPage,onChangeRowsPerPage:a.onChangeItemsPerPage,ActionsComponent:ce})):t})))),se=a(146),ue=a(44),de=a(209),fe=a(199),pe=a(216),me=a(200),he=a(215),be=(z.a.shape({field:z.a.string,operator:z.a.string,value:z.a.string}),["specified","unspecified"]),ge=["equals","in"].concat(be),ve=["contains"],Oe=[{value:"greaterThan",title:">"},{value:"lessThan",title:"<"},{value:"greaterOrEqualThan",title:">="},{value:"lessOrEqualThan",title:"<="}],Ee=["conferenceName","location"],je=[],ye=[],ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length?e.filter((function(e){return e.field&&e.operator})).reduce((function(e,t){switch(t.operator){case"specified":return[].concat(Object(F.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=true")]);case"unspecified":return[].concat(Object(F.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=false")])}return[].concat(Object(F.a)(e),["".concat(encodeURIComponent("".concat(t.field,".").concat(t.operator)),"=").concat(encodeURIComponent(t.value))])}),[]).join("&"):""},Ce=Object(A.a)((function(){return{formControl:{minWidth:120,width:"90%"},icon:{color:"rgba(0, 0, 0, 0.54)"}}}),{withTheme:!0})(Object(x.b)()((function(e){var t,a=e.filter,n=e.t,r=e.update,i=e.remove,o=e.filterId,c=e.classes,l=(t=a.field,[].concat(Object(F.a)(ge),Object(F.a)(Ee.includes(t)?ve:[]),Object(F.a)(je.includes(t)?Oe:[]),Object(F.a)(ye.includes(t)?Oe:[]))),s=function(e){r(o,Object(ue.a)({},e.target.name,e.target.value))};return u.a.createElement(fe.a,{container:!0},u.a.createElement(fe.a,{item:!0,xs:5},u.a.createElement(me.a,{className:c.formControl},u.a.createElement(he.a,{id:"".concat(o,"-field-label")},n("filters.field")),u.a.createElement(de.a,{native:!0,labelId:"".concat(o,"-field-label"),id:"".concat(o,"-field"),name:"field",value:a.field,onChange:s},u.a.createElement("option",{value:""}),u.a.createElement("option",{value:"conferenceName"},n("entities.conference.conferenceName")),u.a.createElement("option",{value:"location"},n("entities.conference.location"))))),u.a.createElement(fe.a,{item:!0,xs:3},!!a.field&&u.a.createElement(me.a,{className:c.formControl},u.a.createElement(he.a,{id:"".concat(o,"-operator-label")},n("filters.operator")),u.a.createElement(de.a,{native:!0,labelId:"".concat(o,"-operator-label"),id:"".concat(o,"-operator"),name:"operator",value:a.operator,onChange:s},u.a.createElement("option",{value:""}),l.map((function(e){return"string"!==typeof e?u.a.createElement("option",{key:e.value,value:e.value},e.title):u.a.createElement("option",{key:e,value:e},n("filters.operators.".concat(e)))}))))),u.a.createElement(fe.a,{item:!0,xs:3},!!a.operator&&!be.includes(a.operator)&&u.a.createElement(me.a,{className:c.formControl},u.a.createElement(pe.a,{disabled:!a.field,id:"standard-required",name:"value",value:a.value,onChange:s,margin:"normal"}))),u.a.createElement(fe.a,{item:!0,xs:1},u.a.createElement(S.a,{"aria-label":"Remove filter",className:c.icon,onClick:function(){i(o)}},u.a.createElement(M.a,null))))}))),we=function(e){var t=e.classes,a=e.filters,n=e.applyFilter,r=e.update,i=e.remove,o=e.clear,c=e.add,l=e.t,s=e.error,d=a.length>0;return u.a.createElement(se.a,{className:t.root},u.a.createElement(K.a,{variant:"contained",className:t.button,onClick:c},l("filters.addFilter")),d&&u.a.createElement(K.a,{className:t.button,onClick:o},l("filters.clearFilters")),a.map((function(e,t){var a="".concat(e.field).concat(e.operator).concat(t);return u.a.createElement(Ce,{key:a,update:r,remove:i,filterId:t,filter:e})})),d&&u.a.createElement(K.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){var e=d&&a.map((function(e){return e.field&&e.operator&&!be.includes(e.operator)?e.value?"":"missing filter parameters":""})).filter((function(e){return!!e}));e&&e.length>0?s(e[0]):n()}},l("filters.filter")))};we.defaultProps={applyFilter:function(){},add:function(){},update:function(){},remove:function(){},clear:function(){},error:function(){}};var Pe=Object(A.a)({root:{flexGrow:1,padding:"5px",marginRight:"65px"},paper:{padding:"5px",textAlign:"center",height:"30px"},icon:{padding:"5px",color:"#555555","&:hover":{color:"#000000"}},button:{margin:"5px"}})(Object(x.b)()(we)),De=a(202),Fe=a(203),Ne=a(204),xe=a(195),Re=a(201),Se=function(e){var t=e.items,a=e.onSelect,n=e.classes,r=e.t,i=e.Actions,o=t.map((function(e){return u.a.createElement(Re.a,{hover:!0,className:n.rowRoot,key:e.id,onClick:function(){return a(e)}},u.a.createElement(xe.a,null,u.a.createElement("span",null,e.conferenceName)),u.a.createElement(xe.a,null,u.a.createElement("span",null,e.location)),i&&u.a.createElement(xe.a,null,u.a.createElement(i,{item:e})))}));return t.length?u.a.createElement(De.a,{className:n.tableRoot,stickyHeader:!0},u.a.createElement(Fe.a,null,u.a.createElement(Re.a,null,u.a.createElement(xe.a,null,u.a.createElement("span",null,r("entities.conference.conferenceName"))),u.a.createElement(xe.a,null,u.a.createElement("span",null,r("entities.conference.location"))),i&&u.a.createElement(xe.a,null))),u.a.createElement(Ne.a,null,o)):u.a.createElement("div",{className:n.noItems},r("entities.conference.noItems"))};Se.defaultProps={onSelect:function(){},Actions:null};var Ie=Object(A.a)({tableRoot:{marginTop:"10px"},rowRoot:{cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},noItems:{margin:"15px"}})(Object(x.b)()(Se)),Me=a(3),Ae=a(217),Le=a(205),Te=a(75),Ue=a(104),ze=a.n(Ue),We=a(105),He=a.n(We),qe=a(103),Ke=a.n(qe),Xe=a(106),Je=a.n(Xe),Ve={success:Ke.a,error:ze.a,info:He.a},Ge={success:3e3,error:null,info:5e3},Ye=function e(t){var a=t.className,n=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,l=r||e.INFO,s=Ve[l],d=Ge[l],f=u.a.createElement("span",{className:n.message},u.a.createElement(s,{className:Object(Me.a)(n.icon,n.iconStatus)}),i);return u.a.createElement(Ae.a,{open:c,onClose:o,autoHideDuration:d},u.a.createElement(Le.a,{className:Object(Me.a)(n[l],a),message:f,action:[u.a.createElement(S.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},u.a.createElement(Je.a,{className:n.icon}))]}))};Ye.SUCCESS="success",Ye.ERROR="error",Ye.INFO="info",Ye.defaultProps={message:null,status:null,className:"",onClose:function(){}};var Be=Object(A.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:Te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(Ye),Qe=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},Ze=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=!(!t&&!a),r="".concat(t).concat(t?"&":"").concat(a);return"".concat(e).concat(n?"?".concat(r):"")},$e=function(){var e=Object(N.a)(D.a.mark((function e(t,a){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,a);case 2:if(n=e.sent,r=Object(l.a)({},n.headers.has("X-Total-Count")?{"X-Total-Count":parseInt(n.headers.get("X-Total-Count"),10)}:{}),204!==n.status){e.next=6;break}return e.abrupt("return",{conferences:""});case 6:if(!(n.status>=200&&n.status<300)){e.next=14;break}return e.next=9,n.json();case 9:e.t1=e.sent,e.t2=r,e.t0={conferences:e.t1,headers:e.t2},e.next=15;break;case 14:e.t0=Promise.reject(new Error(n.statusText||n.status));case 15:return e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_e=function(){var e=Object(N.a)(D.a.mark((function e(t,a){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,"/").concat("conferences","/").concat(a),r=Object(l.a)(Object(l.a)({},Qe()),{},{method:"DELETE"}),e.abrupt("return",$e(n,r));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),et=function(){var e=Object(N.a)(D.a.mark((function e(t,a){var n,r,i,o,c,s,u,d;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.filters,r=void 0===n?[]:n,i=a.pagination,o=a.mode,c=ke(r),s=i?"page=".concat(i.page,"&size=").concat(i.rowsPerPage):"",u=Ze("".concat(t,"/").concat("conferences").concat("count"===o?"/count":""),c,s),d=Object(l.a)(Object(l.a)({},Qe()),{},{method:"GET"}),e.abrupt("return",$e(u,d));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),tt={formUpdate:"conference.form.update",formCreate:"conference.form.create",formDelete:"conference.form.delete"},at="conference.table.select",nt="conference.table.add",rt="conference.table.error",it="conference.table.delete",ot="conference-filter/addFilter",ct="conference-filter/updateFilter",lt="conference-filter/deleteFilter",st="conference-filter/clearFilters",ut="conference-table/readAll",dt="conference-table/error",ft="conference-table/clearErrors",pt="conference-table/clearItems",mt="conference-table/create",ht="conference-table/update",bt="conference-table/delete",gt={filters:[],items:[],count:0,notificationMessage:null,notificationStatus:null,loading:!1},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ot:return Object(l.a)(Object(l.a)({},e),{},{filters:[].concat(Object(F.a)(e.filters),[{field:"",operator:"",value:""}])});case ct:return Object(l.a)(Object(l.a)({},e),{},{filters:e.filters.map((function(e,a){return a===t.payload.filterId?Object(l.a)(Object(l.a)({},e),t.payload.values):e}))});case lt:return Object(l.a)(Object(l.a)({},e),{},{items:gt.items,count:gt.count,filters:e.filters.filter((function(e,a){return a!==t.payload.filterId}))});case st:return Object(l.a)(Object(l.a)({},e),{},{items:gt.items,count:gt.count,filters:gt.filters});case pt:return Object(l.a)(Object(l.a)({},e),{},{items:gt.items,count:gt.count});case ut:return Object(l.a)(Object(l.a)({},e),{},{items:t.payload.items,count:t.payload.count});case dt:return Object(l.a)(Object(l.a)({},e),{},{notificationMessage:t.payload.message,notificationStatus:t.payload.status});case ft:return Object(l.a)(Object(l.a)({},e),{},{notificationMessage:null});case mt:case tt.formCreate:return Object(l.a)(Object(l.a)({},e),{},{items:[].concat(Object(F.a)(e.items),[t.payload])});case ht:case tt.formUpdate:var a=e.items.findIndex((function(e){return e.id===t.payload.id})),n=Object(F.a)(e.items);return n[a]=t.payload,Object(l.a)(Object(l.a)({},e),{},{items:n});case bt:case tt.formDelete:return Object(l.a)(Object(l.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload.id}))});default:return e}},Ot=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state=gt,r.handleDelete=r.handleDelete.bind(Object(j.a)(r)),r.handleError=r.handleError.bind(Object(j.a)(r)),r.closeNotification=r.closeNotification.bind(Object(j.a)(r)),r.fetchData=r.fetchData.bind(Object(j.a)(r)),r.updateFilter=r.updateFilter.bind(Object(j.a)(r)),r.addFilter=r.addFilter.bind(Object(j.a)(r)),r.removeFilter=r.removeFilter.bind(Object(j.a)(r)),r.clearFilters=r.clearFilters.bind(Object(j.a)(r)),r.applyFilters=r.applyFilters.bind(Object(j.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.keycloak,n=t.paginationMode,r=t.pagination,i=a.initialized&&a.authenticated,o=e.keycloak.authenticated!==i,c=["pagination","infinite-scroll"].includes(n)&&(e.pagination.currentPage!==r.currentPage||e.pagination.itemsPerPage!==r.itemsPerPage);i&&(o||c)&&this.fetchData()}},{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.setState((function(t){return vt(t,e)}),t)}},{key:"fetchData",value:function(){var e=Object(N.a)(D.a.mark((function e(){var t,a,n,r,i,o,c,s,u,d,f,p,m;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.filters,n=t.items,r=this.props,i=r.keycloak,o=r.paginationMode,c=r.pagination,s=r.serviceUrl,!(i.initialized&&i.authenticated)){e.next=18;break}return e.prev=4,u=Object(l.a)({filters:a},""===o?{}:{pagination:{page:c.currentPage,rowsPerPage:c.itemsPerPage}}),e.next=8,et(s,u);case 8:d=e.sent,f=d.conferences,p=d.headers,m=p&&p["X-Total-Count"]||0,this.dispatch({type:ut,payload:{items:"infinite-scroll"===o?[].concat(Object(F.a)(n),Object(F.a)(f)):f,count:m}}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),this.handleError(e.t0);case 18:case"end":return e.stop()}}),e,this,[[4,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"updateFilter",value:function(e,t){this.dispatch({type:ct,payload:{values:t,filterId:e}})}},{key:"addFilter",value:function(){this.dispatch({type:ot})}},{key:"removeFilter",value:function(e){this.dispatch({type:lt,payload:{filterId:e}},this.fetchData)}},{key:"clearFilters",value:function(){this.dispatch({type:st},this.fetchData)}},{key:"applyFilters",value:function(){this.dispatch({type:pt},this.fetchData)}},{key:"closeNotification",value:function(){this.dispatch({type:ft})}},{key:"handleError",value:function(e){var t=this.props,a=t.onError,n=t.t;a(e),this.dispatch({type:dt,payload:{notificationMessage:n("error.dataLoading"),notificationStatus:Be.ERROR}})}},{key:"handleDelete",value:function(){var e=Object(N.a)(D.a.mark((function e(t){var a,n,r,i,o;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,n=a.t,r=a.onDelete,i=a.keycloak,o=a.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,_e(o,t.id);case 6:r(t),this.dispatch({type:bt,payload:{id:t.id}}),this.setState({notificationMessage:n("common.dataDeleted"),notificationStatus:Be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleConfirmationDialogAction",value:function(e,t){switch(e){case B.CONFIRM:this.handleDelete(t)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.count,r=t.notificationMessage,i=t.notificationStatus,o=t.filters,c=this.props,l=c.classes,s=c.onSelect,d=c.onAdd,f=c.onDelete,p=c.t,m=c.keycloak,h=c.paginationMode,b=void 0===h?"":h,g=p("common.delete");return u.a.createElement(u.a.Fragment,null,u.a.createElement(q,{keycloak:m},p("common.notAuthenticated")),u.a.createElement(H,{keycloak:m},u.a.createElement(R.a,{color:"primary","aria-label":"add",className:l.fab,onClick:d},u.a.createElement(T.a,null)),u.a.createElement(Pe,{applyFilter:this.applyFilters,add:this.addFilter,update:this.updateFilter,remove:this.removeFilter,clear:this.clearFilters,filters:o,error:this.handleError}),u.a.createElement(le,{items:a,paginationMode:b,count:n},u.a.createElement("div",{className:l.tableWrapper},u.a.createElement(Ie,{items:a,onSelect:s,Actions:function(t){var a=t.item;return f?u.a.createElement(B,{onCloseDialog:function(t){return e.handleConfirmationDialogAction(t,a)},dialog:{title:p("entities.conference.deleteDialog.title"),description:p("entities.conference.deleteDialog.description"),confirmLabel:p("common.yes"),discardLabel:p("common.no")},Renderer:function(e){var t=e.onClick;return u.a.createElement(S.a,{"aria-label":g,title:g,onClick:t},u.a.createElement(M.a,null))}}):""}})))),u.a.createElement(Be,{status:i,message:r,onClose:this.closeNotification}))}}]),a}(s.Component);Ot.defaultProps={onAdd:function(){},onDelete:function(){},onError:function(){},onSelect:function(){},paginationMode:"",pagination:null,serviceUrl:""};var Et=function(e){var t=function(t){Object(i.a)(c,t);var a=Object(o.a)(c);function c(){var t;Object(n.a)(this,c);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=a.call.apply(a,[this].concat(i))).renderWrappedComponent=function(a){var n=t.props,r=n.forwardedRef,i=Object(W.a)(n,["forwardedRef"]);return u.a.createElement(e,Object.assign({},i,{ref:r,keycloak:a}))},t}return Object(r.a)(c,[{key:"render",value:function(){return u.a.createElement(E.Consumer,null,this.renderWrappedComponent)}}]),c}(s.Component);return t.defaultProps={forwardedRef:function(){}},Object(s.forwardRef)((function(e,a){return u.a.createElement(t,Object.assign({},e,{forwardedRef:a}))}))}(Object(A.a)({fab:{float:"right"},tableWrapper:{width:"100%",overflowX:"auto",overflowY:"hidden"}})(Object(x.b)(void 0,{withRef:!0})($(Ot)))),jt=a(81),yt={en:a(108),it:a(109)},kt=Object.keys(yt).reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(ue.a)({},t,Object(ue.a)({},"translation",yt[t])))}),{}),Ct=(jt.a.t,function(e){!function(e,t){jt.a.use(x.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:kt,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")}),wt=function(e){return function(t){return function(e,t){var a=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(a)}(e,t)}},Pt=function(){return window&&window.entando&&window.entando.keycloak&&Object(l.a)(Object(l.a)({},window.entando.keycloak),{},{initialized:!0})||{initialized:!1}},Dt={hidden:"hidden",locale:"locale",paginationMode:"pagination-mode",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Ft=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).keycloak=Pt(),e.onAdd=wt(nt),e.onError=wt(rt),e.onSelect=wt(at),e.onDelete=wt(it),e.reactRootRef=u.a.createRef(),e}return Object(r.a)(a,[{key:"attributeChangedCallback",value:function(e,t,a){if(this.container&&t!==a){if(!Object.values(Dt).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===Dt.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,a,n=this.attachShadow({mode:"open"});n.appendChild(this.container),this.jss=Object(O.b)(Object(l.a)(Object(l.a)({},Object(h.a)()),{},{insertionPoint:this.container})),this.muiTheme=Object(b.a)({props:{MuiDialog:{container:this.mountPoint}}}),this.keycloak=Object(l.a)(Object(l.a)({},Pt()),{},{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",a=function(){e.keycloak=Object(l.a)(Object(l.a)({},Pt()),{},{initialized:!0}),e.render()},window.addEventListener(t,a),function(){window.removeEventListener(t,a)}),this.onToggleDisableDefaultEvent(),this.render(),m()(n)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var a=function(e){var t=e.type,a=e.detail;return{type:t,payload:a.payload,error:a.error,meta:a.meta}}(t);e.reactRootRef.current.dispatch(a)}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,a="true"===this.getAttribute(Dt.disableDefaultEventHandler);if(a!==this.defaultEventHandlerDisabled){if(a)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var n=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(tt),t=n,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=a}}},{key:"render",value:function(){if(!("true"===this.getAttribute(Dt.hidden))){var e=this.getAttribute(Dt.locale);Ct(e);var t=this.getAttribute(Dt.paginationMode)||"",a=this.getAttribute(Dt.serviceUrl)||"";f.a.render(u.a.createElement(E.Provider,{value:this.keycloak},u.a.createElement(g.b,{jss:this.jss},u.a.createElement(v.a,{theme:this.muiTheme},u.a.createElement(w,{paginationMode:t},u.a.createElement(Et,{ref:this.reactRootRef,onAdd:this.onAdd,onDelete:this.onDelete,onSelect:this.onSelect,onError:this.onError,paginationMode:t,serviceUrl:a}))))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Dt)}}]),a}(Object(c.a)(HTMLElement));customElements.define("conference-table",Ft)}},[[126,1,2]]]);
//# sourceMappingURL=main.3fe74302.chunk.js.map