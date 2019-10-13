package br.com.maximatech.core.repository;

import br.com.maximatech.core.model.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AplicationUserRepository extends JpaRepository<ApplicationUser, Long> {

    ApplicationUser getByUsername(String username);
}
