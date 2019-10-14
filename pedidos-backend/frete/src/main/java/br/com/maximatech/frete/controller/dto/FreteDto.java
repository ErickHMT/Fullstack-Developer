package br.com.maximatech.frete.controller.dto;

import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
public class FreteDto implements Serializable {

    private BigDecimal valorFrete;

    public FreteDto(BigDecimal valorFrete) {
        this.valorFrete = valorFrete;
    }
}
