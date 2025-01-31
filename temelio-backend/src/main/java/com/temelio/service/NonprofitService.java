package com.temelio.service;

import com.temelio.dto.NonprofitDTO;
import com.temelio.model.Nonprofit;
import com.temelio.repository.NonprofitRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class NonprofitService {
    @Autowired
    private NonprofitRepository nonprofitRepository;

    public Nonprofit saveNonprofit(Nonprofit nonprofit){
        if (nonprofitRepository.existsByEmail(nonprofit.getEmail())){
            throw new RuntimeException("Nonprofit with email " + nonprofit.getEmail() + " already exists");
        }
        return nonprofitRepository.save(nonprofit);
    }

    public List<Nonprofit> getAllNonprofits(){
        return nonprofitRepository.findAll();
    }

    public Optional <Nonprofit> getSingleNonprofit(String email){
       return nonprofitRepository.findByEmail(email);
    }


    @Transactional
    public boolean deleteNonprofit(String email){
        try{
            if (nonprofitRepository.existsByEmail(email)) {
                nonprofitRepository.deleteByEmail(email);
                return true;
            }
            return false;
        }catch (Exception e){
            log.error("error", e);
            return false;
        }
    }

    public Nonprofit updateNonprofit(NonprofitDTO dto) {
        Optional<Nonprofit> existingNonprofitOpt = nonprofitRepository.findByEmail(dto.getEmail());
        if (existingNonprofitOpt.isPresent()){
           Nonprofit existingNonprofit = existingNonprofitOpt.get();
           existingNonprofit.setName(dto.getName());
           existingNonprofit.setAddress(dto.getAddress());
           // Save the updated entity
           return nonprofitRepository.save(existingNonprofit);
        }else{
            return null;
        }
    }
}
