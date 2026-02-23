// Verifica se o arquivo está conectado corretamente
console.log("Script carregado com sucesso! Vamos iniciar o estudo da Brinel.");

// Smooth scroll simples para os links internos (como o botão da capa)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



// 1. Botão Magnético (Corrigido)
const magneticButton = document.querySelector('.btn-scroll');

if (magneticButton) {
    magneticButton.addEventListener('mousemove', (e) => {
        const position = magneticButton.getBoundingClientRect();
        // Trocado pageX/Y por clientX/Y para alinhar com o getBoundingClientRect
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        
        magneticButton.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    magneticButton.addEventListener('mouseout', () => {
        magneticButton.style.transform = 'translate(0px, 0px)';
    });
}


// 3. Brilho seguindo o mouse
const glow = document.getElementById('cursor-glow');

if (glow) {
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}









// Efeito de Revelação ao Rolar a Página (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Quando o elemento entra na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Opcional: parar de observar após a animação acontecer uma vez
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Dispara quando 10% do elemento estiver visível
});

// Seleciona todos os elementos com a classe .hidden e aplica o observador
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));