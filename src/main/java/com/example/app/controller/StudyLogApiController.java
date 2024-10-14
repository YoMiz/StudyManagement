package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.domain.StudyLogsList;
import com.example.app.domain.User;
import com.example.app.service.StudyLogServiceByBookImpl;
import com.example.app.service.StudyLogServiceByGenreImpl;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class StudyLogApiController {
	
	@Autowired
	private final StudyLogServiceByGenreImpl studyLogByGenre;
	private final StudyLogServiceByBookImpl studyLogByBook;
	
	@GetMapping("/getStudyLogByGenreList")
	public StudyLogsList getAllStudyLogByGenre(HttpSession session, Model model) throws Exception {
	    User user = (User) session.getAttribute("user");
	    Integer userId = user.getUserId();
	    StudyLogsList studyLogByGenreList = studyLogByGenre.showStudyLog(userId);
	    return studyLogByGenreList;
	}
	
	@GetMapping("/getStudyLogByGenreWeekly")
	public StudyLogsList getWeeklyStudyLogByGenre(HttpSession session, Model model) throws Exception {
	    User user = (User) session.getAttribute("user");
	    Integer userId = user.getUserId();
	    Integer days = 7;
	    StudyLogsList studyLogByGenreList = studyLogByGenre.showStudyLogByDays(userId, days);
	    return studyLogByGenreList;
	}

	@GetMapping("/getStudyLogByGenreMonthly")
	public StudyLogsList getMonthlyStudyLogByGenre(HttpSession session, Model model) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		Integer days = 30;
		StudyLogsList studyLogByGenreList = studyLogByGenre.showStudyLogByDays(userId, days);
		return studyLogByGenreList;
	}
	
	@GetMapping("/getStudyLogByBookList")
	public StudyLogsList getAllStudyLogByBook(HttpSession session, Model model) throws Exception{
		User user = (User)session.getAttribute("user");
		Integer userId = user.getUserId();
		StudyLogsList studyLogByBookList = studyLogByBook.showStudyLog(userId);
		return studyLogByBookList;
	}
	
	@GetMapping("/getStudyLogByBookWeekly")
	public StudyLogsList getWeeklyStudyLogByBook(HttpSession session, Model model) throws Exception{
		User user = (User)session.getAttribute("user");
		Integer userId = user.getUserId();
		Integer days = 7;
		StudyLogsList studyLogByBookList = studyLogByBook.showStudyLogByDays(userId, days);
		return studyLogByBookList;
	}

	@GetMapping("/getStudyLogByBookMonthly")
	public StudyLogsList getMonthlyStudyLogByBook(HttpSession session, Model model) throws Exception{
		User user = (User)session.getAttribute("user");
		Integer userId = user.getUserId();
		Integer days = 30;
		StudyLogsList studyLogByBookList = studyLogByBook.showStudyLogByDays(userId, days);
		return studyLogByBookList;
	}

	@GetMapping("/getStudyLogByBookDoneList")
	public StudyLogsList getAllStudyListByBookDone(HttpSession session, Model model) throws Exception{
		User user = (User)session.getAttribute("user");
		Integer userId = user.getUserId();
		StudyLogsList studyLogByBookDoneList = studyLogByBook.showStudyLogByBookDone(userId);
		return studyLogByBookDoneList;
	}
	
	@GetMapping("/getStudyLogByBookDoneWeekly")
	public StudyLogsList getWeeklyStudyLogByBookDone(HttpSession session, Model model) throws Exception{
		User user = (User)session.getAttribute("user");
		Integer userId = user.getUserId();
		Integer days = 7;
		StudyLogsList studyLogByBookDoneList = studyLogByBook.showStudyLogByBookDoneDays(userId, days);
		return studyLogByBookDoneList;
	}
	
	@GetMapping("/getStudyLogByBookDoneMonthly")
	public StudyLogsList getMonthlyStudyLogByBookDone(HttpSession session, Model model) throws Exception{
		User user = (User)session.getAttribute("user");
		Integer userId = user.getUserId();
		Integer days = 30;
		StudyLogsList studyLogByBookDoneList = studyLogByBook.showStudyLogByBookDoneDays(userId, days);
		return studyLogByBookDoneList;
	}
	
	@PostMapping("/getAllStudyLogOfAGenre")
	public String getGenreLog(HttpSession session, Model model, Integer genreId) throws Exception{
		User user = (User)session.getAttribute("user");
		Integer userId = user.getUserId();
		StudyLogsList studyLogOfAGenre = studyLogByGenre.showAllStudyLogOfAGenre(userId, genreId);
		model.addAttribute(studyLogOfAGenre);
		return "Front/GenreLog";
	}
}
