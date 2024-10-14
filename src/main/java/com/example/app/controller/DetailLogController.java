package com.example.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DetailLogController {

	@PostMapping("/genreDetailLog")
	public String genreDetailStudyLog(@RequestParam("genreId") Integer genreId, Model model) throws Exception {
		String detailType = "GENRE";
		model.addAttribute("detailType", detailType);
		model.addAttribute("id", genreId);
		return "Front/DetailLog";
	}

	@PostMapping("/bookDetailLog")
	public String bookDetailStudyLog(@RequestParam("bookId") Integer bookId, Model model) throws Exception {
		String detailType = "BOOK";
		model.addAttribute("detailType", detailType);
		model.addAttribute("id",bookId);
		return "Front/DetailLog";
	}
}
