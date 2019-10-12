package br.com.maximatech.pedidos.service;

import br.com.maximatech.pedidos.model.Pedido;
import br.com.maximatech.pedidos.repository.PedidoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<Pedido> findAll() {
        log.info("FindAll pedidos");
        return pedidoRepository.findAll();
    }
}
