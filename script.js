// Tạo hiệu ứng lồng đèn rơi động
function createFallingLanterns() {
    const lanternsContainer = document.querySelector('.lanterns-container');
    
    setInterval(() => {
        // Tạo lồng đèn mới
        const lantern = document.createElement('div');
        const isRed = Math.random() > 0.5;
        lantern.className = `lantern ${isRed ? 'red-lantern' : 'yellow-lantern'}`;
        
        // Vị trí ngẫu nhiên
        lantern.style.left = Math.random() * 100 + '%';
        lantern.style.animationDuration = (Math.random() * 3 + 5) + 's';
        lantern.style.animationDelay = '0s';
        
        // Thêm vào container
        lanternsContainer.appendChild(lantern);
        
        // Xóa lồng đèn sau khi animation kết thúc
        setTimeout(() => {
            if (lantern.parentNode) {
                lantern.parentNode.removeChild(lantern);
            }
        }, 8000);
    }, 800);
}

// Tạo hiệu ứng pháo hoa
function createFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    
    setInterval(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 50 + '%';
        firework.style.animationDelay = '0s';
        
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => {
            if (firework.parentNode) {
                firework.parentNode.removeChild(firework);
            }
        }, 2000);
    }, 3000);
}

// Tạo hiệu ứng sao rơi
function createFallingStars() {
    const starsContainer = document.querySelector('.stars');
    
    setInterval(() => {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 30 + '%';
        star.style.animationDelay = '0s';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        
        starsContainer.appendChild(star);
        
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 3000);
    }, 1000);
}

// Hiệu ứng hover cho thỏ
function addRabbitInteractions() {
    const rabbits = document.querySelectorAll('.rabbit');
    
    rabbits.forEach(rabbit => {
        rabbit.addEventListener('mouseenter', () => {
            rabbit.style.animation = 'rabbitHop 0.5s ease-in-out infinite';
            rabbit.style.transform = 'scale(1.2)';
        });
        
        rabbit.addEventListener('mouseleave', () => {
            rabbit.style.animation = 'rabbitHop 3s ease-in-out infinite';
            rabbit.style.transform = 'scale(1)';
        });
    });
}

// Hiệu ứng click cho cây
function addTreeInteractions() {
    const tree = document.querySelector('.tree');
    
    tree.addEventListener('click', () => {
        // Tạo hiệu ứng hoa rơi
        const flowers = document.querySelectorAll('.flower');
        flowers.forEach((flower, index) => {
            setTimeout(() => {
                flower.style.animation = 'none';
                flower.style.transform = 'translateY(100px) rotate(360deg)';
                flower.style.opacity = '0';
                flower.style.transition = 'all 2s ease-out';
            }, index * 100);
        });
        
        // Khôi phục sau 3 giây
        setTimeout(() => {
            flowers.forEach(flower => {
                flower.style.animation = 'flowerGlow 2s ease-in-out infinite alternate';
                flower.style.transform = 'translateY(0) rotate(0deg)';
                flower.style.opacity = '1';
                flower.style.transition = 'none';
            });
        }, 3000);
    });
}

// Hiệu ứng parallax cho mặt trăng
function addMoonParallax() {
    const moon = document.querySelector('.moon');
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        
        moon.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Hiệu ứng chữ chúc mừng
function addTextEffects() {
    const mainGreeting = document.querySelector('.main-greeting');
    const letters = mainGreeting.textContent.split('');
    
    mainGreeting.innerHTML = letters.map((letter, index) => 
        `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`
    ).join('');
    
    // Thêm CSS cho animation từng chữ cái
    const style = document.createElement('style');
    style.textContent = `
        .main-greeting span {
            display: inline-block;
            animation: letterBounce 0.6s ease-in-out infinite alternate;
        }
        
        @keyframes letterBounce {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
}

// Hiệu ứng âm thanh (nếu có)
function addSoundEffects() {
    // Tạo âm thanh gió nhẹ
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function createWindSound() {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 2);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 2);
    }
    
    // Phát âm thanh mỗi 10 giây
    setInterval(createWindSound, 10000);
}

// Hiệu ứng click toàn màn hình
function addFullScreenEffect() {
    document.addEventListener('click', (e) => {
        // Tạo hiệu ứng sóng
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.width = '0px';
        ripple.style.height = '0px';
        ripple.style.border = '2px solid rgba(255, 221, 68, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '1000';
        ripple.style.animation = 'ripple 1s ease-out';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 1000);
    });
    
    // Thêm CSS cho hiệu ứng ripple
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                width: 0px;
                height: 0px;
                opacity: 1;
            }
            100% {
                width: 200px;
                height: 200px;
                opacity: 0;
                transform: translate(-100px, -100px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Khởi tạo tất cả hiệu ứng
document.addEventListener('DOMContentLoaded', () => {
    createFallingLanterns();
    createFireworks();
    createFallingStars();
    addRabbitInteractions();
    addTreeInteractions();
    addMoonParallax();
    addTextEffects();
    addFullScreenEffect();
    
    // Thêm hiệu ứng âm thanh nếu người dùng tương tác
    document.addEventListener('click', () => {
        addSoundEffects();
    }, { once: true });
});

// Hiệu ứng resize
window.addEventListener('resize', () => {
    // Điều chỉnh kích thước các element khi resize
    const moon = document.querySelector('.moon');
    const island = document.querySelector('.floating-island');
    
    if (window.innerWidth < 768) {
        moon.style.width = '80px';
        moon.style.height = '80px';
        island.style.width = '250px';
        island.style.height = '120px';
    } else {
        moon.style.width = '120px';
        moon.style.height = '120px';
        island.style.width = '300px';
        island.style.height = '150px';
    }
});

// Hiệu ứng scroll (nếu có)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.night-sky');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Console message
console.log('🎑 Chúc mừng Trung Thu! 🎑');
console.log('✨ Trang web được tạo với tình yêu và sự chăm sóc ✨');

