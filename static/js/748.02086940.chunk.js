"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[748],{6589:function(t,e,r){r.d(e,{II:function(){return f},gx:function(){return h}});var s=r(1413),n=r(5987),a=(r(2791),"FormsControls_formControl__5Q0CF"),i="FormsControls_error__oBpjX",o=r(7391),u=r(184),l=["input","meta","child"],c=["input","meta","child"],d=function(t){var e=t.meta.touched&&t.meta.error;return(0,u.jsxs)("div",{className:a+" "+(e?i:""),children:[(0,u.jsx)("div",{children:t.children}),e&&(0,u.jsx)("span",{children:t.meta.error})]})},f=function(t){var e=t.input,r=(t.meta,t.child,(0,n.Z)(t,l));return(0,u.jsx)(d,(0,s.Z)((0,s.Z)({},t),{},{children:(0,u.jsx)(o.Z,(0,s.Z)((0,s.Z)({style:{minWidth:"550px"},id:"standard-basic",label:"New post",variant:"outlined"},e),r))}))},h=function(t){var e=t.input,r=(t.meta,t.child,(0,n.Z)(t,c));return(0,u.jsx)(d,(0,s.Z)((0,s.Z)({},t),{},{children:(0,u.jsx)(o.Z,(0,s.Z)((0,s.Z)({style:{minWidth:"550px"},id:"standard-basic",label:"New message",variant:"outlined"},e),r))}))}},9748:function(t,e,r){r.r(e),r.d(e,{default:function(){return ht}});var s=r(1413),n=r(5671),a=r(3144),i=r(136),o=r(7277),u=r(2791),l=r(8527),c=r(885),d="ProfileStatusWithHooks_textContainer__VGic3",f="ProfileStatusWithHooks_userName__AyNSp",h="ProfileStatusWithHooks_text__Ru-vh",p="ProfileStatusWithHooks_input__4dOvD",m=r(7391),v=r(184),x=function(t){var e=(0,u.useState)(!1),r=(0,c.Z)(e,2),s=r[0],n=r[1],a=(0,u.useState)(t.status),i=(0,c.Z)(a,2),o=i[0],l=i[1];(0,u.useEffect)((function(){l(t.status)}),[t.status]);return(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("span",{className:f,children:t.profile.fullName}),!s&&(0,v.jsx)("div",{children:(0,v.jsx)("span",{style:{color:"white"},className:h,onDoubleClick:function(){n(!0),l(o)},children:t.status||"-----"})}),s&&(0,v.jsx)("div",{children:(0,v.jsx)(m.Z,{id:"standard-basic",label:"New status",variant:"standard",onChange:function(t){l(t.currentTarget.value)},onBlur:function(){n(!1),t.updateStatusThunk(o)},autoFocus:!0,value:o,className:p})})]})},A=r(4599),g="Profileinfo_image__JLxf-",k="Profileinfo_input__7TfEa",Z="Profileinfo_icon__QHwGW",j="Profileinfo_avatar__yHzyM",_="Profileinfo_infoContainer__iDy6c",P=r(3400),N=function(t){if(!t.profile)return(0,v.jsx)(l.Z,{});return(0,v.jsxs)("div",{className:g,children:[(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("img",{src:t.profile.photos.large||A,className:j}),t.isOwner&&(0,v.jsxs)("label",{htmlFor:"load_avatar",children:[(0,v.jsx)("input",{id:"load_avatar",className:k,type:"file",onChange:function(e){e.target.files&&e.target.files.length&&t.updatePhoto(e.target.files[0])}}),(0,v.jsx)(P.Z,{component:"span",className:Z,children:(0,v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMlSURBVHgBtZc/UiJBFMZ7LKvUyNlIM9tIM9lEzcBIM9wbcAO8gXoD9QSkRltkECEZRDtkEO0QARGTARH7frMNBdQ0zODwVbUz07T9vve3XzsqJqbTqSuPRxlZGRkZWoZrfg5k+DI8GV8yyo7jBHH2dTYtEMFaHsXRaFQYDAZuu91W3W5XBUGgxuNxuObw8FCdnp6qk5MTpbVWl5eXTJdkvAoRfysCRuMXEVJsNBqq2WzOBW6C67oqk8moq6sr3t8MkSA2AaN1TQTrer0eW3AUkWw2CxlfPu+irOFECMe/vyuVikbrNHBzc6MeHh58ef0lJDwrgZnm5XJZe56n0gQuyefzvlqxxN6CcHxeQ/O0hQP2ZG9kGFnLBAQvsig1s0eBvYkreX1eIoDpJa2KBNyuYYL6ybh7boFnTERu7xpklLFykT/7xh+FVqsVexPSi8jmCWkKEZrFVYC6cn19XRDZr/vy/Uh1W/fPRPDZ2dnSXLVandcHiNzf3y/VC6qlLZhZR1WVqpmHQNb3fWUDZfX4+FhJalrXQP7z83NpDkKQhkgUOp0OZTtHDGT6/b5t77C+29yD6RlRwM+cCzYYpTNYQIs5VFLkcjl1cHAQEsCkuCQJjMs1BNyktR63DIfDuWX4ZhBLcWFkuntqC+CWRd+iDXPbAAKBzY82IJw0nAHtk6QxMDIDXOBLGq0NxFUQQGwgh0v4vSmNo0ADw1YQ8CRdrAQmk0nkPELX+XyTVQ0BDwJ1MWHBdgihLU1FkhMS4efn52HFs8EUti+HUiz93t+Pjw9rNlDpCLIksUKhWbdfsRgeBT/26dWEREmC6sl2GuLfNA8qSrughOxZGr7f3t6qpNmwDdCeZlXwyp+QAC2SCH/D17sGMuiUZ23ZvCc0x/IfKal6XfB8B1hZDilfXn/O2vR5JTQTdywwPkoV7GmE3y3eEaxteZqWWNB8fVu+QELLo0aTmqTTWQVBzakpGearuBeTBRLExLMIf6IIUevjEkEwWnNeENwq6dVshYhW/9vowuxi2uv1aKmWLqekFw3IxcUFRSs4OjoqyU/vW19OI4js5Hr+DwqHu3viv2cqAAAAAElFTkSuQmCC"})})]})]}),(0,v.jsx)(x,{status:t.status,updateStatusThunk:t.updateStatusThunk,profile:t.profile})]})},y=r(364),w=r(7503),C={postsBlock:"Mypost_postsBlock__xXmBT",addContent:"Mypost_addContent__LEdQn",post:"Mypost_post__3Y39d"},S="Post_cont__fcLfe",b="Post_name__brF46",D="Post_span__bU1kt",R=r(1048),T=r(2793),B=r(8182),M=r(4419),F=r(7630),I=r(1046),Q=(0,r(9201).Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),W=r(5878),E=r(1217);function q(t){return(0,E.Z)("MuiAvatar",t)}(0,W.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var H=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],U=(0,F.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,e[r.variant],r.colorDefault&&e.colorDefault]}})((function(t){var e=t.theme,r=t.ownerState;return(0,T.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,T.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))})),z=(0,F.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(t,e){return e.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),X=(0,F.ZP)(Q,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(t,e){return e.fallback}})({width:"75%",height:"75%"});var L=u.forwardRef((function(t,e){var r=(0,I.Z)({props:t,name:"MuiAvatar"}),s=r.alt,n=r.children,a=r.className,i=r.component,o=void 0===i?"div":i,l=r.imgProps,d=r.sizes,f=r.src,h=r.srcSet,p=r.variant,m=void 0===p?"circular":p,x=(0,R.Z)(r,H),A=null,g=function(t){var e=t.crossOrigin,r=t.referrerPolicy,s=t.src,n=t.srcSet,a=u.useState(!1),i=(0,c.Z)(a,2),o=i[0],l=i[1];return u.useEffect((function(){if(s||n){l(!1);var t=!0,a=new Image;return a.onload=function(){t&&l("loaded")},a.onerror=function(){t&&l("error")},a.crossOrigin=e,a.referrerPolicy=r,a.src=s,n&&(a.srcset=n),function(){t=!1}}}),[e,r,s,n]),o}((0,T.Z)({},l,{src:f,srcSet:h})),k=f||h,Z=k&&"error"!==g,j=(0,T.Z)({},r,{colorDefault:!Z,component:o,variant:m}),_=function(t){var e=t.classes,r={root:["root",t.variant,t.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,M.Z)(r,q,e)}(j);return A=Z?(0,v.jsx)(z,(0,T.Z)({alt:s,src:f,srcSet:h,sizes:d,ownerState:j,className:_.img},l)):null!=n?n:k&&s?s[0]:(0,v.jsx)(X,{className:_.fallback}),(0,v.jsx)(U,(0,T.Z)({as:o,ownerState:j,className:(0,B.Z)(_.root,a),ref:e},x,{children:A}))})),O=function(t){var e=(0,y.v9)((function(t){return t.profilePage.profile.fullName}));return(0,v.jsxs)("div",{className:S,children:[(0,v.jsxs)("div",{className:b,children:[(0,v.jsx)(L,{alt:"Remy Sharp",src:A,sx:{width:56,height:56}}),(0,v.jsx)("span",{children:e})]}),(0,v.jsxs)("div",{className:D,children:[(0,v.jsx)("div",{children:t.message}),(0,v.jsxs)("span",{children:["Like ",t.likesCount]})]})]})},V=r(6139),G=r(704),Y="FormProfile_container__4u1Vt",J="FormProfile_button__MKrnA",K=r(3079),$=r(6589),tt=r(1686),et=(0,K.D)(300),rt=(0,G.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,v.jsx)("form",{onSubmit:t.handleSubmit,children:(0,v.jsxs)("div",{className:Y,children:[(0,v.jsx)("div",{children:(0,v.jsx)(V.Z,{component:$.II,name:"newPostText",validate:[K.C,et]})}),(0,v.jsx)("div",{children:(0,v.jsx)(tt.Z,{type:"submit",className:J,onSubmit:t.handleSubmit,children:"Add post"})})]})})})),st=(0,u.memo)((function(t){var e=t.posts.map((function(t){return(0,v.jsx)(O,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}));return(0,v.jsxs)("div",{className:C.postsBlock,children:[(0,v.jsx)("h3",{className:C.post,children:"My Post"}),(0,v.jsx)(rt,{onSubmit:function(e){t.addPost(e.newPostText)}}),(0,v.jsx)("div",{className:C.posts,children:e})]})})),nt=(0,y.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t((0,w.Pi)(e))}}}))(st),at="Profile_container__EjHQS",it=function(t){return(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:at,children:[(0,v.jsx)(N,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatusThunk:t.updateStatusThunk,updatePhoto:t.savePhoto}),(0,v.jsx)(nt,{})]})})},ot=r(2558),ut=r(5987),lt=["isAuth"],ct=function(t){return{isAuth:t.auth.isAuth}};var dt=r(7781),ft=function(t){(0,i.Z)(r,t);var e=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),e.apply(this,arguments)}return(0,a.Z)(r,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||null===this.props.authorizedUserId||(t=this.props.authorizedUserId.toString())||this.props.history.push("login"),this.props.ProfileThunk(t),this.props.getStatusThunk(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,r){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,v.jsx)(it,(0,s.Z)((0,s.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,savePhoto:this.props.savePhoto}))}}]),r}(u.Component),ht=(0,dt.qC)((0,y.$j)((function(t){return{profile:t.profilePage.profile,isAuth:t.auth.isAuth,status:t.profilePage.status,authorizedUserId:t.auth.id}}),{ProfileThunk:w.Ot,getStatusThunk:w.$b,updateStatusThunk:w.dw,savePhoto:w.Ju}),ot.EN,(function(t){return(0,y.$j)(ct)((function(e){var r=e.isAuth,n=(0,ut.Z)(e,lt);return console.log(r),r?(0,v.jsx)(t,(0,s.Z)({},n)):(0,v.jsx)(ot.l_,{to:"/login"})}))}))(ft)},3079:function(t,e,r){r.d(e,{C:function(){return s},D:function(){return n}});var s=function(t){if(!t)return"Field is required"},n=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},1686:function(t,e,r){var s=r(1941);e.Z=void 0;var n=s(r(5649)),a=r(184),i=(0,n.default)((0,a.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");e.Z=i},4599:function(t,e,r){t.exports=r.p+"static/media/user.53fd02f1899833f8847b.png"}}]);
//# sourceMappingURL=748.02086940.chunk.js.map