package com.example.app.controller.detail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.domain.StudyLogsList;
import com.example.app.domain.User;
import com.example.app.service.detail.DetailLogServiceByBookImpl;
import com.example.app.service.detail.DetailLogServiceByGenreImpl;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class DetailLogApiController {
	@Autowired
	private final DetailLogServiceByGenreImpl detailServiceByGenre;
	private final DetailLogServiceByBookImpl detailServiceByBook;
	
	@GetMapping("/getGenreDetailDataList")
	public StudyLogsList getAllGenreDetailList(HttpSession session, @RequestParam("dataId") Integer dataId) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		StudyLogsList detailLogList = detailServiceByGenre.showDetailLog(userId, dataId);
		return detailLogList;
	}

	@GetMapping("/getGenreDetailDataWeekly")
	public StudyLogsList getGenreDetailDataWk(HttpSession session, @RequestParam("dataId") Integer dataId) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		Integer days = 7;
		StudyLogsList detailLogList = detailServiceByGenre.showDetailLogDays(userId, dataId, days);
		System.out.println("API CTRL: GENRE DETAIL WKLY");
		return detailLogList;
	}
	
	@GetMapping("/getGenreDetailDataMonthly")
	public StudyLogsList getGenreDetailDataMth(HttpSession session, @RequestParam("dataId") Integer dataId) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		Integer days = 30;
		StudyLogsList detailLogList = detailServiceByGenre.showDetailLogDays(userId, dataId, days);
		return detailLogList;
	}
	
	@GetMapping("/getBookDetailDataList")
	public StudyLogsList getAllBookDetailList(HttpSession session, @RequestParam("dataId") Integer dataId) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		StudyLogsList detailLogList = detailServiceByBook.showDetailLog(userId, dataId);
		System.out.println("API" + detailLogList);
		return detailLogList;
	}
	
}
