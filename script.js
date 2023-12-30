setInterval(()=>{
    const date = new Date();
    const htime = date.getHours();
    const mtime = date.getMinutes();
    const stime = date.getSeconds();

    const h_rotation = 30*htime + mtime/2;
    const m_rotation = 6*mtime;
    const s_rotation = 9*stime;

    hour.style.transform = `rotate(${h_rotation}deg)`;
    minute.style.transform = `rotate(${m_rotation}deg)`;
    second.style.transform = `rotate(${s_rotation}deg)`;

    const hr = document.querySelector(".hr");
    const mn = document.querySelector(".mn");
    const se = document.querySelector(".se");

    hr.textContent = htime + ":";
    mn.textContent = mtime + ":";
    se.textContent = stime;
},1000);