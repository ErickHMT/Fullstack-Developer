package br.com.maximatech.pedidos.controller;

import br.com.maximatech.core.model.Pedido;
import br.com.maximatech.pedidos.service.PedidoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/admin/pedidos")
@Slf4j
@CrossOrigin(origins = "*")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody @Valid Pedido pedido){
        return ok(pedidoService.save(pedido));
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        List<Pedido> pedidos = pedidoService.findAll();
        return new ResponseEntity<>(pedidos, HttpStatus.OK);
    }
}
