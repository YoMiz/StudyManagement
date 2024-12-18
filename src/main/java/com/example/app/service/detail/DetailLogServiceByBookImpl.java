package com.example.app.service.detail;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.app.domain.StudyLog;
import com.example.app.domain.StudyLogsList;
import com.example.app.mapper.detail.DetailLogByBookMapper;
import com.example.app.util.DateUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DetailLogServiceByBookImpl implements DetailLogService {
    private final DetailLogByBookMapper detailLogMapper;

    @Override
    public StudyLogsList showDetailLog(Integer userId, Integer dataId) throws Exception {
        List<StudyLog> studyListParam = detailLogMapper.getDetailLogBook(userId, dataId);
        StudyLogsList detailList = new StudyLogsList();
        detailList.setStudyLogs(studyListParam);
        return detailList;
    }

    @Override
    public StudyLogsList showDetailLogDays(Integer userId, Integer dataId, Integer days) throws Exception {
        List<StudyLog> studyListParam = detailLogMapper.getDetailLogBookDays(userId, dataId, days);
        StudyLogsList detailList = new StudyLogsList();
        detailList.setStudyLogs(studyListParam);
        return detailList;
    }

    @Override
    public StudyLogsList showAggregatedLogDays(Integer userId, Integer dataId, Integer days) throws Exception {
        List<StudyLog> studyListParam = detailLogMapper.getAggregatedLogBookDays(userId, dataId, days);
        StudyLogsList detailListForChart = new StudyLogsList();
        detailListForChart.setStudyLogs(DateUtils.fillMissingDates(studyListParam, days));
        return detailListForChart;
    }
    
    @Override
    public StudyLogsList showAggregatedLog(Integer userId, Integer dataId) throws Exception {
    	Integer days = 365;
        List<StudyLog> studyListParam = detailLogMapper.getAggregatedLogBookDays(userId, dataId,days);
        StudyLogsList detailListForChart = new StudyLogsList();
        detailListForChart.setStudyLogs(DateUtils.fillMissingDates(studyListParam, days));
        return detailListForChart;
    }

}
