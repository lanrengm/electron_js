@REM `@CHCP 65001`
@REM `��ʼ����������`
@REM `��������ʦ�ĵ���ʹ�õ��� fnm ������������ʹ�� node 22 LST �汾`
@REM `�� VS Code ������������ʱ��������һ�±��ļ�`

@ECHO off
SET HTTP_PROXY=http://127.0.0.1:7890
SET HTTPS_PROXY=http://127.0.0.1:7890
set NO_PROXY=localhost,127.0.0.1,::1
FNM env > init.temp.bat
ECHO CMD >> init.temp.bat

init.temp.bat
