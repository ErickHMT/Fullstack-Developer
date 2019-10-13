package br.com.maximatech.pedidos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan({"br.com.maximatech.core.model"})
@EnableJpaRepositories({"br.com.maximatech.core.repository"})
public class PedidosApplication {

    public static void main(String[] args) {
        SpringApplication.run(PedidosApplication.class, args);
    }

}
