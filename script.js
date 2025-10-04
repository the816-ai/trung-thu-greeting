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

// Tạo hiệu ứng pháo hoa cơ bản
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

// Tạo pháo hoa nghệ thuật loại 1 - Hoa cúc
function createChrysanthemumFirework(x, y) {
    const container = document.querySelector('.fireworks');
    const centerX = x;
    const centerY = y;
    
    for (let i = 0; i < 20; i++) {
        const petal = document.createElement('div');
        petal.className = 'firework chrysanthemum-petal';
        petal.style.left = centerX + 'px';
        petal.style.top = centerY + 'px';
        petal.style.animationDelay = (i * 0.05) + 's';
        
        const angle = (i * 18) * Math.PI / 180;
        const distance = 80 + Math.random() * 40;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        petal.style.setProperty('--end-x', endX + 'px');
        petal.style.setProperty('--end-y', endY + 'px');
        
        container.appendChild(petal);
        
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, 3000);
    }
}

// Tạo pháo hoa nghệ thuật loại 2 - Vòng tròn
function createCircleFirework(x, y) {
    const container = document.querySelector('.fireworks');
    const centerX = x;
    const centerY = y;
    
    for (let i = 0; i < 16; i++) {
        const spark = document.createElement('div');
        spark.className = 'firework circle-spark';
        spark.style.left = centerX + 'px';
        spark.style.top = centerY + 'px';
        spark.style.animationDelay = (i * 0.1) + 's';
        
        const angle = (i * 22.5) * Math.PI / 180;
        const distance = 60 + Math.random() * 30;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        spark.style.setProperty('--end-x', endX + 'px');
        spark.style.setProperty('--end-y', endY + 'px');
        
        container.appendChild(spark);
        
        setTimeout(() => {
            if (spark.parentNode) {
                spark.parentNode.removeChild(spark);
            }
        }, 2500);
    }
}

// Tạo pháo hoa nghệ thuật loại 3 - Sao băng
function createMeteorFirework(x, y) {
    const container = document.querySelector('.fireworks');
    const centerX = x;
    const centerY = y;
    
    for (let i = 0; i < 12; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'firework meteor-trail';
        meteor.style.left = centerX + 'px';
        meteor.style.top = centerY + 'px';
        meteor.style.animationDelay = (i * 0.08) + 's';
        
        const angle = (i * 30) * Math.PI / 180;
        const distance = 100 + Math.random() * 50;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        meteor.style.setProperty('--end-x', endX + 'px');
        meteor.style.setProperty('--end-y', endY + 'px');
        
        container.appendChild(meteor);
        
        setTimeout(() => {
            if (meteor.parentNode) {
                meteor.parentNode.removeChild(meteor);
            }
        }, 4000);
    }
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

// Tương tác với 3 món quà
function addGiftInteractions() {
    const gifts = document.querySelectorAll('.gift');
    
    gifts.forEach((gift, index) => {
        gift.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Hiệu ứng click quà
            gift.style.transform = 'scale(1.2) rotate(10deg)';
            gift.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                gift.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
            
            // Tạo pháo hoa theo loại quà
            const rect = gift.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const fireworkType = gift.getAttribute('data-firework');
            
            switch(fireworkType) {
                case 'type1':
                    createChrysanthemumFirework(centerX, centerY);
                    showGiftMessage('🎁 Quà Bí Mật 1: Chúc bé có một mùa Trung Thu ngập tràn niềm vui!');
                    break;
                case 'type2':
                    createCircleFirework(centerX, centerY);
                    showGiftMessage('🎁 Quà Bí Mật 2: Chúc bé luôn khỏe mạnh và học giỏi!');
                    break;
                case 'type3':
                    createMeteorFirework(centerX, centerY);
                    showGiftMessage('🎁 Quà Bí Mật 3: Chúc bé có nhiều bạn bè và luôn hạnh phúc!');
                    break;
            }
        });
        
        // Hiệu ứng hover
        gift.addEventListener('mouseenter', () => {
            gift.style.transform = 'scale(1.1) translateY(-10px)';
            gift.style.boxShadow = '0 15px 30px rgba(255, 221, 68, 0.4)';
        });
        
        gift.addEventListener('mouseleave', () => {
            gift.style.transform = 'scale(1) translateY(0px)';
            gift.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });
    });
}

