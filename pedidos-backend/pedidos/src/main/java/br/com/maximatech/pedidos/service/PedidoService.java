package br.com.maximatech.pedidos.service;

import br.com.maximatech.core.model.Pedido;
import br.com.maximatech.core.repository.PedidoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
@Slf4j
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public Pedido save(Pedido pedido) {
        log.info("Salvando pedido");
        return pedidoRepository.save(pedido);
    }

    public List<Pedido> findAll() {
        log.info("FindAll pedidos");
        List<Pedido> pedidos = pedidoRepository.findAll();
        return pedidos;
    }
}
