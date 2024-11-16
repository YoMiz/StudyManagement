package com.example.app.service.detail;

import com.example.app.domain.StudyLogsList;

public interface DetailLogService {
    StudyLogsList showDetailLogDays(Integer userId, Integer dataId, Integer days) throws Exception;
    StudyLogsList showAggregatedLogDays(Integer userId, Integer dataId, Integer days) throws Exception;
}
