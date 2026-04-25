const http = require('http');
const url = require('url');
const crypto = require('crypto');
const fs = require('fs');

const GOD_PASSWORD = "PankajGod2024";

// 50+ HACKING TOOLS LIST
const HACKING_TOOLS = [
  'aircrack-ng', 'hashcat', 'metasploit', 'nmap', 'wireshark', 'john',
  'hydra', 'sqlmap', 'nikto', 'burpsuite', 'zmap', 'masscan',
  'hcitool', 'bluetoothctl', 'ubertooth', 'rtl-sdr', 'hackrf',
  'bettercap', 'responder', 'eternalblue', 'wanna-cry',
  'keylogger', 'screen-capture', 'mic-spy', 'gps-spoof',
  'wifi-deauth', 'bt-blueborne', 'android-rat', 'ios-jailbreak',
  'rootkit', 'backdoor', 'trojan', 'ransomware', 'phishing-kit',
  'sql-injection', 'xss', 'csrf', 'ddos-tool', 'port-scanner',
  'exploit-db', 'veil-framework', 'empire', 'cobalt-strike'
];

// Auto folders
['hacks','tools','wifi','bt'].forEach(d=>!fs.existsSync(d)&&fs.mkdirSync(d));

let liveData={
  mobiles: [], wifi: [], bluetooth: [], tools: HACKING_TOOLS.length,
  jamming: {gps:true,wifi24:true,freq433:true}, totalHacks:0
};

// LIVE SCANS
function scanAll(){
  liveData.mobiles=Array.from({length:45},(_,i)=>({
    id:i+1,distance:Math.floor(Math.random()*200)+'m',
    phone:'98'+Math.floor(1e6+Math.random()*9e6),
    sim:['Airtel★','Jio★','Vi★','BSNL★'][Math.floor(Math.random()*4)],
    name:['Pankaj','Priya','Rahul','Neha','Amit'][Math.floor(Math.random()*5)]+' Sharma'
  }));
  liveData.wifi=Array.from({length:25},(_,i)=>({
    ssid:`NET${i+1}_${crypto.randomBytes(2).toString('hex')}`,
    pass:`CRACKED_${crypto.randomBytes(4).toString('hex')}`,
    clients:Math.floor(Math.random()*12)+1
  }));
  liveData.bluetooth=Array.from({length:18},(_,i)=>({
    name:`BT${i+1}`,mac:crypto.randomBytes(6).toString('hex').match(/.{1,2}/g).join(':'),
    control:['PLAY','VOLUME','DISCONNECT'][Math.floor(Math.random()*3)]
  }));
}
setInterval(scanAll,2500); scanAll();

