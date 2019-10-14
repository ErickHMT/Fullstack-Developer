package br.com.maximatech.frete.service;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.MathContext;

@Service
public class FreteService {

    public static final int MAX = 10;
    public static final int MIN = 5;

    public BigDecimal calculaFrete(Integer qtdItens) {
        return getValorFrete().multiply(new BigDecimal(qtdItens));
    }

    private BigDecimal getValorFrete() {
        double v = (Math.random() * ((MAX - MIN))) + MIN;
        return BigDecimal.valueOf(v).round(new MathContext(3));
    }
}
