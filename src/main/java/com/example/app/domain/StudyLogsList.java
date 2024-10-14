package com.example.app.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import lombok.Data;

@Data
public class StudyLogsList implements Serializable {
	@Autowired
    public List<StudyLog> studyLogs;

    public StudyLogsList() {
        this.studyLogs = new ArrayList<>();
    }
}
