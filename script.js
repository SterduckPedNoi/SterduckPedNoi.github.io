document.addEventListener("DOMContentLoaded", function() {
    const aboutText = document.getElementById("about-text");
    const toggleButton = document.getElementById("toggle-about-btn");

    const fullText = `เป้าหมายของผมคือพัฒนาความเชี่ยวชาญด้านเทคนิค แก้ไขปัญหาที่ยาก และสร้างผลงานที่ส่งผลดีต่อบริษัท ผมตั้งใจที่จะขยายความรู้ในเทคโนโลยีใหม่ ๆ และพัฒนาความสามารถในการต่อยอดนวัตกรรมเพื่อความคุ้มค่าและมีประสิทธิภาพ`;

    let isExpanded = false;

    toggleButton.addEventListener("click", function() {
        if (isExpanded) {
            aboutText.innerText = fullText.substring(0, 50) + "...";
            toggleButton.innerText = "แสดงเพิ่มเติม";
        } else {
            aboutText.innerText = fullText;
            toggleButton.innerText = "ซ่อน";
        }
        isExpanded = !isExpanded;
    });

    const skillBars = document.querySelectorAll(".skill-bar-inner");

    function showSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (barPosition < screenPosition) {
                bar.classList.add("animate-skill");
            }
        });
    }

    window.addEventListener("scroll", showSkillBars);
});
