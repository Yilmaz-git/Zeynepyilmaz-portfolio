const button = document.getElementById("darkButton");

button.onclick = function(){
document.body.classList.toggle("dark");
}

function setLang(lang){

/* -------- TURKISH -------- */

if(lang==="tr"){

document.getElementById("name").innerText="Merhaba, ben Zeynep YILMAZ";
document.getElementById("subtitle").innerText="Bilgisayar Mühendisliği Öğrencisi";

document.getElementById("aboutTitle").innerText="Hakkımda";
document.getElementById("skillsTitle").innerText="Yetenekler";
document.getElementById("projectsTitle").innerText="Projeler";
document.getElementById("coursesTitle").innerText="Dersler";
document.getElementById("contactTitle").innerText="İletişim";

/* NAVBAR */

document.querySelector('a[href="#about"]').innerText="Hakkımda";
document.querySelector('a[href="#skills"]').innerText="Yetenekler";
document.querySelector('a[href="#projects"]').innerText="Projeler";
document.querySelector('a[href="#courses"]').innerText="Dersler";
document.querySelector('a[href="#contact"]').innerText="İletişim";

/* ABOUT */

document.getElementById("aboutText").innerHTML = `
Atatürk Üniversitesi Bilgisayar Mühendisliği öğrencisiyim ve yazılım geliştirme ile algoritmalara büyük ilgi duyuyorum.
Yeni teknolojiler öğrenmeyi ve projeler geliştirerek programlama becerilerimi geliştirmeyi seviyorum.

<br><br>

Teknik çalışmalarımın yanı sıra dillere de büyük ilgi duyuyorum. İngilizceyi akıcı şekilde konuşabiliyorum (B2) ve kültürel ve profesyonel bakış açımı geliştirmek için İtalyanca ve Fransızca (A1) öğreniyorum. İyi bir mühendis olmanın yalnızca teknik bilgi değil aynı zamanda güçlü iletişim becerileri ve küresel bir bakış açısı gerektirdiğine inanıyorum.
`;

/* INTERESTS */

document.getElementById("interestsTitle").innerText="İlgi Alanları";

document.querySelector(".info-card ul").innerHTML = `
<li>Yazılım Geliştirme</li>
<li>Algoritmalar</li>
<li>Yapay Zeka</li>
<li>Web Geliştirme</li>
`;

/* EDUCATION */

document.getElementById("educationTitle").innerText="Eğitim";

document.getElementById("educationText").innerHTML = `
Bilgisayar Mühendisliği<br>
Atatürk Üniversitesi

<br><br>

İngilizce Hazırlık Programı (2023-2024)<br>
Atatürk Üniversitesi
`;


/* PROJECTS */

document.querySelectorAll(".card h3")[0].innerText="Sıralama Algoritması Görselleştirici";
document.querySelectorAll(".card h3")[1].innerText="Web Uygulaması";

document.querySelectorAll(".card p")[0].innerText="Sıralama algoritmalarının görselleştirilmesi.";
document.querySelectorAll(".card p")[1].innerText="HTML CSS ve JavaScript kullanılarak geliştirilmiş basit web projesi.";

/* COURSES */

document.querySelector("#courses ul").innerHTML = `
<li>Veri Yapıları ve Algoritmalar</li>
<li>Bilgisayar Organizasyonu ve Tasarımı</li>
<li>Sinyaller ve Sistemler</li>
<li>Programlama Dilleri</li>
<li>Nesne Yönelimli Programlama</li>
<li>Mantık Tasarımı</li>
<li>Görsel Programlama</li>
<li>Otomata Teorisi</li>
<li>Web Programlama</li>
<li>Elektronik Devreler</li>
`;

/* DARK MODE BUTTON */

document.getElementById("darkButton").innerText="Karanlık Mod";

}

/* -------- ENGLISH -------- */

if(lang==="en"){

document.getElementById("name").innerText="Hello, I'm Zeynep YILMAZ";
document.getElementById("subtitle").innerText="Computer Engineering Student";

document.getElementById("aboutTitle").innerText="About Me";
document.getElementById("skillsTitle").innerText="Skills";
document.getElementById("projectsTitle").innerText="Projects";
document.getElementById("coursesTitle").innerText="Courses";
document.getElementById("contactTitle").innerText="Contact";

/* NAVBAR */

document.querySelector('a[href="#about"]').innerText="About";
document.querySelector('a[href="#skills"]').innerText="Skills";
document.querySelector('a[href="#projects"]').innerText="Projects";
document.querySelector('a[href="#courses"]').innerText="Courses";
document.querySelector('a[href="#contact"]').innerText="Contact";

/* ABOUT */

document.getElementById("aboutText").innerHTML = `
I am a Computer Engineering student at Atatürk University with a strong interest in software development and algorithms. 
I enjoy learning new technologies and improving my programming skills by building projects.

My main interests include software development, data structures and artificial intelligence. 
My goal is to become a skilled software engineer and contribute to impactful projects.

<br><br>

In addition to my technical pursuits, I am a language enthusiast. I speak English fluently (B2) and am learning Italian and French (A1) to broaden my cultural and professional horizons. I believe that being a good engineer requires not only technical excellence but also strong communication and a global perspective.
`;

/* INTERESTS */

document.getElementById("interestsTitle").innerText="Interests";

document.querySelector(".info-card ul").innerHTML = `
<li>Software Development</li>
<li>Algorithms</li>
<li>Artificial Intelligence</li>
<li>Web Development</li>
`;

/* EDUCATION */

document.getElementById("educationTitle").innerText="Education";

document.getElementById("educationText").innerHTML = `
Computer Engineering<br>
Atatürk University

<br><br>

Preparatory English Program (2023-2024)<br>
Atatürk University
`;


/* PROJECTS */

document.querySelectorAll(".card h3")[0].innerText="Sorting Visualizer";
document.querySelectorAll(".card h3")[1].innerText="Web Application";

document.querySelectorAll(".card p")[0].innerText="Visualization of sorting algorithms.";
document.querySelectorAll(".card p")[1].innerText="Simple project using HTML CSS JS.";

/* COURSES */

document.querySelector("#courses ul").innerHTML = `
<li>Data Structures and Algorithms</li>
<li>Computer Organization and Design</li>
<li>Signals and Systems</li>
<li>Programming Languages</li>
<li>Object Oriented Programming</li>
<li>Logic Design</li>
<li>Visual Programming</li>
<li>Automata Theory</li>
<li>Web Programming</li>
<li>Electronic Circuits</li>
`;

/* DARK MODE BUTTON */

document.getElementById("darkButton").innerText="Dark Mode";

}

}
