package com.temelio.repository;

import com.temelio.model.Nonprofit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NonprofitRepository extends JpaRepository<Nonprofit, Long> {
    boolean existsByEmail(String email);

    void deleteByEmail(String email);

    Optional<Nonprofit> findByEmail(String email);
}

