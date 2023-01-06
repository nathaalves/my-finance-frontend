var c=Object.defineProperty;var e=(t,n)=>c(t,"name",{value:n,configurable:!0});import{s as r}from"./styled-components.browser.esm.b3a2174f.js";import{a as d,j as i}from"./jsx-runtime.e48c0c92.js";function l(){return d(p,{children:[i("div",{}),i("div",{}),i("div",{}),i("div",{})]})}e(l,"Elipses");const p=r.div`
  & {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 8px;
    animation: container1 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: container2 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: container2 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: container3 0.6s infinite;
  }
  @keyframes container1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes container3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes container2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;function a({children:t,onClick:n,isActive:o=!0}){function s(){n&&n()}return e(s,"handleClick"),i(f,{onClick:s,isActive:o,disabled:!o,children:o?t:i(l,{})})}e(a,"Button");const f=r.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  margin: 25px auto 0 auto;

  opacity: ${t=>t.isActive?1:.5};
  background: linear-gradient(
    180deg,
    ${({theme:t})=>t.color.secondary},
    ${({theme:t})=>t.color.primary}
  );
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: ${({fontSize:t,theme:n})=>t?n.text.size[t]:n.text.size.xl};
  color: ${({theme:t})=>t.color.button.text};

  cursor: ${t=>t.isActive?"pointer":"default"};

  &:hover {
    opacity: ${t=>t.isActive?.9:.5};
  }
`;try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{isActive:{defaultValue:{value:"true"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:a.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch{}export{a as B};
//# sourceMappingURL=Button.a1586a90.js.map
