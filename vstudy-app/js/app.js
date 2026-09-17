(function(){
  "use strict";

  /* ---------------- Icon set (inline SVG, line-style) ---------------- */
  var ICON_PATHS = {
    logo: '<path d="M12 2l7 3.5v6.2c0 5-3 8.6-7 10.3-4-1.7-7-5.3-7-10.3V5.5L12 2z" fill="#101425" stroke="none"/><path d="M12 6.2l-3.3 6.6h2l-.7 3.4L14 9.6h-2l.6-3.4z" fill="#e8a23d" stroke="none"/>',
    calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2.2"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="3" y1="9.5" x2="21" y2="9.5"/>',
    chat: '<path d="M4 5.5h16a1 1 0 0 1 1 1v9.6a1 1 0 0 1-1 1H9.2L5 21v-3.9H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1z"/>',
    user: '<circle cx="12" cy="8.3" r="3.6"/><path d="M4.8 20c1.2-4.2 4.1-6.4 7.2-6.4s6 2.2 7.2 6.4"/>',
    wallet: '<rect x="3" y="6.2" width="18" height="12.6" rx="2.2"/><path d="M3 10.2h18"/><circle cx="16.6" cy="14.2" r="1" fill="currentColor" stroke="none"/>',
    palette: '<path d="M12 3.2a8.8 8.8 0 1 0 0 17.6c1.2 0 2.1-1 2.1-2.1 0-.6-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1 .9-1.9 1.9-1.9h2.1a3.9 3.9 0 0 0 3.9-3.9c0-4.3-4-6.9-9-6.9z"/><circle cx="7.6" cy="10.6" r="1" fill="currentColor" stroke="none"/><circle cx="10.4" cy="7.2" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="8.2" r="1" fill="currentColor" stroke="none"/>',
    image: '<rect x="3" y="4.5" width="18" height="15" rx="2.2"/><circle cx="8.6" cy="9.7" r="1.6"/><path d="M21 15.8l-5.3-5.3-9.2 8"/>',
    grid: '<rect x="3.2" y="3.2" width="7" height="7" rx="1.6"/><rect x="13.8" y="3.2" width="7" height="7" rx="1.6"/><rect x="3.2" y="13.8" width="7" height="7" rx="1.6"/><rect x="13.8" y="13.8" width="7" height="7" rx="1.6"/>',
    power: '<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',
    chevronLeft: '<polyline points="15 5 8 12 15 19"/>',
    code: '<polyline points="8.5 6.5 3.5 12 8.5 17.5"/><polyline points="15.5 6.5 20.5 12 15.5 17.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3c2.4 2.7 3.8 6 3.8 9s-1.4 6.3-3.8 9c-2.4-2.7-3.8-6-3.8-9s1.4-6.3 3.8-9z"/>',
    activity: '<polyline points="3 12.5 7.5 12.5 9.7 6 13.7 18 16 12.5 21 12.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7.2 12 12.4 15.8 14.4"/>',
    book: '<path d="M12 6.3c-2.1-1.6-5-2-8-1.6v12.8c3-.4 5.9.1 8 1.6 2.1-1.5 5-2 8-1.6V4.7c-3-.4-5.9 0-8 1.6z"/><line x1="12" y1="6.3" x2="12" y2="18.7"/>',
    alert: '<path d="M12 3.2 22 20.4H2z"/><line x1="12" y1="9.6" x2="12" y2="14.6"/><circle cx="12" cy="17.6" r="0.9" fill="currentColor" stroke="none"/>',
    award: '<circle cx="12" cy="8.2" r="5"/><polyline points="8.4 12.7 6.4 21.2 12 18 17.6 21.2 15.6 12.7"/>',
    monitor: '<rect x="3" y="4.2" width="18" height="12.2" rx="2"/><line x1="8" y1="20.2" x2="16" y2="20.2"/><line x1="12" y1="16.4" x2="12" y2="20.2"/>',
    phone: '<path d="M6.6 3.5h2.6l1.4 4-1.9 1.5c.9 2.6 3 4.7 5.6 5.6l1.5-1.9 4 1.4v2.6c0 1.1-.9 2-2.1 1.9C10.4 18 6 13.6 5.6 6.6c-.1-1.2.9-2.1 1.9-2.1z"/>',
    droplet: '<path d="M12 3.2s6.2 6.8 6.2 11a6.2 6.2 0 0 1-12.4 0c0-4.2 6.2-11 6.2-11z"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1.4"/><line x1="8" y1="7.2" x2="8.01" y2="7.2"/><line x1="12" y1="7.2" x2="12.01" y2="7.2"/><line x1="16" y1="7.2" x2="16.01" y2="7.2"/><line x1="8" y1="11.2" x2="8.01" y2="11.2"/><line x1="12" y1="11.2" x2="12.01" y2="11.2"/><line x1="16" y1="11.2" x2="16.01" y2="11.2"/><line x1="9" y1="21" x2="9" y2="15.5"/><line x1="15" y1="21" x2="15" y2="15.5"/>',
    cap: '<path d="M12 3 1.5 8.2 12 13.4l9-4.6V15h1V8.2z"/><path d="M6 10.7v4.5c0 1.8 2.7 3.2 6 3.2s6-1.4 6-3.2v-4.5"/>',
    link: '<path d="M9.2 14.8 14.8 9.2"/><path d="M13.6 4.4h2.8a3.2 3.2 0 0 1 3.2 3.2v0a3.2 3.2 0 0 1-3.2 3.2h-1"/><path d="M10.4 16.6H7.6a3.2 3.2 0 0 1-3.2-3.2v0a3.2 3.2 0 0 1 3.2-3.2h1"/>',
    edit: '<path d="M4 17.8V20h2.2L17.8 8.4l-2.2-2.2z"/><path d="M15.8 4.4l2.2-2.2a1.4 1.4 0 0 1 2 0l1.8 1.8a1.4 1.4 0 0 1 0 2l-2.2 2.2z"/>',
    users: '<circle cx="9" cy="8.3" r="3"/><path d="M3.5 19.5c.9-3.4 3-5.1 5.5-5.1s4.6 1.7 5.5 5.1"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.4c1.9.2 3.4 1.5 4.1 4"/>',
    idcard: '<rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="8.6" cy="10.6" r="2"/><path d="M5.6 16c.6-1.7 1.7-2.5 3-2.5s2.4.8 3 2.5"/><line x1="14.5" y1="9" x2="18.5" y2="9"/><line x1="14.5" y1="12.2" x2="18.5" y2="12.2"/>'
  };
  function icon(name, cls){
    var p = ICON_PATHS[name] || "";
    return '<svg class="i '+(cls||"")+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';
  }

  var STORE_KEY = "vstudy_profile_v2";
  var ATT_KEY = "vstudy_attendance_v2";

  function safeGet(key){ try{ var v = localStorage.getItem(key); return v ? JSON.parse(v) : null; }catch(e){ return null; } }
  function safeSet(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); return true; }catch(e){ return false; } }

  var defaultAttendance = {
    milestone:"MS1 Jul-Sep 2026",
    slots:[
      {label:"SLOT A", code:"CSA1504", pct:81},
      {label:"SLOT B", code:"DSA0504", pct:85},
      {label:"SLOT C", code:"CSA0611", pct:19},
      {label:"SLOT D", code:"DSA0107", pct:81}
    ]
  };

  var state = {
    profile: safeGet(STORE_KEY),
    attendance: safeGet(ATT_KEY) || defaultAttendance,
    view:"attendance",
    menuOpen:false
  };

  var app = document.getElementById("app");
  var dim = document.getElementById("overlayDim");

  function showToast(msg){
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(function(){ t.classList.remove("show"); }, 1800);
  }
  function initials(name){
    if(!name) return "?";
    var parts = name.trim().split(/\s+/);
    return (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
  }

  /* ---------------- Header ---------------- */
  function renderHeader(){
    var p = state.profile;
    var avatarInner = p && p.photo ? '<img src="'+p.photo+'" alt="profile">' : '<span>'+(p?initials(p.name):"?")+'</span>';
    return (
      '<header class="topbar">'+
        '<div class="brand">'+
          '<div class="brand-mark"><svg viewBox="0 0 24 24">'+ICON_PATHS.logo+'</svg></div>'+
          '<div class="brand-name">VStudy</div>'+
        '</div>'+
        '<div class="top-actions">'+
          '<button class="icon-btn" id="btnCalendar" aria-label="Calendar">'+icon("calendar")+'</button>'+
          '<button class="icon-btn" id="btnChat" aria-label="Chat">'+icon("chat")+'</button>'+
          '<button class="avatar-btn" id="btnAvatar" aria-label="Menu">'+avatarInner+'</button>'+
        '</div>'+
      '</header>'
    );
  }

  /* ---------------- Ring helpers (SVG stroke-dasharray) ---------------- */
  function circleRing(pct, colorHex, size, stroke, centerHtml, wrapClass){
    var r = (size - stroke) / 2;
    var c = 2 * Math.PI * r;
    var dash = (Math.max(0, Math.min(100, pct)) / 100) * c;
    return (
      '<div class="'+(wrapClass||"")+'" style="width:'+size+'px;height:'+size+'px;">'+
        '<svg class="ring-svg" viewBox="0 0 '+size+' '+size+'">'+
          '<circle class="ring-track" cx="'+(size/2)+'" cy="'+(size/2)+'" r="'+r+'" stroke-width="'+stroke+'"></circle>'+
          '<circle class="ring-val" cx="'+(size/2)+'" cy="'+(size/2)+'" r="'+r+'" stroke="'+colorHex+'" stroke-width="'+stroke+'" stroke-dasharray="'+dash+' '+c+'"></circle>'+
        '</svg>'+
        centerHtml+
      '</div>'
    );
  }

  /* ---------------- Attendance (landing) ---------------- */
  function renderAttendance(){
    var a = state.attendance;
    var rings = a.slots.map(function(s){
      var pass = s.pct >= 75;
      var color = pass ? "#22c55e" : "#ef4444";
      var center = '<div class="ring-center '+(pass?'pass':'fail')+'">'+s.pct+'%</div>';
      return (
        '<div class="slot">'+
          circleRing(s.pct, color, 118, 9, center, "ring-wrap "+(pass?"pass":"fail"))+
          '<div class="slot-label">'+s.label+'</div>'+
          '<div class="slot-code">'+s.code+'</div>'+
        '</div>'
      );
    }).join("");
    var avgPct = Math.round(a.slots.reduce(function(sum,s){return sum+s.pct;},0)/a.slots.length);
    var below = a.slots.filter(function(s){return s.pct<75;}).length;
    return (
      '<main>'+
        '<div class="att-card">'+
          '<span class="milestone-pill">'+icon("calendar","i-sm")+a.milestone+'</span>'+
          '<div class="att-grid">'+rings+'</div>'+
          '<div class="att-note">Attendance below 75% is shown in red</div>'+
        '</div>'+
        '<div class="quick-row">'+
          '<div class="quick-card"><b>'+avgPct+'%</b><span>Overall attendance</span></div>'+
          '<div class="quick-card"><b>'+below+'</b><span>Slot(s) at risk</span></div>'+
        '</div>'+
      '</main>'
    );
  }

  /* ---------------- Menu popover ---------------- */
  function renderMenu(){
    if(!state.menuOpen) return "";
    return (
      '<div class="menu-pop" id="menuPop">'+
        '<div class="menu-item" data-action="profile"><span class="ic">'+icon("user")+'</span> Profile</div>'+
        '<div class="menu-item" data-action="duelist"><span class="ic">'+icon("wallet")+'</span> Due List</div>'+
        '<div class="menu-item" data-action="theme"><span class="ic">'+icon("palette")+'</span> Theme</div>'+
        '<div class="menu-item" data-action="wallpaper"><span class="ic">'+icon("image")+'</span> Wallpaper</div>'+
        '<div class="menu-item" data-action="widgets"><span class="ic">'+icon("grid")+'</span> Widgets</div>'+
        '<div class="menu-item danger" data-action="logout"><span class="ic">'+icon("power")+'</span> Logout</div>'+
      '</div>'
    );
  }

  /* ---------------- Profile page ---------------- */
  function renderProfile(){
    var p = state.profile || {};
    var photo = p.photo ? '<img src="'+p.photo+'" alt="'+(p.name||"")+'">' : '<span>'+initials(p.name)+'</span>';
    var creditsTotal = p.creditsTotal || 192;
    var creditsDone = p.creditsDone || 0;

    var links = [];
    if(p.github) links.push({ic:"code", label:p.github});
    if(p.leetcode) links.push({ic:"code", label:p.leetcode});
    if(p.portfolio) links.push({ic:"globe", label:p.portfolio});
    var linksHtml = links.length ? links.map(function(l){
      return '<div class="link-row"><span class="ic-badge">'+icon(l.ic,"i-sm")+'</span><span>'+l.label+'</span></div>';
    }).join("") : '<div class="link-row" style="color:var(--muted);">No links added yet</div>';

    var ap = p.academic || {};
    function apRow(key, name, colorHex){
      var d = ap[key] || {done:0,total:0,cgpa:""};
      var pct = d.total ? Math.round((d.done/d.total)*100) : 0;
      var center = '<div class="aprog-center">'+d.done+'/'+d.total+'</div>';
      return (
        '<div class="aprog-row">'+
          circleRing(pct, colorHex, 74, 8, center, "aprog-wrap")+
          '<div class="aprog-info">'+
            '<b>'+name+'</b>'+
            '<div class="cgpa-mini">CGPA<strong>'+(d.cgpa!==""&&d.cgpa!=null?d.cgpa:"-")+'</strong></div>'+
          '</div>'+
        '</div>'
      );
    }

    return (
      '<div class="subbar">'+
        '<button class="back-btn" id="btnBack">'+icon("chevronLeft","i-sm")+'Back</button>'+
        '<div class="subbar-title">Student Progress</div>'+
      '</div>'+
      '<main>'+
        '<div class="profile-hero">'+
          '<div class="profile-photo-wrap"><div class="profile-photo">'+photo+'</div></div>'+
          '<div class="profile-name">'+(p.name || "Add your name")+'</div>'+
          '<div class="profile-sub">'+(p.rollNo || "Roll number")+'</div>'+
          '<div class="profile-sub">'+(p.program || "Program")+'</div>'+
          '<div class="cgpa-num">'+(p.cgpa || "-")+'</div>'+
          '<div class="cgpa-label">OVERALL CGPA</div>'+
          '<div class="pill-row">'+
            '<span class="pill">'+icon("cap","i-sm")+creditsDone+' / '+creditsTotal+' credits</span>'+
            '<span class="pill status">✓ '+(p.status || "In Progress")+'</span>'+
          '</div>'+
        '</div>'+

        '<div class="stat-grid">'+
          '<div class="stat-card">'+icon("activity","stat-icon blue")+'<div class="stat-value">'+(p.happiness!=null?p.happiness:"-")+'%</div><div class="stat-label">HAPPINESS</div></div>'+
          '<div class="stat-card">'+icon("clock","stat-icon green")+'<div class="stat-value">'+(p.punctuality!=null?p.punctuality:"-")+'%</div><div class="stat-label">PUNCTUALITY</div></div>'+
          '<div class="stat-card">'+icon("book","stat-icon gold")+'<div class="stat-value">'+(p.assignments || "-")+'</div><div class="stat-label">ASSIGNMENTS</div></div>'+
          '<div class="stat-card">'+icon("alert","stat-icon red")+'<div class="stat-value">'+(p.missedTasks!=null?p.missedTasks:0)+'</div><div class="stat-label">MISSED TASKS</div></div>'+
        '</div>'+

        '<div class="section-card">'+
          '<div class="section-head">'+
            '<div class="section-title">'+icon("link")+'Social &amp; Links</div>'+
            '<button class="link-btn" id="btnEditProfile">'+icon("edit","i-sm")+'Edit</button>'+
          '</div>'+
          linksHtml+
        '</div>'+

        '<div class="section-card">'+
          '<div class="section-head">'+
            '<div class="section-title">'+icon("user")+'Student Details</div>'+
            '<button class="ghost-btn" id="btnEditDetails">View Full Details</button>'+
          '</div>'+
          '<div class="detail-row"><div class="detail-label">'+icon("calendar","i-sm")+'DATE OF BIRTH</div><div class="detail-value">'+(p.dob || "-")+'</div></div>'+
          '<div class="detail-row"><div class="detail-label">'+icon("user","i-sm")+'GENDER</div><div class="detail-value">'+(p.gender || "-")+'</div></div>'+
          '<div class="detail-row"><div class="detail-label">'+icon("droplet","i-sm")+'BLOOD GROUP</div><div class="detail-value">'+(p.bloodGroup || "-")+'</div></div>'+
          '<div class="detail-row"><div class="detail-label">'+icon("building","i-sm")+'INSTITUTION</div><div class="detail-value">'+(p.institution || "-")+'</div></div>'+
          '<div class="detail-row"><div class="detail-label">'+icon("calendar","i-sm")+'BATCH</div><div class="detail-value">'+(p.batch || "-")+'</div></div>'+
          '<div class="detail-row"><div class="detail-label">'+icon("users","i-sm")+'MENTOR</div><div class="detail-value">'+(p.mentor || "-")+'</div></div>'+
          '<div class="detail-row"><div class="detail-label">'+icon("phone","i-sm")+'MENTOR PHONE</div><div class="detail-value">'+(p.mentorPhone || "-")+'</div></div>'+
          '<div class="detail-row"><div class="detail-label">'+icon("cap","i-sm")+'PROGRAM</div><div class="detail-value">'+(p.programFull || p.program || "-")+'</div></div>'+
          '<div class="detail-row"><div class="detail-label">PROGRAM REGULATION</div><div class="detail-value accent">'+(p.programReg || "-")+'</div></div>'+
        '</div>'+

        '<div class="section-card">'+
          '<div class="section-head"><div class="section-title">'+icon("monitor")+'Active Sessions</div></div>'+
          '<div class="session-row">'+
            '<div class="session-avatar">'+initials(p.name)+'</div>'+
            '<div class="session-meta"><b>This device</b><span>Mobile • Web</span></div>'+
            '<button class="logout-mini" id="btnSessionLogout">'+icon("power","i-sm")+'Logout</button>'+
          '</div>'+
        '</div>'+

        '<div class="section-card" style="padding-bottom:18px;">'+
          '<div class="section-head">'+
            '<div class="section-title">'+icon("award")+'Academic Progress</div>'+
            '<button class="ghost-btn" id="btnAcademicDetails">View Details</button>'+
          '</div>'+
          apRow("universityCore","University Core","#8b7bf0")+
          apRow("universityElective","University Elective","#38c6e6")+
          apRow("programCore","Program Core","#e85fc9")+
          apRow("programElective","Program Elective","#c23d5f")+
        '</div>'+
      '</main>'
    );
  }

  /* ---------------- Due list ---------------- */
  function renderDueList(){
    var dues = (state.profile && state.profile.dues) || [
      {title:"Assignment 3 — AI Lab", sub:"Due Sep 20 · Pending", ok:false},
      {title:"Semester fee installment", sub:"Due Sep 25 · Pending", ok:false},
      {title:"Library book return", sub:"Returned on time", ok:true}
    ];
    var items = dues.map(function(d){
      return '<div class="due-item"><div class="due-dot '+(d.ok?'ok':'')+'"></div><div><div class="due-title">'+d.title+'</div><div class="due-sub">'+d.sub+'</div></div></div>';
    }).join("");
    return (
      '<div class="subbar">'+
        '<button class="back-btn" id="btnBack">'+icon("chevronLeft","i-sm")+'Back</button>'+
        '<div class="subbar-title">Due List</div>'+
      '</div>'+
      '<main>'+items+'</main>'
    );
  }

  /* ---------------- Router / render ---------------- */
  function render(){
    var html = renderHeader();
    if(state.view === "profile") html += renderProfile();
    else if(state.view === "duelist") html += renderDueList();
    else html += renderAttendance();
    app.innerHTML = html;
    app.insertAdjacentHTML("beforeend", renderMenu());
    dim.classList.toggle("show", state.menuOpen);
    bindEvents();
  }

  function bindEvents(){
    var btnAvatar = document.getElementById("btnAvatar");
    if(btnAvatar) btnAvatar.onclick = function(e){ e.stopPropagation(); state.menuOpen = !state.menuOpen; render(); };
    dim.onclick = function(){ state.menuOpen = false; render(); };

    var menuPop = document.getElementById("menuPop");
    if(menuPop){
      menuPop.querySelectorAll(".menu-item").forEach(function(item){
        item.onclick = function(){
          var action = item.getAttribute("data-action");
          state.menuOpen = false;
          if(action === "profile"){ state.view = "profile"; }
          else if(action === "duelist"){ state.view = "duelist"; }
          else if(action === "logout"){
            if(confirm("Log out and clear your saved profile from this device?")){
              try{ localStorage.removeItem(STORE_KEY); }catch(e){}
              state.profile = null; state.view = "attendance";
              render(); showOnboarding();
              return;
            }
          } else { showToast(action.charAt(0).toUpperCase()+action.slice(1)+" — coming soon"); }
          render();
        };
      });
    }

    var btnBack = document.getElementById("btnBack");
    if(btnBack) btnBack.onclick = function(){ state.view = "attendance"; render(); };
    var btnCalendar = document.getElementById("btnCalendar");
    if(btnCalendar) btnCalendar.onclick = function(){ showToast("Calendar — coming soon"); };
    var btnChat = document.getElementById("btnChat");
    if(btnChat) btnChat.onclick = function(){ showToast("Chat — coming soon"); };
    var btnEditProfile = document.getElementById("btnEditProfile");
    if(btnEditProfile) btnEditProfile.onclick = function(){ showOnboarding(true); };
    var btnEditDetails = document.getElementById("btnEditDetails");
    if(btnEditDetails) btnEditDetails.onclick = function(){ showOnboarding(true); };
    var btnAcademicDetails = document.getElementById("btnAcademicDetails");
    if(btnAcademicDetails) btnAcademicDetails.onclick = function(){ showOnboarding(true); };
    var btnSessionLogout = document.getElementById("btnSessionLogout");
    if(btnSessionLogout) btnSessionLogout.onclick = function(){
      if(confirm("Log out and clear your saved profile from this device?")){
        try{ localStorage.removeItem(STORE_KEY); }catch(e){}
        state.profile = null; state.view = "attendance";
        render(); showOnboarding();
      }
    };
  }

  /* ---------------- Onboarding (first login) ---------------- */
  function resizeImage(file, cb){
    var reader = new FileReader();
    reader.onload = function(e){
      var img = new Image();
      img.onload = function(){
        var maxDim = 320, w = img.width, h = img.height;
        if(w > h && w > maxDim){ h = Math.round(h*(maxDim/w)); w = maxDim; }
        else if(h > maxDim){ w = Math.round(w*(maxDim/h)); h = maxDim; }
        var canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img,0,0,w,h);
        try{ cb(canvas.toDataURL("image/jpeg",0.85)); }catch(err){ cb(e.target.result); }
      };
      img.onerror = function(){ cb(e.target.result); };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function showOnboarding(isEdit){
    var existing = state.profile || {};
    var ap = existing.academic || {};
    function apField(key){ return ap[key] || {done:"",total:"",cgpa:""}; }

    var overlay = document.createElement("div");
    overlay.className = "onboard-overlay";
    overlay.id = "onboardOverlay";

    overlay.innerHTML =
      '<div class="onboard-wrap">'+
        '<div class="onboard-head">'+
          '<div class="onboard-logo"><svg viewBox="0 0 24 24">'+ICON_PATHS.logo+'</svg></div>'+
          '<h1>'+(isEdit ? "Edit your profile" : "Welcome to VStudy")+'</h1>'+
          '<p>'+(isEdit ? "Update your details below." : "Let's set up your student profile. This only happens once — you can edit it anytime later from the menu.")+'</p>'+
        '</div>'+
        '<form id="onboardForm">'+
          '<div class="photo-picker">'+
            '<div class="photo-circle" id="photoCircle">'+(existing.photo ? '<img src="'+existing.photo+'" id="photoPreviewImg">' : '<span>Tap to add photo</span>')+'</div>'+
            '<span class="photo-hint" id="photoHint">'+(existing.photo ? "Change photo" : "Upload photo")+'</span>'+
            '<input type="file" accept="image/*" id="photoInput" style="display:none;">'+
          '</div>'+
          '<div class="form-section"><h3>Basic details</h3>'+
            '<div class="field"><label>Full name <span class="req">*</span></label><input type="text" id="f_name" required value="'+(existing.name||"")+'" placeholder="e.g. Edrin J S"></div>'+
            '<div class="two-col">'+
              '<div class="field"><label>Roll / register no.</label><input type="text" id="f_rollNo" value="'+(existing.rollNo||"")+'" placeholder="e.g. 192524041"></div>'+
              '<div class="field"><label>Date of birth</label><input type="date" id="f_dob" value="'+(existing.dobRaw||"")+'"></div>'+
            '</div>'+
            '<div class="two-col">'+
              '<div class="field"><label>Gender</label><select id="f_gender">'+['','Male','Female','Other'].map(function(g){return '<option '+(existing.gender===g?'selected':'')+'>'+g+'</option>';}).join("")+'</select></div>'+
              '<div class="field"><label>Blood group</label><select id="f_bloodGroup">'+['','A+','A-','B+','B-','AB+','AB-','O+','O-'].map(function(g){return '<option '+(existing.bloodGroup===g?'selected':'')+'>'+g+'</option>';}).join("")+'</select></div>'+
            '</div>'+
          '</div>'+
          '<div class="form-section"><h3>Academics</h3>'+
            '<div class="field"><label>Program (short)</label><input type="text" id="f_program" value="'+(existing.program||"")+'" placeholder="e.g. B.Tech - AI and Data Science"></div>'+
            '<div class="field"><label>Program (full, with batch code)</label><input type="text" id="f_programFull" value="'+(existing.programFull||"")+'" placeholder="e.g. B.Tech - AI and Data Science (1924)"></div>'+
            '<div class="two-col">'+
              '<div class="field"><label>Institution</label><input type="text" id="f_institution" value="'+(existing.institution||"")+'" placeholder="e.g. SIMATS - Engineering"></div>'+
              '<div class="field"><label>Batch</label><input type="text" id="f_batch" value="'+(existing.batch||"")+'" placeholder="e.g. 2025"></div>'+
            '</div>'+
            '<div class="two-col">'+
              '<div class="field"><label>Program regulation</label><input type="text" id="f_programReg" value="'+(existing.programReg||"")+'" placeholder="e.g. R-2025"></div>'+
              '<div class="field"><label>Overall CGPA</label><input type="text" id="f_cgpa" value="'+(existing.cgpa||"")+'" placeholder="e.g. 8.64"></div>'+
            '</div>'+
            '<div class="two-col">'+
              '<div class="field"><label>Credits completed</label><input type="number" id="f_creditsDone" value="'+(existing.creditsDone||"")+'" placeholder="e.g. 56"></div>'+
              '<div class="field"><label>Credits total</label><input type="number" id="f_creditsTotal" value="'+(existing.creditsTotal||"")+'" placeholder="e.g. 192"></div>'+
            '</div>'+
            '<div class="field"><label>Status tag</label><input type="text" id="f_status" value="'+(existing.status||"Excelling")+'" placeholder="e.g. Excelling"></div>'+
          '</div>'+
          '<div class="form-section"><h3>Mentor</h3>'+
            '<div class="two-col">'+
              '<div class="field"><label>Mentor name</label><input type="text" id="f_mentor" value="'+(existing.mentor||"")+'"></div>'+
              '<div class="field"><label>Mentor phone</label><input type="text" id="f_mentorPhone" value="'+(existing.mentorPhone||"")+'"></div>'+
            '</div>'+
          '</div>'+
          '<div class="form-section"><h3>Wellbeing &amp; activity</h3>'+
            '<div class="two-col">'+
              '<div class="field"><label>Happiness %</label><input type="number" min="0" max="100" id="f_happiness" value="'+(existing.happiness!=null?existing.happiness:"")+'"></div>'+
              '<div class="field"><label>Punctuality %</label><input type="number" min="0" max="100" id="f_punctuality" value="'+(existing.punctuality!=null?existing.punctuality:"")+'"></div>'+
            '</div>'+
            '<div class="two-col">'+
              '<div class="field"><label>Assignments</label><input type="text" id="f_assignments" value="'+(existing.assignments||"")+'" placeholder="e.g. 12 done"></div>'+
              '<div class="field"><label>Missed tasks</label><input type="number" id="f_missedTasks" value="'+(existing.missedTasks!=null?existing.missedTasks:0)+'"></div>'+
            '</div>'+
          '</div>'+
          '<div class="form-section"><h3>Social &amp; links</h3>'+
            '<div class="field"><label>GitHub URL</label><input type="text" id="f_github" value="'+(existing.github||"")+'" placeholder="https://github.com/username"></div>'+
            '<div class="field"><label>LeetCode URL</label><input type="text" id="f_leetcode" value="'+(existing.leetcode||"")+'" placeholder="https://leetcode.com/u/username"></div>'+
            '<div class="field"><label>Portfolio URL</label><input type="text" id="f_portfolio" value="'+(existing.portfolio||"")+'" placeholder="https://yourportfolio.com"></div>'+
          '</div>'+
          '<div class="form-section"><h3>Academic progress breakdown</h3>'+
            ['universityCore:University Core','universityElective:University Elective','programCore:Program Core','programElective:Program Elective'].map(function(spec){
              var parts = spec.split(":"); var key = parts[0]; var label = parts[1]; var d = apField(key);
              return '<div class="field"><label>'+label+' — done / total / CGPA</label><div class="two-col" style="grid-template-columns:1fr 1fr 1fr;">'+
                '<input type="number" id="ap_'+key+'_done" placeholder="done" value="'+d.done+'">'+
                '<input type="number" id="ap_'+key+'_total" placeholder="total" value="'+d.total+'">'+
                '<input type="text" id="ap_'+key+'_cgpa" placeholder="CGPA" value="'+d.cgpa+'">'+
              '</div></div>';
            }).join("")+
          '</div>'+
          '<button type="submit" class="submit-btn">'+(isEdit ? "Save changes" : "Save and continue")+'</button>'+
          (isEdit ? '<button type="button" id="cancelEdit" class="ghost-btn" style="width:100%;margin-top:10px;padding:14px;">Cancel</button>' : '')+
        '</form>'+
      '</div>';

    document.body.appendChild(overlay);

    var pendingPhoto = existing.photo || null;
    var photoCircle = document.getElementById("photoCircle");
    var photoInput = document.getElementById("photoInput");
    var photoHint = document.getElementById("photoHint");
    function openPicker(){ photoInput.click(); }
    photoCircle.onclick = openPicker;
    photoHint.onclick = openPicker;
    photoInput.onchange = function(){
      if(photoInput.files && photoInput.files[0]){
        resizeImage(photoInput.files[0], function(dataUrl){
          pendingPhoto = dataUrl;
          photoCircle.innerHTML = '<img src="'+dataUrl+'">';
          photoHint.textContent = "Change photo";
        });
      }
    };
    if(isEdit){ document.getElementById("cancelEdit").onclick = function(){ overlay.remove(); }; }

    document.getElementById("onboardForm").onsubmit = function(e){
      e.preventDefault();
      var name = document.getElementById("f_name").value.trim();
      if(!name){ showToast("Please enter your name"); return; }
      var dobRaw = document.getElementById("f_dob").value;
      var dobDisplay = dobRaw ? formatDate(dobRaw) : "";
      function num(id){ var v = document.getElementById(id).value; return v === "" ? null : Number(v); }
      function txt(id){ return document.getElementById(id).value.trim(); }
      function apCollect(key){
        return { done:Number(document.getElementById("ap_"+key+"_done").value)||0, total:Number(document.getElementById("ap_"+key+"_total").value)||0, cgpa:document.getElementById("ap_"+key+"_cgpa").value.trim() };
      }
      var profile = {
        photo: pendingPhoto, name:name, rollNo:txt("f_rollNo"), dob:dobDisplay, dobRaw:dobRaw,
        gender:document.getElementById("f_gender").value, bloodGroup:document.getElementById("f_bloodGroup").value,
        program:txt("f_program"), programFull:txt("f_programFull"), institution:txt("f_institution"), batch:txt("f_batch"),
        programReg:txt("f_programReg"), cgpa:txt("f_cgpa"), creditsDone:num("f_creditsDone"), creditsTotal:num("f_creditsTotal"),
        status:txt("f_status")||"In Progress", mentor:txt("f_mentor"), mentorPhone:txt("f_mentorPhone"),
        happiness:num("f_happiness"), punctuality:num("f_punctuality"), assignments:txt("f_assignments"), missedTasks:num("f_missedTasks")||0,
        github:txt("f_github"), leetcode:txt("f_leetcode"), portfolio:txt("f_portfolio"),
        academic:{ universityCore:apCollect("universityCore"), universityElective:apCollect("universityElective"), programCore:apCollect("programCore"), programElective:apCollect("programElective") }
      };
      safeSet(STORE_KEY, profile);
      state.profile = profile;
      overlay.remove();
      showToast(isEdit ? "Profile updated" : "Welcome, "+name.split(" ")[0]+"!");
      if(!isEdit) state.view = "attendance";
      render();
    };
  }

  function formatDate(iso){
    var d = new Date(iso+"T00:00:00");
    if(isNaN(d)) return iso;
    var dd = String(d.getDate()).padStart(2,"0");
    var mm = String(d.getMonth()+1).padStart(2,"0");
    return dd+"/"+mm+"/"+d.getFullYear();
  }

  render();
  if(!state.profile){ showOnboarding(false); }
})();
