/**
 * មុខងារពន្លាត ឬបង្រួមបង្ហាញកម្មវិធីការលម្អិត
 */
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    const toggleBtn = document.querySelector('.btn-program-toggle');
    
    if (timeline) {
        if (timeline.classList.contains('collapsed')) {
            // ពន្លាតបង្ហាញកម្មវិធី
            timeline.classList.remove('collapsed');
            if (toggleBtn) toggleBtn.innerHTML = "📋 សូមចុចទីនេះដើម្បីបិទកម្មវិធីវិញ";
        } else {
            // បង្រួមលាក់កម្មវិធី
            timeline.classList.add('collapsed');
            if (toggleBtn) toggleBtn.innerHTML = "📋 សូមចុចទីនេះដើម្បីមើលកម្មវិធីការលម្អិត";
        }
    }
}

/**
 * មុខងារគ្រប់គ្រងការបង្ហាញប៊ូតុង "ទៅកំពូល" នៅពេលទាញ Scroll ចុះក្រោម
 */
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
}

/**
 * មុខងាររុញទំព័រត្រឡប់ទៅផ្នែកខាងលើបង្អស់ដោយរលូន (Smooth Scroll)
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * មុខងារបើកទៅកាន់ទីតាំងផែនទី Google Maps នៃកោះចិន
 */
function openKohChenMap() {
    window.open("https://maps.app.goo.gl/5kikd7zafHEAujVJ6", "_blank");
}
    }
}

/**
 * មុខងាររុញទំព័រត្រឡប់ទៅផ្នែកខាងលើបង្អស់ដោយរលូន (Smooth Scroll)
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // ធ្វើឱ្យផ្ទៃអេក្រង់រំកិលឡើងទៅលើថ្នមៗ
    });
}

/**
 * មុខងារបើកទៅកាន់ទីតាំង Google Maps ប្រាសាទនៅកោះចិន
 */
function openKohChenMap() {
    window.open("https://maps.app.goo.gl/5kikd7zafHEAujVJ6", "_blank");
}

