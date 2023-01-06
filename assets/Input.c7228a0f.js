var m=Object.defineProperty;var i=(e,n)=>m(e,"name",{value:n,configurable:!0});import{s as a}from"./styled-components.browser.esm.b3a2174f.js";import{D as x}from"./DynamicIcon.78947e44.js";import{L as y}from"./Label.796e1f49.js";import{a as p,j as t}from"./jsx-runtime.e48c0c92.js";function o({label:e,type:n="text",name:u,icon:d,value:s,disabled:l=!1,onChange:c,onIconClick:r}){function f(){return!!r}return i(f,"hasOnIconClick"),p(g,{disabled:l,children:[p(h,{children:[t(y,{children:e}),t(I,{type:n,name:u,value:s,disabled:l,onChange:c,required:!0})]}),t(v,{onClick:r,pointer:f(),children:t(x,{name:d})})]})}i(o,"Input");const g=a.div`
  display: flex;

  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding-left: 15px;
  padding: 10px 10px 10px 16px;

  background-color: ${({disabled:e,theme:n})=>e?n.color.input.locked:n.color.input.active};

  cursor: ${({disabled:e})=>e?"default":"text"};

  &:focus-within {
    border: 2px solid ${({theme:e})=>e.color.primary};
    padding: 8px 8px 8px 14px;
  }

  &:focus-within svg {
    color: ${({theme:e})=>e.color.primary};
  }
`,I=a.input`
  all: unset;

  width: calc(100% - 14px);
  height: 25px;
  font-family: ${({theme:e})=>e.text.fontFamily.base};
  font-weight: 400;
  font-size: 18px;
  color: ${({disabled:e,theme:n})=>e?n.color.input.label:n.color.text};
`,h=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`,v=a.div`
  display: flex;
  align-items: center;

  svg {
    margin: auto 0;
    font-size: 1.5rem;
    color: ${({theme:e})=>e.color.input.label};
  }

  cursor: ${({pointer:e})=>e?"pointer":"default"};
`;try{o.displayName="Input",o.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input.tsx#Input"]={docgenInfo:o.__docgenInfo,name:"Input",path:"src/components/Input.tsx#Input"})}catch{}export{o as I};
//# sourceMappingURL=Input.c7228a0f.js.map
