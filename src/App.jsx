import { useState, useRef, useEffect } from "react";

// ─── THEMES ───────────────────────────────────────────────────────────────────
const THEMES = {
  dark: {
    id:"dark",
    bg:"#0F1C2A", bgDeep:"#0A1520", bgCard:"rgba(28,47,66,0.94)", bgCard2:"rgba(36,53,72,0.96)",
    text:"#F4EDD8", textMuted:"#6A8099", textFaint:"#2A3F54",
    gold:"#C9A84C", goldLight:"#E8C96A", goldDim:"#8B6030",
    earth:"#A06840",
    border:"rgba(42,63,84,1)", borderGold:"rgba(201,168,76,0.45)", borderGoldFaint:"rgba(201,168,76,0.20)",
    highlight:"rgba(201,168,76,0.12)",
    pillActive:"#C9A84C", pillActiveTxt:"#0F1C2A",
    pillInactive:"rgba(201,168,76,0.10)", pillInactiveTxt:"#C9A84C",
    btnBg:"linear-gradient(135deg,#C9A84C,#8B6030)", btnTxt:"#0F1C2A",
    navBg:"rgba(10,21,32,0.98)", inputBg:"rgba(10,21,32,0.9)",
    groupMen:"#4A90D9", groupWomen:"#C97090", groupCouples:"#C9A84C",
    shadow:"rgba(0,0,0,0.55)", shadowGold:"rgba(201,168,76,0.22)",
    glow:"drop-shadow(0 0 8px rgba(201,168,76,0.85)) drop-shadow(0 0 22px rgba(201,168,76,0.4))",
  },
  light: {
    id:"light",
    bg:"#FAF7F0", bgDeep:"#F0EAD8", bgCard:"rgba(255,255,255,0.97)", bgCard2:"rgba(245,240,232,0.98)",
    text:"#1B2C3A", textMuted:"#5A6F80", textFaint:"#D8CEBC",
    gold:"#8B5E10", goldLight:"#A07830", goldDim:"#6A3C08",
    earth:"#7A5230",
    border:"rgba(200,188,168,0.8)", borderGold:"rgba(139,94,16,0.45)", borderGoldFaint:"rgba(139,94,16,0.22)",
    highlight:"rgba(139,94,16,0.08)",
    pillActive:"#8B5E10", pillActiveTxt:"#FAF7F0",
    pillInactive:"rgba(139,94,16,0.10)", pillInactiveTxt:"#8B5E10",
    btnBg:"linear-gradient(135deg,#8B5E10,#6A3C08)", btnTxt:"#FAF7F0",
    navBg:"rgba(240,234,216,0.98)", inputBg:"rgba(245,240,228,0.9)",
    groupMen:"#1A5EA0", groupWomen:"#A03068", groupCouples:"#8B5E10",
    shadow:"rgba(0,0,0,0.13)", shadowGold:"rgba(139,94,16,0.18)",
    glow:"drop-shadow(0 0 5px rgba(139,94,16,0.6))",
  },
  earth: {
    id:"earth",
    bg:"#1C1008", bgDeep:"#140A04", bgCard:"rgba(45,28,14,0.95)", bgCard2:"rgba(58,36,18,0.96)",
    text:"#F5E8CE", textMuted:"#A08058", textFaint:"#4A3018",
    gold:"#D4A853", goldLight:"#EAC878", goldDim:"#A07028",
    earth:"#C08040",
    border:"rgba(74,48,24,1)", borderGold:"rgba(212,168,83,0.45)", borderGoldFaint:"rgba(212,168,83,0.22)",
    highlight:"rgba(212,168,83,0.12)",
    pillActive:"#D4A853", pillActiveTxt:"#1C1008",
    pillInactive:"rgba(212,168,83,0.12)", pillInactiveTxt:"#D4A853",
    btnBg:"linear-gradient(135deg,#D4A853,#A07028)", btnTxt:"#1C1008",
    navBg:"rgba(14,8,2,0.98)", inputBg:"rgba(10,5,2,0.9)",
    groupMen:"#5A8FCC", groupWomen:"#C07070", groupCouples:"#D4A853",
    shadow:"rgba(0,0,0,0.65)", shadowGold:"rgba(212,168,83,0.22)",
    glow:"drop-shadow(0 0 8px rgba(212,168,83,0.85)) drop-shadow(0 0 22px rgba(212,168,83,0.4))",
  },
};

// ─── LORDS BRIGADE LOGO ───────────────────────────────────────────────────────
function NucleoLogo({ size = 40, T, glow = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 132" fill="none"
      style={glow ? { filter: T.glow } : {}}>
      <path d="M60 8C73 8,88 18,90 33C103 29,114 39,112 52C114 65,103 77,90 74C91 88,82 99,70 101C66 111,60 118,60 118C60 118,54 111,50 101C38 99,29 88,30 74C17 77,6 65,8 52C6 39,17 29,30 33C32 18,47 8,60 8Z"
        stroke={T.gold} strokeWidth="2.5" fill={`${T.gold}18`} strokeLinejoin="round"/>
      <rect x="20" y="47" width="80" height="17" rx="4" fill={T.gold}/>
      <rect x="51.5" y="16" width="17" height="80" rx="4" fill={T.gold}/>
      <rect x="24" y="50" width="24" height="11" rx="2.5" fill={T.bg}/>
      <rect x="72" y="50" width="24" height="11" rx="2.5" fill={T.bg}/>
      <rect x="54.5" y="20" width="11" height="24" rx="2.5" fill={T.bg}/>
      <rect x="54.5" y="67" width="11" height="24" rx="2.5" fill={T.bg}/>
      <path d="M35 35L51 51M69 35L85 51M35 76L51 60M69 76L85 60"
        stroke={T.bg} strokeWidth="4" strokeLinecap="round"/>
      <path d="M60 112C57 106,42 97,40 87C38 78,46 72,54 75C57 76,59 80,60 84C61 80,63 76,66 75C74 72,82 78,80 87C78 97,63 106,60 112Z"
        fill={T.gold}/>
      <circle cx="60" cy="11" r="4.5" fill={T.goldLight}/>
      <circle cx="105" cy="52" r="4" fill={T.gold}/>
      <circle cx="15" cy="52" r="4" fill={T.gold}/>
      <circle cx="40" cy="32" r="2.5" fill={T.goldLight} opacity="0.7"/>
      <circle cx="80" cy="32" r="2.5" fill={T.goldLight} opacity="0.7"/>
    </svg>
  );
}

