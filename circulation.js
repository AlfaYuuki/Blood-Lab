/* Blood Lab 3.0 — Circulation Theater controller */
(()=>{
const $=id=>document.getElementById(id);
if(!$('circulationTheater')) return;
let playing=true, speed=1, stage=0, mode='flow';
const stages=[
{title:'1 · The heart pumps',body:'The right side of the heart sends oxygen-poor blood toward the lungs. The left side receives oxygen-rich blood from the lungs and pumps it out to the body. Valves help keep flow moving in one direction.'},
{title:'2 · Gas exchange in the lungs',body:'In tiny lung capillaries, oxygen diffuses from the air spaces into the blood and binds reversibly to hemoglobin inside red blood cells. Carbon dioxide moves from blood toward the lungs to be exhaled.'},
{title:'3 · Delivery to body tissues',body:'As blood passes through systemic capillaries, oxygen leaves hemoglobin and diffuses into nearby tissues. Carbon dioxide produced by cells enters the blood. The red cells continue through veins back toward the heart.'},
{title:'4 · The loop repeats',body:'Blood returns to the right side of the heart and the pulmonary circuit begins again. This continuous circulation transports gases and supports the body; it is not a one-way trip from heart to toes.'}
];
function setStage(i){
 stage=(i+4)%4;
 document.querySelectorAll('.stage-btn').forEach((b,n)=>b.classList.toggle('active',n===stage));
 $('stageTitle').textContent=stages[stage].title;
 $('stageBody').textContent=stages[stage].body;
 $('stageCounter').textContent='STAGE '+(stage+1)+' / 4';
 $('stageProgress').style.width=((stage+1)*25)+'%';
}
document.querySelectorAll('.stage-btn').forEach((b,i)=>b.addEventListener('click',()=>setStage(i)));
$('nextStage').addEventListener('click',()=>setStage(stage+1));
$('prevStage').addEventListener('click',()=>setStage(stage-1));
$('flowMode').addEventListener('click',()=>setMode('flow'));
$('transfusionMode').addEventListener('click',()=>{setMode('transfusion');renderTransfusion()});
function setMode(next){
 mode=next;
 $('flowPanel').classList.toggle('hidden',next!=='flow');
 $('transfusionPanel').classList.toggle('active',next==='transfusion');
 $('flowMode').classList.toggle('primary',next==='flow');
 $('transfusionMode').classList.toggle('primary',next==='transfusion');
}
$('playFlow').addEventListener('click',()=>{
 playing=!playing;
 $('circulationTheater').classList.toggle('paused',!playing);
 $('playFlow').textContent=playing?'Ⅱ Pause flow':'▶ Resume flow';
});
$('speedControl').addEventListener('change',e=>{
 speed=Number(e.target.value);
 $('circulationTheater').style.setProperty('--flow-speed',speed);
 $('circulationTheater').querySelectorAll('.flow-pulse').forEach(el=>el.style.animationDuration=(1.2/speed)+'s');
});
function reducedMotion(){return window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches}
if(reducedMotion()){$('playFlow').textContent='▶ Start flow';playing=false;$('circulationTheater').classList.add('paused')}
setStage(0);

const antigenSet=t=>({A:['A','AB'].includes(t.replace(/[+-]/g,'')),B:['B','AB'].includes(t.replace(/[+-]/g,'')),D:t.endsWith('+')});
const plasmaSet=t=>({A:['B','O'].includes(t.replace(/[+-]/g,'')),B:['A','O'].includes(t.replace(/[+-]/g,''))});
function renderTransfusion(){
 const d=$('donor').value,r=$('recipient').value,s=$('sensitized').checked;
 const da=antigenSet(d),ra=plasmaSet(r);
 const aboBad=(da.A&&ra.A)||(da.B&&ra.B);
 const antiD=r.endsWith('-')&&s&&da.D;
 const rhRisk=r.endsWith('-')&&da.D;
 const status=aboBad?'ABO antigen–antibody mismatch':antiD?'Anti-D recognition is represented':rhRisk?'D-positive exposure risk (no anti-D selected)':'No ABO/Rh(D) conflict represented';
 $('transfusionSummary').textContent=d+' donor red cells → '+r+' recipient · '+status+'.';
 $('transfusionStatus').textContent=aboBad||antiD?'RECOGNITION MODELLED':rhRisk?'EXPOSURE RISK':'NO MODELLED CONFLICT';
 $('transfusionStatus').className='state '+(aboBad||antiD?'bad':rhRisk?'warn':'good');
 $('transfusionExplanation').textContent=aboBad?'The selected donor red-cell antigens match an ABO antibody expected in the recipient plasma. The glowing contact markers represent antigen–antibody recognition in a simplified teaching illustration.':antiD?'The recipient is set as previously sensitized and the donor red cells carry D antigen. The highlighted binding represents anti-D recognition.':rhRisk?'No anti-D is selected, so the illustration does not claim an immediate anti-D reaction. D-positive exposure can lead to sensitization; this is generally not preferred for an Rh-negative recipient.':'This selected pair has no ABO or Rh(D) conflict represented by this limited model. Real compatibility still requires laboratory testing and professional assessment.';
 $('transfusionScene').innerHTML=
 '<defs><radialGradient id="txRbc"><stop stop-color="#ff9e9f"/><stop offset=".6" stop-color="#e44d66"/><stop offset="1" stop-color="#922b48"/></radialGradient></defs>'+
 '<rect x="24" y="30" width="952" height="310" rx="24" fill="#101d2a" stroke="#29435b"/>'+
 '<path d="M75 190H925" stroke="#6c263d" stroke-width="88" stroke-linecap="round" opacity=".55"/>'+
 '<path d="M75 190H925" stroke="#d84b64" stroke-width="60" stroke-linecap="round" opacity=".22"/>'+
 '<path d="M75 190H925" stroke="#ff8290" stroke-width="3" stroke-dasharray="4 20" class="flow-pulse"/>'+
 '<g transform="translate(250 190)"><ellipse rx="78" ry="48" fill="url(#txRbc)" stroke="#ff9ea5" stroke-width="2"/><ellipse rx="32" ry="15" fill="#8d2b44" opacity=".55"/>'+
 (da.A?'<path d="M-42 -40v-18" stroke="#72a9ff" stroke-width="5"/><circle cx="-42" cy="-60" r="7" fill="#72a9ff"/>':'')+
 (da.B?'<path d="M0 -47v-18" stroke="#6fe0a1" stroke-width="5"/><circle cy="-68" r="7" fill="#6fe0a1"/>':'')+
 (da.D?'<path d="M42 -40v-18" stroke="#c18bff" stroke-width="5"/><circle cx="42" cy="-60" r="7" fill="#c18bff"/>':'')+
 '</g>'+
 '<g transform="translate(730 190)"><ellipse rx="78" ry="48" fill="url(#txRbc)" stroke="#ff9ea5" stroke-width="2"/><ellipse rx="32" ry="15" fill="#8d2b44" opacity=".55"/></g>'+
 '<text x="250" y="285" text-anchor="middle" fill="#e3edf7" font-size="14" font-weight="800">DONOR RBC · '+d+'</text><text x="730" y="285" text-anchor="middle" fill="#e3edf7" font-size="14" font-weight="800">RECIPIENT BLOOD · '+r+'</text>'+
 '<text x="500" y="75" text-anchor="middle" fill="#9fb3c7" font-size="13">SIMPLIFIED MICROSCOPIC VIEW · NOT TO SCALE</text>'+
 (aboBad||antiD?'<g class="reaction-burst"><circle cx="490" cy="190" r="40" fill="none" stroke="#ff6f7d" stroke-width="5" stroke-dasharray="5 7"/><path d="M490 139v-22m0 146v-22m-51-51h-22m146 0h-22m-87-36-16-16m104 104-16-16m0-72 16-16m-104 104 16-16" stroke="#ff8994" stroke-width="5" stroke-linecap="round"/></g><text x="500" y="130" text-anchor="middle" fill="#ff9aa4" font-size="12" font-weight="800">ANTIBODY RECOGNITION</text>':rhRisk?'<g class="clot-particle"><circle cx="500" cy="190" r="25" fill="none" stroke="#f4c36a" stroke-width="3" stroke-dasharray="4 6"/></g><text x="500" y="130" text-anchor="middle" fill="#f4c36a" font-size="12" font-weight="800">POTENTIAL SENSITIZATION RISK</text>':'<circle cx="500" cy="190" r="22" fill="none" stroke="#6fe0a1" stroke-width="3"/><path d="m489 190 8 8 15-18" fill="none" stroke="#6fe0a1" stroke-width="4" stroke-linecap="round"/>')+
 '<text x="500" y="320" text-anchor="middle" fill="#9fb3c7" font-size="11">Illustrative recognition marker — not a prediction of a real patient outcome</text>';
}
$('refreshTransfusion').addEventListener('click',renderTransfusion);
['donor','recipient','sensitized'].forEach(id=>$(id).addEventListener('change',()=>{if(mode==='transfusion')renderTransfusion()}));
})();
