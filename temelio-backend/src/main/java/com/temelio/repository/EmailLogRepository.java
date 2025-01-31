package com.temelio.repository;

import com.temelio.model.EmailLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailLogRepository  extends JpaRepository<EmailLog, Long> {
}