// ─── SVG NAV ICONS ────────────────────────────────────────────────────────────
function NavIcon({ id, active, color, muted }) {
  const c = active ? color : muted;
  switch(id) {
    case "home": return <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 12L12 3L21 12V20C21 20.55 20.55 21 20 21H15V16H9V21H4C3.45 21 3 20.55 3 20V12Z" fill={active?c+"44":"none"} stroke={c} strokeWidth="1.85" strokeLinejoin="round"/></svg>;
    case "bible": return <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke={c} strokeWidth="1.85"/><path d="M12 7V17M8 12H16" stroke={c} strokeWidth="2.1" strokeLinecap="round"/></svg>;
    case "groups": return <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke={c} strokeWidth="1.85"/><circle cx="17" cy="9" r="2.5" stroke={c} strokeWidth="1.7"/><path d="M3 20C3 17 5.7 15 9 15C12.3 15 15 17 15 20" stroke={c} strokeWidth="1.85" strokeLinecap="round"/><path d="M15 15C16.5 14.5 17 14.5C19.5 14.5 21 16 21 18.5" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>;
    case "calendar": return <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="17" rx="2" stroke={c} strokeWidth="1.85"/><path d="M8 3V7M16 3V7M3 10H21" stroke={c} strokeWidth="1.85" strokeLinecap="round"/><circle cx="8" cy="15" r="1.3" fill={c}/><circle cx="12" cy="15" r="1.3" fill={c}/><circle cx="16" cy="15" r="1.3" fill={c}/></svg>;
    case "notes": return <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M14 3H6C4.9 3 4 3.9 4 5V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V9L14 3Z" stroke={c} strokeWidth="1.85" strokeLinejoin="round"/><path d="M14 3V9H20M8 13H16M8 17H13" stroke={c} strokeWidth="1.75" strokeLinecap="round"/></svg>;
    case "media": return <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.85"/><circle cx="12" cy="12" r="3" stroke={c} strokeWidth="1.8"/><path d="M12 3V9M12 15V21M3 12H9M15 12H21" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>;
    case "find": return <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke={c} strokeWidth="1.85"/><path d="M16.5 16.5L21 21" stroke={c} strokeWidth="2.1" strokeLinecap="round"/></svg>;
    case "give": return <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 3 15.5 3 9.5C3 7 5 5 7.5 5C9.24 5 10.91 6 12 7.5C13.09 6 14.76 5 16.5 5C19 5 21 7 21 9.5C21 15.5 12 21 12 21Z" fill={active?c+"33":"none"} stroke={c} strokeWidth="1.85" strokeLinejoin="round"/><path d="M12 10V14M10 12H14" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>;
    default: return null;
  }
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const BIBLE_VERSIONS = {
  en:["NIV","NLT","NIV-BST","Celebrate Recovery","ESV","KJV","Ethiopian/Apocrypha"],
  es:["RVR60","NVI","LBLA","RVA","DHH","TLA","PDT"],
};
const SAMPLE_VERSES = {
  "John 3:16":{
    NIV:"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    NLT:"For this is how God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.",
    KJV:"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    NVI:"Porque tanto amó Dios al mundo que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna.",
    RVR60:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
  },
  "Psalm 23:1":{
    NIV:"The Lord is my shepherd, I lack nothing.",
    NLT:"The Lord is my shepherd; I have all that I need.",
    KJV:"The Lord is my shepherd; I shall not want.",
    NVI:"El Señor es mi pastor; nada me faltará.",
    RVR60:"Jehová es mi pastor; nada me faltará.",
  },
  "Philippians 4:13":{
    NIV:"I can do all this through him who gives me strength.",
    NLT:"For I can do everything through Christ, who gives me strength.",
    KJV:"I can do all things through Christ which strengtheneth me.",
    NVI:"Todo lo puedo en Cristo que me fortalece.",
    RVR60:"Todo lo puedo en Cristo que me fortalece.",
  },
  "Proverbs 3:5-6":{
    NIV:"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    NLT:"Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take.",
    KJV:"Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
    NVI:"Confía en el Señor con todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus sendas.",
    RVR60:"Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.",
  },
};
const BOOKS_OF_BIBLE = ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Ezekiel","Daniel","Hosea","Joel","Amos","Micah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","1 Timothy","2 Timothy","Hebrews","James","1 Peter","1 John","Revelation"];
const PLANS=[{id:1,title:"30 Days of Proverbs",desc:"One chapter per day for wisdom",days:30,progress:12},{id:2,title:"The Sermon on the Mount",desc:"Matthew 5–7 deep study",days:21,progress:5},{id:3,title:"Psalms for Peace",desc:"50 key psalms for spiritual rest",days:50,progress:0},{id:4,title:"Couples Journey",desc:"Songs, Ephesians & 1 Cor 13",days:14,progress:3}];
const BOOKS_MEDIA=[{title:"Mere Christianity",author:"C.S. Lewis",genre:"Faith",cover:"📖"},{title:"The Purpose Driven Life",author:"Rick Warren",genre:"Purpose",cover:"🕊️"},{title:"Boundaries",author:"Henry Cloud",genre:"Leadership",cover:"📚"},{title:"Every Man's Battle",author:"Stephen Arterburn",genre:"Men's",cover:"⚔️"},{title:"Captivating",author:"John & Stasi Eldredge",genre:"Women's",cover:"🌸"},{title:"The Love Dare",author:"Kendrick Brothers",genre:"Couples",cover:"💑"},{title:"Wild at Heart",author:"John Eldredge",genre:"Men's",cover:"🦅"},{title:"Uninvited",author:"Lysa TerKeurst",genre:"Women's",cover:"🌺"},{title:"The 5 Love Languages",author:"Gary Chapman",genre:"Couples",cover:"💕"}];
const PODCASTS=[{title:"The Daily Grace",host:"Lara Casey",type:"podcast",icon:"🎙️"},{title:"Elevation with Steven Furtick",host:"Pastor Furtick",type:"podcast",icon:"🎙️"},{title:"The Bible Recap",host:"Tara-Leigh Cobble",type:"podcast",icon:"📻"},{title:"Beautiful Word by Hillsong",host:"Hillsong",type:"music",icon:"🎵"},{title:"Worship Together",host:"Various Artists",type:"music",icon:"🎶"},{title:"Unshackled!",host:"Pacific Garden Mission",type:"audio",icon:"🎧"}];
const MOCK_CHURCHES=[
  {id:"c1",name:"Cornerstone Community",pastor:"Pastor David Torres",address:"123 Faith Ave",city:"Las Vegas, NV 89101",phone:"(702) 555-0143",type:"Non-denominational",dist:"0.8 mi",services:[{day:"Sunday",time:"9:00 AM & 11:00 AM",label:"Main Service"},{day:"Wednesday",time:"7:00 PM",label:"Midweek Study"}],feed:[{id:1,date:"2025-05-07",text:"Join us this Sunday for our series on Renewal! Childcare available during both services."},{id:2,date:"2025-05-05",text:"Men's breakfast this Saturday at 8am in the fellowship hall."},{id:3,date:"2025-04-30",text:"Youth night this Friday 6–9pm. Bring a friend!"}]},
  {id:"c2",name:"Grace Fellowship",pastor:"Pastor Maria Reyes",address:"456 Hope St",city:"Las Vegas, NV 89102",phone:"(702) 555-0287",type:"Baptist",dist:"1.2 mi",services:[{day:"Sunday",time:"10:00 AM",label:"Worship Service"},{day:"Thursday",time:"6:30 PM",label:"Prayer Meeting"}],feed:[{id:1,date:"2025-05-06",text:"Women's retreat registration is open. Spots are limited."},{id:2,date:"2025-05-02",text:"New series: 'Rooted in Love' through Ephesians."}]},
  {id:"c3",name:"Celebrate Recovery @ Saddleback",pastor:"CR Director: James Park",address:"789 Palm Dr",city:"Henderson, NV 89014",phone:"(702) 555-0399",type:"CR Ministry",dist:"2.1 mi",services:[{day:"Friday",time:"7:00 PM",label:"CR Main Meeting"},{day:"Tuesday",time:"6:00 PM",label:"Step Study Group"}],feed:[{id:1,date:"2025-05-08",text:"This Friday: testimony night. Come hear stories of healing."},{id:2,date:"2025-05-03",text:"New step study groups forming. Contact us to join."}]},
  {id:"c4",name:"Iglesia Vida Nueva",pastor:"Pastor Rodrigo Santos",address:"555 Maple Blvd",city:"Las Vegas, NV 89103",phone:"(702) 555-0512",type:"Spanish-language",dist:"2.8 mi",services:[{day:"Domingo",time:"10:00 AM",label:"Culto Principal"},{day:"Martes",time:"7:00 PM",label:"Grupo de Oración"}],feed:[{id:1,date:"2025-05-07",text:"Este domingo comenzamos Efesios 4."},{id:2,date:"2025-05-04",text:"Noche de adoración el viernes 7pm."}]},
];
const WELLNESS=[{name:"Desert Hope Treatment Center",address:"2465 W Warm Springs Rd",city:"Las Vegas, NV",phone:"(702) 848-6223",type:"Recovery",dist:"3.4 mi"},{name:"Southern NV Mental Health",address:"6161 W Charleston Blvd",city:"Las Vegas, NV",phone:"(702) 486-6000",type:"Mental Health",dist:"4.1 mi"},{name:"Valley Hospital Behavioral",address:"620 Shadow Ln",city:"Las Vegas, NV",phone:"(702) 388-4888",type:"Behavioral Health",dist:"4.7 mi"},{name:"Catholic Charities of SN",address:"1501 Las Vegas Blvd N",city:"Las Vegas, NV",phone:"(702) 383-8387",type:"Faith + Counseling",dist:"5.0 mi"}];
const PROFILES=["Personal","Men's Group Admin","Couples Fellowship"];
const save=(k,v)=>{try{localStorage.setItem(`nucleo_${k}`,JSON.stringify(v));}catch{}};
const load=(k,fb)=>{try{const v=localStorage.getItem(`nucleo_${k}`);return v?JSON.parse(v):fb;}catch{return fb;}};

// ─── SHARED UI ────────────────────────────────────────────────────────────────
const GCard=({children,T,gold=false,style={},onClick})=>(
  <div onClick={onClick} style={{background:gold?`linear-gradient(135deg,${T.gold}1A,${T.bgCard})`:T.bgCard,border:`1px solid ${gold?T.borderGold:T.border}`,borderRadius:16,padding:"14px 16px",marginBottom:11,boxShadow:gold?`0 4px 24px ${T.shadowGold},inset 0 1px 0 ${T.gold}22`:`0 2px 16px ${T.shadow},inset 0 1px 0 rgba(255,255,255,0.04)`,cursor:onClick?"pointer":"default",...style}}>
    {children}
  </div>
);
const SL=({T,children,style={}})=>(<div style={{fontSize:9.5,color:T.textMuted,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:9,fontFamily:"sans-serif",fontWeight:600,...style}}>{children}</div>);
const Pill=({T,active,onClick,children,small=false,style={}})=>(<button onClick={onClick} style={{background:active?`linear-gradient(135deg,${T.pillActive},${T.goldDim||T.earth})`:T.pillInactive,color:active?T.pillActiveTxt:T.pillInactiveTxt,border:`1px solid ${active?T.borderGold:T.borderGoldFaint}`,borderRadius:999,padding:small?"4px 11px":"7px 16px",fontSize:small?10:12,fontWeight:active?700:500,cursor:"pointer",fontFamily:"sans-serif",boxShadow:active?`0 2px 12px ${T.shadowGold}`:"none",transition:"all 0.18s",...style}}>{children}</button>);
const Badge=({color,children})=>(<span style={{background:`${color}18`,color,border:`1px solid ${color}40`,borderRadius:999,padding:"3px 10px",fontSize:10,fontFamily:"sans-serif",display:"inline-block"}}>{children}</span>);
const PBar=({T,pct})=>(<div style={{background:T.textFaint,borderRadius:999,height:5,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",borderRadius:999,background:`linear-gradient(90deg,${T.goldDim||T.earth},${T.gold},${T.goldLight})`,boxShadow:`0 0 8px ${T.gold}66`,transition:"width 0.6s"}}/></div>);
const SInput=({T,style={},...p})=>(<input style={{background:T.inputBg,border:`1px solid ${T.borderGoldFaint}`,borderRadius:9,padding:"10px 13px",color:T.text,fontSize:16,width:"100%",fontFamily:"Georgia,serif",outline:"none",boxSizing:"border-box",...style}} {...p}/>);
const STextarea=({T,style={},...p})=>(<textarea style={{background:T.inputBg,border:`1px solid ${T.borderGoldFaint}`,borderRadius:9,padding:"10px 13px",color:T.text,fontSize:16,width:"100%",fontFamily:"Georgia,serif",outline:"none",boxSizing:"border-box",resize:"vertical",...style}} {...p}/>);
const Btn=({T,style={},children,...p})=>(<button style={{background:T.btnBg,color:T.btnTxt,border:"none",borderRadius:10,padding:"11px 18px",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"sans-serif",boxShadow:`0 4px 14px ${T.shadowGold}`,...style}} {...p}>{children}</button>);
const BtnO=({T,style={},children,...p})=>(<button style={{background:"transparent",color:T.gold,border:`1px solid ${T.borderGold}`,borderRadius:10,padding:"9px 14px",fontSize:12,cursor:"pointer",fontFamily:"sans-serif",...style}} {...p}>{children}</button>);

// ─── HOME ─────────────────────────────────────────────────────────────────────
function HomeTab({T,bibleVersion,projects,connectedChurch,setActiveTab}){
  const today=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"});
  const verse=SAMPLE_VERSES["Proverbs 3:5-6"][bibleVersion]||SAMPLE_VERSES["Proverbs 3:5-6"]["NIV"];
  return(<div>
    <div style={{background:`linear-gradient(145deg,${T.bgCard2},${T.bgDeep})`,border:`1px solid ${T.borderGold}`,borderRadius:20,padding:"20px 18px",marginBottom:13,position:"relative",overflow:"hidden",boxShadow:`0 8px 32px ${T.shadow},inset 0 1px 0 ${T.gold}22`}}>
      <div style={{position:"absolute",right:-16,top:-16,opacity:0.08}}><NucleoLogo size={120} T={T}/></div>
      <div style={{position:"absolute",top:0,left:18,right:18,height:1,background:`linear-gradient(90deg,transparent,${T.gold}88,transparent)`}}/>
      <div style={{fontSize:9,color:T.textMuted,fontFamily:"sans-serif",letterSpacing:"0.12em",marginBottom:8}}>{today.toUpperCase()}</div>
      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10}}>
        <div style={{width:2,height:12,background:T.gold,borderRadius:2}}/>
        <div style={{fontSize:9,color:T.gold,letterSpacing:"0.14em",fontFamily:"sans-serif",fontWeight:700}}>VERSE OF THE DAY</div>
      </div>
      <div style={{fontSize:14,lineHeight:1.75,color:T.text,fontStyle:"italic",fontFamily:"Georgia,serif",marginBottom:10}}>"{verse}"</div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{fontSize:10,color:T.gold,fontFamily:"sans-serif"}}>— Proverbs 3:5-6 · {bibleVersion}</div>
        <div style={{display:"flex",gap:10,fontSize:18}}>🔖 💬</div>
      </div>
    </div>
    {connectedChurch&&(<GCard T={T} gold><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div style={{flex:1}}><div style={{fontSize:9,color:T.gold,fontFamily:"sans-serif",letterSpacing:"0.1em",marginBottom:4}}>MY CHURCH · {connectedChurch.name.toUpperCase()}</div><div style={{fontSize:12,color:T.text,lineHeight:1.55,fontFamily:"sans-serif"}}>{connectedChurch.feed[0].text}</div><div style={{fontSize:9,color:T.textMuted,fontFamily:"sans-serif",marginTop:5}}>{connectedChurch.feed[0].date} · {connectedChurch.feed.length} posts</div></div><div style={{fontSize:22,marginLeft:10}}>⛪</div></div><button onClick={()=>setActiveTab("find")} style={{background:"transparent",border:`1px solid ${T.borderGoldFaint}`,borderRadius:7,padding:"4px 10px",color:T.gold,fontSize:10,cursor:"pointer",fontFamily:"sans-serif",marginTop:8}}>View all →</button></GCard>)}
    <SL T={T}>Quick Access</SL>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:14}}>
      {[{icon:"📖",label:"Read Bible",sub:"NIV · English",tab:"bible"},{icon:"📅",label:"Schedule",sub:"2 upcoming",tab:"calendar"},{icon:"📝",label:"New Note",sub:"Text, audio, draw",tab:"notes"},{icon:"👥",label:"My Groups",sub:"Men's · Couples",tab:"groups"}].map(a=>(
        <div key={a.tab} onClick={()=>setActiveTab(a.tab)} style={{background:T.bgCard,border:`1px solid ${T.border}`,borderRadius:14,padding:"13px 12px",cursor:"pointer",boxShadow:`0 2px 10px ${T.shadow}`}}>
          <div style={{fontSize:22,marginBottom:5}}>{a.icon}</div>
          <div style={{fontSize:12,color:T.text,fontFamily:"sans-serif",fontWeight:600}}>{a.label}</div>
          <div style={{fontSize:9,color:T.textMuted,fontFamily:"sans-serif",marginTop:2}}>{a.sub}</div>
        </div>
      ))}
    </div>
    <SL T={T}>Upcoming Gatherings</SL>
    {projects.filter(p=>p.status==="upcoming").slice(0,2).map(p=>{const c=p.group==="men"?T.groupMen:p.group==="women"?T.groupWomen:T.groupCouples;return(<div key={p.id} style={{background:T.bgCard,border:`1px solid ${T.border}`,borderRadius:14,padding:"11px 14px",marginBottom:8,display:"flex",alignItems:"center",gap:11}}><div style={{width:3,height:34,background:c,borderRadius:99,flexShrink:0}}/><div style={{flex:1}}><div style={{fontSize:12,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{p.name}</div><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginTop:2}}>📅 {p.date}</div></div><Badge color={c}>{p.group}</Badge></div>);})}
    <SL T={T} style={{marginTop:14}}>Active Reading Plan</SL>
    <GCard T={T}><div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{PLANS[0].title}</div><div style={{fontSize:10,color:T.gold,fontFamily:"sans-serif"}}>Day {PLANS[0].progress}/{PLANS[0].days}</div></div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:9}}>{PLANS[0].desc}</div><PBar T={T} pct={(PLANS[0].progress/PLANS[0].days)*100}/></GCard>
    <div style={{display:"flex",gap:10,marginTop:4}}>
      <button onClick={()=>window.open("https://wa.me/?text=Join+our+Núcleo+Bible+study!","_blank")} style={{flex:1,padding:"12px",borderRadius:12,border:"none",background:"linear-gradient(135deg,#25D366,#128C7E)",color:"#fff",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"sans-serif"}}>💬 WhatsApp</button>
      <button onClick={()=>window.open("mailto:?subject=Nucleo Bible Study Invite","_blank")} style={{flex:1,padding:"12px",borderRadius:12,border:"none",background:T.btnBg,color:T.btnTxt,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"sans-serif"}}>📧 Email Group</button>
    </div>
  </div>);
}

