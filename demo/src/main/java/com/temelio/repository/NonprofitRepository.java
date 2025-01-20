package com.temelio.repository;

import com.temelio.model.EmailLog;
import com.temelio.model.Nonprofit;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface NonprofitRepository extends JpaRepository<Nonprofit, Long> {
    Optional<Nonprofit> findByEmail(String email);
}
//public interface NonprofitRepository extends MongoRepository<Nonprofit, String> {
//    Optional<Nonprofit> findByEmail(String email);
//}