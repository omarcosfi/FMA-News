        function toggleSymbol() {
            var pontos = document.getElementById('pontos')
            var maistexto = document.getElementById('mais')
            var butao = document.getElementById('button')
            const circle = document.querySelector('.circle');
            circle.classList.toggle('clicked');
            if (pontos.style.display === 'none') {
             pontos.style.display='inline';
             maistexto.style.display='none';
            } else {
                pontos.style.display='none';
                maistexto.style.display='inline';
            }
        }

        function timeSince(date) {
            const now = new Date();
            const secondsPast = Math.floor((now - date) / 1000);

            if (secondsPast < 60) {
                return ` ${secondsPast}s`;
            } else if (secondsPast < 3600) {
                const minutesPast = Math.floor(secondsPast / 60);
                return ` ${minutesPast}m`;
            } else if (secondsPast < 86400) {
                const hoursPast = Math.floor(secondsPast / 3600);
                return ` ${hoursPast}h`;
            } else if (secondsPast < 2592000) {
                const daysPast = Math.floor(secondsPast / 86400);
                return ` ${daysPast}d`;
            } else if (secondsPast < 31536000) {
                const monthsPast = Math.floor(secondsPast / 2592000);
                return ` ${monthsPast} meses atrás`;
            } else {
                const yearsPast = Math.floor(secondsPast / 31536000);
                return ` ${yearsPast} anos atrás`;
            }
        }

        function setPostDate() {
            const postTimeElement = document.getElementById('datae');
            const postDate = new Date(2024, 4, 23); 
            postTimeElement.textContent = timeSince(postDate);
        }

        setPostDate();