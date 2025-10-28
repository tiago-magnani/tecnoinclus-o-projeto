// main.js
// As funções serão inicializadas de forma segura após o DOM estar pronto.

// ==========================================================
// MÓDULO: ACESSIBILIDADE E MODO ESCURO (CORREÇÃO DE ATIVAÇÃO)
// ==========================================================

function inicializarDarkModeToggle() {
    var $body = $('body');
    var $checkbox = $('#dark-mode-toggle'); 
    
    // 1. Verifica o localStorage e define o estado inicial do checkbox
    if (localStorage.getItem('theme') === 'dark') {
        $body.addClass('dark-mode');
        $checkbox.prop('checked', true); 
    } else {
        $body.removeClass('dark-mode');
        $checkbox.prop('checked', false);
    }

    // 2. Aplica o evento de 'change' ao checkbox para alternar o modo
    // Usamos .off().on() para garantir que o evento não seja duplicado em carregamentos SPA
    $checkbox.off('change').on('change', function() {
        if ($(this).is(':checked')) {
            $body.addClass('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            $body.removeClass('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}


// ==========================================================
// 3. FUNÇÃO PRINCIPAL DE INICIALIZAÇÃO
// ==========================================================

function inicializarFuncionalidades() {
    // Estas funções precisam ser reinicializadas após cada carga SPA
    
    // Formulários e Interação
    inicializarMascaras();
    aplicarValidacaoPersonalizada();
    inicializarToggle();
    
    // Interatividade Mobile
    inicializarMenuMobile();
    
    // Conteúdo Dinâmico
    if ($('#programas').length) {
        gerarAlertaTemplate();
    }
}


// ==========================================================
// 4. MÓDULO SPA BÁSICO (Single Page Application)
// ==========================================================

function carregarConteudo(url, pushState = true) {
    $.get(url, function(data) {
        var newContent = $(data).find('#main-content').html();
        $('#main-content').html(newContent);
        
        if (pushState) {
            var path = url.split('/').pop();
            history.pushState({ url: path }, '', path);
        }
        
        // Chamada de re-inicialização
        inicializarFuncionalidades(); 
    })
    .fail(function() {
        $('#main-content').html('<div class="alert alert-danger container" style="opacity: 1;">Erro ao carregar a página. Verifique os caminhos.</div>');
        inicializarFuncionalidades();
    });
}


// ==========================================================
// 5. MÓDULOS DE INTERAÇÃO (EXISTENTES)
// ==========================================================

function inicializarMascaras() {
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
    var maskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    };
    $('#telefone').mask(maskBehavior, {
        onKeyPress: function(val, e, field, options) {
            field.mask(maskBehavior.apply({}, arguments), options);
        }
    });
}

function inicializarToggle() {
    $('.toggle-detalhes').off('click').on('click', function(e) { 
        e.preventDefault();
        var targetId = $(this).data('target');
        var $targetDiv = $(targetId);
        var isExpanded = $targetDiv.is(':visible');

        $targetDiv.slideToggle(500, function() {
            $(e.target).attr('aria-expanded', !isExpanded);
            $targetDiv.attr('aria-hidden', isExpanded);

            if ($targetDiv.is(':visible')) {
                $targetDiv.css('opacity', '1');
                $(e.target).text('Ocultar Detalhes');
            } else {
                $targetDiv.css('opacity', '0');
                $(e.target).text('Detalhes do Curso');
            }
        });
    });
}

function inicializarMenuMobile() {
    var $menuToggle = $('.menu-toggle');
    var $navMenu = $('.nav-menu');
    
    $menuToggle.off('click').on('click', function() {
        $navMenu.toggleClass('active');
        var isExpanded = $navMenu.hasClass('active');
        $menuToggle.attr('aria-expanded', isExpanded);
    });

    $('.nav-menu a').off('click').on('click', function() {
        if ($(window).width() < 768) {
            $navMenu.removeClass('active');
            $menuToggle.attr('aria-expanded', false);
        }
    });
}

function gerarAlertaTemplate() {
    var template = `
        <div class="alert alert-success" role="alert" style="opacity: 1;">
            <img src="assets/img/icon_calendar.png" alt="Calendário" style="vertical-align: middle; margin-right: 10px; height: 24px;">
            <strong>Novidade!</strong> As inscrições para o próximo ciclo de cursos abrem em <span class="badge badge-primary">7 dias</span>.
        </div>
    `;
    
    if ($('#programas').length) {
        $('#programas').prepend(template);
    }
}

function aplicarValidacaoPersonalizada() {
    var $form = $('.form-complexo');
    $form.off('submit').on('submit', function(e) {
        e.preventDefault(); 
        var isFormValid = true;
        $('.error-message').remove();
        $('input, select').removeClass('input-error');
        $('.alert-danger').remove();

        var cpf = $('#cpf').val();
        if (cpf.length < 14) {
            isFormValid = false;
            $('#cpf').addClass('input-error').after('<p class="error-message">O CPF está incompleto.</p>');
        }
        
        var nascimento = new Date($('#nascimento').val());
        var hoje = new Date();
        var idade = hoje.getFullYear() - nascimento.getFullYear();
        var mes = hoje.getMonth() - nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) { idade--; }
        
        if (idade < 16 || isNaN(idade)) {
             isFormValid = false;
             $('#nascimento').addClass('input-error').after('<p class="error-message">Idade mínima para inscrição é 16 anos.</p>');
        }

        if (isFormValid) {
            var successTemplate = `
                <div class="alert alert-success" role="alert" style="opacity: 1; margin-top: 20px;">
                    <strong>Sucesso!</strong> Seu cadastro foi enviado. Entraremos em contato em breve.
                </div>
            `;
            $form.prepend(successTemplate);
            $form[0].reset(); 
            $('html, body').animate({ scrollTop: $form.offset().top - 70 }, 500);
        } else {
            var alertTemplate = `
                <div class="alert alert-danger" role="alert" style="opacity: 1; margin-top: 20px;">
                    <strong>Erro de Validação!</strong> Por favor, corrija os campos destacados em vermelho.
                </div>
            `;
            $form.prepend(alertTemplate);
            $('html, body').animate({
                scrollTop: $('.input-error:first').offset().top - 100
            }, 500);
        }
    });
}


// ==========================================================
// 6. INÍCIO DA APLICAÇÃO
// ==========================================================

$(document).ready(function() {
    
    // 1. Inicializa o Dark Mode IMEDIATAMENTE no carregamento do DOM
    inicializarDarkModeToggle();

    // 2. Renomeia o main para ser o container do SPA
    $('main').attr('id', 'main-content');
    
    // 3. Gerencia o clique nos links para SPA (DEVE VIR DEPOIS DO DARK MODE)
    $('nav a, footer a').on('click', function(e) {
        var href = $(this).attr('href');
        
        // Verifica se é um link para outra página (termina em .html)
        if (href && (href.endsWith('.html') || href.startsWith('index.html'))) {
            e.preventDefault();
            carregarConteudo(href);
        }
    });
    
    // 4. Gerencia o botão Voltar/Avançar
    window.onpopstate = function(e) {
        if (e.state && e.state.url) {
            carregarConteudo(e.state.url, false); 
        } 
    };

    // 5. Inicializa as outras funcionalidades
    inicializarFuncionalidades(); 
});