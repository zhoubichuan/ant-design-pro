(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5103],{64335:function(D,W,l){"use strict";var K=l(67294),I=(0,K.createContext)({});W.Z=I},85224:function(D,W,l){"use strict";var K=l(84305),I=l(69224),b=l(67294),w=l(94184),j=l.n(w),Y=l(97435),x=l(28267),$=l.n(x),U=l(64335),i=["children","className","extra","style","renderContent"];function R(){return R=Object.assign||function(o){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(o[m]=u[m])}return o},R.apply(this,arguments)}function Z(o,s){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(o);s&&(m=m.filter(function(T){return Object.getOwnPropertyDescriptor(o,T).enumerable})),u.push.apply(u,m)}return u}function F(o){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?Z(Object(u),!0).forEach(function(m){G(o,m,u[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):Z(Object(u)).forEach(function(m){Object.defineProperty(o,m,Object.getOwnPropertyDescriptor(u,m))})}return o}function G(o,s,u){return s in o?Object.defineProperty(o,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[s]=u,o}function M(o,s){if(o==null)return{};var u=V(o,s),m,T;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(o);for(T=0;T<S.length;T++)m=S[T],!(s.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,m)||(u[m]=o[m]))}return u}function V(o,s){if(o==null)return{};var u={},m=Object.keys(o),T,S;for(S=0;S<m.length;S++)T=m[S],!(s.indexOf(T)>=0)&&(u[T]=o[T]);return u}var f=function(s){var u=s.children,m=s.className,T=s.extra,S=s.style,k=s.renderContent,H=M(s,i),ue=(0,b.useContext)(I.ZP.ConfigContext),ee=ue.getPrefixCls,le=s.prefixCls||ee("pro"),J="".concat(le,"-footer-bar"),E=(0,b.useContext)(U.Z),L=(0,b.useMemo)(function(){var X=E.hasSiderMenu,ve=E.isMobile,ce=E.siderWidth;if(!!X)return ce?ve?"100%":"calc(100% - ".concat(ce,"px)"):"100%"},[E.collapsed,E.hasSiderMenu,E.isMobile,E.siderWidth]),Q=b.createElement(b.Fragment,null,b.createElement("div",{className:"".concat(J,"-left")},T),b.createElement("div",{className:"".concat(J,"-right")},u));return(0,b.useEffect)(function(){return!E||!(E==null?void 0:E.setHasFooterToolbar)?function(){}:(E==null||E.setHasFooterToolbar(!0),function(){var X;E==null||(X=E.setHasFooterToolbar)===null||X===void 0||X.call(E,!1)})},[]),b.createElement("div",R({className:j()(m,"".concat(J)),style:F({width:L},S)},(0,Y.Z)(H,["prefixCls"])),k?k(F(F(F({},s),E),{},{leftWidth:L}),Q):Q)};W.Z=f},21349:function(D,W,l){"use strict";var K=l(84305),I=l(69224),b=l(17781),w=l.n(b),j=l(67294),Y=l(94184),x=l.n(Y),$=l(64335),U=function(R){var Z=(0,j.useContext)($.Z),F=R.children,G=R.contentWidth,M=R.className,V=R.style,f=(0,j.useContext)(I.ZP.ConfigContext),o=f.getPrefixCls,s=R.prefixCls||o("pro"),u=G||Z.contentWidth,m="".concat(s,"-grid-content");return j.createElement("div",{className:x()(m,M,{wide:u==="Fixed"}),style:V},j.createElement("div",{className:"".concat(s,"-grid-content-children")},F))};W.Z=U},15103:function(D,W,l){"use strict";l.d(W,{H_:function(){return Pt},yy:function(){return Qe},ZP:function(){return Et}});var K=l(43673),I=l(29938),b=l(22122),w=l(96156),j=l(6610),Y=l(5991),x=l(10379),$=l(60446),U=l(90484),i=l(67294),R=l(94184),Z=l.n(R),F=l(98423),G=l(4084),M=l(65632),V=l(85061),f=l(75164);function o(n){var e,r=function(c){return function(){e=null,n.apply(void 0,(0,V.Z)(c))}},t=function(){if(e==null){for(var c=arguments.length,v=new Array(c),d=0;d<c;d++)v[d]=arguments[d];e=(0,f.Z)(r(v))}};return t.cancel=function(){return f.Z.cancel(e)},t}function s(){return function(e,r,t){var a=t.value,c=!1;return{configurable:!0,get:function(){if(c||this===e.prototype||this.hasOwnProperty(r))return a;var d=o(a.bind(this));return c=!0,Object.defineProperty(this,r,{value:d,configurable:!0,writable:!0}),c=!1,d}}}}var u=l(64019);function m(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function T(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function S(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var k=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],H=[];function ue(){return H}function ee(n,e){if(!!n){var r=H.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},H.push(r),k.forEach(function(t){r.eventHandlers[t]=(0,u.Z)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function le(n){var e=H.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(H=H.filter(function(r){return r!==e}),k.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var J=function(n,e,r,t){var a=arguments.length,c=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,v;if((typeof Reflect=="undefined"?"undefined":(0,U.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(n,e,r,t);else for(var d=n.length-1;d>=0;d--)(v=n[d])&&(c=(a<3?v(c):a>3?v(e,r,c):v(e,r))||c);return a>3&&c&&Object.defineProperty(e,r,c),c};function E(){return typeof window!="undefined"?window:null}var L;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(L||(L={}));var Q=function(n){(0,x.Z)(r,n);var e=(0,$.Z)(r);function r(){var t;return(0,j.Z)(this,r),t=e.apply(this,arguments),t.state={status:L.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props.offsetBottom,c=t.props.offsetTop;return a===void 0&&c===void 0&&(c=0),c},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,c=a.status,v=a.lastAffix,d=t.props.onChange,g=t.getTargetFunc();if(!(c!==L.Prepare||!t.fixedNode||!t.placeholderNode||!g)){var y=t.getOffsetTop(),h=t.getOffsetBottom(),O=g();if(!!O){var p={status:L.None},C=m(O),P=m(t.placeholderNode),A=T(P,C,y),N=S(P,C,h);A!==void 0?(p.affixStyle={position:"fixed",top:A,width:P.width,height:P.height},p.placeholderStyle={width:P.width,height:P.height}):N!==void 0&&(p.affixStyle={position:"fixed",bottom:N,width:P.width,height:P.height},p.placeholderStyle={width:P.width,height:P.height}),p.lastAffix=!!p.affixStyle,d&&v!==p.lastAffix&&d(p.lastAffix),t.setState(p)}}},t.prepareMeasure=function(){if(t.setState({status:L.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t.render=function(){var a=t.context.getPrefixCls,c=t.state,v=c.affixStyle,d=c.placeholderStyle,g=t.props,y=g.prefixCls,h=g.children,O=Z()((0,w.Z)({},a("affix",y),!!v)),p=(0,F.Z)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return i.createElement(G.Z,{onResize:function(){t.updatePosition()}},i.createElement("div",(0,b.Z)({},p,{ref:t.savePlaceholderNode}),v&&i.createElement("div",{style:d,"aria-hidden":"true"}),i.createElement("div",{className:O,ref:t.saveFixedNode,style:v},i.createElement(G.Z,{onResize:function(){t.updatePosition()}},h))))},t}return(0,Y.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,c=this.props.target;return c!==void 0?c:a||E}},{key:"componentDidMount",value:function(){var a=this,c=this.getTargetFunc();c&&(this.timeout=setTimeout(function(){ee(c(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var c=this.state.prevTarget,v=this.getTargetFunc(),d=null;v&&(d=v()||null),c!==d&&(le(this),d&&(ee(d,this),this.updatePosition()),this.setState({prevTarget:d})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),le(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),c=this.state.affixStyle;if(a&&c){var v=this.getOffsetTop(),d=this.getOffsetBottom(),g=a();if(g&&this.placeholderNode){var y=m(g),h=m(this.placeholderNode),O=T(h,y,v),p=S(h,y,d);if(O!==void 0&&c.top===O||p!==void 0&&c.bottom===p)return}}this.prepareMeasure()}}]),r}(i.Component);Q.contextType=M.E_,J([s()],Q.prototype,"updatePosition",null),J([s()],Q.prototype,"lazyUpdatePosition",null);var X=Q,ve=l(84305),ce=l(69224),Pe=l(51399),Oe=l(66157),Ie=l(30887),Ze=l(59250),Le=l(94233),Ee=l(28481),Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},xe=Ce,me=l(27029),ge=function(e,r){return i.createElement(me.Z,Object.assign({},e,{ref:r,icon:xe}))};ge.displayName="ArrowLeftOutlined";var Re=i.forwardRef(ge),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ne=Te,he=function(e,r){return i.createElement(me.Z,Object.assign({},e,{ref:r,icon:Ne}))};he.displayName="ArrowRightOutlined";var We=i.forwardRef(he),Ue=l(50344),_e=l(57254),De=l(81555),Ke=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},Be=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,c=e.children,v=e.overlay,d=e.dropdownProps,g=Ke(e,["prefixCls","separator","children","overlay","dropdownProps"]),y=i.useContext(M.E_),h=y.getPrefixCls,O=h("breadcrumb",r),p=function(A){return v?i.createElement(De.Z,(0,b.Z)({overlay:v,placement:"bottomCenter"},d),i.createElement("span",{className:"".concat(O,"-overlay-link")},A,i.createElement(_e.Z,null))):A},C;return"href"in g?C=i.createElement("a",(0,b.Z)({className:"".concat(O,"-link")},g),c):C=i.createElement("span",(0,b.Z)({className:"".concat(O,"-link")},g),c),C=p(C),c?i.createElement("span",null,C,a&&i.createElement("span",{className:"".concat(O,"-separator")},a)):null};Be.__ANT_BREADCRUMB_ITEM=!0;var Me=Be,pe=function(e){var r=e.children,t=i.useContext(M.E_),a=t.getPrefixCls,c=a("breadcrumb");return i.createElement("span",{className:"".concat(c,"-separator")},r||"/")};pe.__ANT_BREADCRUMB_SEPARATOR=!0;var Fe=pe,be=l(99210),se=l(21687),q=l(96159),te=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function He(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,c){return e[c]||a});return t}function ze(n,e,r,t){var a=r.indexOf(n)===r.length-1,c=He(n,e);return a?i.createElement("span",null,c):i.createElement("a",{href:"#/".concat(t.join("/"))},c)}var Se=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},$e=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=(0,V.Z)(e),c=Se(r,t);return c&&a.push(c),a},ye=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,c=e.style,v=e.className,d=e.routes,g=e.children,y=e.itemRender,h=y===void 0?ze:y,O=e.params,p=O===void 0?{}:O,C=te(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),P=i.useContext(M.E_),A=P.getPrefixCls,N=P.direction,_,fe=A("breadcrumb",r);if(d&&d.length>0){var oe=[];_=d.map(function(B){var ie=Se(B.path,p);ie&&oe.push(ie);var je;return B.children&&B.children.length&&(je=i.createElement(be.Z,null,B.children.map(function(de){return i.createElement(be.Z.Item,{key:de.path||de.breadcrumbName},h(de,p,d,$e(oe,de.path,p)))}))),i.createElement(Me,{overlay:je,separator:a,key:ie||B.breadcrumbName},h(B,p,d,oe))})}else g&&(_=(0,Ue.Z)(g).map(function(B,ie){return B&&((0,se.Z)(B.type&&(B.type.__ANT_BREADCRUMB_ITEM===!0||B.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,q.Tm)(B,{separator:a,key:ie}))}));var z=Z()(fe,(0,w.Z)({},"".concat(fe,"-rtl"),N==="rtl"),v);return i.createElement("div",(0,b.Z)({className:z,style:c},C),_)};ye.Item=Me,ye.Separator=Fe;var Ae=ye,ne=Ae,Ge=l(51890),et=l(34952),tt=l(42051),rt=function(e,r,t){return!r||!t?null:i.createElement(tt.Z,{componentName:"PageHeader"},function(a){var c=a.back;return i.createElement("div",{className:"".concat(e,"-back")},i.createElement(et.Z,{onClick:function(d){t==null||t(d)},className:"".concat(e,"-back-button"),"aria-label":c},r))})},nt=function(e){return i.createElement(ne,e)},at=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?i.createElement(We,null):i.createElement(Re,null)},ot=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,c=r.avatar,v=r.subTitle,d=r.tags,g=r.extra,y=r.onBack,h="".concat(e,"-heading"),O=a||v||d||g;if(!O)return null;var p=at(r,t),C=rt(e,p,y),P=C||c||O;return i.createElement("div",{className:h},P&&i.createElement("div",{className:"".concat(h,"-left")},C,c&&i.createElement(Ge.C,c),a&&i.createElement("span",{className:"".concat(h,"-title"),title:typeof a=="string"?a:void 0},a),v&&i.createElement("span",{className:"".concat(h,"-sub-title"),title:typeof v=="string"?v:void 0},v),d&&i.createElement("span",{className:"".concat(h,"-tags")},d)),g&&i.createElement("span",{className:"".concat(h,"-extra")},g))},it=function(e,r){return r?i.createElement("div",{className:"".concat(e,"-footer")},r):null},lt=function(e,r){return i.createElement("div",{className:"".concat(e,"-content")},r)},ct=function(e){var r=i.useState(!1),t=(0,Ee.Z)(r,2),a=t[0],c=t[1],v=function(g){var y=g.width;c(y<768)};return i.createElement(M.C,null,function(d){var g,y=d.getPrefixCls,h=d.pageHeader,O=d.direction,p=e.prefixCls,C=e.style,P=e.footer,A=e.children,N=e.breadcrumb,_=e.breadcrumbRender,fe=e.className,oe=!0;"ghost"in e?oe=e.ghost:h&&"ghost"in h&&(oe=h.ghost);var z=y("page-header",p),B=function(){var Xe;return((Xe=N)===null||Xe===void 0?void 0:Xe.routes)?nt(N):null},ie=B(),je=N&&"props"in N,de=(_==null?void 0:_(e,ie))||ie,qe=je?N:de,Ct=Z()(z,fe,(g={"has-breadcrumb":!!qe,"has-footer":!!P},(0,w.Z)(g,"".concat(z,"-ghost"),oe),(0,w.Z)(g,"".concat(z,"-rtl"),O==="rtl"),(0,w.Z)(g,"".concat(z,"-compact"),a),g));return i.createElement(G.Z,{onResize:v},i.createElement("div",{className:Ct,style:C},qe,ot(z,e,O),A&&lt(z,A),it(z,P)))})},st=ct,xt=l(18106),Ye=l(51752),ke=l(64335),ft=l(21349),dt=l(85224),Rt=l(32331),ut=l(83832),vt=l(9960),mt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"];function Ve(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function re(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Ve(Object(r),!0).forEach(function(t){Je(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Je(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function gt(n,e){if(n==null)return{};var r=ht(n,e),t,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(r[t]=n[t]))}return r}function ht(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,c;for(c=0;c<t.length;c++)a=t[c],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function ae(){return ae=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},ae.apply(this,arguments)}function we(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?we=function(r){return typeof r}:we=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},we(n)}function pt(n){return we(n)==="object"?n:{spinning:n}}var bt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,c=e.tabBarExtraContent,v=e.tabProps,d=e.prefixedClassName;return r&&r.length?i.createElement(Ye.Z,ae({className:"".concat(d,"-tabs"),activeKey:t,onChange:function(y){a&&a(y)},tabBarExtraContent:c},v),r.map(function(g,y){return i.createElement(Ye.Z.TabPane,ae({},g,{tab:g.tab,key:g.key||y}))})):null},yt=function(e,r,t){return!e&&!r?null:i.createElement("div",{className:"".concat(t,"-detail")},i.createElement("div",{className:"".concat(t,"-main")},i.createElement("div",{className:"".concat(t,"-row")},e&&i.createElement("div",{className:"".concat(t,"-content")},e),r&&i.createElement("div",{className:"".concat(t,"-extraContent")},r))))},Pt=function(e){var r=(0,i.useContext)(ke.Z);return i.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},i.createElement(ne,ae({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},Qe=function(e){var r,t=(0,i.useContext)(ke.Z),a=e.title,c=e.content,v=e.pageHeaderRender,d=e.header,g=e.prefixedClassName,y=e.extraContent,h=e.style,O=e.prefixCls,p=e.breadcrumbRender,C=gt(e,mt);if(v===!1)return null;if(v)return i.createElement(i.Fragment,null," ",v(re(re({},e),t)));var P=a;!a&&a!==!1&&(P=t.title);var A=re(re(re({},t),{},{title:P},C),{},{footer:bt(re(re({},C),{},{breadcrumbRender:p,prefixedClassName:g}))},d),N=A.breadcrumb;return["title","subTitle","breadcrumb","extra","tags","footer","avatar","backIcon"].every(function(_){return!A[_]})&&(!N||!(N==null?void 0:N.itemRender)&&!(N==null||(r=N.routes)===null||r===void 0?void 0:r.length))&&!c&&!y?null:i.createElement("div",{className:"".concat(g,"-warp")},i.createElement(st,ae({},A,{breadcrumb:p===!1?void 0:re(re({},A.breadcrumb),t.breadcrumbProps),prefixCls:O}),(d==null?void 0:d.children)||yt(c,y,g)))},Ot=function(e){var r=e.children,t=e.loading,a=t===void 0?!1:t,c=e.style,v=e.footer,d=e.affixProps,g=e.ghost,y=e.fixedHeader,h=(0,i.useContext)(ke.Z),O=(0,i.useContext)(ce.ZP.ConfigContext),p=O.getPrefixCls,C=e.prefixCls||p("pro"),P="".concat(C,"-page-container"),A=Z()(P,e.className,Je({},"".concat(C,"-page-container-ghost"),g)),N=r?i.createElement("div",null,i.createElement("div",{className:"".concat(P,"-children-content")},r),h.hasFooterToolbar&&i.createElement("div",{style:{height:48,marginTop:24}})):null,_=i.createElement(Qe,ae({},e,{prefixCls:void 0,prefixedClassName:P})),fe=function(){var z=pt(a),B=z.spinning?i.createElement(ut.Z,z):N;return e.waterMarkProps||h.waterMarkProps?i.createElement(vt.Z,e.waterMarkProps||h.waterMarkProps,B):B};return i.createElement("div",{style:c,className:A},y&&_?i.createElement(X,ae({offsetTop:h.hasHeader&&h.fixedHeader?h.headerHeight:0},d),_):_,i.createElement(ft.Z,null,fe()),v&&i.createElement(dt.Z,{prefixCls:C},v))},Et=Ot},9960:function(D,W,l){"use strict";var K=l(84305),I=l(69224),b=l(67294),w=l(94184),j=l.n(w);function Y(f,o){var s=Object.keys(f);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(f);o&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(f,m).enumerable})),s.push.apply(s,u)}return s}function x(f){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?Y(Object(s),!0).forEach(function(u){$(f,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(s)):Y(Object(s)).forEach(function(u){Object.defineProperty(f,u,Object.getOwnPropertyDescriptor(s,u))})}return f}function $(f,o,s){return o in f?Object.defineProperty(f,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):f[o]=s,f}function U(f,o){return G(f)||F(f,o)||R(f,o)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(f,o){if(!!f){if(typeof f=="string")return Z(f,o);var s=Object.prototype.toString.call(f).slice(8,-1);if(s==="Object"&&f.constructor&&(s=f.constructor.name),s==="Map"||s==="Set")return Array.from(f);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Z(f,o)}}function Z(f,o){(o==null||o>f.length)&&(o=f.length);for(var s=0,u=new Array(o);s<o;s++)u[s]=f[s];return u}function F(f,o){var s=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(s!=null){var u=[],m=!0,T=!1,S,k;try{for(s=s.call(f);!(m=(S=s.next()).done)&&(u.push(S.value),!(o&&u.length===o));m=!0);}catch(H){T=!0,k=H}finally{try{!m&&s.return!=null&&s.return()}finally{if(T)throw k}}return u}}function G(f){if(Array.isArray(f))return f}var M=function(o){if(!o)return 1;var s=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/s},V=function(o){var s=o.children,u=o.style,m=o.className,T=o.markStyle,S=o.markClassName,k=o.zIndex,H=k===void 0?9:k,ue=o.gapX,ee=ue===void 0?212:ue,le=o.gapY,J=le===void 0?222:le,E=o.width,L=E===void 0?120:E,Q=o.height,X=Q===void 0?64:Q,ve=o.rotate,ce=ve===void 0?-22:ve,Pe=o.image,Oe=o.content,Ie=o.offsetLeft,Ze=o.offsetTop,Le=o.fontStyle,Ee=Le===void 0?"normal":Le,Ce=o.fontWeight,xe=Ce===void 0?"normal":Ce,me=o.fontColor,ge=me===void 0?"rgba(0,0,0,.15)":me,Re=o.fontSize,Te=Re===void 0?16:Re,Ne=o.fontFamily,he=Ne===void 0?"sans-serif":Ne,We=o.prefixCls,Ue=(0,b.useContext)(I.ZP.ConfigContext),_e=Ue.getPrefixCls,De=_e("pro-layout-watermark",We),Ke=j()("".concat(De,"-wrapper"),m),Be=j()(De,S),Me=(0,b.useState)(""),pe=U(Me,2),Fe=pe[0],be=pe[1];return(0,b.useEffect)(function(){var se=document.createElement("canvas"),q=se.getContext("2d"),te=M(q),He="".concat((ee+L)*te,"px"),ze="".concat((J+X)*te,"px"),Se=Ie||ee/2,$e=Ze||J/2;if(se.setAttribute("width",He),se.setAttribute("height",ze),q){q.translate(Se*te,$e*te),q.rotate(Math.PI/180*Number(ce));var ye=L*te,Ae=X*te;if(Pe){var ne=new Image;ne.crossOrigin="anonymous",ne.referrerPolicy="no-referrer",ne.src=Pe,ne.onload=function(){q.drawImage(ne,0,0,ye,Ae),be(se.toDataURL())}}else if(Oe){var Ge=Number(Te)*te;q.font="".concat(Ee," normal ").concat(xe," ").concat(Ge,"px/").concat(Ae,"px ").concat(he),q.fillStyle=ge,q.fillText(Oe,0,0),be(se.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[ee,J,Ie,Ze,ce,Ee,xe,L,X,he,ge,Pe,Oe,Te]),b.createElement("div",{style:x({position:"relative"},u),className:Ke},s,b.createElement("div",{className:Be,style:x({zIndex:H,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(ee+L,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Fe,"')")},T)}))};W.Z=V},28267:function(D){D.exports={"ant-pro-footer-bar":"ant-pro-footer-bar","ant-pro-footer-bar-left":"ant-pro-footer-bar-left","ant-pro-footer-bar-right":"ant-pro-footer-bar-right"}},17781:function(D){D.exports={"ant-pro-grid-content":"ant-pro-grid-content",wide:"wide"}},32331:function(D){D.exports={"ant-pro-page-container-children-content":"ant-pro-page-container-children-content","ant-pro-page-container-warp":"ant-pro-page-container-warp","ant-tabs-nav":"ant-tabs-nav","ant-pro-page-container-ghost":"ant-pro-page-container-ghost","ant-pro-page-container-main":"ant-pro-page-container-main","ant-pro-page-container-detail":"ant-pro-page-container-detail","ant-pro-page-container-row":"ant-pro-page-container-row","ant-pro-page-container-title-content":"ant-pro-page-container-title-content","ant-pro-page-container-title":"ant-pro-page-container-title","ant-pro-page-container-content":"ant-pro-page-container-content","ant-pro-page-container-extraContent":"ant-pro-page-container-extraContent","ant-pro-page-container-logo":"ant-pro-page-container-logo","ant-pro-page-container-action":"ant-pro-page-container-action"}},29938:function(D){D.exports={"ant-affix":"ant-affix"}},66157:function(D){D.exports={"ant-breadcrumb":"ant-breadcrumb",anticon:"anticon","ant-breadcrumb-separator":"ant-breadcrumb-separator","ant-breadcrumb-link":"ant-breadcrumb-link","ant-breadcrumb-overlay-link":"ant-breadcrumb-overlay-link","ant-breadcrumb-rtl":"ant-breadcrumb-rtl"}},51399:function(D){D.exports={"ant-page-header":"ant-page-header","ant-page-header-ghost":"ant-page-header-ghost","has-breadcrumb":"has-breadcrumb","has-footer":"has-footer","ant-page-header-back":"ant-page-header-back","ant-page-header-back-button":"ant-page-header-back-button","ant-divider-vertical":"ant-divider-vertical","ant-breadcrumb":"ant-breadcrumb","ant-page-header-heading":"ant-page-header-heading","ant-page-header-heading-left":"ant-page-header-heading-left","ant-page-header-heading-title":"ant-page-header-heading-title","ant-avatar":"ant-avatar","ant-page-header-heading-sub-title":"ant-page-header-heading-sub-title","ant-page-header-heading-extra":"ant-page-header-heading-extra","ant-page-header-content":"ant-page-header-content","ant-page-header-footer":"ant-page-header-footer","ant-tabs":"ant-tabs","ant-tabs-nav":"ant-tabs-nav","ant-tabs-tab":"ant-tabs-tab","ant-page-header-compact":"ant-page-header-compact","ant-page-header-rtl":"ant-page-header-rtl","ant-page-header-heading-tags":"ant-page-header-heading-tags","ant-tabs-bar":"ant-tabs-bar"}},34952:function(D,W,l){"use strict";var K=l(22122),I=l(67294),b=l(15105),w=function(x,$){var U={};for(var i in x)Object.prototype.hasOwnProperty.call(x,i)&&$.indexOf(i)<0&&(U[i]=x[i]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,i=Object.getOwnPropertySymbols(x);R<i.length;R++)$.indexOf(i[R])<0&&Object.prototype.propertyIsEnumerable.call(x,i[R])&&(U[i[R]]=x[i[R]]);return U},j={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Y=I.forwardRef(function(x,$){var U=function(f){var o=f.keyCode;o===b.Z.ENTER&&f.preventDefault()},i=function(f){var o=f.keyCode,s=x.onClick;o===b.Z.ENTER&&s&&s()},R=x.style,Z=x.noStyle,F=x.disabled,G=w(x,["style","noStyle","disabled"]),M={};return Z||(M=(0,K.Z)({},j)),F&&(M.pointerEvents="none"),M=(0,K.Z)((0,K.Z)({},M),R),I.createElement("div",(0,K.Z)({role:"button",tabIndex:0,ref:$},G,{onKeyDown:U,onKeyUp:i,style:M}))});W.Z=Y},97435:function(D,W){"use strict";function l(K,I){for(var b=Object.assign({},K),w=0;w<I.length;w+=1){var j=I[w];delete b[j]}return b}W.Z=l}}]);
