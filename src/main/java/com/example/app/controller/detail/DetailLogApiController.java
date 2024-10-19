package com.example.app.controller.detail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.domain.StudyLogsList;
import com.example.app.domain.User;
import com.example.app.service.detail.DetailLogServiceByGenreImpl;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class DetailLogApiController {
	@Autowired
	private final DetailLogServiceByGenreImpl detailServiceByGenre;

	@GetMapping("/getGenreDetailDataList")
	public StudyLogsList getAllGenreDetailList(HttpSession session, @RequestParam("id") Integer genreId) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		StudyLogsList detailLogList = detailServiceByGenre.showDetailLog(userId, genreId);
		return detailLogList;
	}

	@GetMapping("/getBookDetailDataWeekly")
	public String getGenreDetailDataDays() throws Exception {
		String dataTypeBook = "GENRE DAYS FROM SERVER";
		return dataTypeBook;
	}
}
