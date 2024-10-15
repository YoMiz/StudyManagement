package com.example.app.controller.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.app.domain.Book;
import com.example.app.domain.StudyLogsList;
import com.example.app.domain.User;
import com.example.app.service.AddBookService;
import com.example.app.service.StudyLogServiceByBookImpl;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class MainPageController {
	@Autowired
	private final StudyLogServiceByBookImpl studyLogByBook;
	@Autowired
	private final AddBookService addBookService;

	@GetMapping("/main")
	public String showMainPage(Model model, HttpSession session) throws Exception {
		User user = (User) session.getAttribute("user");
		String userName = user.getUserName();
		session.setAttribute("userName", userName);
		Book book = new Book();
		model.addAttribute("book", book);
		return "Front/MainPage";
	}

	@PostMapping("/addBook")
	public String addBook(Model model, HttpSession session, Book book) throws Exception {
		User user = (User) session.getAttribute("user");
		book.setUserId(user.getUserId());
		addBookService.addBook(book, user);

		return "redirect:/main";
	}

	@PostMapping("/updateStudyLogs")
	public String updateStudyLogs(@ModelAttribute("studyLogByBookList") StudyLogsList updateStudyLogList,
			HttpSession session) throws Exception {
		User user = (User) session.getAttribute("user");
		studyLogByBook.updateStudyLogByBookId(updateStudyLogList, user);
		return "redirect:/main";
	}
}