// ─── BIBLE ────────────────────────────────────────────────────────────────────
function BibleTab({T,language,setLanguage,bibleVersion,setBibleVersion,highlights,setHighlights,bookmarks,setBookmarks}){
  const [showBooks,setShowBooks]=useState(false);
  const [selBook,setSelBook]=useState("John");
  const vList=language==="en"?BIBLE_VERSIONS.en:BIBLE_VERSIONS.es;
  const verses=Object.entries(SAMPLE_VERSES).map(([ref,vs])=>({ref,text:vs[bibleVersion]||vs["NIV"]||Object.values(vs)[0],hl:highlights.includes(ref),bk:bookmarks.includes(ref)}));
  return(<div>
    <GCard T={T} style={{padding:"12px 13px"}}>
      <div style={{display:"flex",gap:8,marginBottom:11}}>
        <Pill T={T} active={language==="en"} onClick={()=>{setLanguage("en");setBibleVersion("NIV");}} style={{flex:1}}>🇺🇸 English</Pill>
        <Pill T={T} active={language==="es"} onClick={()=>{setLanguage("es");setBibleVersion("RVR60");}} style={{flex:1}}>🇲🇽 Español</Pill>
      </div>
      <div style={{fontSize:9,color:T.textMuted,fontFamily:"sans-serif",marginBottom:6,letterSpacing:"0.1em"}}>VERSION / VERSIÓN</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{vList.map(v=><Pill key={v} T={T} small active={bibleVersion===v} onClick={()=>setBibleVersion(v)}>{v}</Pill>)}</div>
    </GCard>
    <GCard T={T} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px"}}>
      <div><div style={{fontSize:17,color:T.text,fontWeight:700,fontFamily:"sans-serif"}}>{selBook} 3</div><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif"}}>{bibleVersion} · {language==="en"?"English":"Español"}</div></div>
      <BtnO T={T} onClick={()=>setShowBooks(!showBooks)}>{showBooks?"↑ Close":"📚 Browse"}</BtnO>
    </GCard>
    {showBooks&&(<GCard T={T} style={{maxHeight:200,overflowY:"auto",padding:10}}><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{BOOKS_OF_BIBLE.map(b=><Pill key={b} T={T} small active={selBook===b} onClick={()=>{setSelBook(b);setShowBooks(false);}}>{b}</Pill>)}</div></GCard>)}
    <SL T={T}>Verses · {bibleVersion}</SL>
    {verses.map(({ref,text,hl,bk})=>(
      <div key={ref} style={{background:hl?`linear-gradient(135deg,${T.gold}12,${T.bgCard})`:T.bgCard,border:`1px solid ${hl?T.borderGold:T.border}`,borderRadius:16,padding:"14px 15px",marginBottom:10,boxShadow:hl?`0 2px 20px ${T.shadowGold}`:`0 2px 12px ${T.shadow}`}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <div style={{fontSize:12,color:T.gold,fontWeight:700,fontFamily:"sans-serif"}}>{ref}</div>
          <div style={{display:"flex",gap:10,fontSize:17}}>
            <span onClick={()=>setHighlights(h=>h.includes(ref)?h.filter(x=>x!==ref):[...h,ref])} style={{cursor:"pointer"}}>{hl?"✨":"🖊️"}</span>
            <span onClick={()=>setBookmarks(b=>b.includes(ref)?b.filter(x=>x!==ref):[...b,ref])} style={{cursor:"pointer"}}>{bk?"🔖":"📑"}</span>
            <span onClick={()=>window.open(`https://wa.me/?text=${encodeURIComponent(ref+": "+text)}`,"_blank")} style={{cursor:"pointer"}}>💬</span>
          </div>
        </div>
        <div style={{fontSize:14,lineHeight:1.75,color:T.text,fontStyle:"italic",fontFamily:"Georgia,serif"}}>"{text}"</div>
        {hl&&<div style={{marginTop:7,fontSize:9,color:T.gold,fontFamily:"sans-serif",letterSpacing:"0.1em"}}>★ HIGHLIGHTED · SYNCED ACROSS ALL VERSIONS</div>}
      </div>
    ))}
    {bookmarks.length>0&&(<div style={{marginTop:4}}><SL T={T}>🔖 Bookmarks</SL><div style={{display:"flex",flexWrap:"wrap",gap:6}}>{bookmarks.map(b=><div key={b} style={{background:`${T.gold}15`,color:T.gold,border:`1px solid ${T.borderGoldFaint}`,borderRadius:99,padding:"4px 11px",fontSize:10,fontFamily:"sans-serif"}}>{b}</div>)}</div></div>)}
    <GCard T={T} style={{border:`1px solid ${T.earth}44`,padding:"12px 14px",marginTop:14}}>
      <div style={{fontSize:12,color:T.earth,fontFamily:"sans-serif",marginBottom:4}}>🕊️ Celebrate Recovery Bible (NIV)</div>
      <div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif"}}>Includes 8 recovery principles based on the Beatitudes. Select "Celebrate Recovery" in the version list above.</div>
    </GCard>
  </div>);
}

// ─── GROUPS ───────────────────────────────────────────────────────────────────
function GroupsTab({T,activeGroup,setActiveGroup,activeProfile,setActiveProfile,projects,setProjects,showProjectForm,setShowProjectForm}){
  const [newP,setNewP]=useState({name:"",date:"",notes:""});
  const gc=activeGroup==="men"?T.groupMen:activeGroup==="women"?T.groupWomen:T.groupCouples;
  const ge=activeGroup==="men"?"⚔️":activeGroup==="women"?"🌸":"💑";
  const gn=activeGroup==="men"?"Men's Group":activeGroup==="women"?"Women's Group":"Couples Fellowship";
  const filtered=projects.filter(p=>p.group===activeGroup);
  return(<div>
    <div style={{display:"flex",gap:8,marginBottom:14}}>
      {["men","women","couples"].map(g=>{const c=g==="men"?T.groupMen:g==="women"?T.groupWomen:T.groupCouples;const a=activeGroup===g;return(<button key={g} onClick={()=>setActiveGroup(g)} style={{flex:1,padding:"8px 4px",borderRadius:12,border:`1px solid ${a?c+"88":T.borderGoldFaint}`,background:a?`${c}22`:T.pillInactive,color:a?c:T.textMuted,fontSize:11,fontWeight:a?700:400,cursor:"pointer",fontFamily:"sans-serif",transition:"all 0.2s"}}>{g==="men"?"⚔️":g==="women"?"🌸":"💑"} {g.charAt(0).toUpperCase()+g.slice(1)}</button>);})}</div>
    <div style={{background:`linear-gradient(135deg,${gc}18,${T.bgCard})`,border:`1px solid ${gc}55`,borderRadius:18,padding:"18px 16px",marginBottom:14,boxShadow:`0 4px 20px ${gc}18`}}>
      <div style={{fontSize:26,marginBottom:6}}>{ge}</div>
      <div style={{fontSize:17,color:gc,fontWeight:700,fontFamily:"sans-serif",marginBottom:3}}>{gn}</div>
      <div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginBottom:11}}>Profile: {activeProfile} · Admin Access</div>
      <div style={{display:"flex",gap:8}}>
        <button onClick={()=>window.open("https://wa.me/?text=Group+meeting+reminder!","_blank")} style={{background:"rgba(37,211,102,0.14)",border:"1px solid rgba(37,211,102,0.4)",borderRadius:10,padding:"8px 14px",color:"#25D366",fontSize:11,cursor:"pointer",fontFamily:"sans-serif",fontWeight:600}}>💬 WhatsApp</button>
        <button onClick={()=>window.open("mailto:?subject=Group Reminder","_blank")} style={{background:T.textFaint,border:`1px solid ${gc}44`,borderRadius:10,padding:"8px 14px",color:gc,fontSize:11,cursor:"pointer",fontFamily:"sans-serif",fontWeight:600}}>📧 Email</button>
      </div>
    </div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:9}}>
      <SL T={T} style={{marginBottom:0}}>Study Projects</SL>
      <BtnO T={T} style={{fontSize:10,padding:"5px 12px"}} onClick={()=>setShowProjectForm(true)}>+ New</BtnO>
    </div>
    {showProjectForm&&(<GCard T={T} gold style={{marginBottom:12}}>
      <div style={{fontSize:12,color:T.gold,marginBottom:10,fontFamily:"sans-serif",fontWeight:700}}>NEW PROJECT</div>
      <SInput T={T} placeholder="Project name..." value={newP.name} onChange={e=>setNewP({...newP,name:e.target.value})} style={{marginBottom:8}}/>
      <SInput T={T} type="date" value={newP.date} onChange={e=>setNewP({...newP,date:e.target.value})} style={{marginBottom:8}}/>
      <STextarea T={T} placeholder="Notes / agenda..." value={newP.notes} onChange={e=>setNewP({...newP,notes:e.target.value})} style={{minHeight:70,marginBottom:10}}/>
      <div style={{display:"flex",gap:8}}>
        <Btn T={T} onClick={()=>{if(newP.name&&newP.date){setProjects(p=>[...p,{id:Date.now(),...newP,group:activeGroup,verses:[],status:"upcoming"}]);setNewP({name:"",date:"",notes:""});setShowProjectForm(false);}}}>Save Project</Btn>
        <BtnO T={T} onClick={()=>setShowProjectForm(false)}>Cancel</BtnO>
      </div>
    </GCard>)}
    {filtered.length===0?<GCard T={T} style={{textAlign:"center",color:T.textMuted,fontFamily:"sans-serif",fontSize:13}}>No projects yet for this group</GCard>:filtered.map(p=>{const c=p.group==="men"?T.groupMen:p.group==="women"?T.groupWomen:T.groupCouples;return(<GCard key={p.id} T={T} style={{borderLeft:`3px solid ${p.status==="done"?T.earth:c}`}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}><div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{p.name}</div><Badge color={p.status==="done"?T.earth:c}>{p.status}</Badge></div><div style={{fontSize:10,color:T.gold,fontFamily:"sans-serif",marginBottom:3}}>📅 {p.date}</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:9}}>{p.notes}</div><div style={{display:"flex",gap:6}}><button onClick={()=>window.open(`https://wa.me/?text=Reminder: ${p.name} on ${p.date}`,"_blank")} style={{background:T.textFaint,border:`1px solid ${T.borderGoldFaint}`,borderRadius:7,padding:"4px 9px",color:T.textMuted,fontSize:9,cursor:"pointer",fontFamily:"sans-serif"}}>💬 Share</button><button style={{background:T.textFaint,border:`1px solid ${T.borderGoldFaint}`,borderRadius:7,padding:"4px 9px",color:T.textMuted,fontSize:9,cursor:"pointer",fontFamily:"sans-serif"}}>✏️ Edit</button><button style={{background:T.textFaint,border:`1px solid ${T.borderGoldFaint}`,borderRadius:7,padding:"4px 9px",color:T.textMuted,fontSize:9,cursor:"pointer",fontFamily:"sans-serif"}}>👁️ Read-Only</button></div></GCard>);})}
    <SL T={T} style={{marginTop:16}}>Profiles</SL>
    {PROFILES.map(p=>(<GCard key={p} T={T} onClick={()=>setActiveProfile(p)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",border:`1px solid ${activeProfile===p?T.borderGold:T.border}`,cursor:"pointer",marginBottom:7}}><div style={{fontSize:12,color:activeProfile===p?T.gold:T.text,fontFamily:"sans-serif"}}>👤 {p}</div>{activeProfile===p&&<Badge color={T.gold}>Active</Badge>}</GCard>))}
  </div>);
}

// ─── CALENDAR ─────────────────────────────────────────────────────────────────
function CalendarTab({T,projects,calendarDate,setCalendarDate}){
  const now=calendarDate,month=now.getMonth(),year=now.getFullYear();
  const firstDay=new Date(year,month,1).getDay(),daysInMonth=new Date(year,month+1,0).getDate();
  const days=["Su","Mo","Tu","We","Th","Fr","Sa"];
  const td=new Date();
  const getPrj=(d)=>{const ds=`${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;return projects.filter(p=>p.date===ds);};
  return(<div>
    <GCard T={T} style={{padding:"12px 13px"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
        <BtnO T={T} style={{padding:"4px 12px"}} onClick={()=>setCalendarDate(new Date(year,month-1,1))}>‹</BtnO>
        <div style={{fontSize:16,color:T.gold,fontWeight:700,fontFamily:"sans-serif"}}>{now.toLocaleString("default",{month:"long"})} {year}</div>
        <BtnO T={T} style={{padding:"4px 12px"}} onClick={()=>setCalendarDate(new Date(year,month+1,1))}>›</BtnO>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:1,marginBottom:4}}>{days.map(d=><div key={d} style={{textAlign:"center",fontSize:9,color:T.textMuted,fontFamily:"sans-serif",padding:3}}>{d}</div>)}</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2}}>
        {Array.from({length:firstDay},(_,i)=><div key={`e${i}`}/>)}
        {Array.from({length:daysInMonth},(_,i)=>{const day=i+1,dp=getPrj(day);const isToday=day===td.getDate()&&month===td.getMonth()&&year===td.getFullYear();return(<div key={day} style={{textAlign:"center",padding:"5px 1px",borderRadius:6,background:isToday?`${T.gold}28`:dp.length>0?`${T.gold}10`:"transparent",border:isToday?`1px solid ${T.gold}`:"1px solid transparent"}}><div style={{fontSize:11,color:isToday?T.gold:T.text,fontFamily:"sans-serif",fontWeight:isToday?700:400}}>{day}</div>{dp.length>0&&<div style={{width:4,height:4,borderRadius:"50%",background:T.gold,margin:"2px auto 0"}}/>}</div>);})}
      </div>
    </GCard>
    <SL T={T}>Scheduled Events</SL>
    {projects.sort((a,b)=>new Date(a.date)-new Date(b.date)).map(p=>{const c=p.group==="men"?T.groupMen:p.group==="women"?T.groupWomen:T.groupCouples;return(<GCard key={p.id} T={T} style={{borderLeft:`3px solid ${c}`,padding:"10px 14px",marginBottom:7}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div style={{fontSize:12,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{p.name}</div><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginTop:1}}>📅 {p.date} · {p.group}{p.churchId?" · Church":""}</div></div><button onClick={()=>window.open(`https://wa.me/?text=Reminder: ${p.name} on ${p.date}`,"_blank")} style={{background:T.textFaint,border:`1px solid ${T.borderGoldFaint}`,borderRadius:7,padding:"4px 9px",color:T.textMuted,fontSize:9,cursor:"pointer",fontFamily:"sans-serif"}}>Remind</button></div></GCard>);})}
    <SL T={T} style={{marginTop:14}}>Reading Plans</SL>
    {PLANS.map(pl=>(<GCard key={pl.id} T={T} style={{marginBottom:9}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{pl.title}</div><div style={{fontSize:10,color:T.gold,fontFamily:"sans-serif"}}>{pl.days} days</div></div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:8}}>{pl.desc}</div><PBar T={T} pct={(pl.progress/pl.days)*100}/><div style={{display:"flex",justifyContent:"space-between",marginTop:5}}><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif"}}>Day {pl.progress}/{pl.days}</div><BtnO T={T} style={{fontSize:9,padding:"3px 9px"}}>{pl.progress===0?"Start":"Continue"}</BtnO></div></GCard>))}
  </div>);
}

// ─── NOTES ────────────────────────────────────────────────────────────────────
function NotesTab({T,notes,setNotes,showNoteForm,setShowNoteForm}){
  const [noteType,setNoteType]=useState("text");
  const [newNote,setNewNote]=useState({title:"",content:""});
  const canvasRef=useRef(null);
  const [isDrawing,setIsDrawing]=useState(false);
  const [lastPos,setLastPos]=useState(null);
  const [recording,setRecording]=useState(false);
  const [recTime,setRecTime]=useState(0);
  const iRef=useRef(null);
  const photos=[{id:1,label:"Men's Retreat 2025",emoji:"🏕️",date:"2025-04-12"},{id:2,label:"Couples Night Out",emoji:"🌙",date:"2025-03-22"},{id:3,label:"Women's Tea",emoji:"🫖",date:"2025-05-01"}];
  useEffect(()=>{if(recording){iRef.current=setInterval(()=>setRecTime(t=>t+1),1000);}else{clearInterval(iRef.current);setRecTime(0);}return()=>clearInterval(iRef.current);},[recording]);
  const startDraw=(e)=>{const cv=canvasRef.current;if(!cv)return;const rc=cv.getBoundingClientRect();const x=(e.touches?e.touches[0].clientX:e.clientX)-rc.left;const y=(e.touches?e.touches[0].clientY:e.clientY)-rc.top;setIsDrawing(true);setLastPos({x,y});};
  const drawMove=(e)=>{if(!isDrawing||!canvasRef.current)return;e.preventDefault();const cv=canvasRef.current;const ctx=cv.getContext("2d");const rc=cv.getBoundingClientRect();const x=(e.touches?e.touches[0].clientX:e.clientX)-rc.left;const y=(e.touches?e.touches[0].clientY:e.clientY)-rc.top;ctx.strokeStyle=T.gold;ctx.lineWidth=2.5;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(lastPos.x,lastPos.y);ctx.lineTo(x,y);ctx.stroke();setLastPos({x,y});};
  const stopDraw=()=>setIsDrawing(false);
  const clearCanvas=()=>{const cv=canvasRef.current;if(cv)cv.getContext("2d").clearRect(0,0,cv.width,cv.height);};
  return(<div>
    <div style={{display:"flex",gap:6,marginBottom:13}}>
      {["text","audio","draw","photo"].map(t=><Pill key={t} T={T} small active={noteType===t} onClick={()=>setNoteType(t)} style={{flex:1}}>{t==="text"?"📝":t==="audio"?"🎙️":t==="draw"?"✏️":"📷"} {t.charAt(0).toUpperCase()+t.slice(1)}</Pill>)}
    </div>
    {noteType==="text"&&(<div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:9}}><SL T={T} style={{marginBottom:0}}>Text Notes</SL><BtnO T={T} style={{fontSize:10,padding:"5px 12px"}} onClick={()=>setShowNoteForm(!showNoteForm)}>+ New</BtnO></div>
      {showNoteForm&&(<GCard T={T} gold style={{marginBottom:12}}><SInput T={T} placeholder="Note title..." value={newNote.title} onChange={e=>setNewNote({...newNote,title:e.target.value})} style={{marginBottom:8}}/><STextarea T={T} placeholder="Sermon recap, reflection, study notes..." value={newNote.content} onChange={e=>setNewNote({...newNote,content:e.target.value})} style={{minHeight:90,marginBottom:10}}/><Btn T={T} onClick={()=>{if(newNote.title&&newNote.content){setNotes(n=>[...n,{id:Date.now(),...newNote,date:new Date().toISOString().split("T")[0],type:"text"}]);setNewNote({title:"",content:""});setShowNoteForm(false);}}}>Save Note</Btn></GCard>)}
      {notes.filter(n=>n.type==="text").map(n=>(<GCard key={n.id} T={T} style={{marginBottom:9}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}><div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{n.title}</div><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif"}}>{n.date}</div></div><div style={{fontSize:12,color:T.textMuted,fontFamily:"sans-serif",lineHeight:1.6}}>{n.content}</div></GCard>))}
    </div>)}
    {noteType==="audio"&&(<div>
      <SL T={T}>Audio Notes</SL>
      <GCard T={T} style={{textAlign:"center",padding:"24px 14px",marginBottom:12}}>
        <div style={{fontSize:44,marginBottom:10}}>{recording?"🔴":"🎙️"}</div>
        {recording&&<div style={{fontSize:24,color:T.gold,fontFamily:"sans-serif",marginBottom:6,fontWeight:700}}>{String(Math.floor(recTime/60)).padStart(2,"0")}:{String(recTime%60).padStart(2,"0")}</div>}
        <div style={{fontSize:12,color:T.textMuted,fontFamily:"sans-serif",marginBottom:14}}>{recording?"Recording... tap to stop":"Tap to record an audio note"}</div>
        <Btn T={T} style={{background:recording?"linear-gradient(135deg,#D9534F,#A02020)":T.btnBg}} onClick={()=>{if(recording){setRecording(false);setNotes(n=>[...n,{id:Date.now(),title:`Audio Note – ${new Date().toLocaleDateString()}`,date:new Date().toISOString().split("T")[0],content:`[Audio: ${Math.floor(recTime/60)}:${String(recTime%60).padStart(2,"0")}]`,type:"audio"}]);}else setRecording(true);}}>{recording?"⏹️ Stop & Save":"⏺️ Start Recording"}</Btn>
      </GCard>
      {notes.filter(n=>n.type==="audio").map(n=>(<GCard key={n.id} T={T} style={{display:"flex",alignItems:"center",gap:11,marginBottom:8}}><div style={{fontSize:24}}>🎙️</div><div style={{flex:1}}><div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{n.title}</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif"}}>{n.date} · {n.content}</div></div><BtnO T={T} style={{fontSize:10,padding:"4px 9px"}}>▶</BtnO></GCard>))}
    </div>)}
    {noteType==="draw"&&(<div>
      <SL T={T}>Draw Notes — Finger</SL>
      <GCard T={T} style={{padding:10}}><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:8}}>Draw diagrams or sketches with your finger. Gold ink.</div>
        <canvas ref={canvasRef} width={360} height={220} style={{background:T.bgDeep,borderRadius:10,border:`1px solid ${T.borderGoldFaint}`,width:"100%",touchAction:"none",display:"block"}} onMouseDown={startDraw} onMouseMove={drawMove} onMouseUp={stopDraw} onMouseLeave={stopDraw} onTouchStart={startDraw} onTouchMove={drawMove} onTouchEnd={stopDraw}/>
        <div style={{display:"flex",gap:8,marginTop:9}}><BtnO T={T} onClick={clearCanvas}>Clear</BtnO><Btn T={T} onClick={()=>{const l=document.createElement("a");l.download="nucleo-drawing.png";l.href=canvasRef.current?.toDataURL();l.click();}}>💾 Save Drawing</Btn></div>
      </GCard>
    </div>)}
    {noteType==="photo"&&(<div>
      <SL T={T}>Photo Gallery</SL>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9}}>
        {photos.map(p=>(<GCard key={p.id} T={T} style={{textAlign:"center",padding:"18px 9px",margin:0}}><div style={{fontSize:34,marginBottom:6}}>{p.emoji}</div><div style={{fontSize:11,color:T.text,fontFamily:"sans-serif",fontWeight:600}}>{p.label}</div><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginTop:2}}>{p.date}</div></GCard>))}
        <GCard T={T} style={{textAlign:"center",padding:"18px 9px",margin:0,border:`1px dashed ${T.borderGoldFaint}`,cursor:"pointer"}}><div style={{fontSize:34,marginBottom:6}}>📷</div><div style={{fontSize:11,color:T.gold,fontFamily:"sans-serif"}}>Add Photo</div></GCard>
      </div>
    </div>)}
  </div>);
}

// ─── MEDIA ────────────────────────────────────────────────────────────────────
function MediaTab({T}){
  const [bf,setBf]=useState("all");
  const [mf,setMf]=useState("all");
  const fb=bf==="all"?BOOKS_MEDIA:BOOKS_MEDIA.filter(b=>b.genre===bf);
  return(<div>
    <SL T={T}>📚 Faith-Based Books</SL>
    <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:6,marginBottom:11}}>{["all","Men's","Women's","Couples","Leadership","Faith","Purpose"].map(f=><Pill key={f} T={T} small active={bf===(f==="all"?"all":f)} onClick={()=>setBf(f==="all"?"all":f)} style={{flexShrink:0}}>{f}</Pill>)}</div>
    {fb.map(b=>(<GCard key={b.title} T={T} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",marginBottom:8}}><div style={{fontSize:26}}>{b.cover}</div><div style={{flex:1}}><div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{b.title}</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginTop:1}}>{b.author}</div></div><Badge color={T.gold}>{b.genre}</Badge></GCard>))}
    <SL T={T} style={{marginTop:14}}>🎙️ Podcasts & Worship</SL>
    <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:6,marginBottom:11}}>{["all","podcast","music","audio"].map(f=><Pill key={f} T={T} small active={mf===f} onClick={()=>setMf(f)} style={{flexShrink:0,textTransform:"capitalize"}}>{f}</Pill>)}</div>
    {PODCASTS.filter(p=>mf==="all"||p.type===mf).map(pod=>(<GCard key={pod.title} T={T} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",marginBottom:8}}><div style={{fontSize:22}}>{pod.icon}</div><div style={{flex:1}}><div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{pod.title}</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginTop:1}}>{pod.host}</div></div><BtnO T={T} style={{fontSize:10,padding:"4px 9px"}}>▶</BtnO></GCard>))}
    <GCard T={T} style={{border:`1px solid ${T.earth}44`,padding:"13px 15px",marginTop:4}}><div style={{fontSize:13,color:T.earth,marginBottom:5,fontFamily:"sans-serif"}}>🕊️ Celebrate Recovery Resources</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:10}}>CR audio messages, workbooks, and 12-step study materials for recovery ministry.</div><div style={{display:"flex",gap:8}}><BtnO T={T} style={{fontSize:10,borderColor:T.earth,color:T.earth}}>CR Podcasts</BtnO><BtnO T={T} style={{fontSize:10,borderColor:T.earth,color:T.earth}}>Workbooks</BtnO></div></GCard>
    <GCard T={T} style={{border:`1px dashed ${T.borderGoldFaint}`,marginTop:4}}><div style={{fontSize:12,color:T.gold,marginBottom:3,fontFamily:"sans-serif",fontWeight:700}}>🚀 Phase 2 — Teen Groups</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif"}}>Coming soon: youth devotionals, teen ministry tools, and next-gen group resources.</div></GCard>
  </div>);
}

// ─── FIND & CONNECT ───────────────────────────────────────────────────────────
function FindTab({T,connectedChurch,setConnectedChurch,projects,setProjects}){
  const [sub,setSub]=useState("mychurch");
  const [zip,setZip]=useState("");
  const [searched,setSearched]=useState(false);
  const [viewing,setViewing]=useState(null);
  const addToCal=(ch)=>{const evts=ch.services.map((s,i)=>({id:Date.now()+i,name:`${ch.name} — ${s.label}`,group:"men",date:"2025-06-01",notes:`${s.day} at ${s.time}`,verses:[],status:"upcoming",churchId:ch.id}));setProjects(p=>[...p,...evts]);alert(`${ch.services.length} service(s) added to your calendar!`);};
  if(viewing){const ch=viewing,isConn=connectedChurch?.id===ch.id;return(<div>
    <BtnO T={T} onClick={()=>setViewing(null)} style={{marginBottom:12}}>← Back</BtnO>
    <GCard T={T} gold style={{marginBottom:14}}><div style={{fontSize:16,color:T.gold,fontWeight:700,fontFamily:"sans-serif",marginBottom:3}}>{ch.name}</div><div style={{fontSize:12,color:T.textMuted,fontFamily:"sans-serif",marginBottom:2}}>{ch.pastor}</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:2}}>📍 {ch.address}, {ch.city}</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:12}}>📞 {ch.phone}</div><div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Btn T={T} style={{opacity:isConn?0.6:1}} onClick={()=>{setConnectedChurch(ch);alert(`Connected! ${ch.name} feed now on Home.`);}}>{isConn?"✓ Connected":"Connect to Feed"}</Btn><BtnO T={T} onClick={()=>addToCal(ch)}>+ Add to Calendar</BtnO></div></GCard>
    <SL T={T}>Service Schedule</SL>{ch.services.map((s,i)=><GCard key={i} T={T} style={{padding:"10px 14px",marginBottom:7}}><div style={{fontSize:12,color:T.gold,fontFamily:"sans-serif"}}>{s.day} at {s.time}</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif"}}>{s.label}</div></GCard>)}
    <SL T={T} style={{marginTop:12}}>Church Feed</SL>{ch.feed.map(f=><GCard key={f.id} T={T} style={{marginBottom:8}}><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginBottom:3}}>📅 {f.date}</div><div style={{fontSize:12,color:T.text,fontFamily:"sans-serif",lineHeight:1.5}}>{f.text}</div></GCard>)}
  </div>);}
  return(<div>
    <div style={{display:"flex",gap:6,marginBottom:13,overflowX:"auto"}}>{[{id:"mychurch",label:"My Church"},{id:"churches",label:"Churches"},{id:"wellness",label:"Wellness"},{id:"recovery",label:"Recovery"}].map(s=><Pill key={s.id} T={T} small active={sub===s.id} onClick={()=>setSub(s.id)} style={{flexShrink:0}}>{s.label}</Pill>)}</div>
    {sub==="mychurch"&&(connectedChurch?(<div>
      <GCard T={T} gold style={{marginBottom:12}}><div style={{fontSize:10,color:T.gold,fontFamily:"sans-serif",letterSpacing:"0.1em",marginBottom:5}}>CONNECTED CHURCH</div><div style={{fontSize:15,color:T.text,fontWeight:700,fontFamily:"sans-serif",marginBottom:2}}>{connectedChurch.name}</div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:9}}>{connectedChurch.pastor} · {connectedChurch.type}</div><div style={{display:"flex",gap:8}}><Btn T={T} onClick={()=>setViewing(connectedChurch)}>View Profile</Btn><BtnO T={T} style={{fontSize:10}} onClick={()=>setConnectedChurch(null)}>Disconnect</BtnO></div></GCard>
      <SL T={T}>Latest Announcements</SL>{connectedChurch.feed.map(f=><GCard key={f.id} T={T} style={{marginBottom:8}}><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginBottom:3}}>📅 {f.date}</div><div style={{fontSize:12,color:T.text,fontFamily:"sans-serif",lineHeight:1.5}}>{f.text}</div></GCard>)}
      <SL T={T} style={{marginTop:12}}>Service Schedule</SL>{connectedChurch.services.map((s,i)=><GCard key={i} T={T} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 13px",marginBottom:6}}><div><div style={{fontSize:12,color:T.gold,fontFamily:"sans-serif"}}>{s.day} at {s.time}</div><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif"}}>{s.label}</div></div><BtnO T={T} style={{fontSize:9,padding:"3px 8px"}} onClick={()=>addToCal(connectedChurch)}>+ Cal</BtnO></GCard>)}
    </div>):(<div style={{textAlign:"center",padding:"44px 16px"}}><div style={{fontSize:44,marginBottom:14}}>⛪</div><div style={{fontSize:14,color:T.text,fontFamily:"sans-serif",fontWeight:600,marginBottom:6}}>Connect to your home church</div><div style={{fontSize:12,color:T.textMuted,fontFamily:"sans-serif",marginBottom:16,lineHeight:1.6}}>Search for your church, connect to their feed, and sync services to your calendar.</div><Btn T={T} onClick={()=>setSub("churches")}>Find My Church</Btn></div>))}
    {(sub==="churches"||sub==="recovery")&&(<div>
      <GCard T={T} style={{marginBottom:12}}><div style={{fontSize:12,color:T.gold,fontFamily:"sans-serif",fontWeight:700,marginBottom:9}}>{sub==="churches"?"🔍 Churches Near You":"🕊️ Recovery Centers"}</div><div style={{display:"flex",gap:8}}><SInput T={T} style={{flex:1}} placeholder="Enter ZIP code..." value={zip} onChange={e=>setZip(e.target.value)} maxLength={5}/><Btn T={T} onClick={()=>setSearched(true)}>Search</Btn></div></GCard>
      {searched&&(<div><SL T={T}>Results near {zip||"your area"}</SL>{(sub==="churches"?MOCK_CHURCHES:MOCK_CHURCHES.filter(c=>c.type==="CR Ministry")).map(ch=>(<GCard key={ch.id} T={T} onClick={()=>setViewing(ch)} style={{cursor:"pointer",marginBottom:9}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{ch.name}</div><div style={{fontSize:10,color:T.gold,fontFamily:"sans-serif"}}>{ch.dist}</div></div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:6}}>{ch.address}, {ch.city}</div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><Badge color={T.gold}>{ch.type}</Badge><div style={{fontSize:10,color:T.gold,fontFamily:"sans-serif"}}>View + Connect →</div></div></GCard>))}</div>)}
      {!searched&&<div style={{textAlign:"center",padding:"32px",color:T.textMuted,fontFamily:"sans-serif",fontSize:12}}>Enter your ZIP code to search</div>}
    </div>)}
    {sub==="wellness"&&(<div>
      <GCard T={T} style={{marginBottom:12}}><div style={{fontSize:12,color:T.gold,fontFamily:"sans-serif",fontWeight:700,marginBottom:9}}>🧠 Mental Health & Wellness</div><div style={{display:"flex",gap:8}}><SInput T={T} style={{flex:1}} placeholder="Enter ZIP code..." value={zip} onChange={e=>setZip(e.target.value)} maxLength={5}/><Btn T={T} onClick={()=>setSearched(true)}>Search</Btn></div></GCard>
      {searched&&(<div><SL T={T}>Wellness near {zip||"your area"}</SL>{WELLNESS.map(c=>(<GCard key={c.name} T={T} style={{marginBottom:8}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}><div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>{c.name}</div><div style={{fontSize:10,color:T.gold,fontFamily:"sans-serif"}}>{c.dist}</div></div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:6}}>{c.address}, {c.city}</div><div style={{display:"flex",gap:8,alignItems:"center"}}><Badge color={c.type==="Mental Health"?"#5A8FCC":c.type==="Behavioral Health"?"#9B6FD9":T.earth}>{c.type}</Badge><a href={`tel:${c.phone}`} style={{fontSize:11,color:T.gold,fontFamily:"sans-serif",textDecoration:"none"}}>{c.phone}</a></div></GCard>))}</div>)}
      <GCard T={T} style={{border:`1px solid ${T.earth}44`,padding:"13px 15px",marginTop:4}}><div style={{fontSize:12,color:T.earth,fontFamily:"sans-serif",fontWeight:700,marginBottom:7}}>🆘 Crisis Lines — Always Available</div>{[{n:"Suicide & Crisis Lifeline",p:"988"},{n:"Crisis Text Line",p:"Text HOME to 741741"},{n:"SAMHSA Helpline",p:"1-800-662-4357"}].map(r=>(<div key={r.n} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${T.border}`}}><div style={{fontSize:11,color:T.text,fontFamily:"sans-serif"}}>{r.n}</div><div style={{fontSize:11,color:T.gold,fontFamily:"sans-serif"}}>{r.p}</div></div>))}</GCard>
    </div>)}
  </div>);
}

// ─── GENEROSITY TAB ──────────────────────────────────────────────────────────
function GenerosityTab({T, connectedChurch}){
  const [giveTab, setGiveTab] = useState("church");
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedFund, setSelectedFund] = useState("General Fund");
  const [frequency, setFrequency] = useState("one-time");
  const [showConfirm, setShowConfirm] = useState(false);
  const [appAmount, setAppAmount] = useState(null);
  const [appCustom, setAppCustom] = useState("");

  const quickAmounts = [10, 25, 50, 100, 250, 500];
  const funds = connectedChurch
    ? ["General Fund","Building Fund","Missions","Youth Ministry","Celebrate Recovery","Community Outreach"]
    : ["General Fund","Building Fund","Missions","Youth Ministry"];

  const churchCenterUrl = "https://churchcenter.com/giving";
  const paypalUrl = "https://paypal.me/NucleoApp";
  const venmoUrl = "https://venmo.com/NucleoApp";

  const finalAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : null);

  return (
    <div>
      {/* Header */}
      <div style={{background:`linear-gradient(145deg,${T.bgCard2},${T.bgDeep})`,border:`1px solid ${T.borderGold}`,borderRadius:20,padding:"18px 18px",marginBottom:14,position:"relative",overflow:"hidden",boxShadow:`0 8px 32px ${T.shadow},inset 0 1px 0 ${T.gold}22`}}>
        <div style={{position:"absolute",top:0,left:18,right:18,height:1,background:`linear-gradient(90deg,transparent,${T.gold}88,transparent)`}}/>
        <div style={{fontSize:28,marginBottom:8}}>🙏</div>
        <div style={{fontSize:17,fontWeight:700,color:T.gold,fontFamily:"Georgia,serif",marginBottom:4}}>Generosity</div>
        <div style={{fontSize:12,color:T.textMuted,fontFamily:"sans-serif",lineHeight:1.55}}>"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Cor 9:7</div>
      </div>

      {/* Tab switcher */}
      <div style={{display:"flex",gap:8,marginBottom:14}}>
        <Pill T={T} active={giveTab==="church"} onClick={()=>setGiveTab("church")} style={{flex:1}}>⛪ Give to Church</Pill>
        <Pill T={T} active={giveTab==="app"} onClick={()=>setGiveTab("app")} style={{flex:1}}>💛 Support Núcleo</Pill>
      </div>

      {/* ── CHURCH GIVING ── */}
      {giveTab==="church" && (
        <div>
          {/* Church Center Connect */}
          <GCard T={T} gold style={{marginBottom:14}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <div>
                <div style={{fontSize:12,color:T.gold,fontFamily:"sans-serif",fontWeight:700,marginBottom:2}}>Church Center</div>
                <div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif"}}>Powered by Planning Center</div>
              </div>
              <div style={{background:`${T.gold}22`,borderRadius:10,padding:"6px 10px",fontSize:18}}>🏦</div>
            </div>
            <div style={{fontSize:12,color:T.text,fontFamily:"sans-serif",lineHeight:1.55,marginBottom:12}}>
              {connectedChurch
                ? `Give directly to ${connectedChurch.name} through Church Center — the secure giving platform used by thousands of churches.`
                : "Connect your church first in the Find tab to give directly through their Church Center account."}
            </div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              <button onClick={()=>window.open(churchCenterUrl,"_blank")} style={{background:T.btnBg,color:T.btnTxt,border:"none",borderRadius:10,padding:"11px 18px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"sans-serif",boxShadow:`0 4px 14px ${T.shadowGold}`}}>
                Open Church Center →
              </button>
              {connectedChurch && (
                <button onClick={()=>window.open(`https://churchcenter.com/giving?church=${connectedChurch.name.replace(/\s/g,"+")}`, "_blank")} style={{background:"transparent",color:T.gold,border:`1px solid ${T.borderGold}`,borderRadius:10,padding:"11px 14px",fontSize:12,cursor:"pointer",fontFamily:"sans-serif"}}>
                  Give to {connectedChurch.name.split(" ")[0]}
                </button>
              )}
            </div>
          </GCard>

          {/* In-app giving form */}
          <SL T={T}>Quick Give</SL>
          {connectedChurch && (
            <div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:10}}>
              Giving to: <span style={{color:T.gold,fontWeight:600}}>{connectedChurch.name}</span>
            </div>
          )}

          {/* Fund selector */}
          <GCard T={T} style={{marginBottom:12}}>
            <div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginBottom:7,letterSpacing:"0.1em"}}>SELECT FUND</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {funds.map(f=>(
                <Pill key={f} T={T} small active={selectedFund===f} onClick={()=>setSelectedFund(f)}>{f}</Pill>
              ))}
            </div>
          </GCard>

          {/* Amount selector */}
          <GCard T={T} style={{marginBottom:12}}>
            <div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginBottom:9,letterSpacing:"0.1em"}}>SELECT AMOUNT</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:10}}>
              {quickAmounts.map(a=>(
                <button key={a} onClick={()=>{setSelectedAmount(a);setCustomAmount("");}} style={{background:selectedAmount===a?`linear-gradient(135deg,${T.gold},${T.goldDim||T.earth})`:T.pillInactive,color:selectedAmount===a?T.pillActiveTxt:T.gold,border:`1px solid ${selectedAmount===a?T.borderGold:T.borderGoldFaint}`,borderRadius:10,padding:"10px 4px",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"sans-serif",boxShadow:selectedAmount===a?`0 2px 12px ${T.shadowGold}`:"none"}}>
                  ${a}
                </button>
              ))}
            </div>
            <div style={{position:"relative"}}>
              <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:T.gold,fontSize:15,fontWeight:700,fontFamily:"sans-serif"}}>$</span>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={e=>{setCustomAmount(e.target.value);setSelectedAmount(null);}}
                style={{background:T.inputBg,border:`1px solid ${customAmount?T.borderGold:T.borderGoldFaint}`,borderRadius:9,padding:"10px 13px 10px 28px",color:T.text,fontSize:16,width:"100%",fontFamily:"sans-serif",outline:"none",boxSizing:"border-box"}}
              />
            </div>
          </GCard>

          {/* Frequency */}
          <GCard T={T} style={{marginBottom:14}}>
            <div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginBottom:9,letterSpacing:"0.1em"}}>FREQUENCY</div>
            <div style={{display:"flex",gap:8}}>
              {["one-time","weekly","bi-weekly","monthly"].map(f=>(
                <Pill key={f} T={T} small active={frequency===f} onClick={()=>setFrequency(f)} style={{flex:1,textAlign:"center",fontSize:9}}>
                  {f==="one-time"?"One Time":f==="bi-weekly"?"Bi-weekly":f.charAt(0).toUpperCase()+f.slice(1)}
                </Pill>
              ))}
            </div>
          </GCard>

          {/* Give button */}
          {(selectedAmount||customAmount) && (
            <div style={{marginBottom:14}}>
              {!showConfirm ? (
                <button onClick={()=>setShowConfirm(true)} style={{width:"100%",padding:"14px",borderRadius:14,border:"none",background:`linear-gradient(135deg,${T.gold},${T.goldDim||T.earth})`,color:T.pillActiveTxt,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"sans-serif",boxShadow:`0 6px 20px ${T.shadowGold}`,letterSpacing:"0.04em"}}>
                  Give ${finalAmount?.toFixed(2)} {frequency!=="one-time"?`/ ${frequency.replace("-"," ")}`:""}  →
                </button>
              ) : (
                <GCard T={T} gold style={{textAlign:"center",padding:"20px 16px"}}>
                  <div style={{fontSize:32,marginBottom:8}}>✝️</div>
                  <div style={{fontSize:14,color:T.text,fontFamily:"sans-serif",fontWeight:600,marginBottom:4}}>Confirm Your Gift</div>
                  <div style={{fontSize:13,color:T.gold,fontFamily:"sans-serif",marginBottom:2}}>${finalAmount?.toFixed(2)} · {frequency==="one-time"?"One-time":`${frequency.charAt(0).toUpperCase()+frequency.slice(1).replace("-"," ")}`}</div>
                  <div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",marginBottom:14}}>{selectedFund}{connectedChurch?` · ${connectedChurch.name}`:""}</div>
                  <div style={{display:"flex",gap:8,justifyContent:"center"}}>
                    <button onClick={()=>{window.open(churchCenterUrl,"_blank");setShowConfirm(false);}} style={{background:T.btnBg,color:T.btnTxt,border:"none",borderRadius:10,padding:"10px 20px",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"sans-serif"}}>
                      Complete via Church Center
                    </button>
                    <button onClick={()=>setShowConfirm(false)} style={{background:"transparent",color:T.textMuted,border:`1px solid ${T.border}`,borderRadius:10,padding:"10px 14px",fontSize:12,cursor:"pointer",fontFamily:"sans-serif"}}>
                      Cancel
                    </button>
                  </div>
                </GCard>
              )}
            </div>
          )}

          {/* Giving history placeholder */}
          <SL T={T}>Giving History</SL>
          <GCard T={T} style={{textAlign:"center",padding:"20px 14px"}}>
            <div style={{fontSize:32,marginBottom:8,opacity:0.5}}>📊</div>
            <div style={{fontSize:13,color:T.textMuted,fontFamily:"sans-serif",marginBottom:4}}>Your giving history will appear here</div>
            <div style={{fontSize:11,color:T.textFaint,fontFamily:"sans-serif"}}>Connect to Church Center to view statements</div>
          </GCard>
        </div>
      )}

      {/* ── SUPPORT NUCLEO ── */}
      {giveTab==="app" && (
        <div>
          <GCard T={T} gold style={{marginBottom:14}}>
            <div style={{fontSize:24,marginBottom:8}}>✨</div>
            <div style={{fontSize:14,color:T.gold,fontWeight:700,fontFamily:"sans-serif",marginBottom:6}}>Support Núcleo</div>
            <div style={{fontSize:12,color:T.text,fontFamily:"sans-serif",lineHeight:1.6,marginBottom:10}}>
              Núcleo is built to serve faith communities — free, no ads, no denomination. Your support keeps it free for everyone and funds new features like teen groups, real Bible API access, and push notifications.
            </div>
            <div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif",lineHeight:1.5}}>
              100% of app support goes toward development, hosting, and future features.
            </div>
          </GCard>

          {/* App support amounts */}
          <SL T={T}>Choose an Amount</SL>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:12}}>
            {[{a:5,label:"Coffee ☕",desc:"Keep us caffeinated"},{a:15,label:"Monthly 🌱",desc:"Sustain the mission"},{a:50,label:"Sponsor 🌟",desc:"Fund a new feature"},{a:100,label:"Patron 🏆",desc:"Champion the mission"}].map(({a,label,desc})=>(
              <div key={a} onClick={()=>{setAppAmount(a);setAppCustom("");}} style={{background:appAmount===a?`linear-gradient(135deg,${T.gold}22,${T.bgCard})`:T.bgCard,border:`1px solid ${appAmount===a?T.borderGold:T.border}`,borderRadius:14,padding:"14px 12px",cursor:"pointer",boxShadow:appAmount===a?`0 2px 16px ${T.shadowGold}`:`0 2px 10px ${T.shadow}`,transition:"all 0.18s"}}>
                <div style={{fontSize:16,fontWeight:700,color:T.gold,fontFamily:"sans-serif",marginBottom:2}}>${a}</div>
                <div style={{fontSize:12,color:T.text,fontFamily:"sans-serif",fontWeight:600}}>{label}</div>
                <div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginTop:2}}>{desc}</div>
              </div>
            ))}
          </div>

          <div style={{position:"relative",marginBottom:14}}>
            <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:T.gold,fontSize:15,fontWeight:700,fontFamily:"sans-serif"}}>$</span>
            <input
              type="number"
              placeholder="Custom amount"
              value={appCustom}
              onChange={e=>{setAppCustom(e.target.value);setAppAmount(null);}}
              style={{background:T.inputBg,border:`1px solid ${appCustom?T.borderGold:T.borderGoldFaint}`,borderRadius:9,padding:"10px 13px 10px 28px",color:T.text,fontSize:16,width:"100%",fontFamily:"sans-serif",outline:"none",boxSizing:"border-box"}}
            />
          </div>

          {/* Payment options */}
          <SL T={T}>Give Via</SL>
          <div style={{display:"flex",flexDirection:"column",gap:9,marginBottom:14}}>
            <button onClick={()=>window.open(`${paypalUrl}/${appAmount||appCustom||""}`, "_blank")} style={{display:"flex",alignItems:"center",gap:12,background:T.bgCard,border:`1px solid ${T.border}`,borderRadius:13,padding:"13px 16px",cursor:"pointer",boxShadow:`0 2px 10px ${T.shadow}`}}>
              <div style={{width:36,height:36,borderRadius:10,background:"#003087",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <span style={{color:"#fff",fontSize:13,fontWeight:900,fontFamily:"sans-serif"}}>PP</span>
              </div>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>PayPal</div>
                <div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif"}}>Fast, secure, no account needed</div>
              </div>
              <div style={{marginLeft:"auto",fontSize:12,color:T.gold,fontFamily:"sans-serif"}}>→</div>
            </button>

            <button onClick={()=>window.open(`${venmoUrl}`, "_blank")} style={{display:"flex",alignItems:"center",gap:12,background:T.bgCard,border:`1px solid ${T.border}`,borderRadius:13,padding:"13px 16px",cursor:"pointer",boxShadow:`0 2px 10px ${T.shadow}`}}>
              <div style={{width:36,height:36,borderRadius:10,background:"#3D95CE",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <span style={{color:"#fff",fontSize:13,fontWeight:900,fontFamily:"sans-serif"}}>V</span>
              </div>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>Venmo</div>
                <div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif"}}>Quick peer-to-peer giving</div>
              </div>
              <div style={{marginLeft:"auto",fontSize:12,color:T.gold,fontFamily:"sans-serif"}}>→</div>
            </button>

            <button onClick={()=>window.open("https://cash.app/$NucleoApp","_blank")} style={{display:"flex",alignItems:"center",gap:12,background:T.bgCard,border:`1px solid ${T.border}`,borderRadius:13,padding:"13px 16px",cursor:"pointer",boxShadow:`0 2px 10px ${T.shadow}`}}>
              <div style={{width:36,height:36,borderRadius:10,background:"#00C244",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <span style={{color:"#fff",fontSize:13,fontWeight:900,fontFamily:"sans-serif"}}>$</span>
              </div>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize:13,color:T.text,fontWeight:600,fontFamily:"sans-serif"}}>Cash App</div>
                <div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif"}}>Send to $NucleoApp</div>
              </div>
              <div style={{marginLeft:"auto",fontSize:12,color:T.gold,fontFamily:"sans-serif"}}>→</div>
            </button>
          </div>

          {/* What your support does */}
          <GCard T={T} style={{border:`1px solid ${T.borderGoldFaint}`}}>
            <div style={{fontSize:11,color:T.gold,fontFamily:"sans-serif",fontWeight:700,marginBottom:10,letterSpacing:"0.08em"}}>YOUR SUPPORT FUNDS</div>
            {[
              {icon:"📖",label:"Real Bible API",desc:"All 66 books, every version"},
              {icon:"⛪",label:"Church Connect",desc:"Live feeds & schedules"},
              {icon:"🔔",label:"Push Notifications",desc:"Group reminders & updates"},
              {icon:"👦",label:"Phase 2: Teen Groups",desc:"Next-gen ministry tools"},
              {icon:"☁️",label:"Cloud Sync",desc:"Your data on every device"},
            ].map(item=>(
              <div key={item.label} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:`1px solid ${T.border}`}}>
                <span style={{fontSize:18}}>{item.icon}</span>
                <div><div style={{fontSize:12,color:T.text,fontFamily:"sans-serif",fontWeight:600}}>{item.label}</div><div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif"}}>{item.desc}</div></div>
              </div>
            ))}
          </GCard>
        </div>
      )}
    </div>
  );
}

