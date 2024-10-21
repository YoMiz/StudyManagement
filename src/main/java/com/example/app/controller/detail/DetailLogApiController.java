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
	public StudyLogsList getAllGenreDetailList(HttpSession session, @RequestParam("dataId") Integer dataId) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		StudyLogsList detailLogList = detailServiceByGenre.showDetailLog(userId, dataId);
		return detailLogList;
	}

	@GetMapping("/getBookDetailDataWeek")
	public StudyLogsList getGenreDetailDataWK(HttpSession session, @RequestParam("dataId") Integer dataId) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		Integer days = 7;
		StudyLogsList detailLogList = detailServiceByGenre.showDetailLogDays(userId, dataId, days);
		return detailLogList;
	}
	@GetMapping("/getBookDetailDataMonth")
	public StudyLogsList getGenreDetailDataMth(HttpSession session, @RequestParam("dataId") Integer dataId) throws Exception {
		User user = (User) session.getAttribute("user");
		Integer userId = user.getUserId();
		Integer days = 30;
		StudyLogsList detailLogList = detailServiceByGenre.showDetailLogDays(userId, dataId, days);
		return detailLogList;
	}
}
