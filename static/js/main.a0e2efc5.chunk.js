(this["webpackJsonpdice-roll"]=this["webpackJsonpdice-roll"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(2),c=n.n(s),a=n(13),o=n.n(a),l=(n(19),n(5)),r=n(6),h=n(7),u=n(9),d=n(8),j=(n(20),n(21),n(3)),b=n(4),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.face,n=e.rolling;switch(t){case"one":return Object(i.jsx)(j.a,{icon:b.c,className:"Die ".concat(n&&"Die-shaking")});case"two":return Object(i.jsx)(j.a,{icon:b.f,className:"Die ".concat(n&&"Die-shaking")});case"three":return Object(i.jsx)(j.a,{icon:b.e,className:"Die ".concat(n&&"Die-shaking")});case"four":return Object(i.jsx)(j.a,{icon:b.b,className:"Die ".concat(n&&"Die-shaking")});case"five":return Object(i.jsx)(j.a,{icon:b.a,className:"Die ".concat(n&&"Die-shaking")});case"six":return Object(i.jsx)(j.a,{icon:b.d,className:"Die ".concat(n&&"Die-shaking")})}}}]),n}(s.Component),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).sidesText=["one","two","three","four","five","six"],i.state={rolling:!1,diceCount:1,sideCount:6,sides:["one","two","three","four","five","six"]},i.roll=i.roll.bind(Object(h.a)(i)),i}return Object(r.a)(n,[{key:"roll",value:function(){var e=this;this.setState({rolling:!0}),setTimeout((function(){e.setState({rolling:!1})}),1e3)}},{key:"handleChange",value:function(e){this.setState({diceCount:e.target.value})}},{key:"handleSideChange",value:function(e){this.setState({sideCount:e.target.value})}},{key:"handleClick",value:function(){for(var e=[],t=0;t<this.state.sideCount;t++)e.push(this.sidesText[t]);this.setState({sides:e})}},{key:"render",value:function(){var e=this.state.rolling?"RollDice-rolling":"",t=this.state.rolling,n=this.state.sides,s=[];if(n.length>0)for(var c=0;c<this.state.diceCount;c++)s.push(Object(i.jsx)(f,{face:n[Math.floor(Math.random()*n.length)],rolling:t},c));return Object(i.jsxs)("div",{className:"RollDice",children:[Object(i.jsxs)("div",{class:"rollDiceControl",children:[Object(i.jsxs)("div",{class:"form-control",children:[Object(i.jsx)("label",{children:"No.of Dice"}),Object(i.jsx)("input",{type:"number",min:"1",value:this.state.diceCount,onChange:this.handleChange.bind(this)})]}),Object(i.jsxs)("div",{class:"form-control",children:[Object(i.jsx)("label",{children:"No.of Sides"}),Object(i.jsx)("input",{type:"number",min:"1",max:"6",value:this.state.sideCount,onChange:this.handleSideChange.bind(this)})]}),Object(i.jsx)("button",{onClick:this.handleClick.bind(this),children:"Update Dice"})]}),Object(i.jsx)("div",{className:"RollDice-container",children:s}),Object(i.jsx)("button",{className:e,disabled:this.state.rolling,onClick:this.roll,children:this.state.rolling?"Rolling":"Roll Dice!"})]})}}]),n}(s.Component);var O=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(g,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.a0e2efc5.chunk.js.map