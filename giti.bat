#!/bin/bash
@echo off

git add .
pause
set /p id="Enter commit Message: "
git commit -m %id%

git pull
git status
echo %id%
git push 
pause
