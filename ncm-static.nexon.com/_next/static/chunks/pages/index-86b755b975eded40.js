(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{43916:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(83689)}])},12442:function(e,t,n){"use strict";n.d(t,{V:function(){return getMonthlyPrograms}});var o=n(55189),r=JSON.parse('{"Z":"/programs/months"}'),getMonthlyPrograms=function(e){return o.ZP.get(r.Z,{params:e})}},10145:function(e,t,n){"use strict";n.d(t,{d:function(){return getNews},I:function(){return getNewsList}});var o=n(72253),r=n(14932),a=n(47702),i=n(55189),s={Z:"/news"},getNewsList=function(e){var t=e.pageParam,n=e.filter,u=(0,a._)(e,["pageParam","filter"]);return i.ZP.get(s.Z,{params:(0,o._)((0,r._)((0,o._)({},n),{page:void 0===t?0:t}),u)})},getNews=function(e){var t=e.id;return i.ZP.get("".concat(s.Z,"/").concat(t))}},83689:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var o,r=n(11010),a=n(91309),i=n(97582),s=n(85893),u=n(67294),c=n(9008),d=n.n(c),l=n(30381),p=n.n(l),m=n(66728),g=n(10145),f=n(12442),_=n(67051),h=n(18376),v=n(98872),w=n(56321),y=n(18872),I=n(47612),C=n.n(I),N=n(23051),Carousel_Carousel=function(e){var t=e.popups,n=(0,u.useRef)(0),o=(0,a._)((0,u.useState)(0),2),r=o[0],i=o[1],c=t.length,d=(0,u.useCallback)(function(){i(function(e){return e>=c-1?0:e+1})},[c]);(0,u.useEffect)(function(){return n.current=setInterval(d,3e3),function(){return clearInterval(n.current)}},[d,c]);var moveCarousel=function(e){clearInterval(n.current),i(e),n.current=setInterval(d,3e3)},openLink=function(e){e&&window.open(e,"_blank")};return(0,s.jsxs)("div",{className:C().container,children:[(0,s.jsx)("ul",{className:C().imageContainer,children:t.map(function(e,t){return(0,s.jsx)("li",{className:(0,y.cx)(C().image,r===t&&C().showImage),children:(0,s.jsx)(N.AX,{src:e.imageURL,alt:"popup-image",onClick:function(){return openLink(e.linkURL)}})},e.popupID)})}),t.length>1&&(0,s.jsx)("ul",{className:C().indicatorContainer,children:t.map(function(e,t){return(0,s.jsx)("li",{className:(0,y.cx)(C().indicator,r===t&&C().selectedIndicator),onClick:function(){return moveCarousel(t)}},e.popupID)})})]})},P=n(13256),b=n.n(P),PopupModal=function(e){var t=e.popups,n=e.onClose,o=e.resolve;e.reject;var r=(0,a._)((0,u.useState)(!1),2),i=r[0],c=r[1];return(0,s.jsx)("div",{className:b().dimmed,children:(0,s.jsxs)("div",{className:b().container,children:[(0,s.jsx)("div",{className:b().title,children:"Nexon Computer Museum"}),(0,s.jsx)("div",{className:b().carouselContainer,children:(0,s.jsx)(Carousel_Carousel,{popups:t})}),(0,s.jsxs)("div",{className:b().footer,children:[(0,s.jsx)(N.XZ,{className:b().todayNotShow,darkMode:!0,checked:i,onChange:function(e){c(e.target.checked)},children:"오늘 하루 그만보기"}),(0,s.jsx)("button",{className:b().closeButton,onClick:function(){return n(),o({confirm:!0,todayNotShow:i})},children:"닫기"})]})]})})},x={open:function(e){var t=e.props,n=e.uniqueID;return(0,w.e)(PopupModal,{props:t,uniqueID:n})}},L=n(55189),fetchPopups=function(e){var t=e.date;return L.ZP.get("/popups",{params:{date:t}})},parseProgramsForSwipeBoard=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null==e?void 0:e.map(function(e){var t=e.program;return{key:"program-".concat(t.boardId),boardId:t.boardId,href:"/monthlyprogram",imageLocation:"server",imageURL:t.imageURL,createdDate:t.createdDate,type:t.type,title:t.title}})},parseNewsForSwipeBoard=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null==e?void 0:e.map(function(e){return{key:"program-".concat(e.boardId),boardId:e.boardId,href:"/news/detail?id=".concat(e.boardId),imageLocation:"server",imageURL:e.imageURL,createdDate:e.createdDate,type:e.type,title:e.title}})},Home=function(e){var t,n,o=e.newsList,a=void 0===o?{}:o,c=e.monthlyProgram,l=void 0===c?{}:c,m=(a=a||{}).content,g=null!==(n=null==l?void 0:l.programs)&&void 0!==n?n:[],f=parseNewsForSwipeBoard(void 0===m?[]:m),_=parseProgramsForSwipeBoard(g);(0,u.useEffect)(function(){h()},[]);var h=(t=(0,r._)(function(){var e,t,n;return(0,i.Jh)(this,function(o){switch(o.label){case 0:return[4,fetchPopups({date:p()().format("YYYY-MM-DDTHH:mm:ss")})];case 1:if(0===(e=o.sent().data.data).length||(t=localStorage.getItem("noPopupDate"),p()(t).isAfter(p()())))return[2];return[4,x.open({props:{popups:e.splice(0,5)},uniqueID:"main-popup"})];case 2:if(!o.sent().todayNotShow)return[2];return n=p()().add(1,"days").format("YYYY-MM-DD HH:mm:ss"),localStorage.setItem("noPopupDate",n),[2]}})}),function(){return t.apply(this,arguments)});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d(),{children:(0,s.jsx)("title",{children:"Nexon Computer Museum - Main"})}),(0,s.jsx)(v.o,{board:{news:f,guides:[{key:"guide-1",boardId:1,href:"/guide#guideHours",imageLocation:"assets",imageURL:"../static/images/main/d-news/observation_time_color.svg",createdDate:null,type:"information",title:"관람 안내_시간"},{key:"guide-2",boardId:2,href:"/guide#guideAdmission",imageLocation:"assets",imageURL:"../static/images/main/d-news/observation_fare_color.svg",createdDate:null,type:"information",title:"관람 안내_요금"},{key:"guide-3",boardId:3,href:"/guide#guideItems",imageLocation:"assets",imageURL:"../static/images/main/d-news/gigaticket_composition_color.svg",createdDate:null,type:"information",title:"관람 안내_기가티켓 구성"},{key:"guide-4",boardId:4,href:"/guide#guideDiscount",imageLocation:"assets",imageURL:"../static/images/main/d-news/discount_color.svg",createdDate:null,type:"information",title:"관람 안내_할인"},{key:"guide-5",boardId:5,href:"/guide#guideMap",imageLocation:"assets",imageURL:"../static/images/main/d-news/way_to_come_color.svg",createdDate:null,type:"information",title:"관람 안내_오시는 길"}],programs:_}})]})};Home.getInitialProps=(o=(0,r._)(function(e){var t,n,o,r,s,u,c;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,(0,g.I)({filter:{size:5,direction:"DESC"}})];case 1:return o=i.sent().data,[4,(0,f.V)({offset:0,limit:1})];case 2:return r=i.sent(),u=(0,a._)(null!==(s=null==r?void 0:null===(n=r.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.items)&&void 0!==s?s:[],1)[0],[2,{newsList:null==o?void 0:o.data,monthlyProgram:u}];case 3:return i.sent(),c=e.res,[2,(0,_.wF)({res:c,path:"/notfound"})];case 4:return[2]}})}),function(e){return o.apply(this,arguments)}),Home.getLayout=function(e){return(0,s.jsx)(h.H,{children:e})};var k=(0,m.Q)(Home)},47612:function(e){e.exports={container:"Carousel_container__yGih3",imageContainer:"Carousel_imageContainer__SSgQp",image:"Carousel_image__cWryQ",showImage:"Carousel_showImage__6ibTi",indicatorContainer:"Carousel_indicatorContainer__Uqgcr",indicator:"Carousel_indicator__brsj2",selectedIndicator:"Carousel_selectedIndicator__U8gub"}},13256:function(e){e.exports={dimmed:"Popup_dimmed__fXhH6",container:"Popup_container__4LNea",title:"Popup_title__oybl3",carouselContainer:"Popup_carouselContainer__g5g06",footer:"Popup_footer__B04im",todayNotShow:"Popup_todayNotShow__InJRq",labelText:"Popup_labelText__R3ejJ",closeButton:"Popup_closeButton__mJM9n"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=43916)}),_N_E=e.O()}]);
//# sourceMappingURL=index-86b755b975eded40.js.map