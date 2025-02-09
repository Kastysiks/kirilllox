document.addEventListener("DOMContentLoaded", function () {
    const btnYes = document.querySelector(".yes-button");
    const btnNo = document.querySelector(".no-button");

    const prompts = [
        "Сосала??",
        "Пидорас??",
        "АХУЕЛ??",
        "НАЖМИ ДАА ЧУШПАНКАА",
        "Я ТВОЙ РОТ ТРАХАЛАЫЫ!",
        "НЕ НАЖМЕШЬ ДА, СГОРИТ КВАРТИРА",
        "ебаная тварь",
        "сосаллллллл????",
        "сосал?",
        "чушпанка",
        "батя сгорит если не нажмешь да",
        "соси хуй ❤️"
    ];

    let promptIndex = 0;

    function handleNoClick() {
        btnNo.textContent = prompts[promptIndex];
        promptIndex = (promptIndex + 1) % prompts.length;

        // Увеличиваем кнопку "Да"
        const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
        btnYes.style.fontSize = `${currentSize * 1.2}px`;
    }

    function handleYesClick() {
        window.location.href = "yes_page.html";
    }

    // Привязываем обработчики событий
    btnNo.addEventListener("click", handleNoClick);
    btnYes.addEventListener("click", handleYesClick);
});
