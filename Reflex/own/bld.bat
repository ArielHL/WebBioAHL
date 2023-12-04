@echo off
REM Activate conda Enviroment
call activate RX311

REM Update Python packages using pip
call pip install --upgrade pip
call pip install -r requirements.txt
call reflex init
call reflex export --frontend-only
rmdir /s /q public
mkdir public
tar -xf frontend.zip -C public
call conda deactivate
del frontend.zip



