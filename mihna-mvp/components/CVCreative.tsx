import React from 'react';

export default function CVCreative({ data }: { data: any }) {
  const { name, title, summary, skills, experiences } = data;
  return (
    <div style={{
      width:794,padding:22,background:'#0a2463',color:'#fff',borderRadius:8,fontFamily:"'Cairo', sans-serif"
    }}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 260px',gap:16,alignItems:'start'}}>
        <div>
          <h1 style={{margin:0,fontSize:34}}>{name}</h1>
          <div style={{opacity:0.9,marginTop:6}}>{title}</div>
          <p style={{marginTop:12,opacity:0.95,lineHeight:1.4}}>{summary}</p>

          <h3 style={{marginTop:16}}>الخبرات</h3>
          {experiences.map((e:any,i:number)=>(
            <div key={i} style={{marginBottom:10}}>
              <div style={{fontWeight:700}}>{e.role}</div>
              <div style={{fontSize:12,opacity:0.85}}>{e.company} • {e.period}</div>
            </div>
          ))}
        </div>

        <aside style={{background:'#fff',color:'#0a2463',padding:12,borderRadius:8}}>
          <h4 style={{marginTop:0}}>مهارات</h4>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {skills.map((s:string,i:number)=>(<span key={i} style={{background:'#edf2ff',padding:'6px 8px',borderRadius:999,fontSize:12}}>{s}</span>))}
          </div>

          <div style={{marginTop:12}}>
            <h4 style={{margin:0}}>اتصل</h4>
            <div style={{fontSize:13,marginTop:6}}>{data.email}</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
