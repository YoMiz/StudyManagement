package com.example.app.mapper.main;

import org.apache.ibatis.annotations.Mapper;

import com.example.app.domain.Book;

@Mapper
public interface AddBookMapper {
	Integer createGenreId(String genreName) throws Exception;
	Integer selectGenreId(String genreName) throws Exception;
	Integer createBook(Book book) throws Exception;
	void createStudyLog(Book book) throws Exception;
}
