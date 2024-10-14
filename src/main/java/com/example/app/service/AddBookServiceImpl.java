package com.example.app.service;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.example.app.domain.Book;
import com.example.app.domain.User;
import com.example.app.mapper.AddBookMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AddBookServiceImpl implements AddBookService {
	final AddBookMapper addBookMapper;

	@Override
	public void addBook(Book book, User user) throws Exception {
	    //ジャンル名登録
	    addBookMapper.createGenreId(book.getGenreName());
	    //ジャンルID取得
	    Integer genreId = addBookMapper.selectGenreId(book.getGenreName());
	    book.setGenreId(genreId);
	    //書籍登録
	    //勉強ログ登録
	        //日付取得
	        LocalDateTime today = LocalDateTime.now();
	        //時間取得
	        Double time = (double) 0;
	        //読了ステータス
	        Integer status = 0;
	        //ブッククラス・インスタンス化
	        book.setUserId(user.getUserId());
	        book.setDate(Timestamp.valueOf(today));
	        book.setTime(time);
	        book.setStatus(status); 
	    addBookMapper.createBook(book); 
	    addBookMapper.createStudyLog(book);
	}

}