import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import CVClassic from '../components/CVClassic';
import CVCreative from '../components/CVCreative';
import CVExecutive from '../components/CVExecutive';
import { captureElementAsPdf } from '../utils/downloadPdf';

const DEFAULT_DATA = {
  name: 'حسين التميمي',
  title: 'مهندس برمجيات',
  email: 'hussein@example.com',
  summary: 'مهندس برمجيات بخبرة 5 سنوات في تطوير تطبيقات الويب والأنظمة الموزعة. مهتم بالـ AI وعمليات بناء المنتجات.',
  skills: ['JavaScript','React','Node.js','Docker','SQL'],
  experiences: [
    { role:'مهندس برمجيات', company:'شركة تقنية', period:'2021 - الآن', desc:'تطوير منصة تجارة إلكترونية' },
    { role:'مطور واجهات', company:'شركة ويب', period:'2019 - 2021', desc:'تصميم واجهات مستخدم تفاعلية' }
  ],
  education: [{ degree:'بكالوريوس هندسة', institute:'جامعة بغداد', year:'2018' }],
  achievements: ['زيادة أداء النظام بنسبة 40%','إدارة فريق 6 مطورين'],
  contacts: { email:'hussein@example.com', phone:'+9647701234567' }
};

export default function Home() {
  const [data, setData] = useState(DEFAULT_DATA);
  const [template, setTemplate] = useState<'classic'|'creative'|'executive'>('classic');
  const previewRef = useRef<HTMLDivElement | null>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setData((d:any)=>({...d,[name]:value}));
  }

  async function downloadPdf() {
    if (!previewRef.current) return alert('لم يتم العثور على المعاينة');
    const id = uuidv4();
    await captureElementAsPdf(previewRef.current, `${data.name.replace(/\s+/g,"_")}_${id}.pdf`);
  }

  return (
    <div style={{padding:24,fontFamily:'Inter, Arial'}}>
      <h2>مِهنة — معاينة القوالب</h2>

      <div style={{display:'flex',gap:16,marginTop:12}}>
        <div style={{flex:'0 0 320px'}}>
          <div>
            <label>الاسم</label>
            <input name='name' value={data.name} onChange={onChange} style={{width:'100%',padding:8,marginTop:6}}/>
          </div>
          <div style={{marginTop:8}}>
            <label>المسمى الوظيفي</label>
            <input name='title' value={data.title} onChange={onChange} style={{width:'100%',padding:8,marginTop:6}}/>
          </div>
          <div style={{marginTop:8}}>
            <label>البريد</label>
            <input name='email' value={data.email} onChange={onChange} style={{width:'100%',padding:8,marginTop:6}}/>
          </div>
          <div style={{marginTop:8}}>
            <label>الملخص</label>
            <textarea name='summary' value={data.summary} onChange={onChange} rows={4} style={{width:'100%',padding:8,marginTop:6}}/>
          </div>

          <div style={{marginTop:12,display:'flex',gap:8}}>
            <button onClick={()=>setTemplate('classic')} style={{padding:8,flex:1,background:template==='classic'?'#0a2463':'#e6edf9',color:template==='classic'?'#fff':'#0a2463'}}>Classic</button>
            <button onClick={()=>setTemplate('creative')} style={{padding:8,flex:1,background:template==='creative'?'#0a2463':'#e6edf9',color:template==='creative'?'#fff':'#0a2463'}}>Creative</button>
            <button onClick={()=>setTemplate('executive')} style={{padding:8,flex:1,background:template==='executive'?'#0a2463':'#e6edf9',color:template==='executive'?'#fff':'#0a2463'}}>Executive</button>
          </div>

          <div style={{marginTop:12,display:'flex',gap:8}}>
            <button onClick={downloadPdf} style={{flex:1,padding:10,background:'#D4AF37',border:'none',cursor:'pointer'}}>تحميل PDF</button>
          </div>
        </div>

        <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
          <div ref={previewRef} id='cv-preview' style={{transform:'scale(0.88)',transformOrigin:'top center'}}>
            {template==='classic' && <CVClassic data={data} />}
            {template==='creative' && <CVCreative data={data} />}
            {template==='executive' && <CVExecutive data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}
