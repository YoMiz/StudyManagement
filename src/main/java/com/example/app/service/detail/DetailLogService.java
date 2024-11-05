package com.example.app.service.detail;

import com.example.app.domain.StudyLogsList;

public interface DetailLogService {
    StudyLogsList showDetailLog(Integer userId, Integer id) throws Exception;
    StudyLogsList showDetailLogDays(Integer userId, Integer dataId, Integer days) throws Exception;
    StudyLogsList showAggregatedLog(Integer userId, Integer dataId) throws Exception;
    StudyLogsList showAggregatedLogDays(Integer userId, Integer dataId, Integer days) throws Exception;
}
