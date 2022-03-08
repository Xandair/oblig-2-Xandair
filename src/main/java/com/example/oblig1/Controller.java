package com.example.oblig1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    private final List<filmBillett> alleFilmer = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreFilm(filmBillett innFilmBillett) { alleFilmer.add(innFilmBillett);}
    @GetMapping("/hentAlle")
    public List<filmBillett>hentAlle() {return alleFilmer;}

}
