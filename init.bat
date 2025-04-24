@REM `@CHCP 65001`
@REM `初始化开发环境`
@REM `开发工程师的电脑使用的是 fnm 环境管理器，使用 node 22 LST 版本`
@REM `在 VS Code 里启动命令行时，先运行一下本文件`

@ECHO off
SET HTTP_PROXY=http://127.0.0.1:7890
SET HTTPS_PROXY=http://127.0.0.1:7890
set NO_PROXY=localhost,127.0.0.1,::1
FNM env > init.temp.bat
ECHO CMD >> init.temp.bat

init.temp.bat
