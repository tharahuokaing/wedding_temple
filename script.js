/**
 * Helper to update button active state, label text, and arrow rotation.
 */
function updateToggleButton(btnSelector, isExpanded, textOpen, textClose) {
    const btn = document.querySelector(btnSelector);
    if (btn) {
        if (isExpanded) {
            btn.classList.add('active');
            btn.innerHTML = `${textClose} <span class="toggle-icon">▼</span>`;
        } else {
            btn.classList.remove('active');
            btn.innerHTML = `${textOpen} <span class="toggle-icon">▼</span>`;
        }
    }
}

/**
 * មុខងារពន្លាត ឬបង្រួមបង្ហាញកម្មវិធីការលម្អិត (ភាសាខ្មែរ)
 */
function toggleProgramKh() {
    const timelineKh = document.getElementById('weddingTimelineKh');
    const timelineEn = document.getElementById('weddingTimelineEn');

    if (timelineKh) {
        const isCollapsed = timelineKh.classList.contains('collapsed');

        if (isCollapsed) {
            timelineKh.classList.remove('collapsed');
            timelineKh.classList.add('expanded');
        } else {
            timelineKh.classList.add('collapsed');
            timelineKh.classList.remove('expanded');
        }

        const isNowExpanded = isCollapsed;

        // Update Khmer Button
        updateToggleButton(
            '.btn-toggle-kh',
            isNowExpanded,
            '📋 សូមចុចទីនេះដើម្បីមើលកម្មវិធីការលម្អិត',
            '📋 សូមចុចទីនេះដើម្បីបិទកម្មវិធីវិញ'
        );

        // Synchronize English Column
        if (timelineEn) {
            if (isNowExpanded) {
                timelineEn.classList.remove('collapsed');
                timelineEn.classList.add('expanded');
            } else {
                timelineEn.classList.add('collapsed');
                timelineEn.classList.remove('expanded');
            }
            updateToggleButton(
                '.btn-toggle-en',
                isNowExpanded,
                '📋 Click here to view detailed Program',
                '📋 Click here to close Program'
            );
        }
    }
}

/**
 * Toggle Function for English Program Timeline
 */
function toggleProgramEn() {
    const timelineEn = document.getElementById('weddingTimelineEn');
    const timelineKh = document.getElementById('weddingTimelineKh');

    if (timelineEn) {
        const isCollapsed = timelineEn.classList.contains('collapsed');

        if (isCollapsed) {
            timelineEn.classList.remove('collapsed');
            timelineEn.classList.add('expanded');
        } else {
            timelineEn.classList.add('collapsed');
            timelineEn.classList.remove('expanded');
        }

        const isNowExpanded = isCollapsed;

        // Update English Button
        updateToggleButton(
            '.btn-toggle-en',
            isNowExpanded,
            '📋 Click here to view detailed Program',
            '📋 Click here to close Program'
        );

        // Synchronize Khmer Column
        if (timelineKh) {
            if (isNowExpanded) {
                timelineKh.classList.remove('collapsed');
                timelineKh.classList.add('expanded');
            } else {
                timelineKh.classList.add('collapsed');
                timelineKh.classList.remove('expanded');
            }
            updateToggleButton(
                '.btn-toggle-kh',
                isNowExpanded,
                '📋 សូមចុចទីនេះដើម្បីមើលកម្មវិធីការលម្អិត',
                '📋 សូមចុចទីនេះដើម្បីបិទកម្មវិធីវិញ'
            );
        }
    }
}

/**
 * Legacy toggle fallback to keep compatibility with single timeline structures.
 */
function toggleProgram() {
    const legacyTimeline = document.getElementById('weddingTimeline');
    if (legacyTimeline) {
        const isCollapsed = legacyTimeline.classList.contains('collapsed');
        if (isCollapsed) {
            legacyTimeline.classList.remove('collapsed');
            legacyTimeline.classList.add('expanded');
        } else {
            legacyTimeline.classList.add('collapsed');
            legacyTimeline.classList.remove('expanded');
        }
        updateToggleButton(
            '.btn-program-toggle',
            isCollapsed,
            '📋 សូមចុចទីនេះដើម្បីមើលកម្មវិធីការលម្អិត',
            '📋 សូមចុចទីនេះដើម្បីបិទកម្មវិធីវិញ'
        );
    } else {
        toggleProgramKh();
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
