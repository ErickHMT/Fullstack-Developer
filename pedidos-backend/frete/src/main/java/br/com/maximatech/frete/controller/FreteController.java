package br.com.maximatech.frete.controller;

import br.com.maximatech.frete.controller.dto.FreteDto;
import br.com.maximatech.frete.service.FreteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/")
@Slf4j
@CrossOrigin(origins = "*")
public class FreteController {

    @Autowired
    private FreteService freteService;

    @GetMapping(value = "/{qtdItens}")
    public ResponseEntity<?> getValorFrete(@PathVariable Integer qtdItens) {
        BigDecimal valorFrete = freteService.calculaFrete(qtdItens);
        return new ResponseEntity<>(new FreteDto(valorFrete), HttpStatus.OK);
    }
}
