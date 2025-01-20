package com.temelio.service;

import com.temelio.model.Nonprofit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.temelio.repository.NonprofitRepository;

import java.util.List;

@Service
public class NonprofitService {
    @Autowired
    private NonprofitRepository nonprofitRepository;

    public Nonprofit saveNonprofit(Nonprofit nonprofit) {
        return nonprofitRepository.save(nonprofit);
    }

    public List<Nonprofit> getAllNonprofits(){

        return nonprofitRepository.findAll();
    }
}
