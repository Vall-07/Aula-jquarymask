console.log('Página do podcast carregada com sucesso.');

const toggleThemeButton = document.getElementById('toggle-theme');
const bodyElement = document.body;

// Definir os estilos dos temas
const darkThemeStyles = {
    '--background-color': '#1a1a1a',
    '--text-color': '#fff',
    '--card-background': '#f0f0f0',
    '--primary-color': '#ff6f61',
    '--primary-color-hover': '#e64a19'
};

const lightThemeStyles = {
    '--background-color': '#f0f0f0',
    '--text-color': '#333',
    '--card-background': '#fff',
    '--primary-color': '#6a0dad',
    '--primary-color-hover': '#5e0b8c'
};

// Alternar tema claro/escuro
toggleThemeButton.addEventListener('click', () => {
    const currentTheme = bodyElement.dataset.theme;
    if (currentTheme === 'dark') {
        applyTheme(lightThemeStyles);
        bodyElement.dataset.theme = 'light';
    } else {
        applyTheme(darkThemeStyles);
        bodyElement.dataset.theme = 'dark';
    }
});

function applyTheme(styles) {
    for (let property in styles) {
        if (styles.hasOwnProperty(property)) {
            document.documentElement.style.setProperty(property, styles[property]);
        }
    }
}

// Verificar se o JavaScript está funcionando corretamente no celular
window.onload = function() {
    console.log('Tema atual:', bodyElement.dataset.theme || 'light');
};
