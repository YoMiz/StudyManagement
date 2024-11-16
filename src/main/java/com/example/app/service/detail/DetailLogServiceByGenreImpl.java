package com.example.app.service.detail;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.app.domain.StudyLog;
import com.example.app.domain.StudyLogsList;
import com.example.app.mapper.detail.DetailLogByGenreMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DetailLogServiceByGenreImpl implements DetailLogService {
    private final DetailLogByGenreMapper detailLogMapper;

    @Override
    public StudyLogsList showDetailLogDays(Integer userId, Integer dataId, Integer days) throws Exception {
        List<StudyLog> studyListParam = detailLogMapper.getDetailLogGenreDays(userId, dataId, days);
        StudyLogsList detailList = new StudyLogsList();
        detailList.setStudyLogs(studyListParam);
        return detailList;
    }

    @Override
    public StudyLogsList showAggregatedLogDays(Integer userId, Integer dataId, Integer days) throws Exception {
        List<StudyLog> studyListParam = detailLogMapper.getAggregatedLogGenreDays(userId, dataId, days);
        StudyLogsList detailList = new StudyLogsList();
        detailList.setStudyLogs(studyListParam);
        return detailList;
    }
}