// ─── SETTINGS DRAWER ──────────────────────────────────────────────────────────
function SettingsDrawer({T,themeMode,setTheme,language,setLanguage,bibleVersion,setBibleVersion,activeProfile,setActiveProfile,onClose}){
  return(<div style={{position:"fixed",top:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,height:"100vh",background:T.bgDeep,zIndex:200,overflowY:"auto",padding:"20px 16px",boxSizing:"border-box"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}><NucleoLogo size={28} T={T} glow/><div style={{fontSize:15,color:T.gold,fontWeight:700,fontFamily:"sans-serif"}}>Settings</div></div>
      <BtnO T={T} onClick={onClose}>✕ Close</BtnO>
    </div>
    <SL T={T}>Appearance Theme</SL>
    <GCard T={T} style={{marginBottom:18}}>
      <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"}}>{[{m:"system",l:"⚙️ System"},{m:"dark",l:"🌑 Oscuro"},{m:"light",l:"☀️ Luminoso"},{m:"earth",l:"🌿 Tierra"}].map(({m,l})=><Pill key={m} T={T} small active={themeMode===m} onClick={()=>setTheme(m)}>{l}</Pill>)}</div>
      <div style={{display:"flex",gap:6,marginTop:4}}>{Object.values(THEMES).map(th=>(<div key={th.id} onClick={()=>setTheme(th.id)} style={{flex:1,height:28,borderRadius:7,background:th.bg,border:`2px solid ${themeMode===th.id?th.gold:"transparent"}`,cursor:"pointer",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",right:4,top:4,width:8,height:8,borderRadius:"50%",background:th.gold}}/></div>))}</div>
      <div style={{fontSize:10,color:T.textMuted,fontFamily:"sans-serif",marginTop:8}}>{themeMode==="system"?"Follows your device's light/dark setting":themeMode==="dark"?"Deep navy & gold — Oscuro":themeMode==="light"?"Warm ivory & gold — Luminoso":"Deep earth tones & amber — Tierra"}</div>
    </GCard>
    <SL T={T}>Switch Profile</SL>
    {PROFILES.map(p=>(<GCard key={p} T={T} onClick={()=>{setActiveProfile(p);onClose();}} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 14px",marginBottom:7,cursor:"pointer",border:`1px solid ${activeProfile===p?T.borderGold:T.border}`}}><div style={{fontSize:12,color:activeProfile===p?T.gold:T.text,fontFamily:"sans-serif"}}>👤 {p}</div>{activeProfile===p&&<Badge color={T.gold}>Active</Badge>}</GCard>))}
    <SL T={T} style={{marginTop:16}}>Language & Version</SL>
    <GCard T={T} style={{marginBottom:16}}><div style={{display:"flex",gap:8,marginBottom:10}}><Pill T={T} active={language==="en"} onClick={()=>{setLanguage("en");setBibleVersion("NIV");}} style={{flex:1}}>🇺🇸 English</Pill><Pill T={T} active={language==="es"} onClick={()=>{setLanguage("es");setBibleVersion("RVR60");}} style={{flex:1}}>🇲🇽 Español</Pill></div><div style={{fontSize:11,color:T.textMuted,fontFamily:"sans-serif"}}>Current version: <span style={{color:T.gold}}>{bibleVersion}</span></div></GCard>
    <div style={{display:"flex",gap:8}}><button onClick={()=>window.open("https://wa.me/","_blank")} style={{flex:1,padding:"12px",borderRadius:11,border:"none",background:"linear-gradient(135deg,#25D366,#128C7E)",color:"#fff",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"sans-serif"}}>💬 WhatsApp</button><Btn T={T} style={{flex:1}} onClick={()=>window.open("mailto:","_blank")}>📧 Email</Btn></div>
  </div>);
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function Nucleo(){
  const [themeMode,setThemeMode]=useState(()=>load("theme","system"));
  const [resolvedTheme,setResolvedTheme]=useState("dark");
  useEffect(()=>{const apply=(mode)=>{let r=mode;if(mode==="system")r=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";setResolvedTheme(r);};apply(themeMode);if(themeMode==="system"){const mq=window.matchMedia("(prefers-color-scheme: dark)");const h=()=>apply("system");mq.addEventListener("change",h);return()=>mq.removeEventListener("change",h);}},[themeMode]);
  const setTheme=(m)=>{save("theme",m);setThemeMode(m);};
  const T=THEMES[resolvedTheme]||THEMES.dark;

  const [activeTab,setActiveTab]=useState(()=>window.__NUCLEO_START_TAB__||load("tab","home"));
  const [language,setLanguage]=useState(()=>load("language","en"));
  const [bibleVersion,setBibleVersion]=useState(()=>load("version","NIV"));
  const [highlights,setHighlights]=useState(()=>load("highlights",["John 3:16","Philippians 4:13"]));
  const [bookmarks,setBookmarks]=useState(()=>load("bookmarks",["John 3:16","Psalm 23:1"]));
  const [activeGroup,setActiveGroup]=useState(()=>load("group","men"));
  const [activeProfile,setActiveProfile]=useState(()=>load("profile","Personal"));
  const [connectedChurch,setConnectedChurch]=useState(()=>load("church",null));
  const [projects,setProjects]=useState(()=>load("projects",[{id:1,name:"Men's Accountability – June",group:"men",date:"2025-06-07",notes:"Focus: Integrity & Identity in Christ",verses:["John 3:16"],status:"upcoming"},{id:2,name:"Couples Retreat Prep",group:"couples",date:"2025-06-14",notes:"Love languages + 1 Cor 13",verses:[],status:"upcoming"},{id:3,name:"Women's Tea Study",group:"women",date:"2025-05-30",notes:"Identity in Christ – Proverbs 31",verses:[],status:"done"}]));
  const [notes,setNotes]=useState(()=>load("notes",[{id:1,title:"Sunday Sermon Notes",date:"2025-05-04",content:"Pastor spoke on grace and renewal. Key verse: Romans 12:2.",type:"text"},{id:2,title:"Men's Group Insights",date:"2025-04-27",content:"Discussion on accountability and brotherhood. Powerful moment of prayer.",type:"audio"}]));
  const [calendarDate,setCalendarDate]=useState(new Date());
  const [drawerOpen,setDrawerOpen]=useState(false);
  const [showNoteForm,setShowNoteForm]=useState(false);
  const [showProjectForm,setShowProjectForm]=useState(false);

  useEffect(()=>save("tab",activeTab),[activeTab]);
  useEffect(()=>save("language",language),[language]);
  useEffect(()=>save("version",bibleVersion),[bibleVersion]);
  useEffect(()=>save("highlights",highlights),[highlights]);
  useEffect(()=>save("bookmarks",bookmarks),[bookmarks]);
  useEffect(()=>save("group",activeGroup),[activeGroup]);
  useEffect(()=>save("profile",activeProfile),[activeProfile]);
  useEffect(()=>save("church",connectedChurch),[connectedChurch]);
  useEffect(()=>save("projects",projects),[projects]);
  useEffect(()=>save("notes",notes),[notes]);

  const NAV=[{id:"home",label:"Home"},{id:"bible",label:"Bible"},{id:"groups",label:"Groups"},{id:"calendar",label:"Cal"},{id:"notes",label:"Notes"},{id:"media",label:"Media"},{id:"find",label:"Find"},{id:"give",label:"Give"}];
  const tp={T,language,setLanguage,bibleVersion,setBibleVersion,highlights,setHighlights,bookmarks,setBookmarks,activeGroup,setActiveGroup,activeProfile,setActiveProfile,connectedChurch,setConnectedChurch,projects,setProjects,notes,setNotes,calendarDate,setCalendarDate,showNoteForm,setShowNoteForm,showProjectForm,setShowProjectForm,setActiveTab};

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",background:T.bg,minHeight:"100vh",color:T.text,maxWidth:430,margin:"0 auto",position:"relative",overflowX:"hidden"}}>
      {/* HEADER */}
      <div style={{background:`${T.bgDeep}fa`,borderBottom:`1px solid ${T.border}`,padding:"11px 18px 13px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:`0 1px 0 ${T.gold}18,0 4px 24px ${T.shadow}`}}>
        <div style={{display:"flex",alignItems:"center",gap:11}}>
          <NucleoLogo size={38} T={T} glow/>
          <div>
            <div style={{fontSize:21,fontWeight:700,color:T.gold,fontFamily:"Georgia,serif",lineHeight:1,textShadow:`0 0 18px ${T.gold}55`}}>Núcleo</div>
            <div style={{fontSize:8.5,color:T.textMuted,fontFamily:"sans-serif",letterSpacing:"0.18em",marginTop:2,textTransform:"uppercase"}}>The Light Within</div>
          </div>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <div style={{background:`${T.gold}14`,border:`1px solid ${T.borderGoldFaint}`,borderRadius:8,padding:"4px 9px",fontSize:10,color:T.gold,fontFamily:"sans-serif",fontWeight:600}}>{bibleVersion} {language==="en"?"EN":"ES"}</div>
          <div onClick={()=>setDrawerOpen(true)} style={{width:36,height:36,background:`${T.gold}12`,border:`1px solid ${T.borderGoldFaint}`,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:16}}>⚙️</div>
        </div>
      </div>

      {drawerOpen&&<SettingsDrawer {...tp} themeMode={themeMode} setTheme={setTheme} onClose={()=>setDrawerOpen(false)}/>}

      {/* CONTENT */}
      <div style={{padding:"14px 14px 88px"}}>
        {activeTab==="home"&&<HomeTab {...tp}/>}
        {activeTab==="bible"&&<BibleTab {...tp}/>}
        {activeTab==="groups"&&<GroupsTab {...tp}/>}
        {activeTab==="calendar"&&<CalendarTab {...tp}/>}
        {activeTab==="notes"&&<NotesTab {...tp}/>}
        {activeTab==="media"&&<MediaTab {...tp}/>}
        {activeTab==="find"&&<FindTab {...tp}/>}
        {activeTab==="give"&&<GenerosityTab {...tp}/>}
      </div>

      {/* BOTTOM NAV */}
      <nav style={{display:"flex",background:T.navBg,borderTop:`1px solid ${T.border}`,position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,zIndex:100,boxShadow:`0 -1px 0 ${T.gold}14,0 -8px 32px ${T.shadow}`,padding:"5px 0 max(16px,env(safe-area-inset-bottom))"}}>
        {NAV.map(item=>{
          const active=activeTab===item.id;
          return(
            <div key={item.id} onClick={()=>setActiveTab(item.id)} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",paddingTop:9,cursor:"pointer",position:"relative"}}>
              {active&&<div style={{position:"absolute",top:0,left:"15%",right:"15%",height:2,background:`linear-gradient(90deg,transparent,${T.gold},transparent)`,borderRadius:1}}/>}
              {active&&<div style={{position:"absolute",top:5,width:40,height:40,borderRadius:12,background:`${T.gold}14`,boxShadow:`0 0 16px ${T.gold}28`}}/>}
              <div style={{position:"relative",transform:active?"translateY(-1px)":"none",transition:"transform 0.2s"}}>
                <NavIcon id={item.id} active={active} color={T.gold} muted={T.textMuted}/>
              </div>
              <div style={{fontSize:9.5,fontFamily:"sans-serif",fontWeight:active?700:400,color:active?T.gold:T.textMuted,marginTop:3,letterSpacing:"0.02em",transition:"color 0.2s"}}>{item.label}</div>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
