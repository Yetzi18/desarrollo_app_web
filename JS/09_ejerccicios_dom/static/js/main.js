        // Crear partículas flotantes
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 15;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
                particle.style.animationDelay = Math.random() * 2 + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Manejar clics en ejercicios (para demostración)
        document.querySelectorAll('.exercise-card').forEach(card => {
            card.addEventListener('click', function(e) {
                const originalContent = this.innerHTML;
                this.innerHTML = '<span class="exercise-icon">🔄</span><div class="exercise-title">Cargando...</div>';
                this.style.background = 'linear-gradient(135deg, #666, #333)';
                
                setTimeout(() => {
                    this.innerHTML = originalContent;
                    this.style.background = 'linear-gradient(135deg, #f44336, #b71c1c)';
                    alert('Redirigiría a: ' + this.getAttribute('href'));
                }, 1000);
                
                e.preventDefault(); // Para la demo
            });
        });

        // Inicializar efectos
        createParticles();