@echo off
start npm run dev
timeout /t 5
start http://localhost:5173
