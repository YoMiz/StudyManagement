package com.example.app.mapper.detail;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.app.domain.StudyLog;
@Mapper
public interface detailLogOfAGenreMapper {
	List<StudyLog> getStudyLogOfAGenre(Integer userId, Integer genreId)throws Exception;
	List<StudyLog> getStudyLogOfAGenreDays(Integer userId, Integer genreId, Integer days)throws Exception;
}
