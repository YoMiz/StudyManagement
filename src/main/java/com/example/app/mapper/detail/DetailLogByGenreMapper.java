package com.example.app.mapper.detail;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.app.domain.StudyLog;
@Mapper
public interface DetailLogByGenreMapper {
	List<StudyLog> getDetailLogGenre(Integer userId, Integer dataId)throws Exception;
	List<StudyLog> getDetailLogGenreDays(Integer userId, Integer dataId, Integer days)throws Exception;
}
