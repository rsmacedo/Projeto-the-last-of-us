const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.image');

botoesCarrossel.forEach((botao, indice) => {
	botao.addEventListener('click', () => {
		const imagemAtual = document.querySelector('.active');
		const botaoAtual = document.querySelector('.selecionado');

		botaoAtual.classList.remove('selecionado');
		imagemAtual.classList.remove('active');
        
		imagens[indice].classList.add('active');
		botoesCarrossel[indice].classList.add('selecionado');
	});
});