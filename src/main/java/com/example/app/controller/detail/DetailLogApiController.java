package com.example.app.controller.detail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.domain.StudyLog;
import com.example.app.domain.StudyLogsList;
import com.example.app.domain.User;
import com.example.app.mapper.detail.DetailUpdateMapper;
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
    private final DetailUpdateMapper detailUpdateMapper;

    @GetMapping("/getGenreDetailDataList")
    public StudyLogsList getAllGenreDetailList(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        StudyLogsList detailLogList = detailServiceByGenre.showDetailLog(userId, dataId);
        return detailLogList;
    }
    @GetMapping("/getBookDetailDataList")
    public StudyLogsList getAllBookDetailList(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        StudyLogsList detailLogList = detailServiceByBook.showDetailLog(userId, dataId);
        return detailLogList;
    }
    @GetMapping("/getGenreDetailDataWeekly")
    public StudyLogsList getGenreDetailDataWk(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        Integer days = 7;
        StudyLogsList detailLogList = detailServiceByGenre.showDetailLogDays(userId, dataId, days);
        return detailLogList;
    }
    @GetMapping("/getGenreDetailDataMonthly")
    public StudyLogsList getGenreDetailDataMth(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        Integer days = 30;
        StudyLogsList detailLogList = detailServiceByGenre.showDetailLogDays(userId, dataId, days);
        return detailLogList;
    }
    @GetMapping("/getAggregatedBookDetailDataList")
    public StudyLogsList getAggregatedBookDetailList(HttpSession session, @RequestParam("dataId") Integer dataId)
    		throws Exception {
    	User user = (User) session.getAttribute("user");
    	Integer userId = user.getUserId();
    	StudyLogsList detailLogList = detailServiceByBook.showAggregatedLog(userId, dataId);
    	return detailLogList;
    }

    @GetMapping("/getBookDetailDataWeekly")
    public StudyLogsList getBookDetailDataWk(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        Integer days = 7;
        StudyLogsList detailLogList = detailServiceByBook.showDetailLogDays(userId, dataId, days);
        return detailLogList;
    }

    @GetMapping("/getBookDetailDataMonthly")
    public StudyLogsList getBookDetailDataMth(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        Integer days = 30;
        StudyLogsList detailLogList = detailServiceByBook.showDetailLogDays(userId, dataId, days);
        return detailLogList;
    }

    @GetMapping("/getAggregatedBookDetailDataWeekly")
    public StudyLogsList getAggregatedBookDetailDataWk(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        Integer days = 7;
        StudyLogsList detailLogList = detailServiceByBook.showAggregatedLogDays(userId, dataId, days);
        return detailLogList;
    }

    @GetMapping("/getAggregatedBookDetailDataMonthly")
    public StudyLogsList getAggregatedBookDetailDataMth(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        Integer days = 30;
        StudyLogsList detailLogList = detailServiceByBook.showAggregatedLogDays(userId, dataId, days);
        return detailLogList;
    }

    @GetMapping("/getAggregatedGenreDetailDataList")
    public StudyLogsList getAggregatedGenreDetailList(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        StudyLogsList detailLogList = detailServiceByGenre.showAggregatedLog(userId, dataId);
        return detailLogList;
    }
    @GetMapping("/getAggregatedGenreDetailDataWeekly")
    public StudyLogsList getAggregatedGenreDetailDataWk(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        Integer days = 7;
        StudyLogsList detailLogList = detailServiceByGenre.showAggregatedLogDays(userId, dataId, days);
        return detailLogList;
    }

    @GetMapping("/getAggregatedGenreDetailDataMonthly")
    public StudyLogsList getAggregatedGenreDetailDataMth(HttpSession session, @RequestParam("dataId") Integer dataId)
            throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        Integer days = 30;
        StudyLogsList detailLogList = detailServiceByGenre.showAggregatedLogDays(userId, dataId, days);
        return detailLogList;
    }

    @PostMapping("/updateLogs")
    public String updateLogs(HttpSession session, @RequestBody List<StudyLog> updatedLogs) throws Exception {
        User user = (User) session.getAttribute("user");
        Integer userId = user.getUserId();
        for (StudyLog studyLog : updatedLogs) {
            Integer logId = studyLog.getLogId();
            Double time = studyLog.getTime();
            String comment = studyLog.getComment();
            detailUpdateMapper.updateStudyLog(userId, logId, time, comment);
        }
        return "Logs updated successfully";
    }
}
