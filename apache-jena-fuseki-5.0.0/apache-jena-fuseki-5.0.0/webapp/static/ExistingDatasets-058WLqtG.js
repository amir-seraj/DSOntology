import{M as v}from"./Menu-5DZE3X_K.js";import{_ as k,bI as f,bL as y,bW as $,bT as C,bX as P,bY as w,bN as g,bR as D,r as d,a as T,b as e,d as i,bB as m,o as A,Y as c,t as u}from"./index-SkN_20H7.js";import{P as B}from"./bootstrap.esm-IhdfOeVH.js";import{a as b}from"./index-bVS_vDGC.js";f.add(y,$,C);const I={name:"ManageExistingDatasets",mixins:[P],...w,data(){return{currentPopover:null}},components:{FontAwesomeIcon:g,Menu:v,"table-listing":D},methods:{async deleteDataset(t){await this.$fusekiService.deleteDataset(t),b(this,`Dataset ${t} deleted`),this.initializeData()},async backupDataset(t){const r=(await this.$fusekiService.backupDataset(t)).data.taskId;b(this,`Backup task ${r} scheduled. Click on tasks for more.`),this.initializeData()},hidePopover(){this.currentPopover.hide(),this.currentPopover=null},showPopover(t){if(this.currentPopover!==null){if(this.currentPopover.__id===t)return;this.hidePopover()}const a={html:!0,content:this.$refs[`${t}-content`],trigger:"manual",placement:"auto"},r=this.$refs[`${t}-button`];this.currentPopover=new B(r,a),this.currentPopover.__id=t,this.currentPopover.show()}}},M={class:"container-fluid"},N={class:"row mt-4"},x={class:"col-12"},E=e("h2",null,"Manage datasets",-1),q={class:"card"},F={class:"card-header"},S={class:"card-body"},V={class:"row"},z={class:"col"},L=["onClick"],Y=e("span",{class:"ms-1"},"query",-1),G={class:"popover",role:"popover",hidden:""},O=e("div",null," Confirm ",-1),R={class:"text-center"},W={class:"alert alert-danger"},X=e("br",null,null,-1),j=e("br",null,null,-1),H=["onClick"],J=["id","onClick"],K=e("span",{class:"ms-1"},"remove",-1),Q={class:"popover",role:"popover",hidden:""},U=e("div",null," Confirm ",-1),Z={class:"text-center"},ee={class:"alert alert-danger"},te=e("br",null,null,-1),se=e("br",null,null,-1),oe=["onClick"],ne=["id","onClick"],ie=e("span",{class:"ms-1"},"backup",-1),ae=["onClick"],ce=e("span",{class:"ms-1"},"add data",-1),le=["onClick"],re=e("span",{class:"ms-1"},"info",-1);function de(t,a,r,me,ue,o){const p=d("Menu"),_=d("router-link"),l=d("FontAwesomeIcon"),h=d("table-listing");return A(),T("div",M,[e("div",N,[e("div",x,[E,e("div",q,[e("nav",F,[i(p)]),e("div",S,[e("div",null,[e("div",V,[e("div",z,[i(h,{fields:t.fields,items:t.items,"is-busy":t.isBusy},{empty:m(()=>[e("h4",null,[c(" No datasets created - "),i(_,{to:"/manage/new"},{default:m(()=>[c(" add one ")]),_:1})])]),"cell(actions)":m(s=>[e("button",{onClick:n=>t.$router.push(`/dataset${s.item.name}/query`),type:"button",class:"btn btn-primary me-0 me-md-2 mb-2 mb-md-0 d-block d-md-inline-block"},[i(l,{icon:"question-circle"}),Y],8,L),e("div",G,[e("div",{ref:`delete-dataset-${s.item.name}-content`},[O,e("div",R,[e("div",W,[c(" Are you sure you want to delete dataset "+u(s.item.name)+"?",1),X,j,c("This action cannot be reversed. ")]),e("button",{onClick:n=>{o.hidePopover(),o.deleteDataset(s.item.name)},class:"btn btn-primary me-2"}," submit ",8,H),e("button",{onClick:a[0]||(a[0]=n=>o.hidePopover()),type:"button",class:"btn btn-secondary"}," cancel ")])],512)]),e("button",{id:`delete-dataset-${s.item.name}-button`,ref:`delete-dataset-${s.item.name}-button`,onClick:n=>o.showPopover(`delete-dataset-${s.item.name}`),type:"button",href:"#",class:"btn btn-primary me-0 me-md-2 mb-2 mb-md-0 d-block d-md-inline-block"},[i(l,{icon:"times-circle"}),K],8,J),e("div",Q,[e("div",{ref:`backup-dataset-${s.item.name}-content`},[U,e("div",Z,[e("div",ee,[c(" Are you sure you want to create a backup of dataset "+u(s.item.name)+"?",1),te,se,c("This action may take some time to complete. ")]),e("button",{onClick:n=>{o.hidePopover(),o.backupDataset(s.item.name)},type:"button",class:"btn btn-primary me-2"}," submit ",8,oe),e("button",{onClick:a[1]||(a[1]=n=>o.hidePopover()),type:"button",class:"btn btn-secondary"}," cancel ")])],512)]),e("button",{id:`backup-dataset-${s.item.name}-button`,ref:`backup-dataset-${s.item.name}-button`,onClick:n=>o.showPopover(`backup-dataset-${s.item.name}`),type:"button",href:"#",class:"btn btn-primary me-0 me-md-2 me-0 mb-2 mb-md-0 d-block d-md-inline-block"},[i(l,{icon:"download"}),ie],8,ne),e("button",{onClick:n=>t.$router.push(`/dataset${s.item.name}/upload`),type:"button",class:"btn btn-primary me-0 me-md-2 me-0 mb-2 mb-md-0 d-block d-md-inline-block"},[i(l,{icon:"upload"}),ce],8,ae),e("button",{onClick:n=>t.$router.push(`/dataset${s.item.name}/info`),type:"button",class:"btn btn-primary me-0 mb-md-0 d-block d-md-inline-block"},[i(l,{icon:"tachometer-alt"}),re],8,le)]),_:1},8,["fields","items","is-busy"])])])])])])])])])}const ve=k(I,[["render",de]]);export{ve as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhpc3RpbmdEYXRhc2V0cy0wNThXTHF0Ry5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXdzL21hbmFnZS9FeGlzdGluZ0RhdGFzZXRzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tXG4gICBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lIG9yIG1vcmVcbiAgIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aFxuICAgdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuICAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8gWW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjBcbiAgICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGhcbiAgIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbi0tPlxuXG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IG10LTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgPGgyPk1hbmFnZSBkYXRhc2V0czwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPG5hdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICA8dGFibGUtbGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICA6ZmllbGRzPVwiZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICA6aXMtYnVzeT1cImlzQnVzeVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZW1wdHk+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gZGF0YXNldHMgY3JlYXRlZCAtIDxyb3V0ZXItbGluayB0bz1cIi9tYW5hZ2UvbmV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCBvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNjZWxsKGFjdGlvbnMpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaChgL2RhdGFzZXQke2RhdGEuaXRlbS5uYW1lfS9xdWVyeWApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbWUtMCBtZS1tZC0yIG1iLTIgbWItbWQtMCBkLWJsb2NrIGQtbWQtaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJxdWVzdGlvbi1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtcy0xXCI+cXVlcnk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250ZW50IGZvciB0aGUgZGVsZXRlIGRhdGFzZXQgcG9wb3ZlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJwb3BvdmVyXCIgaGlkZGVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6cmVmPVwiYGRlbGV0ZS1kYXRhc2V0LSR7ZGF0YS5pdGVtLm5hbWV9LWNvbnRlbnRgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBkYXRhc2V0IHt7IGRhdGEuaXRlbS5uYW1lIH19PzxiciAvPjxiciAvPlRoaXMgYWN0aW9uIGNhbm5vdCBiZSByZXZlcnNlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoaWRlUG9wb3ZlcigpO2RlbGV0ZURhdGFzZXQoZGF0YS5pdGVtLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImhpZGVQb3BvdmVyKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICA6aWQ9XCJgZGVsZXRlLWRhdGFzZXQtJHtkYXRhLml0ZW0ubmFtZX0tYnV0dG9uYFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmVmPVwiYGRlbGV0ZS1kYXRhc2V0LSR7ZGF0YS5pdGVtLm5hbWV9LWJ1dHRvbmBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd1BvcG92ZXIoYGRlbGV0ZS1kYXRhc2V0LSR7ZGF0YS5pdGVtLm5hbWV9YClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtZS0wIG1lLW1kLTIgbWItMiBtYi1tZC0wIGQtYmxvY2sgZC1tZC1pbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInRpbWVzLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1zLTFcIj5yZW1vdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwicG9wb3ZlclwiIGhpZGRlbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnJlZj1cImBiYWNrdXAtZGF0YXNldC0ke2RhdGEuaXRlbS5uYW1lfS1jb250ZW50YFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjcmVhdGUgYSBiYWNrdXAgb2YgZGF0YXNldCB7eyBkYXRhLml0ZW0ubmFtZSB9fT88YnIgLz48YnIgLz5UaGlzIGFjdGlvbiBtYXkgdGFrZSBzb21lIHRpbWUgdG8gY29tcGxldGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaGlkZVBvcG92ZXIoKTtiYWNrdXBEYXRhc2V0KGRhdGEuaXRlbS5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImhpZGVQb3BvdmVyKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICA6aWQ9XCJgYmFja3VwLWRhdGFzZXQtJHtkYXRhLml0ZW0ubmFtZX0tYnV0dG9uYFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmVmPVwiYGJhY2t1cC1kYXRhc2V0LSR7ZGF0YS5pdGVtLm5hbWV9LWJ1dHRvbmBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd1BvcG92ZXIoYGJhY2t1cC1kYXRhc2V0LSR7ZGF0YS5pdGVtLm5hbWV9YClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtZS0wIG1lLW1kLTIgbWUtMCBtYi0yIG1iLW1kLTAgZC1ibG9jayBkLW1kLWlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZG93bmxvYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtcy0xXCI+YmFja3VwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaChgL2RhdGFzZXQke2RhdGEuaXRlbS5uYW1lfS91cGxvYWRgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTAgbWUtbWQtMiBtZS0wIG1iLTIgbWItbWQtMCBkLWJsb2NrIGQtbWQtaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1cGxvYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtcy0xXCI+YWRkIGRhdGE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKGAvZGF0YXNldCR7ZGF0YS5pdGVtLm5hbWV9L2luZm9gKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTAgbWItbWQtMCBkLWJsb2NrIGQtbWQtaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ0YWNob21ldGVyLWFsdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1zLTFcIj5pbmZvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC90YWJsZS1saXN0aW5nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTWVudSBmcm9tICdAL2NvbXBvbmVudHMvbWFuYWdlL01lbnUudnVlJ1xuaW1wb3J0IGxpc3REYXRhc2V0cyBmcm9tICdAL21peGlucy9saXN0LWRhdGFzZXRzJ1xuaW1wb3J0IGxpc3REYXRhc2V0c05hdmlnYXRpb25HdWFyZHMgZnJvbSAnQC9taXhpbnMvbGlzdC1kYXRhc2V0cy1uYXZpZ2F0aW9uLWd1YXJkcydcbmltcG9ydCBUYWJsZUxpc3RpbmcgZnJvbSAnQC9jb21wb25lbnRzL2RhdGFzZXQvVGFibGVMaXN0aW5nLnZ1ZSdcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5pbXBvcnQgeyBmYVRpbWVzQ2lyY2xlLCBmYURvd25sb2FkLCBmYVRhY2hvbWV0ZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJ2Jvb3RzdHJhcCdcbmltcG9ydCB7IGRpc3BsYXlOb3RpZmljYXRpb24gfSBmcm9tICdAL3V0aWxzJ1xuXG5saWJyYXJ5LmFkZChmYVRpbWVzQ2lyY2xlLCBmYURvd25sb2FkLCBmYVRhY2hvbWV0ZXJBbHQpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01hbmFnZUV4aXN0aW5nRGF0YXNldHMnLFxuXG4gIG1peGluczogW1xuICAgIGxpc3REYXRhc2V0c1xuICBdLFxuXG4gIC4uLmxpc3REYXRhc2V0c05hdmlnYXRpb25HdWFyZHMsXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRQb3BvdmVyOiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBGb250QXdlc29tZUljb24sXG4gICAgTWVudSxcbiAgICAndGFibGUtbGlzdGluZyc6IFRhYmxlTGlzdGluZ1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBkZWxldGVEYXRhc2V0IChkYXRhc2V0TmFtZSkge1xuICAgICAgYXdhaXQgdGhpcy4kZnVzZWtpU2VydmljZS5kZWxldGVEYXRhc2V0KGRhdGFzZXROYW1lKVxuICAgICAgZGlzcGxheU5vdGlmaWNhdGlvbih0aGlzLCBgRGF0YXNldCAke2RhdGFzZXROYW1lfSBkZWxldGVkYClcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGEoKVxuICAgIH0sXG4gICAgYXN5bmMgYmFja3VwRGF0YXNldCAoZGF0YXNldE5hbWUpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy4kZnVzZWtpU2VydmljZS5iYWNrdXBEYXRhc2V0KGRhdGFzZXROYW1lKVxuICAgICAgY29uc3QgdGFza0lkID0gcmVzcG9uc2UuZGF0YS50YXNrSWRcbiAgICAgIGRpc3BsYXlOb3RpZmljYXRpb24odGhpcywgYEJhY2t1cCB0YXNrICR7dGFza0lkfSBzY2hlZHVsZWQuIENsaWNrIG9uIHRhc2tzIGZvciBtb3JlLmApXG4gICAgICB0aGlzLmluaXRpYWxpemVEYXRhKClcbiAgICB9LFxuICAgIGhpZGVQb3BvdmVyICgpIHtcbiAgICAgIHRoaXMuY3VycmVudFBvcG92ZXIuaGlkZSgpXG4gICAgICB0aGlzLmN1cnJlbnRQb3BvdmVyID0gbnVsbFxuICAgIH0sXG4gICAgc2hvd1BvcG92ZXIgKGlkKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UG9wb3ZlciAhPT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UG9wb3Zlci5fX2lkID09PSBpZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKVxuICAgICAgfVxuICAgICAgY29uc3QgcG9wb3Zlck9wdGlvbnMgPSB7XG4gICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuJHJlZnNbYCR7aWR9LWNvbnRlbnRgXSxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIHBsYWNlbWVudDogJ2F1dG8nXG4gICAgICB9XG4gICAgICBjb25zdCBwb3BvdmVyRWxlbWVudCA9IHRoaXMuJHJlZnNbYCR7aWR9LWJ1dHRvbmBdXG4gICAgICB0aGlzLmN1cnJlbnRQb3BvdmVyID0gbmV3IFBvcG92ZXIocG9wb3ZlckVsZW1lbnQsIHBvcG92ZXJPcHRpb25zKVxuICAgICAgdGhpcy5jdXJyZW50UG9wb3Zlci5fX2lkID0gaWRcbiAgICAgIHRoaXMuY3VycmVudFBvcG92ZXIuc2hvdygpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiZmFUaW1lc0NpcmNsZSIsImZhRG93bmxvYWQiLCJmYVRhY2hvbWV0ZXJBbHQiLCJfc2ZjX21haW4iLCJsaXN0RGF0YXNldHMiLCJsaXN0RGF0YXNldHNOYXZpZ2F0aW9uR3VhcmRzIiwiRm9udEF3ZXNvbWVJY29uIiwiTWVudSIsIlRhYmxlTGlzdGluZyIsImRhdGFzZXROYW1lIiwiZGlzcGxheU5vdGlmaWNhdGlvbiIsInRhc2tJZCIsImlkIiwicG9wb3Zlck9wdGlvbnMiLCJwb3BvdmVyRWxlbWVudCIsIlBvcG92ZXIiLCJfaG9pc3RlZF8xIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82IiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2hvaXN0ZWRfMTAiLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEzIiwiX2hvaXN0ZWRfMTQiLCJfaG9pc3RlZF8xNSIsIl9ob2lzdGVkXzE4IiwiX2hvaXN0ZWRfMTkiLCJfaG9pc3RlZF8yMCIsIl9ob2lzdGVkXzIyIiwiX2hvaXN0ZWRfMjMiLCJfaG9pc3RlZF8yNCIsIl9ob2lzdGVkXzI3IiwiX2hvaXN0ZWRfMjgiLCJfaG9pc3RlZF8yOSIsIl9ob2lzdGVkXzMwIiwiX2hvaXN0ZWRfMzEiLCJfaG9pc3RlZF8zMiIsIl9ob2lzdGVkXzMzIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X01lbnUiLCJfY29tcG9uZW50X3RhYmxlX2xpc3RpbmciLCJfY3R4IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jb21wb25lbnRfcm91dGVyX2xpbmsiLCJfd2l0aEN0eCIsImRhdGEiLCIkZXZlbnQiLCJfY29tcG9uZW50X0ZvbnRBd2Vzb21lSWNvbiIsIl9ob2lzdGVkXzEyIiwiX2hvaXN0ZWRfMTYiLCJfaG9pc3RlZF8xNyIsIiRvcHRpb25zIiwiX2hvaXN0ZWRfMjEiLCJfaG9pc3RlZF8yNSIsIl9ob2lzdGVkXzI2Il0sIm1hcHBpbmdzIjoiZ1NBb0tBQSxFQUFRLElBQUlDLEVBQWVDLEVBQVlDLENBQWUsRUFFdEQsTUFBS0MsRUFBVSxDQUNiLEtBQU0seUJBRU4sT0FBUSxDQUNOQyxDQUNELEVBRUQsR0FBR0MsRUFFSCxNQUFRLENBQ04sTUFBTyxDQUNMLGVBQWdCLElBQ2xCLENBQ0QsRUFFRCxXQUFZLENBQ1YsZ0JBQUFDLEVBQ0EsS0FBQUMsRUFDQSxnQkFBaUJDLENBQ2xCLEVBRUQsUUFBUyxDQUNQLE1BQU0sY0FBZUMsRUFBYSxDQUNoQyxNQUFNLEtBQUssZUFBZSxjQUFjQSxDQUFXLEVBQ25EQyxFQUFvQixLQUFNLFdBQVdELENBQVcsVUFBVSxFQUMxRCxLQUFLLGVBQWUsQ0FDckIsRUFDRCxNQUFNLGNBQWVBLEVBQWEsQ0FFaEMsTUFBTUUsR0FEVyxNQUFNLEtBQUssZUFBZSxjQUFjRixDQUFXLEdBQzVDLEtBQUssT0FDN0JDLEVBQW9CLEtBQU0sZUFBZUMsQ0FBTSxzQ0FBc0MsRUFDckYsS0FBSyxlQUFlLENBQ3JCLEVBQ0QsYUFBZSxD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
