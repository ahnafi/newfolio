const btnSkill = document.querySelectorAll('.logoSkill');

btnSkill.forEach(e => {
    e.addEventListener('click', function() {
        const text = document.querySelector(".textSkill")
        if ( e.classList.contains('html')){
            text.innerHTML = 'Hypertext Markup Language (HTML) adalah bahasa markup standar yang dirancang untuk ditampilkan di browser. HTML dapat dibantu dengan teknologi seperti CSS dan bahasa scripting seperti JavaScript. Semua website di Internet dibangun dengan HTML.';
        } else if (e.classList.contains('css')){
            text.innerHTML = 'CSS (Cascading Style Sheets) dipakai untuk mendesain halaman depan atau tampilan website (front end). CSS menangani tampilan dan rasa dari halaman website. Semua website modern sudah pasti menggunakan CSS.'
        
        } else if (e.classList.contains('bootstrap')){
            text.innerHTML = 'Bootstrap adalah framework CSS untuk merancang situs web dan aplikasi web. Framework ini berisi templat desain berbasis HTML dan CSS untuk tipografi, formulir, tombol, navigasi, dan komponen antarmuka lainnya, serta juga ekstensi opsional JavaScript.'
        
        } else if (e.classList.contains('js')){
            text.innerHTML = 'JavaScript (JS) adalah bahasa pemrograman tingkat tinggi, dinamis, multi-paradigm, event-driven, non-blocking, dan asynchronous yang dapat berjalan di front-end maupun back-end.'
        }
         else if (e.classList.contains('php')){
            text.innerHTML = 'PHP atau "Hypertext Preprocessor". PHP adalah bahasa pemrograman sisi server yang digunakan untuk mengembangkan aplikasi web dinamis. PHP sering digunakan bersama dengan database dan HTML untuk membuat halaman web yang dapat dipersonalisasi dan interaktif.'
        }
        
    });
});