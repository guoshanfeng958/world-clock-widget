@echo off
cd /d "%~dp0"
set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
echo Starting World Clock Widget...
.\node_modules\electron\dist\electron.exe .
pause