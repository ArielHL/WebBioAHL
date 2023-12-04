@echo off
REM Activate conda Enviroment
call conda activate RX311

REM Update Python packages using pip
call pip install --upgrade pip
call pip install -r requirements.txt
call reflex init
call reflex export --frontend-only
rmdir /s /q public
expand frontend.zip -f:* public
call conda desactivate
del frontend.zip



