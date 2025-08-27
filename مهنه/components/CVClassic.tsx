import React from 'react';

export default function CVClassic({ data }: { data: any }) {
  const { name, title, summary, skills, experiences, education } = data;
  return (
    <div style={{
      width: 794,
      maxWidth: '100%',
      padding: 28,
      background: '#fff',
      color: '#0f1724',
      fontFamily: "'Inter', Arial, sans-serif",
      borderRadius: 6,
      boxShadow: '0 6px 18px rgba(10,36,99,0.06)'
    }} id='cv-classic'>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:18}}>
        <div>
          <h1 style={{margin:0,fontSize:28}}>{name}</h1>
          <div style={{color:'#64748b',fontWeight:600, marginTop:4}}>{title}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontSize:12,color:'#94a3b8'}}>Email</div>
          <div style={{fontWeight:600}}>{data.email}</div>
        </div>
      </header>

      <section style={{margin:'10px 0 18px'}}>
        <h3 style={{margin:'0 0 6px'}}>ملخص</h3>
        <p style={{margin:0,color:'#475569'}}>{summary}</p>
      </section>

      <div style={{display:'flex',gap:20}}>
        <div style={{flex:1}}>
          <h4 style={{marginBottom:8}}>الخبرات</h4>
          {experiences.map((e:any, i:number)=>(
            <div key={i} style={{marginBottom:12}}>
              <div style={{fontWeight:700}}>{e.role} — <span style={{color:'#475569',fontWeight:600}}>{e.company}</span></div>
              <div style={{fontSize:12,color:'#94a3b8'}}>{e.period}</div>
              <p style={{marginTop:6,color:'#475569'}}>{e.desc}</p>
            </div>
          ))}
        </div>

        <aside style={{width:260}}>
          <h4 style={{marginTop:0}}>المهارات</h4>
          <ul style={{listStyle:'none',padding:0,margin:0}}>
            {skills.map((s:string,i:number)=>(<li key={i} style={{padding:'6px 0',color:'#0f1724'}}>• {s}</li>))}
          </ul>

          <h4 style={{marginTop:16}}>التعليم</h4>
          {education.map((ed:any,i:number)=>(
            <div key={i} style={{marginBottom:8}}>
              <div style={{fontWeight:700}}>{ed.degree}</div>
              <div style={{fontSize:12,color:'#94a3b8'}}>{ed.institute} — {ed.year}</div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
