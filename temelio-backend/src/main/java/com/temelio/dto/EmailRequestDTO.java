package com.temelio.dto;

import lombok.Data;

import java.util.List;

@Data
public class EmailRequestDTO {
    private String subject;
    private String contentTemplate;
    private List<String> cc;
    private List<String> bcc;

    // Getters and setters
}
