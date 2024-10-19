package com.example.app.controller.detail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.domain.StudyLogsList;
import com.example.app.domain.User;
import com.example.app.service.detail.DetailServiceByGenreImpl;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class studyLogDetailApiController {
	@Autowired
	private final DetailServiceByGenreImpl detailServiceByGenre;

	@GetMapping("/getGenreDetailDataList")
	public StudyLogsList getAllGenreDetailList(HttpSession session, @RequestParam("id") Integer genreId) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		StudyLogsList detailLogByGenreList = detailServiceByGenre.showDetailStudyLog(userId, genreId);
		return detailLogByGenreList;
	}

	@GetMapping("/getBookDetailDataList")
	public String getBookDetailData() throws Exception {
		String dataTypeBook = "BOOK FROM SERVER";
		return dataTypeBook;
	}
}