// Hiển thị thông báo quà
function showGiftMessage(message) {
    // Xóa thông báo cũ nếu có
    const oldMessage = document.querySelector('.gift-message');
    if (oldMessage) {
        oldMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'gift-message';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: messageSlideIn 0.5s ease-out;
        max-width: 80%;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Tự động ẩn sau 4 giây
    setTimeout(() => {
        messageDiv.style.animation = 'messageSlideOut 0.5s ease-in';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 500);
    }, 4000);
}

// Hiệu ứng cây anh đào cổ thụ
function addAncientTreeEffects() {
    const ancientTree = document.querySelector('.ancient-cherry-tree');
    
    if (ancientTree) {
        ancientTree.addEventListener('click', () => {
            // Tạo hiệu ứng hoa anh đào rơi
            const blossoms = document.querySelectorAll('.blossom');
            blossoms.forEach((blossom, index) => {
                setTimeout(() => {
                    blossom.style.animation = 'none';
                    blossom.style.transform = 'translateY(300px) rotate(1080deg) scale(0.5)';
                    blossom.style.opacity = '0';
                    blossom.style.transition = 'all 4s ease-out';
                }, index * 50);
            });
            
            // Tạo hiệu ứng sparkle bay lên
            const sparkles = document.querySelectorAll('.sparkle');
            sparkles.forEach((sparkle, index) => {
                setTimeout(() => {
                    sparkle.style.animation = 'none';
                    sparkle.style.transform = 'translateY(-100px) scale(2)';
                    sparkle.style.opacity = '0';
                    sparkle.style.transition = 'all 2s ease-out';
                }, index * 100);
            });
            
            // Tạo hiệu ứng pháo hoa xung quanh cây
            const rect = ancientTree.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Tạo pháo hoa vòng tròn xung quanh cây
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const angle = (i * 45) * Math.PI / 180;
                    const distance = 150;
                    const x = centerX + Math.cos(angle) * distance;
                    const y = centerY + Math.sin(angle) * distance;
                    createCircleFirework(x, y);
                }, i * 200);
            }
            
            // Khôi phục sau 5 giây
            setTimeout(() => {
                blossoms.forEach(blossom => {
                    blossom.style.animation = 'blossomSparkle 4s ease-in-out infinite';
                    blossom.style.transform = 'translateY(0) rotate(0deg) scale(1)';
                    blossom.style.opacity = '1';
                    blossom.style.transition = 'none';
                });
                
                sparkles.forEach(sparkle => {
                    sparkle.style.animation = 'sparkleFloat 2s ease-in-out infinite';
                    sparkle.style.transform = 'translateY(0) scale(1)';
                    sparkle.style.opacity = '0.7';
                    sparkle.style.transition = 'none';
                });
            }, 5000);
        });
        
        // Hiệu ứng hover cho cây
        ancientTree.addEventListener('mouseenter', () => {
            ancientTree.style.transform = 'scale(1.05)';
            ancientTree.style.filter = 'drop-shadow(0 0 60px rgba(255, 182, 193, 1))';
        });
        
        ancientTree.addEventListener('mouseleave', () => {
            ancientTree.style.transform = 'scale(1)';
            ancientTree.style.filter = 'drop-shadow(0 0 30px rgba(255, 182, 193, 0.6))';
        });
    }
}

// Quản lý 3 câu hỏi tương tác
let currentQuestion = 1;
let correctAnswers = 0;
let questionsAnswered = 0;

function initQuestionsSystem() {
    // Thêm nút mở câu hỏi vào chữ chúc mừng
    const greetingText = document.querySelector('.greeting-text');
    const questionsBtn = document.createElement('button');
    questionsBtn.className = 'questions-trigger-btn';
    questionsBtn.innerHTML = '🎯 Thử thách 3 câu hỏi!';
    questionsBtn.style.cssText = `
        background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
        border: none;
        border-radius: 25px;
        padding: 15px 30px;
        font-size: 1.2rem;
        color: white;
        cursor: pointer;
        margin-top: 20px;
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
        transition: all 0.3s ease;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    `;
    
    questionsBtn.addEventListener('click', () => {
        showQuestions();
    });
    
    questionsBtn.addEventListener('mouseenter', () => {
        questionsBtn.style.transform = 'translateY(-3px) scale(1.05)';
        questionsBtn.style.boxShadow = '0 12px 35px rgba(255, 107, 107, 0.6)';
    });
    
    questionsBtn.addEventListener('mouseleave', () => {
        questionsBtn.style.transform = 'translateY(0) scale(1)';
        questionsBtn.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
    });
    
    greetingText.appendChild(questionsBtn);
    
    // Xử lý nút đóng câu hỏi
    document.getElementById('closeQuestionsBtn').addEventListener('click', () => {
        hideQuestions();
    });
    
    // Xử lý nút quay lại trang chính
    document.getElementById('backToMainBtn').addEventListener('click', () => {
        hideFireworksShow();
    });
    
    // Xử lý các câu trả lời
    setupAnswerHandlers();
}

