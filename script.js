let saldo = 1000;

function exibirSaldo() {
    const saldoElement = document.getElementById('saldo');
    const saldoHiddenElement = document.getElementById('saldoHidden');
    saldoElement.textContent = saldo.toFixed(2);
    saldoHiddenElement.textContent = '*'.repeat(saldo.toFixed(2).length);
}

function fazerSaque(valor) {
    saldo -= valor;
    exibirSaldo();
    alert(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
}

function fazerDeposito(valor) {
    saldo += valor;
    exibirSaldo();
    alert(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
}

document.getElementById('toggleSaldo').addEventListener('click', function() {
    const saldoElement = document.getElementById('saldo');
    const saldoHiddenElement = document.getElementById('saldoHidden');
    const toggleButton = document.getElementById('toggleSaldo');

    if (saldoElement.classList.contains('saldo-hidden')) {
        saldoElement.classList.remove('saldo-hidden');
        saldoHiddenElement.classList.add('saldo-hidden');
        toggleButton.innerHTML = '<i class="ph ph-eye"></i>';
    } else {
        saldoElement.classList.add('saldo-hidden');
        saldoHiddenElement.classList.remove('saldo-hidden');
        toggleButton.innerHTML = '<i class="ph ph-eye-slash"></i>';
    }
});


document.getElementById('saqueBtn').addEventListener('click', function() {
    document.getElementById('saqueForm').classList.toggle('hidden');
});

document.getElementById('depositoBtn').addEventListener('click', function() {
    document.getElementById('depositoForm').classList.toggle('hidden');
});

document.getElementById('saqueConfirm').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('saqueInput').value);
    if (valor > 0 && valor <= saldo) {
        fazerSaque(valor);
        document.getElementById('saqueInput').value = '';
    } else {
        alert('Valor inválido ou excede o saldo disponível!');
    }
});

document.getElementById('depositoConfirm').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('depositoInput').value);
    if (valor > 0) {
        fazerDeposito(valor);
        document.getElementById('depositoInput').value = '';
    } else {
        alert('Valor inválido!');
    }
});

exibirSaldo();