const server=http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','*');
  res.setHeader('Access-Control-Allow-Headers','*');
  if(req.method==='OPTIONS')return res.end();
  
  const p=url.parse(req.url,true).pathname;
  const t=req.url.split('token=')[1]?.split('&')[0];
  
  if(p==='/login'&&req.method==='POST'){
    let b='';req.on('data',c=>b+=c);req.on('end',()=>{try{
      const{pass}=JSON.parse(b);if(pass===GOD_PASSWORD){
        res.end(JSON.stringify({token:'GOD_'+crypto.randomBytes(20).toString('hex'),live:liveData}));
      }else res.statusCode=401,res.end('❌');
    }catch{res.statusCode=400;res.end('❌');}});
    return;
  }
  if(!t&&p!=='/'){res.statusCode=401;res.end('🚫');return;}
  
  // TOOLS LIST
  if(p==='/tools'){res.end(JSON.stringify({total:liveData.tools,active:HACKING_TOOLS}));return;}
  
  // 200m SCAN
  if(p==='/scan'){res.end(JSON.stringify({status:'🔍 200m SCAN',mobiles:liveData.mobiles.slice(0,20)}));return;}
  
  // PHONE HACK
  if(p.startsWith('/hack/')){
    const phone=p.split('/')[2];
    const data={phone,name:'Pankaj Sharma',aadhaar:'**** **** 5678',bank:'₹3,25,450',car:'DL12AB1234',whatsapp:phone,gps:'Rohini LIVE'};
    const f=`./hacks/hack_${phone}.json`;fs.writeFileSync(f,JSON.stringify(data,null,2));
    res.end(JSON.stringify({status:'💥 HACKED',data,dl:`/dl/${p.split('/').pop()}.json?token=${t}`}));
    return;
  }
  
  // WIFI CRACK
  if(p==='/wifi'){
    const f='./wifi/all-wifi-cracks.json';fs.writeFileSync(f,JSON.stringify(liveData.wifi,null,2));
    res.end(JSON.stringify({status:'📶 CRACKED',networks:liveData.wifi,dl:'/dl/all-wifi-cracks.json?token='+t}));
    return;
  }
  
  // BT CONTROL
  if(p==='/bt'){
    res.end(JSON.stringify({status:'🔵 CONTROLLED',devices:liveData.bluetooth,commands:['PLAY ALL','MAX VOL','DISCONNECT']}));
  }
  
  // DOWNLOAD
  if(p.startsWith('/dl/')){
    const f=`./${p.split('/')[2].split('.')[0]||'hacks'}/${p.split('/')[2]}`;
    if(fs.existsSync(f)){res.setHeader('Content-Disposition',`attachment; filename="${p.split('/')[2]}"`);res.end(fs.readFileSync(f));}
    else res.statusCode=404,res.end('❌');return;
  }
  
  // ULTIMATE PANEL
  res.end(`
<!DOCTYPE html>
<html>
<head>
<title>🦹‍♂️ 50+ HACKING TOOLS</title>
<meta name="viewport" content="width=device-width">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:linear-gradient(45deg,#000,#0f0,#00f,#f00);animation:g 8s infinite;color:#fff;font-family:monospace;}
@keyframes g{background-position:0% 50%;background-size:400% 400%;}50%{background-position:100% 50%;}
.hack-panel{max-width:1400px;margin:auto;padding:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));}
.card{background:rgba(0,0,0,.95);border:2px solid #0ff;border-radius:15px;padding:25px;box-shadow:0 15px 40px rgba(0,255,255,.4);text-align:center;}
input,button{width:100%;padding:18px;margin:8px 0;border:2px solid #0ff;background:rgba(0,255,255,.1);color:#0ff;font-family:monospace;border-radius:10px;font-size:16px;}
.hack-btn{background:linear-gradient(45deg,#f0f,#00f) !important;color:#fff !important;font-weight:700;font-size:18px;cursor:pointer;}
#output{grid-column:1/-1;background:#000;border:3px solid #0ff;padding:30px;height:450px;overflow:auto;font-size:14px;white-space:pre-wrap;border-radius:20px;box-shadow:0 20px 60px #0ff;}
.live{background:#0f0;color:#000;padding:8px 15px;border-radius:25px;font-weight:700;display:inline-block;margin:10px 0;font-size:14px;}
.tools-list{max-height:200px;overflow:auto;background:rgba(0,255,255,.05);border-radius:10px;padding:15px;font-size:12px;text-align:left;}
</style>
</head>
<body>
<div class="hack-panel">
<div class="card">
<h3>🔐 GOD MODE</h3>
<input id="pass" type="password" placeholder="PankajGod2024">
<button class="hack-btn" onclick="login()">ACTIVATE 50+ TOOLS</button>
<div id="status"></div>
</div>

<div class="card">
<h3>🔍 200m SCAN</h3>
<button class="hack-btn" onclick="scan()" disabled>SCAN 45 MOBILES</button>
<div id="live-scan" class="live">45 Devices Live</div>
</div>

<div class="card">
<h3>📱 PHONE HACK</h3>
<input id="phone" placeholder="9876543210">
<button class="hack-btn" onclick="phoneHack()" disabled>HACK+DOWNLOAD</button>
</div>

<div class="card">
<h3>📶 WIFI CRACK</h3>
<button class="hack-btn" onclick="wifiHack()" disabled>25 NETWORKS</button>
<div id="live-wifi" class="live">25 WiFi Live</div>
</div>

<div class="card">
<h3>🔵 BLUETOOTH</h3>
<button class="hack-btn" onclick="btHack()" disabled>18 DEVICES</button>
</div>

<div class="card">
<h3>🛠️ 50+ TOOLS</h3>
<button class="hack-btn" onclick="tools()" disabled>LOAD TOOLS</button>
<div id="tools-list" class="tools-list"></div>
</div>

<div class="card">
<h3>📡 JAMMER</h3>
<button class="hack-btn" onclick="jammer()" disabled>JAM GPS/WIFI</button>
<div>GPS:ON | 2.4GHz:ON | 433MHz:ON</div>
</div>

<div class="card" style="grid-column:1/-1">
<h3>📊 ULTIMATE DASHBOARD</h3>
<button class="hack-btn" onclick="dashboard()" disabled>LIVE STATS</button>
</div>

<div id="output">🦹‍♂️ 50+ HACKING TOOLS READY! LOGIN TO ACTIVATE</div>
</div>

<script>
let token='';
async function api(e){return await fetch('/'+e+'?token='+token).then(r=>r.json());}
async function login(){
  const p=document.getElementById('pass').value;
  const d=await fetch('/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pass:p})}).then(r=>r.json());
  if(d.token){
    token=d.token;
    document.getElementById('status').innerHTML='<span class="live">✅ 50+ TOOLS ACTIVE</span>';
    document.querySelectorAll('.hack-btn[disabled]').forEach(e=>e.disabled=false);
  }
}
async function scan(){document.getElementById('output').textContent=JSON.stringify(await api('scan'),null,2);}
async function phoneHack(){
  const p=document.getElementById('phone').value;
  const d=await api('hack/'+p);
  document.getElementById('output').textContent=JSON.stringify(d.data,null,2);
}
async function wifiHack(){
  const d=await api('wifi');
  document.getElementById('output').textContent=JSON.stringify(d.networks,null,2);
}
async function btHack(){document.getElementById('output').textContent=JSON.stringify(await api('bt'),null,2);}
async function tools(){
  const t=await api('tools');
  document.getElementById('tools-list').innerHTML=t.active.slice(0,20).join('<br>');
  document.getElementById('output').textContent='🛠️ '+t.total+' TOOLS LOADED:\\n'+t.active.join('\\n');
}
async function jammer(){document.getElementById('output').textContent='📡 JAMMING ACTIVE:\\nGPS: BLOCKED\\nWiFi 2.4GHz: JAMMED\\n433MHz Garage: OPEN\\n5GHz: DISRUPTED';}
async function dashboard(){document.getElementById('output').textContent='📊 DASHBOARD:\\nMobiles: '+liveData.mobiles.length+'\\nWiFi: '+liveData.wifi.length+'\\nBluetooth: '+liveData.bluetooth.length+'\\nTotal Hacks: '+liveData.totalHacks+'\\nTools: '+liveData.tools;}
</script>
</body>
</html>`);
});

server.listen(6969,()=>console.log('\\n🛠️ 50+ HACKING TOOLS LIVE! http://localhost:6969'));
