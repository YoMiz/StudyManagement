package com.example.app.controller.detail;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class DetailPageController {
	
	@PostMapping("/genreDetailLog")
	public String genreDetailStudyLog(HttpSession session, @RequestParam("dataId") Integer dataId, Model model) throws Exception {
		String detailType = "Genre";
	    model.addAttribute("detailType", detailType);
	    model.addAttribute("dataId", dataId);
	    return "Front/DetailLog";
	}


	@PostMapping("/bookDetailLog")
	public String bookDetailStudyLog(HttpSession session, @RequestParam("dataId") Integer dataId, Model model) throws Exception {
		String detailType = "Book";
		model.addAttribute("detailType", detailType);
		model.addAttribute("dataId",dataId);
		return "Front/DetailLog";
	}
}