function showQuestions() {
    const overlay = document.getElementById('questionsOverlay');
    overlay.classList.add('show');
    currentQuestion = 1;
    correctAnswers = 0;
    questionsAnswered = 0;
    showQuestion(1);
}

function hideQuestions() {
    const overlay = document.getElementById('questionsOverlay');
    overlay.classList.remove('show');
}

function showQuestion(questionNum) {
    // Ẩn tất cả câu hỏi
    document.querySelectorAll('.question-card').forEach(card => {
        card.style.display = 'none';
    });
    
    // Hiển thị câu hỏi hiện tại
    const currentCard = document.getElementById(`question${questionNum}`);
    currentCard.style.display = 'block';
    currentCard.style.animation = 'cardSlideIn 0.5s ease-out';
}

function setupAnswerHandlers() {
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const isCorrect = e.target.getAttribute('data-correct') === 'true';
            const allButtons = e.target.parentElement.querySelectorAll('.answer-btn');
            
            // Vô hiệu hóa tất cả nút
            allButtons.forEach(button => {
                button.disabled = true;
            });
            
            // Đánh dấu câu trả lời
            if (isCorrect) {
                e.target.classList.add('correct');
                correctAnswers++;
            } else {
                e.target.classList.add('incorrect');
                // Tìm và đánh dấu câu trả lời đúng
                allButtons.forEach(button => {
                    if (button.getAttribute('data-correct') === 'true') {
                        button.classList.add('correct');
                    }
                });
            }
            
            questionsAnswered++;
            
            // Chuyển sang câu hỏi tiếp theo sau 2 giây
            setTimeout(() => {
                if (currentQuestion < 3) {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                } else {
                    // Kết thúc câu hỏi
                    setTimeout(() => {
                        if (correctAnswers === 3) {
                            showFireworksShow();
                        } else {
                            hideQuestions();
                            showResultMessage();
                        }
                    }, 1000);
                }
            }, 2000);
        });
    });
}

function showFireworksShow() {
    hideQuestions();
    const fireworksShow = document.getElementById('fireworksShow');
    fireworksShow.classList.add('show');
    
    // Bắt đầu pháo hoa chuyên nghiệp
    startProfessionalFireworks();
}

function hideFireworksShow() {
    const fireworksShow = document.getElementById('fireworksShow');
    fireworksShow.classList.remove('show');
}

function startProfessionalFireworks() {
    const container = document.getElementById('professionalFireworks');
    
    // Tạo pháo hoa liên tục
    const fireworksInterval = setInterval(() => {
        createProfessionalFirework(container);
    }, 500);
    
    // Dừng pháo hoa sau 30 giây
    setTimeout(() => {
        clearInterval(fireworksInterval);
    }, 30000);
}

function createProfessionalFirework(container) {
    const firework = document.createElement('div');
    firework.className = 'professional-firework';
    
    // Vị trí ngẫu nhiên
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    // Kích thước ngẫu nhiên (to hơn)
    const size = 60 + Math.random() * 80; // 60-140px
    
    // Loại pháo hoa ngẫu nhiên
    const types = ['type1', 'type2', 'type3', 'type4'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    firework.classList.add(type);
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.width = size + 'px';
    firework.style.height = size + 'px';
    
    container.appendChild(firework);
    
    // Xóa pháo hoa sau animation
    setTimeout(() => {
        if (firework.parentNode) {
            firework.parentNode.removeChild(firework);
        }
    }, 3000);
}

function showResultMessage() {
    const message = correctAnswers === 3 
        ? '🎉 Chúc mừng! Bạn đã trả lời đúng tất cả câu hỏi!'
        : `😊 Bạn đã trả lời đúng ${correctAnswers}/3 câu hỏi. Hãy thử lại nhé!`;
    
    showGiftMessage(message);
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
    addGiftInteractions();
    addAncientTreeEffects();
    initQuestionsSystem();
    
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

