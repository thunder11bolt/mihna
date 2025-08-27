import React from 'react';

export default function CVExecutive({ data }: { data: any }) {
  const { name, title, summary, achievements, contacts } = data;
  return (
    <div style={{width:794,padding:26,background:'#fff',borderRadius:6,fontFamily:'Inter, Arial',color:'#0f1724'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <h1 style={{margin:0,fontSize:30}}>{name}</h1>
          <div style={{color:'#6b7280',fontWeight:600}}>{title}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontSize:13,color:'#6b7280'}}>{contacts.email}</div>
          <div style={{fontSize:13,color:'#6b7280'}}>{contacts.phone}</div>
        </div>
      </div>

      <section style={{marginTop:14}}>
        <h4 style={{marginBottom:6}}>نظرة عامة</h4>
        <p style={{margin:0,color:'#374151'}}>{summary}</p>
      </section>

      <section style={{marginTop:14}}>
        <h4 style={{marginBottom:6}}>إنجازات قيادية</h4>
        <ul style={{margin:0,paddingLeft:16}}>
          {achievements.map((a:string,i:number)=>(<li key={i} style={{marginBottom:6,color:'#374151'}}>{a}</li>))}
        </ul>
      </section>
    </div>
  );
}
