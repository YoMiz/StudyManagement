package com.example.app.mapper.detail;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.app.domain.StudyLog;

@Mapper
public interface DetailLogByBookMapper {
    List<StudyLog> getDetailLogBook(Integer userId, Integer dataId) throws Exception;
    List<StudyLog> getDetailLogBookDays(Integer userId, Integer dataId, Integer days) throws Exception;
    List<StudyLog> getAggregatedLogBook(Integer userId, Integer dataId) throws Exception;
    List<StudyLog> getAggregatedLogBookDays(Integer userId, Integer dataId, Integer days) throws Exception;
}
