package com.example.app.service;

import org.springframework.transaction.annotation.Transactional;

import com.example.app.domain.Book;
import com.example.app.domain.User;

public interface AddBookService {
	@Transactional
	void addBook(Book book, User user) throws Exception;
}
