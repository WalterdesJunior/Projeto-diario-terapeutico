 // Funções interativas
        function toggleNotifications() {
            alert('💡 Funcionalidade: Abrir painel de notificações\n\n' +
                  '• Lista de todas as notificações\n' +
                  '• Marcar como lida\n' +
                  '• Configurar preferências');
        }

        function logout() {
            if(confirm('Deseja realmente sair do sistema?')) {
                alert('🔐 Redirecionando para tela de login...');
            }
        }

        function novaObservacao() {
            alert('📝 Funcionalidade: Nova Observação\n\n' +
                  '• Selecionar aluno\n' +
                  '• Registrar comportamento observado\n' +
                  '• Definir nível de prioridade\n' +
                  '• Salvar no diário do aluno');
        }

        // Adicionar interatividade aos itens do menu
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active de todos
                document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
                
                // Adiciona active no clicado
                this.classList.add('active');
                
                // Simula navegação
                const text = this.textContent.trim();
                if(text !== 'Dashboard') {
                    alert(`🔄 Navegando para: ${text}\n\nEsta seria a tela específica desta funcionalidade.`);
                }
            });
        });

        // Animação dos cards de alerta
        document.querySelectorAll('.alert-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('h4').textContent;
                alert(`📋 Detalhes: ${title}\n\nAqui seria aberto o detalhamento completo desta notificação.`);
            });
        });