@echo off
echo.
echo ====================================
echo  Salma's Portfolio - Local Preview
echo ====================================
echo.
echo Starting local web server...
echo.
echo Your website will open at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server when done.
echo.
echo ====================================
echo.

start http://localhost:8000
python -m http.server 8000
