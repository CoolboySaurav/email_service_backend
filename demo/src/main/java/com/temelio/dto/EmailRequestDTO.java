package com.temelio.dto;

import lombok.Data;

@Data
public class EmailRequestDTO {
    private String subject;
    private String contentTemplate;

    // Getters and setters
}
