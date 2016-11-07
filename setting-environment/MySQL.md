#MySQL 설치

###1. MySQL dmg 설치
 - 시스템 환경 설정에서 mysql icon 확인 및 mysql start, stop 되는지 확인

```
cd /usr/local/mysql
cd bin
./mysql
sudo ./mysql
```

###2. Path 설정
 - mysql의 실행경로를 PATH에 추가 -> 절대경로 지정없이 mysql 실행
 
  - .bash_profile : 사용자 계정에서 환경을 설정해주는 파일
  자신의 홈 디렉토리에 존재 (~/.bash_profile)

```
echo $PATH : path 확인

sudo vi ~/.bash_profile

export MYSQL_HOME=/usr/local/mysql/
export PATH=${PATH}:${MYSQL_HOME}/bin

source ~/.bash_profile : 다시 등록

echo $PATH : path 확ㅣ
```

###3. MySQL 접속
```
mysql -u root -p
```

###4. password 설정(1234)
```
update user set password=password('1234') where user='root';
```


###5. MySQL UTF-8로 환경 설정
```
cd /usr/local/mysql
sudo vi my.cnf
```

 - my.cnf 파일에 수정 및 추가
```
[mysqld]
init_connect="SET collation_connection=utf8_general_ci"
init_connect="SET NAMES utf8"
character-set-server=utf8
collation-server=utf8_general_ci
skip-character-set-client-handshake

[client]
default-character-set=utf8

[mysql]
default-character-set=utf8
```

###6. MySQL Restart 후, UTF-8 설정 확인

```
mysql -u root -p

mysql> show variables like 'c%';
```



####기존 인스톨된 mysql 삭제
```
sudo rm /usr/local/mysql
sudo rm -rf /usr/local/mysql*
sudo rm -rf /Library/StartupItems/MySQLCOM
sudo rm -rf /Library/PreferencePanes/My*
rm -rf ~/Library/PreferencePanes/My*
sudo rm -rf /Library/Receipts/mysql*
sudo rm -rf /Library/Receipts/MySQL*
sudo rm -rf /var/db/receipts/com.mysql.*
vim /etc/hostconfig # and remove the line MYSQLCOM=-YES-
```
